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
import { Home } from './Home/Home';
import { HorizontalFullWidth } from './HorizontalFullWidth/HorizontalFullWidth';
import { IconsCheck_smallIcon } from './IconsCheck_smallIcon.js';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { ListItemProyecto } from './ListItemProyecto/ListItemProyecto';
import { NavigationRail_AlignmentTop } from './NavigationRail_AlignmentTop/NavigationRail_AlignmentTop';
import classes from './ProyectoDetalle.module.css';
import { Search } from './Search/Search';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';
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
    labelText?: boolean;
    supportingText?: boolean;
    labelText2?: boolean;
    supportingText2?: boolean;
    labelText3?: boolean;
    supportingText3?: boolean;
    stats?: boolean;
    stats2?: boolean;
  };
}
/* @figmaId 1:4712 */
export const ProyectoDetalle: FC<Props> = memo(function ProyectoDetalle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.dETALLESPROYECTO}>DETALLES PROYECTO</div>
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
      <div className={classes.frame16}>
        <div className={classes.group30}>
          <div className={classes.hora}>Hora</div>
          <div className={classes.tiempoAdicional}>Tiempo Adicional</div>
          <div className={classes.fecha}>Fecha </div>
        </div>
        <div className={classes.group31}>
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
        <div className={classes.group32}>
          <div className={classes.checkboxes1}>
            <div className={classes.stateLayer5}>
              <div className={classes.container5}></div>
              <div className={classes.iconsCheck_small}>
                <IconsCheck_smallIcon className={classes.icon8} />
              </div>
            </div>
          </div>
          <div className={classes.proyectoTerminado}>Proyecto Terminado</div>
          <Search className={classes.search} />
          <Cleaning_services className={classes.cleaning_services} />
        </div>
        <div className={classes.group33}>
          <ListItemProyecto
            className={classes.listItemProyecto2}
            hide={{
              stats: true,
            }}
            text={{
              headline: <div className={classes.headline}>Tarea 2</div>,
            }}
          />
          <ListItemProyecto
            className={classes.listItemProyecto}
            hide={{
              stats: true,
            }}
            text={{
              headline: <div className={classes.headline2}>Tarea 1</div>,
            }}
          />
          <div className={classes.listItemProyecto3}>
            <BuildingBlocksStateLayer1Enabl className={classes.stateLayerOverlay} />
            <div className={classes.stateLayer6}>
              <div className={classes.content}>
                <div className={classes.headline3}>Nombre</div>
                <div className={classes.headline4}>Acciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
