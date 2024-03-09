import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Divider.module.css';
import { DividerIcon } from './DividerIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 3:1668 */
export const Divider: FC<Props> = memo(function Divider(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.divider}>
        <DividerIcon className={classes.icon} />
      </div>
    </div>
  );
});
