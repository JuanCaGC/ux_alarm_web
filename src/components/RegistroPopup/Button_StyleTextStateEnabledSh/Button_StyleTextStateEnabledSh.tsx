import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleTextStateEnabledSh.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:3719 */
export const Button_StyleTextStateEnabledSh: FC<Props> = memo(function Button_StyleTextStateEnabledSh(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.stateLayer}>
        <div className={classes.labelText}>Label</div>
      </div>
    </div>
  );
});
