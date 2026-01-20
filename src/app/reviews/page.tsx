import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Metadata } from 'next';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { REVIEWS, COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: `See what our happy customers are saying about ${COMPANY_NAME}. Real reviews from your neighbors.`,
};

export default function ReviewsPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-reviews');

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
            Trusted By Your Neighbors
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            We're proud of the relationships we've built in our community.
          </p>
        </div>
      </section>

      <section id="all-reviews">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...REVIEWS, ...REVIEWS].map((review, index) => {
              const avatarImage = PlaceHolderImages.find(
                (img) => img.id === review.avatarId
              );
              return (
                <Card key={index}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        {avatarImage && (
                          <AvatarImage
                            src={avatarImage.imageUrl}
                            alt={review.name}
                            data-ai-hint={avatarImage.imageHint}
                          />
                        )}
                        <AvatarFallback>
                          {review.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                     <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    <p className="text-muted-foreground italic">"{review.comment}"</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
