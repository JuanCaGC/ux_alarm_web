import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Search_StyleOutlined } from '../Search_StyleOutlined/Search_StyleOutlined';
import classes from './Search.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 3:1738 */
export const Search: FC<Props> = memo(function Search(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Search_StyleOutlined
        className={classes.search}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
