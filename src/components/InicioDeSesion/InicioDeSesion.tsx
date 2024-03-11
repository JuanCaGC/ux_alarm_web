import { memo } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import resets from '../_resets.module.css';
import { Button_StyleOutlinedStateEnabl } from './Button_StyleOutlinedStateEnabl/Button_StyleOutlinedStateEnabl';
import { Divider } from './Divider/Divider';
import classes from './InicioDeSesion.module.css';
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
/* @figmaId 1:4430 */
export const InicioDeSesion: FC<Props> = memo(function InicioDeSesion(props = {}) {
  return (
    <div className={classes.root}>
      <div className={classes.rectangle8}></div>
      <div className={classes.iNGRESO}>INGRESO</div>
      <Divider />
      <div className={classes.correoElectronico}>Correo Electronico</div>
      <div className={classes.contrasena}>Contrasena</div>
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
      <div className={classes.olvidasteTuContrasena}>Olvidaste Tu Contrasena?</div>
      <Button_StyleOutlinedStateEnabl
        className={classes.button}
        classes={{ stateLayer: classes.stateLayer }}
        text={{
          labelText: ( <Link to="/proyectos" className={classes.link}>
            <div className={classes.labelText}>Login</div>
            </Link>),
        }}
      />
      <Button_StyleOutlinedStateEnabl
        className={classes.button2}
        text={{
          
          labelText:(<Link to="/registro" className={classes.link}> 
          <div className={classes.labelText2}>Registro</div>
          </Link>
          ),
        }}
      />
    </div>
  );
});
