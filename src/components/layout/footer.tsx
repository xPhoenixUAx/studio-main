import Link from "next/link";

import {
  COMPANY_NAME,
  EMAIL,
  FOOTER_LINKS,
  PHONE_NUMBER,
} from "@/lib/constants";
import { Logo } from "./logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const combinedLinks = [...FOOTER_LINKS.services, ...FOOTER_LINKS.company];

  return (
    <footer className="bg-secondary border-t">
      <div className="container py-12 px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Your local, family-owned experts in eco-friendly pest and wildlife
            solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services & Company</h3>
          <ul className="space-y-2">
            {combinedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary">
                {PHONE_NUMBER}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                {EMAIL}
              </a>
            </li>
            <li className="pt-2 space-y-1">
              <p className="font-medium text-foreground">Hours:</p>
              <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
              <p>Sun: Closed</p>
            </li>
          </ul>

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Website Operator</p>
            <p className="font-medium text-foreground">SHOPCANARY s.r.o.</p>
            <p>Rybná 716/24, Staré Město, 110 00 Praha 1, Czech Republic</p>
            <p>Company Registration No.: C 398373, Municipal Court in Prague</p>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 px-4 md:px-6 space-y-3 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {COMPANY_NAME}. All Rights Reserved.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground/90">
            Disclaimer: This website is a service to assist homeowners in connecting with local
            service providers. All contractors/providers are independent and the website operator
            does not warrant or guarantee any work performed. It is the responsibility of the
            homeowner to verify that the hired contractor furnishes the necessary license and
            insurance required for the work being performed. All persons depicted in a photo or
            video are actors or models and not contractors listed on this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
