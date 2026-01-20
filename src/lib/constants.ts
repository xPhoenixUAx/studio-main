import {
  Bird,
  Bug,
  Fish,
  Home,
  Info,
  Mail,
  MessageSquareQuote,
  Mouse,
  Rabbit,
  Snail,
  Squirrel,
  HelpCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const COMPANY_NAME = 'GreenShield Pest & Wildlife';
export const PHONE_NUMBER = '(555) 123-4567';
export const PHONE_NUMBER_HREF = 'tel:+15551234567';
export const EMAIL = `hello@greenshield.local`;

export const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/wildlife-removal', label: 'Wildlife Removal', icon: Squirrel },
  { href: '/pest-control', label: 'Pest Control', icon: Bug },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/reviews', label: 'Reviews', icon: MessageSquareQuote },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const FOOTER_LINKS = {
  services: [
    { href: '/wildlife-removal', label: 'Wildlife Removal' },
    { href: '/pest-control', label: 'Pest Control' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/reviews', label: 'Client Reviews' },
    { href: '/faq', label: 'Frequently Asked Questions' },
  ],
};

export const WILDLIFE_SERVICES: { name: string; icon: LucideIcon }[] = [
  { name: 'Bats', icon: Bird }, // No bat icon
  { name: 'Mice', icon: Mouse },
  { name: 'Rats', icon: Mouse },
  { name: 'Squirrels', icon: Squirrel },
  { name: 'Raccoons', icon: Rabbit }, // No raccoon icon
  { name: 'Opossums', icon: Rabbit }, // No opossum icon
  { name: 'Skunks', icon: Rabbit }, // No skunk icon
  { name: 'Birds', icon: Bird },
  { name: 'Snakes', icon: Bug }, // No snake icon
  { name: 'Moles', icon: Snail }, // No mole icon
];

export const PEST_SERVICES: { name: string; icon: LucideIcon }[] = [
  { name: 'Ants', icon: Bug },
  { name: 'Spiders', icon: Bug },
  { name: 'Cockroaches', icon: Bug },
  { name: 'Crickets', icon: Bug },
  { name: 'Mice', icon: Mouse },
  { name: 'Rats', icon: Mouse },
  { name: 'Earwigs', icon: Bug },
  { name: 'Silverfish', icon: Fish },
  { name: 'Moths', icon: Bug },
  { name: 'Centipedes', icon: Bug },
  { name: 'Millipedes', icon: Bug },
  { name: 'Termites', icon: Bug },
];

export const REVIEWS = [
  {
    name: 'Sarah L.',
    location: 'Pleasantville',
    comment:
      'GreenShield was amazing! They humanely removed a family of raccoons from our attic. The team was professional, quick, and so respectful of our property. Highly recommend!',
    avatarId: 'avatar-1',
  },
  {
    name: 'Mike R.',
    location: 'Oakwood',
    comment:
      "Had a serious ant problem that other companies couldn't fix. GreenShield came in, used their eco-friendly treatment, and the ants were gone in a day. Fair price and great service.",
    avatarId: 'avatar-3',
  },
  {
    name: 'Jessica & Tom B.',
    location: 'Rivertown',
    comment:
      'We were so impressed with the professionalism and kindness of the GreenShield team. They took care of a squirrel issue and sealed up our home perfectly. A+ service from a great local company.',
    avatarId: 'avatar-2',
  },
];
