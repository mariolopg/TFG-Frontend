import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import LoadingSpinner from '../../../components/LoadingSpinner';
import useBuildList from './hooks/useBuildList';
import { BUILD_BASE_PATH } from '../../../constants';


const BuildList: React.FC = () => {

  const { builds, isSuccess, getImageURL } = useBuildList()

  if (!isSuccess) return <LoadingSpinner />

  return (
    <IonGrid fixed>
      <IonRow>
        {builds?.map((build: any) => (
          <IonCol sizeXs='6' sizeMd='3' key={build.id}>
            <IonCard href={`${BUILD_BASE_PATH}/${build.id}`} button>
              <img alt={build.name} src={getImageURL(build)} className='card-img' />
              <IonCardHeader>
                <IonCardSubtitle>{build.builder_data.username}</IonCardSubtitle>
                <IonCardTitle>{build.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{build.description}</IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default React.memo(BuildList);

