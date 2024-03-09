import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TextField_StyleOutlinedStateEn.module.css';

interface Props {
  className?: string;
  classes?: {
    textField?: string;
    root?: string;
  };
  hide?: {
    labelText?: boolean;
    supportingText?: boolean;
    labelText2?: boolean;
  };
}
/* @figmaId 1:2413 */
export const TextField_StyleOutlinedStateEn: FC<Props> = memo(function TextField_StyleOutlinedStateEn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.textField || ''} ${classes.textField}`}>
        <div className={classes.stateLayer}>
          <div className={classes.content}>
            {!props.hide?.labelText2 && (
              <div className={classes.labelText}>
                {!props.hide?.labelText && <div className={classes.labelText2}>Label</div>}
              </div>
            )}
          </div>
        </div>
      </div>
      {!props.hide?.supportingText && (
        <div className={classes.supportingText}>
          <div className={classes.supportingText2}>Supporting text</div>
        </div>
      )}
    </div>
  );
});
