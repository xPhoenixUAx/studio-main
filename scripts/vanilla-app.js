(function () {
  function getCookie(name) {
    const encoded = encodeURIComponent(name) + '=';
    const parts = document.cookie.split(';').map((p) => p.trim());
    for (const part of parts) {
      if (part.startsWith(encoded)) return decodeURIComponent(part.slice(encoded.length));
    }
    return null;
  }

  function setCookie(name, value, maxAgeDays) {
    const maxAge = Math.floor(maxAgeDays * 24 * 60 * 60);
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value,
    )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  }

  function getRootRel() {
    const segments = location.pathname.split('/').filter(Boolean);
    // Our site pages are either /BASE/ or /BASE/page/.
    return segments.length >= 2 ? '../' : './';
  }

  function setupCookieBanner() {
    const root = document.getElementById('cookie-banner-root');
    if (!root) return;

    const CONSENT_COOKIE_NAME = 'cookie_consent';
    const existing = getCookie(CONSENT_COOKIE_NAME);
    if (existing === 'accepted' || existing === 'essential') return;

    const rootRel = getRootRel();
    const cookiePolicyHref = `${rootRel}cookie-policy/`;

    root.innerHTML = `
      <div class="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
        <div class="mx-auto max-w-4xl">
          <div class="rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg">
            <div class="p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div class="space-y-1">
                <p class="font-semibold">Cookies & privacy</p>
                <p class="text-sm text-muted-foreground">
                  We use essential cookies to make this site work, and optional cookies to understand
                  usage and improve performance. You can choose essential-only or accept all.
                </p>
                <div class="text-sm">
                  <a href="${cookiePolicyHref}" class="text-primary underline underline-offset-4">
                    Cookie Policy
                  </a>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
                <button type="button" data-cookie-choice="essential" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Essential Only
                </button>
                <button type="button" data-cookie-choice="accepted" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-semibold">
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    root.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest && e.target.closest('button[data-cookie-choice]');
      if (!btn) return;
      const value = btn.getAttribute('data-cookie-choice');
      if (value !== 'accepted' && value !== 'essential') return;
      setCookie(CONSENT_COOKIE_NAME, value, 180);
      root.innerHTML = '';
    });
  }

  function setupTabs() {
    const tablists = document.querySelectorAll('[role="tablist"]');
    for (const tablist of tablists) {
      const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
      if (tabs.length === 0) continue;

      const activate = (tab) => {
        for (const t of tabs) {
          const active = t === tab;
          t.setAttribute('aria-selected', active ? 'true' : 'false');
          t.setAttribute('data-state', active ? 'active' : 'inactive');
          t.tabIndex = active ? 0 : -1;
          const panelId = t.getAttribute('aria-controls');
          if (!panelId) continue;
          const panel = document.getElementById(panelId);
          if (!panel) continue;
          panel.hidden = !active;
          panel.setAttribute('data-state', active ? 'active' : 'inactive');
        }
      };

      tablist.addEventListener('click', (e) => {
        const target = e.target && e.target.closest && e.target.closest('[role="tab"]');
        if (!target || !tablist.contains(target)) return;
        activate(target);
      });

      const current = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
      activate(current);
    }
  }

  function setupAccordion() {
    const triggers = document.querySelectorAll(
      'button[aria-controls][aria-expanded]:not([role="tab"]):not([role="combobox"])',
    );

    for (const trigger of triggers) {
      const contentId = trigger.getAttribute('aria-controls');
      if (!contentId) continue;
      const content = document.getElementById(contentId);
      if (!content) continue;

      trigger.addEventListener('click', () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        const next = !expanded;
        trigger.setAttribute('aria-expanded', next ? 'true' : 'false');
        trigger.setAttribute('data-state', next ? 'open' : 'closed');
        content.hidden = !next;
        content.setAttribute('data-state', next ? 'open' : 'closed');
      });
    }
  }

  function setupFaqTopics() {
    const dataEl = document.getElementById('faq-data');
    if (!dataEl) return;
    const list = document.querySelector('[data-faq-list]');
    const topicsWrap = document.querySelector('[data-faq-topics]');
    if (!list || !topicsWrap) return;

    let data;
    try {
      data = JSON.parse(dataEl.textContent || '{}');
    } catch {
      return;
    }

    const buttonBase =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2';
    const activeClass = 'bg-primary text-primary-foreground hover:bg-primary/90';
    const outlineClass =
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground';

    function buildItem(item, index) {
      const contentId = `faq-${index}-content`;
      return `
        <div class="border-b" data-faq-item>
          <h3 class="flex">
            <button type="button" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-lg" aria-expanded="false" aria-controls="${contentId}">
              <span>${item.question}</span>
              <span class="ml-4 text-muted-foreground">+</span>
            </button>
          </h3>
          <div id="${contentId}" class="overflow-hidden text-sm transition-all" hidden>
            <div class="pb-4 pt-0 text-muted-foreground text-base">${item.answer}</div>
          </div>
        </div>
      `;
    }

    function setTopic(topicId) {
      const items = Array.isArray(data[topicId]) ? data[topicId] : [];
      list.innerHTML = items.map((item, idx) => buildItem(item, idx)).join('');
      list.setAttribute('data-faq-active', topicId);

      const btns = Array.from(topicsWrap.querySelectorAll('button[data-faq-topic]'));
      for (const btn of btns) {
        const active = btn.getAttribute('data-faq-topic') === topicId;
        btn.className = `${buttonBase} ${active ? activeClass : outlineClass}`;
      }
    }

    topicsWrap.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest && e.target.closest('button[data-faq-topic]');
      if (!btn) return;
      const topicId = btn.getAttribute('data-faq-topic');
      if (!topicId) return;
      setTopic(topicId);
    });

    // delegate accordion behavior inside FAQ list
    list.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest && e.target.closest('button[aria-controls]');
      if (!btn || btn.getAttribute('role') === 'tab' || btn.getAttribute('role') === 'combobox')
        return;
      const contentId = btn.getAttribute('aria-controls');
      const panel = contentId ? document.getElementById(contentId) : null;
      if (!panel) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const next = !expanded;
      btn.setAttribute('aria-expanded', next ? 'true' : 'false');
      panel.hidden = !next;
    });
  }

  function setupMailtoForms() {
    const forms = document.querySelectorAll('form[data-mailto-form]');
    for (const form of forms) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.getAttribute('data-mailto-email') || 'hello@greenshield.local';

        const fd = new FormData(form);
        const name = String(fd.get('name') || '').trim();
        const phone = String(fd.get('phone') || '').trim();
        const fromEmail = String(fd.get('email') || '').trim();
        const service = String(fd.get('service') || '').trim();
        const message = String(fd.get('message') || '').trim();

        const subject = `Website inquiry${service ? ` - ${service}` : ''}`;
        const bodyLines = [
          `Name: ${name || '-'}`,
          `Phone: ${phone || '-'}`,
          `Email: ${fromEmail || '-'}`,
          `Service: ${service || '-'}`,
          '',
          message || '',
        ];

        const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

        window.location.href = mailto;
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupCookieBanner();
    setupTabs();
    setupAccordion();
    setupFaqTopics();
    setupMailtoForms();
  });
})();

