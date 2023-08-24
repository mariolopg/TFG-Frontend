import React from 'react';
import { IonGrid } from '@ionic/react';
import LoadingSpinner from '../../../components/LoadingSpinner';
import useBuildList from './hooks/useBuildList';
import BuildListComponent from '../../../components/BuildList/BuildListComponent';


const BuildList: React.FC = () => {

  const { builds, isSuccess } = useBuildList()

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  return (
    <IonGrid fixed>
      <BuildListComponent builds={builds} />
    </IonGrid>
  );
};

export default React.memo(BuildList);

