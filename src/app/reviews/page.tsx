import Image from 'next/image';
import Link from 'next/link';
import {
  BadgeCheck,
  CalendarClock,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Star,
} from 'lucide-react';
import type { Metadata } from 'next';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { REVIEWS, COMPANY_NAME } from '@/lib/constants';
import { ReviewsList } from '@/app/reviews/reviews-list';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: `See what our happy customers are saying about ${COMPANY_NAME}. Real reviews from your neighbors.`,
};

export default function ReviewsPage() {
  const avgRating = 4.75;

  const highlightCards = [
    {
      icon: BadgeCheck,
      title: 'Local & Trusted',
      description: 'Real feedback from customers across the community.',
    },
    {
      icon: CalendarClock,
      title: 'Fast Scheduling',
      description: 'Clear expectations, on-time arrivals, and great communication.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Focus',
      description: 'Targeted solutions designed for families, pets, and long-term results.',
    },
  ] as const;

  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary">
        <Image
          src="/images/reviews/head-rewiev.jpg"
          alt="Reviews page header background."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative px-4 md:px-6 text-center text-white space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Trusted By Your Neighbors
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            We are proud of the relationships we have built in our community.
          </p>
        </div>
      </section>

      <section id="reviews">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 grid sm:grid-cols-3 gap-4">
              {highlightCards.map((item) => (
                <Card key={item.title} className="bg-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-primary" />
                      <p className="font-semibold">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                <Card className="overflow-hidden">
                  <div className="relative aspect-[16/7]">
                    <Image
                      src="/images/reviews/719.jpg"
                      alt="Happy customers and positive reviews."
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Badge variant="secondary" className="gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                        Community Rating
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-4xl font-bold leading-none">{avgRating.toFixed(2)}</p>
                        <div className="mt-2 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => {
                            const filled = i < Math.round(avgRating);
                            return (
                              <Star
                                key={i}
                                className={cn(
                                  'w-4 h-4',
                                  filled
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-muted-foreground'
                                )}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold leading-none">{REVIEWS.length}</p>
                        <p className="mt-1 text-xs text-muted-foreground">reviews shown</p>
                      </div>
                    </div>

                    <div className="rounded-xl border bg-secondary p-4">
                      <p className="text-sm font-semibold">What customers mention most</p>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                          Clear plan and honest recommendations
                        </li>
                        <li className="flex items-start gap-2">
                          <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                          Respectful work and clean results
                        </li>
                        <li className="flex items-start gap-2">
                          <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                          Prevention tips that help long-term
                        </li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="w-full font-bold">
                      <Link href="/contact">
                        Schedule an Inspection <PhoneCall className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                      Recent Reviews
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      A quick look at what customers say about our service.
                    </p>
                  </div>
                </div>

                <ReviewsList reviews={REVIEWS} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
