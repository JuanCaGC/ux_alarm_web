import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 4.89568e-05L1440 0' stroke='#433E3F' />
  </svg>
);
const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
