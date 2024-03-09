import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.3333 8.66667H18.6667V12H15.3333V8.66667ZM15.3333 15.3333H18.6667V25.3333H15.3333V15.3333ZM17 0.333333C7.8 0.333333 0.333333 7.8 0.333333 17C0.333333 26.2 7.8 33.6667 17 33.6667C26.2 33.6667 33.6667 26.2 33.6667 17C33.6667 7.8 26.2 0.333333 17 0.333333ZM17 30.3333C9.65 30.3333 3.66667 24.35 3.66667 17C3.66667 9.65 9.65 3.66667 17 3.66667C24.35 3.66667 30.3333 9.65 30.3333 17C30.3333 24.35 24.35 30.3333 17 30.3333Z'
      fill='#EC6449'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
