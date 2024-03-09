import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Keyboard_backspace_StyleOutlin } from '../Keyboard_backspace_StyleOutlin/Keyboard_backspace_StyleOutlin';
import classes from './Keyboard_backspace.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 3:1597 */
export const Keyboard_backspace: FC<Props> = memo(function Keyboard_backspace(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Keyboard_backspace_StyleOutlin
        className={classes.keyboard_backspace}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
