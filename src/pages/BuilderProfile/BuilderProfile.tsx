import React from 'react';
import { IonGrid } from '@ionic/react';
import useBuilderProfile from './hooks/useBuilderProfile';
import LoadingSpinner from '../../components/LoadingSpinner';
import Profile from '../../components/Profile/Profile';

const BuilderProfile: React.FC = () => {

  const { user, isSuccess } = useBuilderProfile()

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  return (
    <IonGrid fixed>
      <Profile user={user} />
    </IonGrid>
  );
};

export default React.memo(BuilderProfile);