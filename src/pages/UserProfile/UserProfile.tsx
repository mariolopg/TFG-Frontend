import React from 'react';
import { IonFab, IonFabButton, IonGrid, IonIcon, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import DeleteModal from '../../components/DeleteModal';
import useUserProfile from './hooks/useUserProfile';
import LoadingSpinner from '../../components/LoadingSpinner';
import BuildListComponent from '../../components/BuildList/BuildListComponent';
import { trash } from 'ionicons/icons';


const UserProfile: React.FC = () => {

  const { user, initials, dateJoined, isSuccess, modal, handleDelete } = useUserProfile()

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  return (
    <>
      <IonGrid fixed>
        <IonItem lines='none' className='avatar'>
          <div className="initials-avatar">
            {initials}
          </div>
          <IonLabel className='ion-text-wrap'>
            <h2>{user.username}</h2>
            <p>{user.first_name} {user.last_name}</p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <p>Miembro desde: {dateJoined}</p>
          </IonLabel>
        </IonItem>

        <IonTitle>Mis Builds</IonTitle>
        <BuildListComponent builds={user.builds} />
      </IonGrid>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton color={'danger'} id='open-delete-modal'>
          <IonIcon icon={trash}></IonIcon>
        </IonFabButton>
      </IonFab>
      <DeleteModal reference={modal} trigger='open-delete-modal' message='¿Quieres eliminar tu cuenta?' additionalMessage='Esta acción es irreversible' onClick={handleDelete} />
    </>
  );
};

export default React.memo(UserProfile);