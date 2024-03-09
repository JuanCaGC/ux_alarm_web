import { memo, SVGProps } from 'react';

interface MenuIconProps extends SVGProps<SVGSVGElement> {
  onClick?: () => void;
}

const MenuIcon = ({ onClick, ...props }: MenuIconProps) => (
  <svg className="menuIcon" width="70" height="90" viewBox="0 0 80 108" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 38.6667V31L64 31V38.6667L16 38.6667ZM16 57.8333L64 57.8333V50.1667L16 50.1667V57.8333ZM16 77H64V69.3333H16L16 77Z" 
    fill="#EC6449"/>
  </svg>
);
const Memo = memo(MenuIcon);
export { Memo as MenuIcon };
