import type { Metadata } from 'next';
import Link from 'next/link';

import { COMPANY_NAME, EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${COMPANY_NAME}.`,
};

export default function TermsOfServicePage() {
  return (
    <main className="container px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-4xl font-headline font-bold tracking-tighter">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
        </header>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the GreenShield website and services, you accept and agree to
              be bound by the terms and provisions of this agreement. If you do not agree to abide
              by the above, please do not use this service.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Services Description</h2>
            <p>
              GreenShield provides pest control and humane wildlife removal services, including but
              not limited to inspections, targeted treatments, exclusion/entry-point sealing, and
              prevention recommendations. All services are subject to availability and may vary
              based on location, property conditions, and the scope of work.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. Estimates and Pricing</h2>
            <p>
              Estimates may be provided upon request. Estimates are based on the information
              provided at the time of consultation and may be subject to change based on actual
              site conditions, changes in scope, unforeseen complications, material price
              fluctuations, and other factors. Final pricing will be confirmed in writing before
              work begins. All prices are in U.S. dollars unless otherwise stated.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Payment Terms</h2>
            <p>
              Payment terms will be specified in your service agreement or project contract.
              Generally: a deposit may be required to secure a start date; additional payments may
              be required at various stages; final payment is due upon completion and acceptance of
              work. Accepted payment methods may vary by location and project type. Late payments
              may be subject to interest charges as specified in your agreement.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Scheduling and Timeline</h2>
            <p>
              We strive to complete services within the estimated timeframe. However, scheduling
              and timelines are estimates and may be affected by weather conditions, material
              availability, permit processing times (if applicable), unforeseen complications, and
              changes in scope. We will communicate significant delays promptly and work with you
              to minimize inconvenience.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">6. Warranties</h2>
            <p>
              We may provide warranties on workmanship and materials as specified in your service
              agreement. Warranties, if offered, may cover workmanship defects for a specified
              period, manufacturer warranties on materials or devices, and compliance with
              applicable standards. Warranty claims must be made in writing within the warranty
              period. Normal wear and tear, damage from misuse, or modifications made by others are
              not covered.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">7. Client Responsibilities</h2>
            <p>
              As a client, you are responsible for providing accurate information, ensuring access
              to the work area, making timely decisions, protecting personal belongings and pets,
              and making payments according to the agreed schedule. If permits or approvals are
              required and not handled by us, you are responsible for obtaining them.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, GreenShield&apos;s liability for any claims
              arising from our services is limited to the total amount paid for the specific
              service giving rise to the claim. We are not liable for indirect, incidental, or
              consequential damages, loss of use or enjoyment, damage to personal property not
              directly caused by our negligence, or delays due to circumstances beyond our
              reasonable control.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">9. Dispute Resolution</h2>
            <p>
              In the event of a dispute, we encourage open communication to resolve issues
              amicably. If a dispute cannot be resolved through direct communication, we will work
              in good faith to find a mutually acceptable solution and may recommend mediation
              before pursuing legal action. Any legal proceedings shall be conducted in the
              jurisdiction of the registered office of the Website Operator.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">10. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of GreenShield (or its licensors) and is protected by copyright and
              other intellectual property laws. You may not reproduce, distribute, or create
              derivative works without written permission.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting to this page. Your continued use of our services
              after changes are posted constitutes acceptance of the modified terms.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">12. Termination</h2>
            <p>
              We reserve the right to terminate or refuse service to anyone at any time for any
              reason, including but not limited to violation of these terms, non-payment, or
              inappropriate conduct.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">13. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of
              the State of Florida, United States, without regard to its conflict of law
              provisions.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">14. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
              See also:{' '}
              <Link href="/privacy-policy" className="text-primary underline underline-offset-4">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookie-policy" className="text-primary underline underline-offset-4">
                Cookie Policy
              </Link>
              .
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
