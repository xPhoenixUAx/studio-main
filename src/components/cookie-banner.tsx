'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type CookieConsentValue = 'accepted' | 'essential';

const CONSENT_COOKIE_NAME = 'cookie_consent';
const CONSENT_MAX_AGE_DAYS = 180;

function getCookieValue(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${encodeURIComponent(name)}=`));
  if (!match) return null;
  return decodeURIComponent(match.split('=').slice(1).join('='));
}

function setCookieValue(name: string, value: string, maxAgeDays: number) {
  const maxAge = Math.floor(maxAgeDays * 24 * 60 * 60);
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  const existingConsent = useMemo(() => {
    const raw = getCookieValue(CONSENT_COOKIE_NAME);
    if (raw === 'accepted' || raw === 'essential') return raw;
    return null;
  }, []);

  useEffect(() => {
    if (!existingConsent) setIsVisible(true);
  }, [existingConsent]);

  const handleChoice = (value: CookieConsentValue) => {
    setCookieValue(CONSENT_COOKIE_NAME, value, CONSENT_MAX_AGE_DAYS);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        <Card className="border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg">
          <CardContent className="p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="font-semibold">Cookies & privacy</p>
              <p className="text-sm text-muted-foreground">
                We use essential cookies to make this site work, and optional cookies to understand
                usage and improve performance. You can choose essential-only or accept all.
              </p>
              <div className="text-sm">
                <Link
                  href="/cookie-policy"
                  className="text-primary underline underline-offset-4"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              <Button variant="outline" onClick={() => handleChoice('essential')}>
                Essential Only
              </Button>
              <Button onClick={() => handleChoice('accepted')} className="font-semibold">
                Accept All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

