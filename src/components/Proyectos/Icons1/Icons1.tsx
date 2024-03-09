import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Icons1.module.css';
import { Icons1Icon } from './Icons1Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:4178 */
export const Icons1: FC<Props> = memo(function Icons1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Icons1Icon className={classes.icon2} />}</div>
    </div>
  );
});
