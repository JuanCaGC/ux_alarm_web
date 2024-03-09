import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Assessment } from './Assessment/Assessment';
import { Assignment } from './Assignment/Assignment';
import { BuildingBlocksSegment_ActiveFa } from './BuildingBlocksSegment_ActiveFa/BuildingBlocksSegment_ActiveFa';
import { Calendar_month } from './Calendar_month/Calendar_month';
import classes from './CalendarioDiario.module.css';
import { Divider } from './Divider/Divider';
import { EndSlot_Property1Default } from './EndSlot_Property1Default/EndSlot_Property1Default';
import { Home } from './Home/Home';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { NavigationRail_AlignmentTop } from './NavigationRail_AlignmentTop/NavigationRail_AlignmentTop';
import { Slot_Property1Default } from './Slot_Property1Default/Slot_Property1Default';
import { Vector } from './Vector/Vector';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon } from './VectorIcon';

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
/* @figmaId 1:4605 */
export const CalendarioDiario: FC<Props> = memo(function CalendarioDiario(props = {}) {
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
                  <Home
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
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <Vector className={classes.vector} />
      <div className={classes.diaDelMes}>Dia # del mes # </div>
      <Slot_Property1Default
        className={classes.slot2}
        classes={{
          frame6: classes.frame6,
          hour: classes.hour,
          tag: classes.tag,
          label: classes.label14,
          slot: classes.slot,
        }}
        text={{
          _6Am: <div className={classes._6Am}>10 pm</div>,
          label: <div className={classes.label13}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot4}
        classes={{
          frame6: classes.frame62,
          hour: classes.hour2,
          tag: classes.tag2,
          label: classes.label16,
          slot: classes.slot3,
        }}
        text={{
          _6Am: <div className={classes._6Am2}>6 pm</div>,
          label: <div className={classes.label15}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot6}
        classes={{
          frame6: classes.frame63,
          hour: classes.hour3,
          tag: classes.tag3,
          label: classes.label18,
          slot: classes.slot5,
        }}
        text={{
          _6Am: <div className={classes._6Am3}>2 pm</div>,
          label: <div className={classes.label17}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot8}
        classes={{
          frame6: classes.frame64,
          hour: classes.hour4,
          tag: classes.tag4,
          label: classes.label20,
          slot: classes.slot7,
        }}
        text={{
          _6Am: <div className={classes._6Am4}>10 am</div>,
          label: <div className={classes.label19}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot10}
        classes={{
          frame6: classes.frame65,
          hour: classes.hour5,
          tag: classes.tag5,
          label: classes.label22,
          slot: classes.slot9,
        }}
        text={{
          _6Am: <div className={classes._6Am5}>9 pm</div>,
          label: <div className={classes.label21}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot12}
        classes={{
          frame6: classes.frame66,
          hour: classes.hour6,
          tag: classes.tag6,
          label: classes.label24,
          slot: classes.slot11,
        }}
        text={{
          _6Am: <div className={classes._6Am6}>5 pm</div>,
          label: <div className={classes.label23}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot14}
        classes={{
          frame6: classes.frame67,
          hour: classes.hour7,
          tag: classes.tag7,
          label: classes.label26,
          slot: classes.slot13,
        }}
        text={{
          _6Am: <div className={classes._6Am7}>1 pm</div>,
          label: <div className={classes.label25}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot16}
        classes={{
          frame6: classes.frame68,
          hour: classes.hour8,
          tag: classes.tag8,
          label: classes.label28,
          slot: classes.slot15,
        }}
        text={{
          _6Am: <div className={classes._6Am8}>9 am</div>,
          label: <div className={classes.label27}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot18}
        classes={{
          frame6: classes.frame69,
          hour: classes.hour9,
          tag: classes.tag9,
          label: classes.label30,
          slot: classes.slot17,
        }}
        text={{
          _6Am: <div className={classes._6Am9}>8 pm</div>,
          label: <div className={classes.label29}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot20}
        classes={{
          frame6: classes.frame610,
          hour: classes.hour10,
          tag: classes.tag10,
          label: classes.label32,
          slot: classes.slot19,
        }}
        text={{
          _6Am: <div className={classes._6Am10}>4 pm</div>,
          label: <div className={classes.label31}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot22}
        classes={{
          frame6: classes.frame611,
          hour: classes.hour11,
          tag: classes.tag11,
          label: classes.label34,
          slot: classes.slot21,
        }}
        text={{
          _6Am: <div className={classes._6Am11}>12 am</div>,
          label: <div className={classes.label33}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot24}
        classes={{
          frame6: classes.frame612,
          hour: classes.hour12,
          tag: classes.tag12,
          label: classes.label36,
          slot: classes.slot23,
        }}
        text={{
          _6Am: <div className={classes._6Am12}>8 am</div>,
          label: <div className={classes.label35}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot26}
        classes={{
          frame6: classes.frame613,
          hour: classes.hour13,
          tag: classes.tag13,
          label: classes.label38,
          slot: classes.slot25,
        }}
        text={{
          _6Am: <div className={classes._6Am13}>6 am</div>,
          label: <div className={classes.label37}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot28}
        classes={{
          frame6: classes.frame614,
          hour: classes.hour14,
          tag: classes.tag14,
          label: classes.label40,
          slot: classes.slot27,
        }}
        text={{
          _6Am: <div className={classes._6Am14}>7 pm</div>,
          label: <div className={classes.label39}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot30}
        classes={{
          frame6: classes.frame615,
          hour: classes.hour15,
          tag: classes.tag15,
          label: classes.label42,
          slot: classes.slot29,
        }}
        text={{
          _6Am: <div className={classes._6Am15}>3 pm</div>,
          label: <div className={classes.label41}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot32}
        classes={{
          frame6: classes.frame616,
          hour: classes.hour16,
          tag: classes.tag16,
          label: classes.label44,
          slot: classes.slot31,
        }}
        text={{
          _6Am: <div className={classes._6Am16}>11 am</div>,
          label: <div className={classes.label43}>...</div>,
        }}
      />
      <Slot_Property1Default
        className={classes.slot34}
        classes={{
          frame6: classes.frame617,
          hour: classes.hour17,
          tag: classes.tag17,
          label: classes.label46,
          slot: classes.slot33,
        }}
        text={{
          _6Am: <div className={classes._6Am17}>7 am</div>,
          label: <div className={classes.label45}>...</div>,
        }}
      />
      <EndSlot_Property1Default
        className={classes.endSlot}
        classes={{
          frame6: classes.frame618,
          hour: classes.hour18,
          tag: classes.tag18,
          label: classes.label48,
          slot: classes.slot35,
        }}
        text={{
          _6Am: <div className={classes._6Am18}>11 pm</div>,
          label: <div className={classes.label47}>...</div>,
        }}
      />
    </div>
  );
});
