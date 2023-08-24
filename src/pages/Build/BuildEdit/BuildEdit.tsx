import React from 'react';
import { IonButton, IonButtons, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react';

import BuildForm from '../components/BuildForm';
import useBuildEdit from './hooks/useBuildEdit';
import { useHistory } from 'react-router';
import { BUILD_BASE_PATH } from '../../../constants';
import { saveOutline } from 'ionicons/icons';


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
    <>
      <IonGrid fixed>
        <IonToolbar>
          <h1>{build.name}</h1>
        </IonToolbar>
        <IonRow>
          <IonCol>
            <BuildForm build={buildUpdates} images={images} errors={errors ?? []} setBuild={setBuildUpdates} setImages={setImages} editable />
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton color={'primary'} onClick={handleSubmit}>
          <IonIcon icon={saveOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default React.memo(BuildEdit);
