import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z' fill='black' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
