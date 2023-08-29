import React from 'react';
import { IonFab, IonFabButton, IonGrid, IonIcon } from '@ionic/react';
import DeleteModal from '../../components/DeleteModal';
import useUserProfile from './hooks/useUserProfile';
import LoadingSpinner from '../../components/LoadingSpinner';
import { trash } from 'ionicons/icons';
import Profile from '../../components/Profile/Profile';
import { useTranslation } from 'react-i18next';

const UserProfile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, isSuccess, modal, handleDelete } = useUserProfile()

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  return (
    <>
      <IonGrid fixed>
        <Profile user={user} />
      </IonGrid>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton color={'danger'} id='open-delete-modal'>
          <IonIcon icon={trash}></IonIcon>
        </IonFabButton>
      </IonFab>
      <DeleteModal reference={modal} trigger='open-delete-modal' message={t('deleteAccount', { ns: 'modal' })} additionalMessage={t('deleteAccountMsg', { ns: 'modal' })} onClick={handleDelete} />
    </>
  );
};

export default React.memo(UserProfile);