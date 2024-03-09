import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksSegment_ActiveFa } from '../BuildingBlocksSegment_ActiveFa/BuildingBlocksSegment_ActiveFa';
import { BuildingBlocksSegment_ActiveTr } from '../BuildingBlocksSegment_ActiveTr/BuildingBlocksSegment_ActiveTr';
import { FAB_StyleTertiaryStateEnabled } from '../FAB_StyleTertiaryStateEnabled/FAB_StyleTertiaryStateEnabled';
import { IconButton_StyleStandardStateE } from '../IconButton_StyleStandardStateE/IconButton_StyleStandardStateE';
import { IconsMenu_24px } from '../IconsMenu_24px/IconsMenu_24px';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import classes from './NavigationRail_AlignmentTop.module.css';

interface Props {
  className?: string;
  classes?: {
    iconsMenu_24px?: string;
    stateLayer?: string;
    container?: string;
    menu?: string;
    menuFab?: string;
    stateLayer2?: string;
    container2?: string;
    segment2?: string;
    stateLayer3?: string;
    container3?: string;
    segment3?: string;
    destinations?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
    segment1?: ReactNode;
    icon2?: ReactNode;
    icon3?: ReactNode;
  };
  hide?: {
    fABElevationOverride?: boolean;
    segment4?: boolean;
    segment5?: boolean;
    segment6?: boolean;
    segment7?: boolean;
  };
  text?: {
    label?: ReactNode;
    label2?: ReactNode;
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
      <div className={`${props.classes?.destinations || ''} ${classes.destinations}`}>
        {props.swap?.segment1 || <BuildingBlocksSegment_ActiveTr className={classes.segment1} />}
        <BuildingBlocksSegment_ActiveFa
          className={`${props.classes?.segment2 || ''} ${classes.segment2}`}
          classes={{ stateLayer: props.classes?.stateLayer2 || '', container: props.classes?.container2 || '' }}
          swap={{
            icon: props.swap?.icon2,
          }}
          text={{
            label: props.text?.label,
          }}
        />
        <BuildingBlocksSegment_ActiveFa
          className={`${props.classes?.segment3 || ''} ${classes.segment3}`}
          classes={{ stateLayer: props.classes?.stateLayer3 || '', container: props.classes?.container3 || '' }}
          swap={{
            icon: props.swap?.icon3,
          }}
          text={{
            label: props.text?.label2,
          }}
        />
        {!props.hide?.segment4 && <BuildingBlocksSegment_ActiveFa className={classes.segment4} />}
        {!props.hide?.segment5 && <BuildingBlocksSegment_ActiveFa className={classes.segment5} />}
        {!props.hide?.segment6 && <BuildingBlocksSegment_ActiveFa className={classes.segment6} />}
        {!props.hide?.segment7 && <BuildingBlocksSegment_ActiveFa className={classes.segment7} />}
      </div>
    </div>
  );
});
