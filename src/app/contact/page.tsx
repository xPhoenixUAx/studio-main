import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_HREF, EMAIL } from '@/lib/constants';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY_NAME} for a free inspection or estimate. Call us or fill out our online form to schedule your service.`,
};

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-contact');

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: 'Call Us',
      value: PHONE_NUMBER,
      href: PHONE_NUMBER_HREF,
      description: 'For the fastest response, give us a call.'
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: 'Email Us',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      description: 'For general inquiries and questions.'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: 'Business Hours',
      value: 'Mon - Sat: 8am - 6pm',
      description: 'We are closed on Sundays.'
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative px-4 md:px-6 text-center text-white space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            We're here to help. Reach out today for your free, no-obligation inspection.
          </p>
        </div>
      </section>

      <section id="contact-details">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
               <Card key={method.title} className="text-center">
                 <CardContent className="p-8">
                  <div className="mb-4 inline-block bg-secondary p-4 rounded-full">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                  {method.href ? (
                    <a href={method.href} className="text-lg text-accent font-semibold hover:underline">
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-lg text-accent font-semibold">{method.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                 </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-secondary">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                Send Us a Message
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Fill out the form below and a member of our team will get back to you shortly.
                </p>
            </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
