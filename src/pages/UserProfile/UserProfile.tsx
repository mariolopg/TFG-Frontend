import React from 'react';
import { IonButton, IonGrid } from '@ionic/react';
import DeleteModal from '../../components/DeleteModal';
import useUserProfile from './hooks/useUserProfile';


const UserProfile: React.FC = () => {

  const { modal, handleDelete } = useUserProfile()

  return (
    <>
      <IonGrid fixed>
        <IonButton color="danger" id='open-delete-modal'>Eliminar cuenta</IonButton>
      </IonGrid>
      <DeleteModal reference={modal} trigger='open-delete-modal' message='¿Quieres eliminar tu cuenta?' additionalMessage='Esta acción es irreversible' onClick={handleDelete} />
    </>
  );
};

export default React.memo(UserProfile);