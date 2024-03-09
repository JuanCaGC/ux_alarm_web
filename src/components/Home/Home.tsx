import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Assessment } from './Assessment/Assessment';
import { Assignment } from './Assignment/Assignment';
import { BuildingBlocksSegment_ActiveFa } from './BuildingBlocksSegment_ActiveFa/BuildingBlocksSegment_ActiveFa';
import { Calendar_month } from './Calendar_month/Calendar_month';
import { Divider } from './Divider/Divider';
import { Frame10 } from './Frame10/Frame10';
import { Home2 } from './Home2/Home2';
import classes from './Home.module.css';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { NavigationRail_AlignmentTop } from './NavigationRail_AlignmentTop/NavigationRail_AlignmentTop';
import { Vector } from './Vector/Vector';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    fABElevationOverride?: boolean;
    segment4?: boolean;
    segment5?: boolean;
    segment6?: boolean;
    segment7?: boolean;
  };
}
/* @figmaId 1:4501 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.cALENDARIO}>CALENDARIO</div>
      <Divider />
      <Vector />
      <NavigationRail_AlignmentTop
        className={classes.navigationRail}
        classes={{
          iconsMenu_24px: classes.iconsMenu_24px,
          stateLayer: classes.stateLayer,
          container: classes.container,
          menu: classes.menu,
          menuFab: classes.menuFab,
          stateLayer2: classes.stateLayer3,
          container2: classes.container3,
          segment2: classes.segment2,
          stateLayer3: classes.stateLayer4,
          container3: classes.container4,
          segment3: classes.segment3,
          destinations: classes.destinations,
        }}
        swap={{
          icon: <IconsMenu_24pxIcon className={classes.icon} />,
          segment1: (
            <BuildingBlocksSegment_ActiveFa
              className={classes.segment1}
              classes={{ stateLayer: classes.stateLayer2, container: classes.container2 }}
              swap={{
                icon: (
                  <Home2
                    className={classes.icon3}
                    swap={{
                      home: (
                        <Calendar_month
                          className={classes.calendar_month}
                          swap={{
                            vector: <VectorIcon className={classes.icon2} />,
                          }}
                        />
                      ),
                    }}
                  />
                ),
              }}
              text={{
                label: (
                  <div className={classes.label}>
                    <p className={classes.labelWrapper}>
                      <span className={classes.label2}>Cale</span>
                      <span className={classes.label3}>n</span>
                      <span className={classes.label4}>dario</span>
                    </p>
                  </div>
                ),
              }}
            />
          ),
          icon2: (
            <Assignment
              className={classes.icon5}
              swap={{
                vector: <VectorIcon2 className={classes.icon4} />,
              }}
            />
          ),
          icon3: (
            <Assessment
              className={classes.icon7}
              swap={{
                vector: <VectorIcon3 className={classes.icon6} />,
              }}
            />
          ),
        }}
        hide={{
          fABElevationOverride: true,
          segment4: true,
          segment5: true,
          segment6: true,
          segment7: true,
        }}
        text={{
          label: (
            <div className={classes.label5}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label6}>Proyec</span>
                <span className={classes.label7}>t</span>
                <span className={classes.label8}>os</span>
              </p>
            </div>
          ),
          label2: (
            <div className={classes.label9}>
              <p className={classes.labelWrapper3}>
                <span className={classes.label10}>Inf</span>
                <span className={classes.label11}>o</span>
                <span className={classes.label12}>rme</span>
              </p>
            </div>
          ),
        }}
      />
      <Frame10 />
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <Vector />
      <div className={classes.mes}>Mes</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle92}></div>
      <div className={classes.rectangle102}></div>
    </div>
  );
});
