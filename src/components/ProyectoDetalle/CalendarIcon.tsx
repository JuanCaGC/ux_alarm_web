import { memo, SVGProps } from 'react';

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="70" height="90" viewBox="0 0 144 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M104.667 22.3333H100V13.1667H90.6667V22.3333H53.3333V13.1667H44V22.3333H39.3333C34.1533 22.3333 30.0467 26.4583 30.0467 31.5L30 95.6667C30 100.708 34.1533 104.833 39.3333 104.833H104.667C109.8 104.833 114 100.708 114 95.6667V31.5C114 26.4583 109.8 22.3333 104.667 22.3333ZM104.667 95.6667H39.3333V49.8333H104.667V95.6667ZM104.667 40.6667H39.3333V31.5H104.667V40.6667ZM58 68.1667H48.6667V59H58V68.1667ZM76.6667 68.1667H67.3333V59H76.6667V68.1667ZM95.3333 68.1667H86V59H95.3333V68.1667ZM58 86.5H48.6667V77.3333H58V86.5ZM76.6667 86.5H67.3333V77.3333H76.6667V86.5ZM95.3333 86.5H86V77.3333H95.3333V86.5Z" fill="#EC6449"/>
  </svg>
);
const Memo = memo(CalendarIcon);
export { Memo as CalendarIcon };