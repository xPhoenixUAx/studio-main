import { EcoShieldIcon } from '@/components/icons/eco-shield-icon';
import { COMPANY_NAME } from '@/lib/constants';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label={COMPANY_NAME}>
      <EcoShieldIcon className="h-7 w-7 text-primary" />
      <span className="font-bold font-headline text-xl whitespace-nowrap">
        GreenShield
      </span>
    </div>
  );
}
