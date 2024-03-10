import { memo, SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11.4314" y="11" width="56" height="56" rx="2" fill="#333333"/>
    <path d="M32.8747 53.2418L20.4314 40.7985L24.7866 36.4433L32.8747 44.5315L53.4062 24L57.7614 28.3552L32.8747 53.2418Z" fill="#EC6449"/>
  </svg>
);

const Memo = memo(CheckIcon);
export { Memo as CheckIcon };
