import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 3.19L15 7.69V15.5H13V9.5H7V15.5H5V7.69L10 3.19ZM10 0.5L0 9.5H3V17.5H9V11.5H11V17.5H17V9.5H20L10 0.5Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
