import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 85 84' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M75.4583 0.75H9.54167C4.3625 0.75 0.125 4.875 0.125 9.91667V74.0833C0.125 79.125 4.3625 83.25 9.54167 83.25H75.4583C80.6375 83.25 84.875 79.125 84.875 74.0833V9.91667C84.875 4.875 80.6375 0.75 75.4583 0.75ZM75.4583 74.0833H9.54167V9.91667H75.4583V74.0833ZM18.9583 32.8333H28.375V64.9167H18.9583V32.8333ZM37.7917 19.0833H47.2083V64.9167H37.7917V19.0833ZM56.625 46.5833H66.0417V64.9167H56.625V46.5833Z'
      fill='#EC6449'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
