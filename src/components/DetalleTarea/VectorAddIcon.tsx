import { memo, SVGProps } from 'react';

const VectorAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M46.2222 0H5.77778C2.57111 0 0 2.6 0 5.77778V46.2222C0 49.4 2.57111 52 5.77778 52H46.2222C49.4 52 52 49.4 52 46.2222V5.77778C52 2.6 49.4 0 46.2222 0ZM46.2222 46.2222H5.77778V5.77778H46.2222V46.2222ZM23.1111 40.4444H28.8889V28.8889H40.4444V23.1111H28.8889V11.5556H23.1111V23.1111H11.5556V28.8889H23.1111V40.4444Z'
      fill='#EC6449'
    />
  </svg>
);
const Memo = memo(VectorAddIcon);
export { Memo as VectorAddIcon };
