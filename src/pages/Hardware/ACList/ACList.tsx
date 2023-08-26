import React from 'react';
import { IonGrid } from '@ionic/react';
import useACList from './hooks/useACList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_AC_PATH } from '../../../constants';

const ACList: React.FC = () => {

  const { airCoolers, isSuccess } = useACList();

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  const headCells = [
    {
      id: 'name',
      disablePadding: true,
      label: 'Nombre',
    },
    {
      id: 'height',
      disablePadding: false,
      label: 'Altura (mm)',
    },
    {
      id: 'supported_sockets',
      type: "array",
      disablePadding: false,
      label: 'Sockets soportados',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Refrigeraciones por aire' />
      <ComponentsTable items={airCoolers} headCells={headCells} hrefBase={HARDWARE_AC_PATH} />
    </IonGrid>
  )
};

export default React.memo(ACList);