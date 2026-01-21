import type { Metadata } from 'next';
import Link from 'next/link';

import { COMPANY_NAME, EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${COMPANY_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-4xl font-headline font-bold tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
        </header>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p>
              GreenShield (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our website, you
              agree to be bound by the terms described in this policy. If you do not agree with the
              practices described in this policy, please do not use our website.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">2.1 Information You Provide to Us</h3>
              <p>
                We collect information that you voluntarily provide to us when you fill out contact
                forms, subscribe to our newsletter (if available), communicate with us, participate
                in surveys, or request an estimate. This may include your name, email address,
                phone number, mailing address, details about the issue you&apos;re experiencing (pest
                activity, wildlife sightings, or property conditions), and any other information you
                choose to provide.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about
                your device and browsing behavior, including IP address, approximate location data,
                browser type and version, operating system, pages visited and time spent on pages,
                referring website addresses, and device information.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">2.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies, web beacons, and similar tracking technologies to collect
                information about your browsing activities. For more details, please see our{' '}
                <Link href="/cookie-policy" className="text-primary underline underline-offset-4">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for service delivery, communication, marketing (with
              consent), analytics, legal compliance, and business operations such as preventing
              fraud and maintaining the security of our website and systems.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share information with service providers, to comply with legal requirements, in
              business transfers, or with your consent. Service providers are contractually required
              to protect your information.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect
              your personal information, including SSL encryption, secure servers, and access
              controls. However, no method of transmission or storage is 100% secure.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or port
              your personal information, opt-out of marketing, or object to processing. To exercise
              these rights, please contact us using the information below.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">7. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect
              personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us and we will take steps to delete
              such information.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these external sites. Review third-party privacy
              policies when you visit their sites.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">9. California Privacy Rights</h2>
            <p>
              California residents have additional rights under the CCPA, including the right to
              know, delete, opt-out of sale, and not be discriminated against for exercising privacy
              rights. To exercise these rights, contact us using the details below.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your
              country of residence. By using our website, you consent to such transfers.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">11. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes
              outlined in this policy or as required by law. When no longer needed, we will securely
              delete or anonymize the information.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy
              on this page and update the &quot;Last Updated&quot; date.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </p>
            <ul className="space-y-1">
              <li className="text-foreground font-semibold">GreenShield</li>
              <li>
                Email:{' '}
                <a className="text-primary underline underline-offset-4" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>Service Area: United States</li>
            </ul>
            <p className="pt-2">
              For privacy-related inquiries, you may also email:{' '}
              <a className="text-primary underline underline-offset-4" href="mailto:privacy@greenshield.local">
                privacy@greenshield.local
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
