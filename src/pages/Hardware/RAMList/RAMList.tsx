import React from 'react';
import { IonGrid } from '@ionic/react';
import useRAMList from './hooks/useRAMList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';

const RAMList: React.FC = () => {

  const { rams, isSuccess } = useRAMList();

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
      id: 'type',
      disablePadding: false,
      label: 'Tipo',
    },
    {
      id: 'size',
      disablePadding: false,
      label: 'Tamaño (GB)',
    },
    {
      id: 'mhz',
      disablePadding: false,
      label: 'Frecuencia (MHz)',
    },
    {
      id: 'units',
      disablePadding: false,
      label: 'Nº módulos',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Procesadores' />
      <ComponentsTable items={rams} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(RAMList);