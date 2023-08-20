import React from 'react';
import { IonButton, IonGrid, IonText } from '@ionic/react';
import PageTitle from '../../../components/PageTitle';
import InputForm from '../../../components/Inputs/InputForm';

import '../auth.css'
import useLogin from './hooks/useLogin';
import { REGISTER_PATH } from '../../../constants';

const Login: React.FC = () => {

  const { user, errors, setValue, handleSubmitLogin } = useLogin();

  return (
    <IonGrid fixed>
      <PageTitle title="Iniciar sesión" center />
      <InputForm label="Nombre de usuario" value={user.username} onIonInput={(e: any) => { setValue('username', e) }} errors={errors?.username} />
      <InputForm label="Contraseña" type="password" value={user.password} onIonInput={(e: any) => { setValue('password', e) }} errors={[errors?.password, errors?.non_field_errors]} />
      <div className='center-content'>
        <IonButton onClick={handleSubmitLogin}>Iniciar sesión</IonButton>
      </div>

      <div className='center-content'>
        <IonText>¿No tienes cuenta? <a href={REGISTER_PATH}>Regístrate</a></IonText>
      </div>
    </IonGrid>
  );
};

export default React.memo(Login);