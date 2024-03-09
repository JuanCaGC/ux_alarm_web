import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.06 0.59L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.59C14.01 -0.19 15.28 -0.19 16.06 0.59ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z'
      fill='#31111D'
    />
  </svg>
);
const Memo = memo(Icon);
export { Memo as Icon };
