import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Icons1 } from '../Icons1/Icons1';
import classes from './BuildingBlocksSegment_ActiveFa.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  classes?: {
    stateLayer?: string;
    container?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 1:3946 */
export const BuildingBlocksSegment_ActiveFa: FC<Props> = memo(function BuildingBlocksSegment_ActiveFa(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.container || ''} ${classes.container}`}>
        <div className={`${props.classes?.stateLayer || ''} ${classes.stateLayer}`}>
          {props.swap?.icon || (
            <Icons1
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          )}
        </div>
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
    </div>
  );
});
