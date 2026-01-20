import type { SVGProps } from 'react';

export function EcoShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M15.5 9.5a4.5 4.5 0 0 0-4.5 4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-2.49-2.01-4.5-4.5-4.5z" />
      <path d="M8.5 14.5A4.5 4.5 0 0 1 13 10" />
    </svg>
  );
}
