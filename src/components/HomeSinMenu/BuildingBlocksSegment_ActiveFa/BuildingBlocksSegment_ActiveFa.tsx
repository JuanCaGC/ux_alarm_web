import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icons1 } from '../Icons1/Icons1';
import classes from './BuildingBlocksSegment_ActiveFa.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:3946 */
export const BuildingBlocksSegment_ActiveFa: FC<Props> = memo(function BuildingBlocksSegment_ActiveFa(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.stateLayer}>
          <Icons1
            swap={{
              icon: <Icon className={classes.icon} />,
            }}
          />
        </div>
      </div>
      <div className={classes.label}>Label</div>
    </div>
  );
});
