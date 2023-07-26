import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Build.css';
import { useGetBuildsQuery } from '../../features/api/apiSlice';


const Builds: React.FC = () => {
  const { data: builds } = useGetBuildsQuery(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Builds</IonTitle>
          <IonButtons slot='end'>
            <IonButton fill='outline' shape='round' color='primary' href='/build/new'>Nueva build</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
    </IonPage>
  );
};

export default Builds;

