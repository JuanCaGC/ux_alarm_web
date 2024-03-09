import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksStateLayer1Enabl } from '../BuildingBlocksStateLayer1Enabl/BuildingBlocksStateLayer1Enabl';
import { HorizontalFullWidth } from '../HorizontalFullWidth/HorizontalFullWidth';
import { Info_StyleOutlined } from '../Info_StyleOutlined/Info_StyleOutlined';
import classes from './ListItemProyecto.module.css';
import { StatsIcon } from './StatsIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    headline?: ReactNode;
  };
}
/* @figmaId 1:4677 */
export const ListItemProyecto: FC<Props> = memo(function ListItemProyecto(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <BuildingBlocksStateLayer1Enabl className={classes.stateLayerOverlay} />
      <div className={classes.stateLayer}>
        <div className={classes.content}>
          {props.text?.headline != null ? props.text?.headline : <div className={classes.headline}>Proyecto 1</div>}
        </div>
        <Info_StyleOutlined
          className={classes.info}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
        <div className={classes.stats}>
          <StatsIcon className={classes.icon2} />
        </div>
      </div>
    </div>
  );
});
