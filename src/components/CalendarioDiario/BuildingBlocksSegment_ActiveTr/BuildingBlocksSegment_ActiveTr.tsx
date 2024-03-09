import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icons1 } from '../Icons1/Icons1';
import classes from './BuildingBlocksSegment_ActiveTr.module.css';
import { Icon } from './Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:3982 */
export const BuildingBlocksSegment_ActiveTr: FC<Props> = memo(function BuildingBlocksSegment_ActiveTr(props = {}) {
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
