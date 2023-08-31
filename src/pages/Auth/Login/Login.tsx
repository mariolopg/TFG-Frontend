import React from 'react';
import { IonButton, IonGrid, IonRouterLink, IonText } from '@ionic/react';
import PageTitle from '../../../components/PageTitle';
import InputForm from '../../../components/Inputs/InputForm';
import '../auth.css'
import useLogin from './hooks/useLogin';
import { REGISTER_PATH } from '../../../constants';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, errors, isLogged, setValue, handleSubmitLogin } = useLogin();

  if (isLogged) {
    return <LoadingSpinner />
  }

  return (
    <IonGrid fixed>
      <PageTitle title={t('login', { ns: 'auth' })} center />
      <InputForm label={t('username', { ns: 'auth' })} value={user.username} onIonInput={(e: any) => { setValue('username', e) }} errors={errors?.username} />
      <InputForm label={t('password', { ns: 'auth' })} type="password" value={user.password} onIonInput={(e: any) => { setValue('password', e) }} errors={errors?.password} />
      <div className='center-content'>
        <IonButton onClick={handleSubmitLogin}>{t('login', { ns: 'auth' })}</IonButton>
      </div>

      <div className='center-content'>
        <IonText>{t('notUser', { ns: 'auth' })} <IonRouterLink color="primary" href={REGISTER_PATH} >{t('register', { ns: 'auth' })}</IonRouterLink></IonText>
      </div>
    </IonGrid>
  );
};

export default React.memo(Login);