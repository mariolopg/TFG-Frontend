import React from 'react';
import { IonButton, IonGrid, IonRouterLink, IonText } from '@ionic/react';
import PageTitle from '../../../components/PageTitle';
import InputForm from '../../../components/Inputs/InputForm';
import '../auth.css'
import useLogin from './hooks/useRegister';
import { LOGIN_PATH } from '../../../constants';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { useTranslation } from 'react-i18next';

const Register: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, errors, isLogged, setValue, handleSubmitRegister } = useLogin();

  if (isLogged) {
    return <LoadingSpinner />
  }

  return (
    <IonGrid fixed>
      <PageTitle title={t('register', { ns: 'auth' })} center />
      <InputForm label={t('username', { ns: 'auth' })} value={user.username} onIonInput={(e: any) => { setValue('username', e) }} errors={errors?.username} />
      <InputForm label={t('email', { ns: 'auth' })} type="email" value={user.email} onIonInput={(e: any) => { setValue('email', e) }} errors={errors?.email} />
      <InputForm label={t('firstName', { ns: 'auth' })} value={user.first_name} onIonInput={(e: any) => { setValue('first_name', e) }} errors={errors?.first_name} />
      <InputForm label={t('lastName', { ns: 'auth' })} value={user.last_name} onIonInput={(e: any) => { setValue('last_name', e) }} errors={errors?.last_name} />
      <InputForm label={t('password', { ns: 'auth' })} type="password" value={user.password1} onIonInput={(e: any) => { setValue('password1', e) }} errors={errors?.password1} />
      <InputForm label={t('passwordConfirmation', { ns: 'auth' })} value={user.password2} type="password" onIonInput={(e: any) => { setValue('password2', e) }} errors={errors?.password2} />
      <div className='center-content'>
        <IonButton onClick={handleSubmitRegister}>{t('register', { ns: 'auth' })}</IonButton>
      </div>
      <div className='center-content'>
        <IonText>{t('alreadyUser', { ns: 'auth' })} <IonRouterLink color="primary" href={LOGIN_PATH} >{t('login', { ns: 'auth' })}</IonRouterLink></IonText>
      </div>
    </IonGrid>
  )
};

export default React.memo(Register);