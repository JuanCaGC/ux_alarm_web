import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M33 25.5H30.5V5.5C30.5 2.75 28.25 0.5 25.5 0.5H20.5C17.75 0.5 15.5 2.75 15.5 5.5V25.5H13C6.1 25.5 0.5 31.1 0.5 38V55.5H45.5V38C45.5 31.1 39.9 25.5 33 25.5ZM20.5 5.5H25.5V25.5H20.5V5.5ZM40.5 50.5H35.5V43C35.5 41.625 34.375 40.5 33 40.5C31.625 40.5 30.5 41.625 30.5 43V50.5H25.5V43C25.5 41.625 24.375 40.5 23 40.5C21.625 40.5 20.5 41.625 20.5 43V50.5H15.5V43C15.5 41.625 14.375 40.5 13 40.5C11.625 40.5 10.5 41.625 10.5 43V50.5H5.5V38C5.5 33.875 8.875 30.5 13 30.5H33C37.125 30.5 40.5 33.875 40.5 38V50.5Z'
      fill='#FC8653'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
