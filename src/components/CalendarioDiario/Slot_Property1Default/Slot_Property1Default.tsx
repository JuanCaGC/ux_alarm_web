import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Slot_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    frame6?: string;
    hour?: string;
    tag?: string;
    label?: string;
    slot?: string;
    root?: string;
  };
  text?: {
    _6Am?: ReactNode;
    label?: ReactNode;
  };
}
/* @figmaId 1:4231 */
export const Slot_Property1Default: FC<Props> = memo(function Slot_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.slot || ''} ${classes.slot}`}>
        <div className={`${props.classes?.hour || ''} ${classes.hour}`}>
          <div className={`${props.classes?.frame6 || ''} ${classes.frame6}`}>
            {props.text?._6Am != null ? props.text?._6Am : <div className={classes._6Am}>6 am</div>}
          </div>
        </div>
        <div className={`${props.classes?.tag || ''} ${classes.tag}`}></div>
        <div className={`${props.classes?.label || ''} ${classes.label}`}>
          {props.text?.label != null ? props.text?.label : <div className={classes.label2}>...</div>}
        </div>
      </div>
    </div>
  );
});
