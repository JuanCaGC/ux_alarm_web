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
import { FAB_StyleTertiaryStateEnabled } from './FAB_StyleTertiaryStateEnabled/FAB_StyleTertiaryStateEnabled';
import { Home } from './Home/Home';
import { HorizontalFullWidth } from './HorizontalFullWidth/HorizontalFullWidth';
import { IconButton_StyleStandardStateE } from './IconButton_StyleStandardStateE/IconButton_StyleStandardStateE';
import { IconsMenu_24px } from './IconsMenu_24px/IconsMenu_24px';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { ListItemProyecto } from './ListItemProyecto/ListItemProyecto';
import classes from './Proyectos.module.css';
import { Search } from './Search/Search';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';
import { Vector } from './Vector/Vector';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
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
/* @figmaId 1:4670 */
export const Proyectos: FC<Props> = memo(function Proyectos(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.pROYECTOSCOMPLETADOS}>PROYECTOS COMPLETADOS</div>
      <Divider />
      <div className={classes.navigationRail}>
        <div className={classes.menuFab}>
          <IconButton_StyleStandardStateE
            className={classes.menu}
            classes={{ stateLayer: classes.stateLayer, container: classes.container }}
            swap={{
              icon: (
                <IconsMenu_24px
                  className={classes.iconsMenu_24px}
                  swap={{
                    icon: <IconsMenu_24pxIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
        </div>
        <div className={classes.destinations}>
          <div className={classes.segment1}>
            <div className={classes.container4}>
              <div className={classes.stateLayer5}>
                <Home
                  className={classes.icon5}
                  swap={{
                    home: (
                      <Calendar_month
                        className={classes.calendar_month}
                        swap={{
                          vector: <VectorIcon className={classes.icon4} />,
                        }}
                      />
                    ),
                  }}
                />
              </div>
            </div>
            <div className={classes.label9}>
              <p className={classes.labelWrapper3}>
                <span className={classes.label10}>Cale</span>
                <span className={classes.label11}>n</span>
                <span className={classes.label12}>dario</span>
              </p>
            </div>
          </div>
          <BuildingBlocksSegment_ActiveFa
            className={classes.segment2}
            classes={{ stateLayer: classes.stateLayer3, container: classes.container2 }}
            swap={{
              icon: (
                <Assignment
                  className={classes.icon7}
                  swap={{
                    vector: <VectorIcon2 className={classes.icon6} />,
                  }}
                />
              ),
            }}
            text={{
              label: (
                <div className={classes.label}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label2}>Proyec</span>
                    <span className={classes.label3}>t</span>
                    <span className={classes.label4}>os</span>
                  </p>
                </div>
              ),
            }}
          />
          <BuildingBlocksSegment_ActiveFa
            className={classes.segment3}
            classes={{ stateLayer: classes.stateLayer4, container: classes.container3 }}
            swap={{
              icon: (
                <Assessment
                  className={classes.icon9}
                  swap={{
                    vector: <VectorIcon3 className={classes.icon8} />,
                  }}
                />
              ),
            }}
            text={{
              label: (
                <div className={classes.label5}>
                  <p className={classes.labelWrapper2}>
                    <span className={classes.label6}>Inf</span>
                    <span className={classes.label7}>o</span>
                    <span className={classes.label8}>rme</span>
                  </p>
                </div>
              ),
            }}
          />
        </div>
      </div>
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <Vector className={classes.vector} />
      <div className={classes.frame15}>
        <div className={classes.group26}>
          <div className={classes.fechaInicio}>Fecha Inicio</div>
          <div className={classes.fechaFin}>Fecha Fin</div>
          <div className={classes.numeroDeTareas}>Numero de Tareas</div>
        </div>
        <div className={classes.group27}>
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
        <div className={classes.group28}>
          <div className={classes.estadoProyecto}>Estado Proyecto</div>
          <div className={classes.avance}>Avance </div>
        </div>
        <div className={classes.group29}>
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
            <div className={classes.stateLayer6}>
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
