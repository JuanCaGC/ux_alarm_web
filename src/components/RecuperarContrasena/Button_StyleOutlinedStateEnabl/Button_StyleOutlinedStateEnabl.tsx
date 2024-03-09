import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleOutlinedStateEnabl.module.css';

interface Props {
  className?: string;
  classes?: {
    stateLayer?: string;
    root?: string;
  };
  text?: {
    labelText?: ReactNode;
  };
}
/* @figmaId 1:3754 */
export const Button_StyleOutlinedStateEnabl: FC<Props> = memo(function Button_StyleOutlinedStateEnabl(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={`${props.classes?.stateLayer || ''} ${classes.stateLayer}`}>
        {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText}>Label</div>}
      </div>
    </button>
  );
});
