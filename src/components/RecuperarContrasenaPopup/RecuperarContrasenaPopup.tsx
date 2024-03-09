import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleOutlinedStateEnabl } from './Button_StyleOutlinedStateEnabl/Button_StyleOutlinedStateEnabl';
import { Button_StyleTextStateEnabledSh } from './Button_StyleTextStateEnabledSh/Button_StyleTextStateEnabledSh';
import { Divider } from './Divider/Divider';
import { HorizontalFullWidth } from './HorizontalFullWidth/HorizontalFullWidth';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import classes from './RecuperarContrasenaPopup.module.css';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';

interface Props {
  className?: string;
  hide?: {
    labelText?: boolean;
    supportingText?: boolean;
  };
}
/* @figmaId 1:4492 */
export const RecuperarContrasenaPopup: FC<Props> = memo(function RecuperarContrasenaPopup(props = {}) {
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
        text={{
          labelText: <div className={classes.labelText}>Recuperar</div>,
        }}
      />
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <div className={classes.basicDialog}>
        <div className={classes.textContent}>
          <div className={classes.titleDescription}>
            <div className={classes.headline}>Correo Envidado</div>
            <div className={classes.supportingText}>Se ha enviado tu contrasena a tu correo electronico</div>
          </div>
        </div>
        <Button_StyleOutlinedStateEnabl
          className={classes.button2}
          classes={{ stateLayer: classes.stateLayer }}
          text={{
            labelText: <div className={classes.labelText2}>Aceptar</div>,
          }}
        />
      </div>
    </div>
  );
});
