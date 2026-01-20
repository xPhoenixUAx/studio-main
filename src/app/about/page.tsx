import Image from 'next/image';
import { Leaf, Users, Heart, Target } from 'lucide-react';
import type { Metadata } from 'next';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { COMPANY_NAME } from '@/lib/constants';
import { EcoShieldIcon } from '@/components/icons/eco-shield-icon';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY_NAME}, our family-owned business, our mission for eco-friendly service, and our commitment to the community.`,
};

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-about');

  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: 'Eco-Friendly First',
      description: 'We prioritize the health of your family and our planet by using sustainable and low-impact solutions.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Community Focused',
      description: 'As a local business, we are invested in our community and strive to be responsible neighbors.',
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Customer Commitment',
      description: 'Your satisfaction is our top priority. We build lasting relationships based on trust and respect.',
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
            Your Local, Family-Owned Experts
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            Get to know the team dedicated to protecting your home.
          </p>
        </div>
      </section>

      <section id="our-story">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <EcoShieldIcon className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded by the Smith family, {COMPANY_NAME} was born from a simple idea: to provide our neighbors with honest, effective, and environmentally responsible pest control services. Tired of impersonal, one-size-fits-all solutions, we set out to build a company that prioritizes people and the planet.
                </p>
                <p>
                  For over a decade, we've been proudly serving our community, growing from a small family operation into a trusted local name. Our commitment to our founding values remains as strong as ever.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/familyphoto/800/600"
                alt="A smiling family, representing the founders"
                fill
                className="object-cover"
                data-ai-hint="family portrait"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mission-values" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
             <div className="flex items-center justify-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                  Our Mission & Values
                </h2>
              </div>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              These are the principles that guide every decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center space-y-3">
                <div className="inline-block bg-background p-4 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
