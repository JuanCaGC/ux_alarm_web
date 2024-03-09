import { memo, SVGProps } from 'react';

const ProjectsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="70" height="90" viewBox="0 0 144 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48.6667 77.3333H81.3333V86.5H48.6667V77.3333ZM48.6667 59H95.3333V68.1667H48.6667V59ZM48.6667 40.6667H95.3333V49.8333H48.6667V40.6667ZM104.667 22.3333H85.16C83.2 17.0167 78.0667 13.1667 72 13.1667C65.9333 13.1667 60.8 17.0167 58.84 22.3333H39.3333C38.68 22.3333 38.0733 22.3792 37.4667 22.5167C35.6467 22.8833 34.0133 23.8 32.7533 25.0375C31.9133 25.8625 31.2133 26.8708 30.7467 27.9708C30.28 29.025 30 30.2167 30 31.5V95.6667C30 96.9042 30.28 98.1417 30.7467 99.2417C31.2133 100.342 31.9133 101.304 32.7533 102.175C34.0133 103.412 35.6467 104.329 37.4667 104.696C38.0733 104.787 38.68 104.833 39.3333 104.833H104.667C109.8 104.833 114 100.708 114 95.6667V31.5C114 26.4583 109.8 22.3333 104.667 22.3333ZM72 21.1875C73.9133 21.1875 75.5 22.7458 75.5 24.625C75.5 26.5042 73.9133 28.0625 72 28.0625C70.0867 28.0625 68.5 26.5042 68.5 24.625C68.5 22.7458 70.0867 21.1875 72 21.1875ZM104.667 95.6667H39.3333V31.5H104.667V95.6667Z" fill="#EC6449"/>
  </svg>
);
const Memo = memo(ProjectsIcon);
export { Memo as ProjectsIcon };
