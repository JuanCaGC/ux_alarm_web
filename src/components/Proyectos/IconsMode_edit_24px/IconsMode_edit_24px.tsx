import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsMode_edit_24px.module.css';
import { IconsMode_edit_24pxIcon } from './IconsMode_edit_24pxIcon.js';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:3927 */
export const IconsMode_edit_24px: FC<Props> = memo(function IconsMode_edit_24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <IconsMode_edit_24pxIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
