import { memo, SVGProps } from 'react';

const StatsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M35.5556 0H4.44444C2 0 0 2 0 4.44444V35.5556C0 38 2 40 4.44444 40H35.5556C38 40 40 38 40 35.5556V4.44444C40 2 38 0 35.5556 0ZM35.5556 35.5556H4.44444V4.44444H35.5556V35.5556ZM8.88889 15.5556H13.3333V31.1111H8.88889V15.5556ZM17.7778 8.88889H22.2222V31.1111H17.7778V8.88889ZM26.6667 22.2222H31.1111V31.1111H26.6667V22.2222Z'
      fill='#FC8653'
    />
  </svg>
);
const Memo = memo(StatsIcon);
export { Memo as StatsIcon };
