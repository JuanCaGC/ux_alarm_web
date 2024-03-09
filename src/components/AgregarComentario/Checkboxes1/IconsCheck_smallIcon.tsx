import { memo, SVGProps } from 'react';

const IconsCheck_smallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.4433 42.2418L9 29.7985L13.3552 25.4433L21.4433 33.5315L41.9748 13L46.33 17.3552L21.4433 42.2418Z'
      fill='#EC6449'
    />
  </svg>
);
const Memo = memo(IconsCheck_smallIcon);
export { Memo as IconsCheck_smallIcon };
