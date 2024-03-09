import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Home_StyleOutlined } from '../Home_StyleOutlined/Home_StyleOutlined';
import classes from './Home2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    home?: ReactNode;
  };
}
/* @figmaId 1:4200 */
export const Home2: FC<Props> = memo(function Home2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.home || <Home_StyleOutlined />}
    </div>
  );
});
