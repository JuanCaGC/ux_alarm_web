import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Divider } from './Divider/Divider';
import { Frame10 } from './Frame10/Frame10';
import classes from './HomeSinMenu.module.css';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { NavigationRail_AlignmentTop } from './NavigationRail_AlignmentTop/NavigationRail_AlignmentTop';
import { Vector } from './Vector/Vector';

interface Props {
  className?: string;
  hide?: {
    fABElevationOverride?: boolean;
    destinations?: boolean;
  };
}
/* @figmaId 3:1448 */
export const HomeSinMenu: FC<Props> = memo(function HomeSinMenu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.cALENDARIO}>CALENDARIO</div>
      <Divider />
      <NavigationRail_AlignmentTop
        className={classes.navigationRail}
        classes={{
          iconsMenu_24px: classes.iconsMenu_24px,
          stateLayer: classes.stateLayer,
          container: classes.container,
          menu: classes.menu,
          menuFab: classes.menuFab,
        }}
        swap={{
          icon: <IconsMenu_24pxIcon className={classes.icon} />,
        }}
        hide={{
          fABElevationOverride: true,
          destinations: true,
        }}
      />
      <Frame10 className={classes.frame11} />
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <Vector className={classes.vector} />
      <div className={classes.mes}>Mes</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle92}></div>
      <div className={classes.rectangle102}></div>
    </div>
  );
});
