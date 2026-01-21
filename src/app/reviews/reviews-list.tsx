'use client';

import {
  MessageSquareQuote,
  PhoneCall,
  ShieldCheck,
  Star,
  Tag,
} from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import type { Review } from '@/lib/constants';

export function ReviewsList({ reviews }: { reviews: Review[] }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const avatarImages = useMemo(() => {
    return new Map(
      PlaceHolderImages.filter((img) => img.id.startsWith('avatar-')).map((img) => [
        img.id,
        img,
      ])
    );
  }, []);

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="mt-8 space-y-4">
      {visibleReviews.map((review, index) => {
        const avatarImage = avatarImages.get(review.avatarId);
        const accent =
          index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-emerald-500' : 'bg-amber-500';

        return (
          <Card
            key={`${review.name}-${review.avatarId}-${index}`}
            className="relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className={cn('absolute left-0 top-0 bottom-0 w-1.5', accent)} />
            <CardContent className="p-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <div className="flex items-start gap-3 min-w-0">
                  <Avatar>
                    {avatarImage && (
                      <AvatarImage
                        src={avatarImage.imageUrl}
                        alt={review.name}
                        data-ai-hint={avatarImage.imageHint}
                      />
                    )}
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{review.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground truncate">{review.service}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {[...Array(5)].map((_, i) => {
                    const filled = i < (review.rating ?? 5);
                    return (
                      <Star
                        key={i}
                        className={cn(
                          'w-4 h-4',
                          filled ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                        )}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 relative rounded-2xl bg-secondary p-5 min-h-[104px]">
                <MessageSquareQuote
                  className="absolute right-4 top-4 h-6 w-6 text-primary/30 pointer-events-none"
                  aria-hidden="true"
                />
                <p
                  className="text-muted-foreground leading-relaxed text-left pr-10"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {review.comment}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {hasMore ? (
        <div className="pt-2 flex justify-center">
          <Button onClick={() => setVisibleCount(reviews.length)} className="font-bold">
            Show More Reviews
          </Button>
        </div>
      ) : null}

      <Card className="mt-8 bg-secondary">
        <CardContent className="p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <PhoneCall className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold">Want results like these?</p>
              <p className="text-sm text-muted-foreground mt-1">
                Book an inspection and get a clear plan for your home.
              </p>
            </div>
          </div>
          <Button asChild className="font-bold">
            <Link href="/contact">
              Schedule an Inspection <ShieldCheck className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
