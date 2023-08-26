import React from 'react';
import { IonGrid } from '@ionic/react';
import useCPUList from './hooks/useCPUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_CPU_PATH } from '../../../constants';

const CPUList: React.FC = () => {

  const { cpus, isSuccess } = useCPUList();

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
      id: 'socket',
      disablePadding: false,
      label: 'Socket',
    },
    {
      id: 'cores',
      disablePadding: false,
      label: 'Núcleos',
    },
    {
      id: 'threads',
      disablePadding: false,
      label: 'Hebras',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Procesadores' />
      <ComponentsTable items={cpus} headCells={headCells} hrefBase={HARDWARE_CPU_PATH} />
    </IonGrid>
  )
};

export default React.memo(CPUList);