import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Calendar_month_StyleOutlined } from '../Calendar_month_StyleOutlined/Calendar_month_StyleOutlined';
import classes from './Calendar_month.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 1:4198 */
export const Calendar_month: FC<Props> = memo(function Calendar_month(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Calendar_month_StyleOutlined
        swap={{
          vector: props.swap?.vector,
        }}
      />
    </div>
  );
});
