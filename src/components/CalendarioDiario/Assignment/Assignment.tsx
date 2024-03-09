import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Assignment_StyleOutlined } from '../Assignment_StyleOutlined/Assignment_StyleOutlined';
import classes from './Assignment.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 1:4216 */
export const Assignment: FC<Props> = memo(function Assignment(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Assignment_StyleOutlined
        swap={{
          vector: props.swap?.vector,
        }}
      />
    </div>
  );
});
