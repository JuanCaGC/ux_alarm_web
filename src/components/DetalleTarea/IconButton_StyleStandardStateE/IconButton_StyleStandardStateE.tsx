import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsSettings_24px } from '../IconsSettings_24px/IconsSettings_24px';
import { Icon } from './Icon.js';
import classes from './IconButton_StyleStandardStateE.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    stateLayer?: string;
    container?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:3604 */
export const IconButton_StyleStandardStateE: FC<Props> = memo(function IconButton_StyleStandardStateE(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.container || ''} ${classes.container}`}>
        <div className={`${props.classes?.stateLayer || ''} ${classes.stateLayer}`}>
          {props.swap?.icon || (
            <IconsSettings_24px
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
