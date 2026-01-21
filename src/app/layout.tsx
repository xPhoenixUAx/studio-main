import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileCallBar } from '@/components/layout/mobile-call-bar';
import { CookieBanner } from '@/components/cookie-banner';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Eco-Friendly Pest & Wildlife Control`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'Your trusted local, family-owned pest and wildlife control service. We offer affordable, eco-friendly solutions with visible results. Contact us to schedule an inspection.',
  keywords: [
    'pest control',
    'wildlife removal',
    'eco-friendly pest control',
    'humane wildlife removal',
    'family-owned pest service',
  ],
  icons: {
    icon: [{ url: '/icons/beetle.svg', type: 'image/svg+xml' }],
    shortcut: ['/icons/beetle.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    telephone: PHONE_NUMBER,
    description:
      'Eco-friendly pest and wildlife control services. We are a local, family-owned business focused on customer-first service and affordable pricing.',
    openingHours: 'Mo-Sa 08:00-18:00',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased pb-20 md:pb-0">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCallBar />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
