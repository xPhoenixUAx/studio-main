import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const projectRoot = process.cwd();
const distRoot = path.join(projectRoot, 'dist');
const outRoot = path.join(projectRoot, 'vanilla');
const outAssets = path.join(outRoot, 'assets');

const ROUTES = [
  { in: 'index.html', out: 'index.html', depth: 0 },
  { in: '404.html', out: '404.html', depth: 0 },
  { in: path.join('about', 'index.html'), out: path.join('about', 'index.html'), depth: 1 },
  { in: path.join('contact', 'index.html'), out: path.join('contact', 'index.html'), depth: 1 },
  { in: path.join('cookie-policy', 'index.html'), out: path.join('cookie-policy', 'index.html'), depth: 1 },
  { in: path.join('faq', 'index.html'), out: path.join('faq', 'index.html'), depth: 1 },
  { in: path.join('pest-control', 'index.html'), out: path.join('pest-control', 'index.html'), depth: 1 },
  { in: path.join('privacy-policy', 'index.html'), out: path.join('privacy-policy', 'index.html'), depth: 1 },
  { in: path.join('reviews', 'index.html'), out: path.join('reviews', 'index.html'), depth: 1 },
  { in: path.join('terms-of-service', 'index.html'), out: path.join('terms-of-service', 'index.html'), depth: 1 },
  { in: path.join('wildlife-removal', 'index.html'), out: path.join('wildlife-removal', 'index.html'), depth: 1 },
];

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getRootRel(depth) {
  return depth === 0 ? '' : '../';
}

function getAssetRel(depth) {
  return depth === 0 ? 'assets/' : '../assets/';
}

function stripNextRuntimeScripts(html) {
  // Remove all scripts except JSON-LD and application/json payloads we may inject.
  html = html.replaceAll(
    /<script\b(?![^>]*type=["']application\/ld\+json["'])(?![^>]*type=["']application\/json["'])[\s\S]*?<\/script>/gi,
    '',
  );

  // Remove _next stylesheets/preloads.
  html = html.replaceAll(/<link\b[^>]*href=["']\/_next\/[^"']*["'][^>]*>\s*/gi, '');

  // Remove preload-as-script links (Next runtime).
  html = html.replaceAll(/<link\b[^>]*rel=["']preload["'][^>]*as=["']script["'][^>]*>\s*/gi, '');

  return html;
}

function injectAssets(html, depth) {
  const assetRel = getAssetRel(depth);
  const tag = [
    `<link rel="stylesheet" href="${assetRel}styles.css">`,
    `<script defer src="${assetRel}app.js"></script>`,
  ].join('');

  if (html.includes('</head>')) {
    return html.replace('</head>', `${tag}</head>`);
  }
  return `${tag}${html}`;
}

function rewriteRootRelativeUrls(html, depth) {
  const rootRel = getRootRel(depth);
  const homeHref = depth === 0 ? './' : '../';

  return html.replaceAll(
    /\b(href|src)=("|\')\/(?!\/)([^"']*)\2/g,
    (_m, attr, q, rest) => {
      if (rest.startsWith('_next/')) return `${attr}=${q}${rootRel}${rest}${q}`;
      if (rest.length === 0) return `${attr}=${q}${homeHref}${q}`;
      return `${attr}=${q}${rootRel}${rest}${q}`;
    },
  );
}

function ensureMountPoints(html) {
  if (!html.includes('id="cookie-banner-root"')) {
    html = html.replace('</body>', '<div id="cookie-banner-root"></div></body>');
  }
  return html;
}

function extractExportedArrayLiteral(source, exportName) {
  const re = new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*(\\[[\\s\\S]*?\\n\\]);`, 'm');
  const match = source.match(re);
  if (!match) {
    throw new Error(`Не вдалося знайти export const ${exportName} = [...] у файлі.`);
  }
  return match[1];
}

function extractConstObjectLiteral(source, constName) {
  const re = new RegExp(`${constName}\\s*:[^=]*=\\s*({[\\s\\S]*?\\n\\s*});`, 'm');
  const match = source.match(re);
  if (!match) {
    throw new Error(`Не вдалося знайти ${constName} = {...} у файлі.`);
  }
  return match[1];
}

function evalLiteral(literalSource, label) {
  try {
    // eslint-disable-next-line no-new-func
    return new Function(`"use strict"; return (${literalSource});`)();
  } catch (err) {
    throw new Error(`Не вдалося розпарсити ${label}: ${err?.message ?? err}`);
  }
}

function buildStarSvg(className) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`;
}

function initials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function buildReviewCard(review, index) {
  const accent =
    index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-emerald-500' : 'bg-amber-500';
  const rating = Math.max(0, Math.min(5, Math.round(review.rating ?? 5)));
  const stars = Array.from({ length: 5 })
    .map((_, i) =>
      buildStarSvg(
        `w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`,
      ),
    )
    .join('');

  return `
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg">
    <div class="absolute left-0 top-0 bottom-0 w-1.5 ${accent}"></div>
    <div class="p-6 text-left">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
        <div class="flex items-start gap-3 min-w-0">
          <div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <div class="flex h-full w-full items-center justify-center rounded-full bg-muted font-semibold ring-1 ring-border/60">
              ${escapeHtml(initials(review.name))}
            </div>
          </div>
          <div class="min-w-0">
            <p class="font-semibold truncate">${escapeHtml(review.name)}</p>
            <p class="mt-1 text-sm text-muted-foreground truncate">${escapeHtml(review.service ?? '')}</p>
          </div>
        </div>
        <div class="flex items-center gap-1 shrink-0">${stars}</div>
      </div>

      <div class="mt-4 relative rounded-2xl bg-secondary p-5">
        <p class="text-muted-foreground leading-relaxed text-left">
          "${escapeHtml(review.comment ?? '')}"
        </p>
      </div>
    </div>
  </div>`;
}

function patchReviewsPage(html, reviews) {
  // Replace the dynamic ReviewsList output with a fully static list (all reviews).
  const marker = 'class="mt-8 space-y-4"';
  const start = html.indexOf(marker);
  if (start === -1) return html;

  const containerStart = html.lastIndexOf('<div', start);
  if (containerStart === -1) return html;

  // Find the CTA card marker inside the list so we can keep it (it contains "Want results like these?").
  const ctaMarker = 'Want results like these?';
  const ctaIndex = html.indexOf(ctaMarker, start);
  if (ctaIndex === -1) return html;

  const ctaCardStart = html.lastIndexOf('<div class="rounded-lg border bg-card', ctaIndex);
  const ctaCardEnd = html.indexOf('</div></div></div>', ctaCardStart);
  // The CTA card structure in dist is nested and hard to slice perfectly; keep everything from CTA card start onward
  // by truncating and rebuilding the list up to that point.
  if (ctaCardStart === -1) return html;

  const listOpenEnd = html.indexOf('>', containerStart) + 1;
  const beforeList = html.slice(0, listOpenEnd);
  const afterListFromCta = html.slice(ctaCardStart);

  const cards = reviews.map((r, i) => buildReviewCard(r, i)).join('\n');
  const staticList = `${cards}\n`;

  return `${beforeList}${staticList}${afterListFromCta}`;
}

function patchFaqPage(html, faqsByTopic, depth) {
  const rootRel = getRootRel(depth);
  const sectionStart = html.indexOf('<section id="faq-generator"');
  if (sectionStart === -1) return html;
  const sectionEnd = html.indexOf('</section>', sectionStart);
  if (sectionEnd === -1) return html;

  const topics = [
    { id: 'general', name: 'General Questions' },
    { id: 'wildlife', name: 'Wildlife Removal' },
    { id: 'pest', name: 'Pest Control' },
    { id: 'billing', name: 'Billing & Pricing' },
  ];

  const buttonClass =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2';

  function topicButton(topicId, label, active) {
    const variant = active
      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
      : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
    return `<button type="button" class="${buttonClass} ${variant}" data-faq-topic="${escapeHtml(
      topicId,
    )}">${escapeHtml(label)}</button>`;
  }

  function accordionItem(q, a, index) {
    const contentId = `faq-${index}-content`;
    return `
      <div class="border-b" data-faq-item>
        <h3 class="flex">
          <button type="button" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-lg" aria-expanded="false" aria-controls="${contentId}">
            <span>${escapeHtml(q)}</span>
            <span class="ml-4 text-muted-foreground">+</span>
          </button>
        </h3>
        <div id="${contentId}" class="overflow-hidden text-sm transition-all" hidden>
          <div class="pb-4 pt-0 text-muted-foreground text-base">${escapeHtml(a)}</div>
        </div>
      </div>`;
  }

  const jsonPayload = escapeHtml(JSON.stringify(faqsByTopic));

  const replacement = `
<section id="faq-generator">
  <div class="container px-4 md:px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Get Instant Answers</h2>
        <p class="max-w-[700px] mx-auto text-muted-foreground md:text-lg">Select a topic to browse frequently asked questions.</p>
      </div>

      <div class="flex flex-wrap gap-2 justify-center mb-8" data-faq-topics>
        ${topics.map((t, i) => topicButton(t.id, t.name, i === 0)).join('')}
      </div>

      <div class="min-h-[300px]">
        <div class="w-full" data-faq-list data-faq-active="general">
          ${(faqsByTopic.general ?? []).map((f, i) => accordionItem(f.question, f.answer, i)).join('')}
        </div>
      </div>
    </div>
  </div>
  <script type="application/json" id="faq-data">${jsonPayload}</script>
</section>`;

  const before = html.slice(0, sectionStart);
  const after = html.slice(sectionEnd + '</section>'.length);

  // Also ensure cookie policy link works when hosted under a base path by using a relative link.
  return `${before}${replacement}${after}`.replaceAll('href="/cookie-policy/"', `href="${rootRel}cookie-policy/"`);
}

function patchContactPage(html, depth) {
  const rootRel = getRootRel(depth);

  // Replace Radix Select "Service Needed" with native <select name="service">.
  // This block starts after the "Service Needed" label and ends before the next label.
  html = html.replace(
    /<div class="space-y-2"><label[^>]*>Service Needed<\/label>[\s\S]*?<div class="space-y-2"><label/,
    () => {
      const options = [
        'Pest Control',
        'Wildlife Removal',
        'Inspection / Estimate',
        'Prevention / Maintenance',
        'Other',
      ]
        .map((v) => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`)
        .join('');

      return `<div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="service">Service Needed</label><select id="service" name="service" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">${options}</select></div><div class="space-y-2"><label`;
    },
  );

  // Make the form a mailto form (handled by app.js).
  html = html.replace('<form class="space-y-6">', '<form class="space-y-6" data-mailto-form data-mailto-email="hello@greenshield.local">');

  // Ensure any internal links in the contact page are relative.
  html = html.replaceAll('href="/contact/"', `href="${rootRel}contact/"`);

  return html;
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  await fs.cp(src, dest, { recursive: true });
}

async function main() {
  // Validate dist exists.
  await fs.access(distRoot);

  // Reset output.
  await fs.rm(outRoot, { recursive: true, force: true });
  await fs.mkdir(outAssets, { recursive: true });

  // Copy public assets from dist.
  await copyDir(path.join(distRoot, 'images'), path.join(outRoot, 'images'));
  await copyDir(path.join(distRoot, 'icons'), path.join(outRoot, 'icons'));

  // Copy & rewrite CSS.
  const cssDir = path.join(distRoot, '_next', 'static', 'css');
  const cssFiles = (await fs.readdir(cssDir)).filter((f) => f.endsWith('.css'));
  if (cssFiles.length === 0) throw new Error('Не знайдено CSS у dist/_next/static/css.');
  const cssPath = path.join(cssDir, cssFiles[0]);
  const cssRaw = await fs.readFile(cssPath, 'utf8');
  const cssOut = cssRaw.replaceAll('url(/_next/static/media/', 'url(./media/');
  await fs.writeFile(path.join(outAssets, 'styles.css'), cssOut, 'utf8');

  // Copy fonts/media used by CSS.
  const mediaDir = path.join(distRoot, '_next', 'static', 'media');
  await copyDir(mediaDir, path.join(outAssets, 'media'));

  // Parse data for static pages enhancements.
  const constantsSource = await fs.readFile(path.join(projectRoot, 'src', 'lib', 'constants.ts'), 'utf8');
  const reviewsLiteral = extractExportedArrayLiteral(constantsSource, 'REVIEWS');
  const reviews = evalLiteral(reviewsLiteral, 'REVIEWS');

  const faqSource = await fs.readFile(path.join(projectRoot, 'src', 'components', 'faq-section.tsx'), 'utf8');
  const faqsObjectLiteral = extractConstObjectLiteral(faqSource, 'faqsByTopic');
  const faqsByTopic = evalLiteral(faqsObjectLiteral, 'faqsByTopic');

  // Write app.js
  const appJs = await fs.readFile(path.join(projectRoot, 'scripts', 'vanilla-app.js'), 'utf8');
  await fs.writeFile(path.join(outAssets, 'app.js'), appJs, 'utf8');

  for (const route of ROUTES) {
    const inPath = path.join(distRoot, route.in);
    const outPath = path.join(outRoot, route.out);
    await fs.mkdir(path.dirname(outPath), { recursive: true });

    let html = await fs.readFile(inPath, 'utf8');
    html = stripNextRuntimeScripts(html);

    // Remove Next stylesheet tag (we'll add ours).
    html = html.replaceAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>\s*/gi, '');
    html = injectAssets(html, route.depth);
    html = rewriteRootRelativeUrls(html, route.depth);
    html = ensureMountPoints(html);

    if (route.out.startsWith('reviews' + path.sep)) {
      html = patchReviewsPage(html, reviews);
    }
    if (route.out.startsWith('faq' + path.sep)) {
      html = patchFaqPage(html, faqsByTopic, route.depth);
    }
    if (route.out.startsWith('contact' + path.sep)) {
      html = patchContactPage(html, route.depth);
    }

    await fs.writeFile(outPath, html, 'utf8');
  }

  console.log('Готово: створено папку `vanilla/` (чисті HTML/CSS/JS без `_next`).');
}

await main();

