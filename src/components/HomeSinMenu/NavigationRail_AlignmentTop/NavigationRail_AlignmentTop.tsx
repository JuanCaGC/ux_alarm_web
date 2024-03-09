import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksSegment_ActiveFa } from '../BuildingBlocksSegment_ActiveFa/BuildingBlocksSegment_ActiveFa';
import { BuildingBlocksSegment_ActiveTr } from '../BuildingBlocksSegment_ActiveTr/BuildingBlocksSegment_ActiveTr';
import { FAB_StyleTertiaryStateEnabled } from '../FAB_StyleTertiaryStateEnabled/FAB_StyleTertiaryStateEnabled';
import { IconButton_StyleStandardStateE } from '../IconButton_StyleStandardStateE/IconButton_StyleStandardStateE';
import { IconsMenu_24px } from '../IconsMenu_24px/IconsMenu_24px';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon';
import classes from './NavigationRail_AlignmentTop.module.css';

interface Props {
  className?: string;
  classes?: {
    iconsMenu_24px?: string;
    stateLayer?: string;
    container?: string;
    menu?: string;
    menuFab?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  hide?: {
    fABElevationOverride?: boolean;
    destinations?: boolean;
  };
}
/* @figmaId 1:3833 */
export const NavigationRail_AlignmentTop: FC<Props> = memo(function NavigationRail_AlignmentTop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.menuFab || ''} ${classes.menuFab}`}>
        <IconButton_StyleStandardStateE
          className={`${props.classes?.menu || ''} ${classes.menu}`}
          classes={{ stateLayer: props.classes?.stateLayer || '', container: props.classes?.container || '' }}
          swap={{
            icon: (
              <IconsMenu_24px
                swap={{
                  icon: <IconsMenu_24pxIcon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
        {!props.hide?.fABElevationOverride && (
          <div className={classes.fABElevationOverride}>
            <FAB_StyleTertiaryStateEnabled className={classes.fAB} />
          </div>
        )}
      </div>
      {!props.hide?.destinations && (
        <div className={classes.destinations}>
          <BuildingBlocksSegment_ActiveTr className={classes.segment1} />
          <BuildingBlocksSegment_ActiveFa className={classes.segment2} />
          <BuildingBlocksSegment_ActiveFa className={classes.segment3} />
          <BuildingBlocksSegment_ActiveFa className={classes.segment4} />
          <BuildingBlocksSegment_ActiveFa className={classes.segment5} />
          <BuildingBlocksSegment_ActiveFa className={classes.segment6} />
          <BuildingBlocksSegment_ActiveFa className={classes.segment7} />
        </div>
      )}
    </div>
  );
});
