import { memo, SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11.4314" y="11" width="56" height="56" rx="2" fill="#333333"/>
    <path d="M24.3304 47.3756L49.0809 22.6251L53.4558 27L28.7053 51.7505L24.3304 47.3756Z" fill="#EC6449"/>
    <rect x="29.3749" y="23" width="35.0024" height="6.18701" transform="rotate(45 29.3749 23)" fill="#EC6449"/>
  </svg>

);

const Memo = memo(XIcon);
export { Memo as XIcon };
