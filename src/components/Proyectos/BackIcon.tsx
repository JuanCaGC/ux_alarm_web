import { memo, SVGProps } from 'react';

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 36.6667H22.7667L34.7 24.7L30 20L10 40L30 60L34.7 55.3L22.7667 43.3333H70V36.6667Z" fill="#ffffff"/>
  </svg>
);
const Memo = memo(BackIcon);
export { Memo as BackIcon };
