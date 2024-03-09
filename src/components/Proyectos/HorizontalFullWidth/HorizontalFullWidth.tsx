import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HorizontalFullWidth.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:3828 */
export const HorizontalFullWidth: FC<Props> = memo(function HorizontalFullWidth(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.divider}></div>
    </div>
  );
});
