import React from 'react';
import { IonButton, IonButtons, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/react';
import BuildForm from '../components/BuildForm';
import PageTitle from '../../../components/PageTitle';
import useConfigurator from './hooks/useConfigurator';
import { saveOutline } from 'ionicons/icons';

const Configutator: React.FC = () => {

  const { build, errors, images, handleSubmit, setBuild, setImages } = useConfigurator()

  return (
    <>
      <IonGrid fixed>
        <IonToolbar>
          <PageTitle title='Nueva Build' />
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
