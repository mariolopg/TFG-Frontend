import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonLoading, IonRow } from '@ionic/react';
import { useGetBuildsQuery } from '../../features/api/apiSlice';


const Builds: React.FC = () => {
  const { data: builds, isSuccess } = useGetBuildsQuery(null);

  return (
    <IonContent fullscreen>
      {
        isSuccess ?
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
          :
          <IonLoading message="Cargando..." radioGroup='20' spinner="bubbles" isOpen={true} />
      }
    </IonContent>
  );
};

export default Builds;

