import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Cleaning_services_StyleOutline } from '../Cleaning_services_StyleOutline/Cleaning_services_StyleOutline';
import classes from './Cleaning_services.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 38:1441 */
export const Cleaning_services: FC<Props> = memo(function Cleaning_services(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Cleaning_services_StyleOutline
        className={classes.cleaning_services}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
