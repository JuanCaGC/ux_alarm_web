import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleOutlinedStateEnabl } from './Button_StyleOutlinedStateEnabl/Button_StyleOutlinedStateEnabl';
import { Button_StyleTextStateEnabledSh } from './Button_StyleTextStateEnabledSh/Button_StyleTextStateEnabledSh';
import { Divider } from './Divider/Divider';
import { HorizontalFullWidth } from './HorizontalFullWidth/HorizontalFullWidth';
import { Keyboard_backspace } from './Keyboard_backspace/Keyboard_backspace';
import classes from './RegistroPopup.module.css';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';

interface Props {
  className?: string;
  hide?: {
    labelText?: boolean;
    supportingText?: boolean;
    labelText2?: boolean;
    supportingText2?: boolean;
    labelText3?: boolean;
    supportingText3?: boolean;
    labelText4?: boolean;
    supportingText4?: boolean;
  };
}
/* @figmaId 1:4468 */
export const RegistroPopup: FC<Props> = memo(function RegistroPopup(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rEGISTROS}>REGISTROS</div>
      <div className={classes.rectangle8}></div>
      <Divider className={classes.divider} />
      <Keyboard_backspace className={classes.keyboard_backspace} />
      <div className={classes.nombre}>Nombre</div>
      <div className={classes.contrasena}>Contrasena</div>
      <TextField_StyleOutlinedStateEn
        className={classes.textField2}
        classes={{ textField: classes.textField }}
        hide={{
          labelText: true,
          supportingText: true,
        }}
      />
      <div className={classes.correoElectronico}>Correo Electronico</div>
      <TextField_StyleOutlinedStateEn
        className={classes.textField4}
        classes={{ textField: classes.textField3 }}
        hide={{
          labelText: true,
          supportingText: true,
        }}
      />
      <TextField_StyleOutlinedStateEn
        className={classes.textField6}
        classes={{ textField: classes.textField5 }}
        hide={{
          labelText2: true,
          supportingText: true,
        }}
      />
      <div className={classes.confirmarContrasena}>Confirmar contrasena</div>
      <TextField_StyleOutlinedStateEn
        className={classes.textField8}
        classes={{ textField: classes.textField7 }}
        hide={{
          labelText2: true,
          supportingText: true,
        }}
      />
      <Button_StyleOutlinedStateEnabl
        className={classes.button}
        text={{
          labelText: <div className={classes.labelText}>Registrar</div>,
        }}
      />
      <div className={classes.basicDialog}>
        <div className={classes.textContent}>
          <div className={classes.titleDescription}>
            <div className={classes.headline}>Registro Completo</div>
            <div className={classes.supportingText}>El usuario se ha registrado correctamente</div>
          </div>
        </div>
        <Button_StyleOutlinedStateEnabl
          className={classes.button2}
          classes={{ stateLayer: classes.stateLayer }}
          text={{
            labelText: <div className={classes.labelText2}>Login</div>,
          }}
        />
      </div>
    </div>
  );
});
