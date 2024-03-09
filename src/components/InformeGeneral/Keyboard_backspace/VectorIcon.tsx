import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M60 16.6667H12.7667L24.7 4.7L20 0L0 20L20 40L24.7 35.3L12.7667 23.3333H60V16.6667Z' fill='#999999' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
