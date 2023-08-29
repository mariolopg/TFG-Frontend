import React from 'react';
import { IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react';

import BuildForm from '../components/BuildForm';
import useBuildEdit from './hooks/useBuildEdit';
import { useHistory } from 'react-router';
import { BUILD_BASE_PATH } from '../../../constants';
import { saveOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';


const BuildEdit: React.FC = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
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
          <h1>{t('editBuild', { ns: 'configurator' })}</h1>
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
