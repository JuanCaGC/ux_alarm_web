import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsMenu_24px.module.css';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:3872 */
export const IconsMenu_24px: FC<Props> = memo(function IconsMenu_24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsMenu_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
