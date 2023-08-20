import React from 'react';
import { IonButton, IonButtons, IonCol, IonGrid, IonRow, IonToolbar } from '@ionic/react';
import BuildForm from '../components/BuildForm';
import PageTitle from '../../../components/PageTitle';
import useConfigurator from './hooks/useConfigurator';

const Configutator: React.FC = () => {

  const { build, errors, images, handleSubmit, setBuild, setImages } = useConfigurator()

  return (
    <IonGrid fixed>
      <IonToolbar>
        <PageTitle title='Nueva Build' />
        <IonButtons slot='end'>
          <IonButton shape='round' fill='outline' onClick={handleSubmit} color='primary'>
            Guardar
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonRow>
        <IonCol>
          <BuildForm build={build} setBuild={setBuild} errors={errors ?? []} images={images} setImages={setImages} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default React.memo(Configutator);
