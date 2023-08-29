import React from 'react';
import { IonButtons, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react';
import BuildForm from '../components/BuildForm';
import PageTitle from '../../../components/PageTitle';
import useConfigurator from './hooks/useConfigurator';
import { saveOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

const Configutator: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { build, errors, images, handleSubmit, setBuild, setImages } = useConfigurator()

  return (
    <>
      <IonGrid fixed>
        <IonToolbar>
          <PageTitle title={t('newBuild', { ns: 'configurator' })} />
          <IonButtons slot='end'>
          </IonButtons>
        </IonToolbar>
        <IonRow>
          <IonCol>
            <BuildForm build={build} setBuild={setBuild} errors={errors ?? []} images={images} setImages={setImages} />
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

export default React.memo(Configutator);
