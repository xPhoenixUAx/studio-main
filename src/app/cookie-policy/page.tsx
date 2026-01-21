import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY_NAME } from "@/lib/constants";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${COMPANY_NAME}.`,
};

export default function CookiePolicyPage() {
  return (
    <main className="container px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <header>
          <h1 className="text-4xl font-headline font-bold tracking-tighter">
            Cookie Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: January 2025
          </p>
        </header>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Introduction
            </h2>
            <p>
              This Cookie Policy explains how GreenShield (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
              tracking technologies on our website (the &quot;Service&quot;).
              This policy should be read together with our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-4"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-of-service"
                className="text-primary underline underline-offset-4"
              >
                Terms of Service
              </Link>
              .
            </p>
            <p>
              By using our website, you consent to the use of cookies in
              accordance with this policy. If you do not agree to our use of
              cookies, you should set your browser settings accordingly or not
              use our website.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used to
              make websites work more efficiently and provide information to
              website owners.
            </p>
            <p>Cookies can be:</p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold text-foreground">
                  Session cookies:
                </span>{" "}
                Temporary cookies that expire when you close your browser
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Persistent cookies:
                </span>{" "}
                Cookies that remain on your device for a set period or until you
                delete them
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  First-party cookies:
                </span>{" "}
                Cookies set by the website you are visiting
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Third-party cookies:
                </span>{" "}
                Cookies set by a domain other than the one you are visiting
              </li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              3. Types of Cookies We Use
            </h2>

            <div>
              <h3 className="font-semibold text-foreground">
                3.1 Essential Cookies
              </h3>
              <p>
                These cookies are necessary for the website to function
                properly. They enable core functionality such as security,
                network management, and accessibility. You cannot opt-out of
                these cookies.
              </p>
              <ul className="list-disc pl-5">
                <li>Cookie Consent: Remembers your cookie preferences</li>
                <li>
                  Session Management: Maintains your session while browsing
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                3.2 Analytics Cookies
              </h3>
              <p>
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                This helps us improve our website&apos;s performance and user
                experience.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Analytics tools (e.g., Google Analytics): Track traffic, page
                  views, and usage
                </li>
                <li>
                  Performance monitoring: Identify technical issues and
                  optimization opportunities
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                3.3 Functional Cookies
              </h3>
              <p>
                These cookies enable enhanced functionality and personalization.
                They may be set by us or by third-party providers whose services
                we have added to our pages.
              </p>
              <ul className="list-disc pl-5">
                <li>Language Preferences: Remembers your language selection</li>
                <li>Form Data: Temporarily stores form information</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                3.4 Marketing Cookies
              </h3>
              <p>
                These cookies may be used to track visitors across websites to
                display relevant advertisements and to help measure the
                effectiveness of marketing campaigns.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Advertising networks: Track ad performance and engagement
                </li>
                <li>
                  Social media: Enable sharing features and related tracking
                </li>
              </ul>
            </div>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              4. Third-Party Cookies
            </h2>
            <p>
              We may use third-party services that set cookies on your device.
              These may include analytics providers, advertising platforms, and
              social media services. These third parties may use cookies to
              collect information about your online activities across different
              websites. We do not control these third-party cookies, and you
              should review their respective privacy policies.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              5. How to Manage Cookies
            </h2>
            <p>
              You have the right to accept or reject cookies. Most web browsers
              automatically accept cookies, but you can modify your browser
              settings to decline cookies if you prefer.
            </p>

            <div>
              <h3 className="font-semibold text-foreground">
                5.1 Browser Settings
              </h3>
              <p>
                You can control cookies through your browser settings. Here are
                links to instructions for popular browsers: Google Chrome,
                Mozilla Firefox, Safari, Microsoft Edge.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                5.2 Opt-Out Tools
              </h3>
              <p>
                You can also opt-out of certain third-party cookies via tools
                such as Google Analytics Opt-Out, Digital Advertising Alliance,
                and the Network Advertising Initiative.
              </p>
            </div>

            <p>
              <span className="font-semibold text-foreground">Note:</span>{" "}
              Blocking or deleting cookies may impact your experience on our
              website. Some features may not function properly if cookies are
              disabled.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              6. Do Not Track Signals
            </h2>
            <p>
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature.
              Currently, there is no standard for how DNT signals should be
              interpreted. Our website does not currently respond to DNT browser
              signals or mechanisms.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              7. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. We will post
              the new Cookie Policy on this page and update the &quot;Last
              Updated&quot; date.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">8. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or our use of
              cookies, please contact us:
            </p>
            <ul>
              <li className="text-foreground font-semibold">GreenShield</li>
              <li>
                Email:{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </li>
              <li>Service Area: United States</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}
