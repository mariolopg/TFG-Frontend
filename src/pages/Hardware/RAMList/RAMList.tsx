import React from 'react';
import { IonGrid } from '@ionic/react';
import useRAMList from './hooks/useRAMList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_RAM_PATH } from '../../../constants';

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
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Procesadores' />
      <ComponentsTable items={rams} headCells={headCells} hrefBase={HARDWARE_RAM_PATH} />
    </IonGrid>
  )
};

export default React.memo(RAMList);