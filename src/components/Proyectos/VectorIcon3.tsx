import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 87 84' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M77.0417 0.75H9.95833C4.6875 0.75 0.375 4.875 0.375 9.91667V74.0833C0.375 79.125 4.6875 83.25 9.95833 83.25H77.0417C82.3125 83.25 86.625 79.125 86.625 74.0833V9.91667C86.625 4.875 82.3125 0.75 77.0417 0.75ZM77.0417 74.0833H9.95833V9.91667H77.0417V74.0833ZM19.5417 32.8333H29.125V64.9167H19.5417V32.8333ZM38.7083 19.0833H48.2917V64.9167H38.7083V19.0833ZM57.875 46.5833H67.4583V64.9167H57.875V46.5833Z'
      fill='#999999'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
