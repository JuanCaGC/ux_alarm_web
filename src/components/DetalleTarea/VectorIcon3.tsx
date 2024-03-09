import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M74.6667 0.75H9.33333C4.2 0.75 0 4.875 0 9.91667V74.0833C0 79.125 4.2 83.25 9.33333 83.25H74.6667C79.8 83.25 84 79.125 84 74.0833V9.91667C84 4.875 79.8 0.75 74.6667 0.75ZM74.6667 74.0833H9.33333V9.91667H74.6667V74.0833ZM18.6667 32.8333H28V64.9167H18.6667V32.8333ZM37.3333 19.0833H46.6667V64.9167H37.3333V19.0833ZM56 46.5833H65.3333V64.9167H56V46.5833Z'
      fill='#EC6449'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
