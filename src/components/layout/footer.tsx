import Link from 'next/link';
import {
  COMPANY_NAME,
  FOOTER_LINKS,
  PHONE_NUMBER,
  EMAIL,
} from '@/lib/constants';
import { Logo } from './logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t">
      <div className="container py-12 px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Your local, family-owned experts in eco-friendly pest and wildlife
            solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.services.map((link) => (
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
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.company.map((link) => (
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
            <li className="pt-2">
              <p className="font-medium">Hours:</p>
              <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
              <p>Sun: Closed</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 px-4 md:px-6 text-center text-sm text-muted-foreground">
          &copy; {currentYear} {COMPANY_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
