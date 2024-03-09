import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconsMode_edit_24px } from '../IconsMode_edit_24px/IconsMode_edit_24px';
import classes from './FAB_StyleTertiaryStateEnabled.module.css';
import { Icon } from './Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:3885 */
export const FAB_StyleTertiaryStateEnabled: FC<Props> = memo(function FAB_StyleTertiaryStateEnabled(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.stateLayer}>
        <IconsMode_edit_24px
          swap={{
            icon: <Icon className={classes.icon} />,
          }}
        />
      </div>
    </div>
  );
});
