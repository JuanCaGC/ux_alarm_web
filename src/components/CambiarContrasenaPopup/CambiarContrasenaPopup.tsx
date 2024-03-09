import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleOutlinedStateEnabl } from './Button_StyleOutlinedStateEnabl/Button_StyleOutlinedStateEnabl';
import { Button_StyleTextStateEnabledSh } from './Button_StyleTextStateEnabledSh/Button_StyleTextStateEnabledSh';
import classes from './CambiarContrasenaPopup.module.css';
import { Divider } from './Divider/Divider';
import { HorizontalFullWidth } from './HorizontalFullWidth/HorizontalFullWidth';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';

interface Props {
  className?: string;
  hide?: {
    labelText?: boolean;
    supportingText?: boolean;
    labelText2?: boolean;
    supportingText2?: boolean;
  };
}
/* @figmaId 1:4853 */
export const CambiarContrasenaPopup: FC<Props> = memo(function CambiarContrasenaPopup(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.cambiarContrasena}>Cambiar Contrasena</div>
      <div className={classes.rectangle8}></div>
      <Divider />
      <div className={classes.contrasena}>Contrasena</div>
      <div className={classes.confirmarContrasena}>Confirmar Contrasena</div>
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
          labelText2: true,
          supportingText: true,
        }}
      />
      <Button_StyleOutlinedStateEnabl
        className={classes.button}
        text={{
          labelText: <div className={classes.labelText}>Cambiar</div>,
        }}
      />
      <Button_StyleOutlinedStateEnabl
        className={classes.button2}
        text={{
          labelText: <div className={classes.labelText2}>Cancelar</div>,
        }}
      />
      <div className={classes.basicDialog}>
        <div className={classes.textContent}>
          <div className={classes.titleDescription}>
            <div className={classes.headline}>Actualizada</div>
            <div className={classes.supportingText}>Se ha actualizado tu contrasena</div>
          </div>
        </div>
        <Button_StyleOutlinedStateEnabl
          className={classes.button3}
          classes={{ stateLayer: classes.stateLayer }}
          text={{
            labelText: <div className={classes.labelText3}>Aceptar</div>,
          }}
        />
      </div>
      <Keyboard_backspace className={classes.keyboard_backspace} />
    </div>
  );
});
