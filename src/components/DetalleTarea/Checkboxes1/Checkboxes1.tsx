import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Checkboxes1.module.css';
import { IconsCheck_smallIcon } from './IconsCheck_smallIcon';

interface Props {
  className?: string;
}
/* @figmaId 3:1870 */
export const Checkboxes1: FC<Props> = memo(function Checkboxes1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.stateLayer}>
        <div className={classes.container}></div>
        <div className={classes.iconsCheck_small}>
          <IconsCheck_smallIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
