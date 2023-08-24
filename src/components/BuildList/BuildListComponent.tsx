import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import useBuildList from './hooks/useBuildListComponent';
import { BUILD_BASE_PATH } from '../../constants';


interface BuildListComponentProps {
  builds: any[],
}

const BuildListComponent = (props: BuildListComponentProps) => {

  const { getImageURL } = useBuildList()

  return (
    <IonRow>
      {props.builds?.map((build: any) => (
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
  );
};

export default React.memo(BuildListComponent);