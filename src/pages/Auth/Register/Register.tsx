import React from 'react';
import { IonButton, IonGrid, IonRouterLink, IonText } from '@ionic/react';
import PageTitle from '../../../components/PageTitle';
import InputForm from '../../../components/Inputs/InputForm';
import '../auth.css'
import useLogin from './hooks/useRegister';
import { LOGIN_PATH } from '../../../constants';
import LoadingSpinner from '../../../components/LoadingSpinner';

const Register: React.FC = () => {

  const { user, errors, isLogged, setValue, handleSubmitRegister } = useLogin();

  if (isLogged) {
    return <LoadingSpinner />
  }

  return (
    <IonGrid fixed>
      <PageTitle title="Crear cuenta" center />
      <InputForm label="Nombre de usuario" value={user.username} onIonInput={(e: any) => { setValue('username', e) }} errors={errors?.username} />
      <InputForm label="Correo electrónico" type="email" value={user.email} onIonInput={(e: any) => { setValue('email', e) }} errors={errors?.email} />
      <InputForm label="Nombre" value={user.first_name} onIonInput={(e: any) => { setValue('first_name', e) }} errors={errors?.first_name} />
      <InputForm label="Apellidos" value={user.last_name} onIonInput={(e: any) => { setValue('last_name', e) }} errors={errors?.last_name} />
      <InputForm label="Contraseña" type="password" value={user.password1} onIonInput={(e: any) => { setValue('password1', e) }} errors={errors?.password1} />
      <InputForm label="Confirmar contraseña" value={user.password2} type="password" onIonInput={(e: any) => { setValue('password2', e) }} errors={errors?.password2} />
      <div className='center-content'>
        <IonButton onClick={handleSubmitRegister}>Crear cuenta</IonButton>
      </div>
      <div className='center-content'>
        <IonText>¿Ya tienes cuenta? <IonRouterLink color="primary" href={LOGIN_PATH} >Iniciar sesión</IonRouterLink></IonText>
      </div>
    </IonGrid>
  )
};

export default React.memo(Register);