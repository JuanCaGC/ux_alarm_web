import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Divider.module.css';
import { DividerIcon } from './DividerIcon.js';

interface Props {
  className?: string;
  swap?: {
    divider?: ReactNode;
  };
}
/* @figmaId 3:1668 */
export const Divider: FC<Props> = memo(function Divider(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.divider}>{props.swap?.divider || <DividerIcon className={classes.icon} />}</div>
    </div>
  );
});
