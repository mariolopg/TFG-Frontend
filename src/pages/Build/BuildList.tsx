import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import { useGetBuildsQuery } from '../../features/api/apiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';


const Builds: React.FC = () => {
  const { data: builds, isSuccess } = useGetBuildsQuery(null);

  if (!isSuccess) return <LoadingSpinner />

  function getImageURL(build: any) {
    if (build.images.length == 0) return "https://ionicframework.com/docs/img/demos/card-media.png"
    return build.images[0].image
  }

  return (
    <IonContent>
      <IonGrid fixed>
        <IonRow>
          {builds?.map((build: any) => (
            <IonCol sizeXs='6' sizeMd='3' key={build.id}>
              <IonCard href={`/build/${build.id}`} button>
                <img alt={build.name} src={getImageURL(build)} className='card-img' />
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

