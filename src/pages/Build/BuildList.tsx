import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import { useGetBuildsQuery } from '../../features/api/apiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';


const Builds: React.FC = () => {
  const { data: builds, isSuccess } = useGetBuildsQuery(null);

  if (!isSuccess) return <LoadingSpinner />

  return (
    <IonContent>
      <IonGrid fixed>
        <IonRow >
          {builds?.map((build: any) => (
            <IonCol sizeXs='6' sizeMd='3'>
              <IonCard href={`/build/${build.id}`} button>
                <img alt={build.name} src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                  <IonCardSubtitle>Autor</IonCardSubtitle>
                  <IonCardTitle>{build.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{build.description}</IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default React.memo(Builds);

