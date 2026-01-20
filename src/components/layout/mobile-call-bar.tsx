import { PHONE_NUMBER_HREF } from '@/lib/constants';
import { Phone } from 'lucide-react';

export function MobileCallBar() {
  return (
    <a
      href={PHONE_NUMBER_HREF}
      className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-primary text-primary-foreground flex items-center justify-center z-50 shadow-2xl"
    >
      <div className="flex items-center gap-4">
        <Phone className="h-8 w-8 animate-pulse" />
        <div className="text-center">
          <p className="font-bold text-xl tracking-wider">Call Now</p>
          <p className="text-sm opacity-80">Fast, Local Response</p>
        </div>
      </div>
    </a>
  );
}
