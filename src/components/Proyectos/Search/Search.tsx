import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Search_StyleOutlined } from '../Search_StyleOutlined/Search_StyleOutlined';
import classes from './Search.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 38:1439 */
export const Search: FC<Props> = memo(function Search(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Search_StyleOutlined
        className={classes.search}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
