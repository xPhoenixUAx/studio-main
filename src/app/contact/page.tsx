import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarClock,
  Mail,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';

import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_HREF, EMAIL } from '@/lib/constants';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY_NAME} to schedule an inspection or request an estimate. Call us or fill out our online form to schedule your service.`,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary">
        <Image
          src="/images/ui/contact.jpg"
          alt="Contact page header background."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative px-4 md:px-6 text-center text-white space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            Tell us what you're dealing with. We'll respond quickly with a clear plan.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/8]">
                    <Image
                      src="/images/ui/918.jpg"
                      alt="Contact options and scheduling."
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Inspection • No pressure
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">
                        Fastest response
                      </p>
                      <a
                        href={PHONE_NUMBER_HREF}
                        className="text-2xl font-bold tracking-tight hover:underline"
                      >
                        {PHONE_NUMBER}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Call now for urgent issues or same-day availability.
                      </p>
                      <div className="flex gap-3">
                        <Button asChild className="font-bold">
                          <a href={PHONE_NUMBER_HREF}>
                            <PhoneCall className="mr-2 h-4 w-4" />
                            Call Now
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="font-bold">
                          <a href={`mailto:${EMAIL}`}>
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-2xl border bg-secondary p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <CalendarClock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Hours</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Mon - Sat: 8:00 AM - 6:00 PM
                            <br />
                            Sun: Closed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">What happens next</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            We confirm details, schedule your visit, and provide a clear plan.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border bg-background p-5">
                      <p className="font-semibold">Prefer online scheduling?</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use the form and we'll reply shortly.
                      </p>
                      <Button asChild variant="link" className="px-0 font-bold">
                        <Link href="#contact-form">
                          Jump to the form <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <div className="text-center lg:text-left space-y-3 mb-6">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                  Send Us a Message
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Share the details and we'll reach out with next steps.
                </p>
              </div>

              <Card id="contact-form">
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <Card className="bg-background">
                  <CardContent className="p-5">
                    <p className="font-semibold">Clear estimate</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Transparent pricing based on the issue and your home.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardContent className="p-5">
                    <p className="font-semibold">Eco-friendly options</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Targeted treatments with a family-safe focus.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardContent className="p-5">
                    <p className="font-semibold">Prevention-first</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We help stop the problem from coming back.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
