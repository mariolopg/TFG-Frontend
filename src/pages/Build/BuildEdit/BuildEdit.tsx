import React from 'react';
import { IonButton, IonButtons, IonCol, IonGrid, IonRow, IonToolbar } from '@ionic/react';

import BuildForm from '../components/BuildForm';
import useBuildEdit from './hooks/useBuildEdit';
import { useHistory } from 'react-router';
import { BUILD_BASE_PATH } from '../../../constants';


const BuildEdit: React.FC = () => {

  const history = useHistory();
  const { isAdmin, builderId, build, buildUpdates, images, errors, setBuildUpdates, setImages, handleSubmit, isSuccess } = useBuildEdit();

  if (!isSuccess) {
    return null
  }

  const isOwner = build.builder == builderId;
  if (!isOwner && !isAdmin) {
    history.push(`${BUILD_BASE_PATH}/${build.id}`);
    location.reload();
  }

  return (
    <IonGrid fixed>
      <IonToolbar>
        <h1>{build.name}</h1>
        <IonButtons slot='end'>
          <IonButton shape='round' fill='outline' onClick={handleSubmit} color='primary'>
            Guardar cambios
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonRow>
        <IonCol>
          <BuildForm build={buildUpdates} images={images} errors={errors ?? []} setBuild={setBuildUpdates} setImages={setImages} editable />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default React.memo(BuildEdit);
