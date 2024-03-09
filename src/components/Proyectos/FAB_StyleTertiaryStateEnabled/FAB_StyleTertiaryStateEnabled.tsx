import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconsMode_edit_24px } from '../IconsMode_edit_24px/IconsMode_edit_24px';
import classes from './FAB_StyleTertiaryStateEnabled.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  classes?: {
    icon2?: string;
    icon3?: string;
    stateLayer?: string;
    root?: string;
  };
}
/* @figmaId 1:3885 */
export const FAB_StyleTertiaryStateEnabled: FC<Props> = memo(function FAB_StyleTertiaryStateEnabled(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.stateLayer || ''} ${classes.stateLayer}`}>
        <IconsMode_edit_24px
          className={props.classes?.icon3 || ''}
          classes={{ icon: props.classes?.icon2 || '' }}
          swap={{
            icon: <Icon className={classes.icon} />,
          }}
        />
      </div>
    </div>
  );
});
