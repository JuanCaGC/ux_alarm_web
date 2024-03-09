import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleOutlinedStateEnabl } from './Button_StyleOutlinedStateEnabl/Button_StyleOutlinedStateEnabl';
import classes from './Cuenta.module.css';
import { Divider } from './Divider/Divider';
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
/* @figmaId 1:4442 */
export const Cuenta: FC<Props> = memo(function Cuenta(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.mICUENTA}>MI CUENTA</div>
      <Divider />
      <div className={classes.rectangle8}></div>
      <div className={classes.nombre}>Nombre</div>
      <div className={classes.correoElectronico}>Correo Electronico</div>
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
      <div className={classes.deseaCambiarSuContrasena}>Desea Cambiar Su Contrasena?</div>
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <Button_StyleOutlinedStateEnabl
        className={classes.buttonc}
        text={{
          labelText: <div className={classes.labelText}>Actualizar</div>,
        }}
      />
      <Button_StyleOutlinedStateEnabl
        className={classes.button}
        classes={{ stateLayer: classes.stateLayer }}
        text={{
          labelText: <div className={classes.cambiar}>Cerrar Sesion</div>,
        }}
      />
    </div>
  );
});
