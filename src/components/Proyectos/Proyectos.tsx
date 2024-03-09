import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Assessment } from './Assessment/Assessment';
import { Assignment } from './Assignment/Assignment';
import { BuildingBlocksSegment_ActiveFa } from './BuildingBlocksSegment_ActiveFa/BuildingBlocksSegment_ActiveFa';
import { BuildingBlocksStateLayer1Enabl } from './BuildingBlocksStateLayer1Enabl/BuildingBlocksStateLayer1Enabl';
import { Calendar_month } from './Calendar_month/Calendar_month';
import { Cleaning_services } from './Cleaning_services/Cleaning_services';
import { Divider } from './Divider/Divider';
import { DividerIcon } from './DividerIcon';
import { Home } from './Home/Home';
import { HorizontalFullWidth } from './HorizontalFullWidth/HorizontalFullWidth';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { ListItemProyecto } from './ListItemProyecto/ListItemProyecto';
import { NavigationRail_AlignmentTop } from './NavigationRail_AlignmentTop/NavigationRail_AlignmentTop';
import classes from './Proyectos.module.css';
import { Search } from './Search/Search';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';
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
    labelText?: boolean;
    supportingText?: boolean;
    labelText2?: boolean;
    supportingText2?: boolean;
    labelText3?: boolean;
    supportingText3?: boolean;
    labelText4?: boolean;
    supportingText4?: boolean;
    labelText5?: boolean;
    supportingText5?: boolean;
  };
}
/* @figmaId 38:1400 */
export const Proyectos: FC<Props> = memo(function Proyectos(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.pROYECTOSCOMPLETADOS}>PROYECTOS COMPLETADOS</div>
      <Divider
        swap={{
          divider: <DividerIcon className={classes.icon} />,
        }}
      />
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
          icon: <IconsMenu_24pxIcon className={classes.icon2} />,
          segment1: (
            <BuildingBlocksSegment_ActiveFa
              className={classes.segment1}
              classes={{ stateLayer: classes.stateLayer2, container: classes.container2 }}
              swap={{
                icon: (
                  <Home
                    className={classes.icon4}
                    swap={{
                      home: (
                        <Calendar_month
                          className={classes.calendar_month}
                          swap={{
                            vector: <VectorIcon className={classes.icon3} />,
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
              className={classes.icon6}
              swap={{
                vector: <VectorIcon2 className={classes.icon5} />,
              }}
            />
          ),
          icon3: (
            <Assessment
              className={classes.icon8}
              swap={{
                vector: <VectorIcon3 className={classes.icon7} />,
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
      <div className={classes.frame14}>
        <div className={classes.group25}>
          <div className={classes.fechaInicio}>Fecha Inicio</div>
          <div className={classes.fechaFin}>Fecha Fin</div>
          <div className={classes.numeroDeTareas}>Numero de Tareas</div>
        </div>
        <div className={classes.group22}>
          <TextField_StyleOutlinedStateEn
            className={classes.textField2}
            classes={{ textField: classes.textField }}
            hide={{
              labelText: true,
              supportingText: true,
            }}
          />
          <TextField_StyleOutlinedStateEn
            className={classes.textField4}
            classes={{ textField: classes.textField3 }}
            hide={{
              labelText: true,
              supportingText: true,
            }}
          />
          <TextField_StyleOutlinedStateEn
            className={classes.textField6}
            classes={{ textField: classes.textField5 }}
            hide={{
              labelText: true,
              supportingText: true,
            }}
          />
        </div>
        <div className={classes.group24}>
          <div className={classes.estadoProyecto}>Estado Proyecto</div>
          <div className={classes.avance}>Avance </div>
        </div>
        <div className={classes.group23}>
          <TextField_StyleOutlinedStateEn
            className={classes.textField8}
            classes={{ textField: classes.textField7 }}
            hide={{
              labelText: true,
              supportingText: true,
            }}
          />
          <TextField_StyleOutlinedStateEn
            className={classes.textField10}
            classes={{ textField: classes.textField9 }}
            hide={{
              labelText: true,
              supportingText: true,
            }}
          />
          <Search />
          <Cleaning_services />
        </div>
        <div className={classes.group20}>
          <ListItemProyecto
            className={classes.listItemProyecto2}
            text={{
              headline: <div className={classes.headline}>Proyecto 2</div>,
            }}
          />
          <ListItemProyecto />
          <div className={classes.listItemProyecto}>
            <BuildingBlocksStateLayer1Enabl className={classes.stateLayerOverlay} />
            <div className={classes.stateLayer5}>
              <div className={classes.content}>
                <div className={classes.headline2}>Nombre</div>
                <div className={classes.headline3}>Acciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
