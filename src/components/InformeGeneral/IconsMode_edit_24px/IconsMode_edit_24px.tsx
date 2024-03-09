import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsMode_edit_24px.module.css';
import { IconsMode_edit_24pxIcon } from './IconsMode_edit_24pxIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:3927 */
export const IconsMode_edit_24px: FC<Props> = memo(function IconsMode_edit_24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsMode_edit_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
