import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 10H12V2C12 0.9 11.1 0 10 0H8C6.9 0 6 0.9 6 2V10H5C2.24 10 0 12.24 0 15V22H18V15C18 12.24 15.76 10 13 10ZM8 2H10V10H8V2ZM16 20H14V17C14 16.45 13.55 16 13 16C12.45 16 12 16.45 12 17V20H10V17C10 16.45 9.55 16 9 16C8.45 16 8 16.45 8 17V20H6V17C6 16.45 5.55 16 5 16C4.45 16 4 16.45 4 17V20H2V15C2 13.35 3.35 12 5 12H13C14.65 12 16 13.35 16 15V20Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };