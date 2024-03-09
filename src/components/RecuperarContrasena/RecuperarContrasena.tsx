import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleOutlinedStateEnabl } from './Button_StyleOutlinedStateEnabl/Button_StyleOutlinedStateEnabl';
import { Divider } from './Divider/Divider';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import classes from './RecuperarContrasena.module.css';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';

interface Props {
  className?: string;
  hide?: {
    labelText?: boolean;
    supportingText?: boolean;
  };
}
/* @figmaId 1:4484 */
export const RecuperarContrasena: FC<Props> = memo(function RecuperarContrasena(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rECUPERARCONTRASENA}>RECUPERAR CONTRASEÑA</div>
      <div className={classes.rectangle8}></div>
      <Divider />
      <div className={classes.correoElectronico}>Correo Electronico</div>
      <TextField_StyleOutlinedStateEn
        className={classes.textField2}
        classes={{ textField: classes.textField }}
        hide={{
          labelText: true,
          supportingText: true,
        }}
      />
      <Button_StyleOutlinedStateEnabl
        className={classes.button}
        classes={{ stateLayer: classes.stateLayer }}
        text={{
          labelText: <div className={classes.labelText}>Recuperar</div>,
        }}
      />
      <Keyboard_backspace />
    </div>
  );
});
