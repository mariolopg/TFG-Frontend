import React from 'react';
import { IonGrid } from '@ionic/react';
import useMBList from './hooks/useMBList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_MB_PATH } from '../../../constants';

const MBList: React.FC = () => {

  const { mbs, isSuccess } = useMBList();

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
      id: 'form_factor',
      disablePadding: false,
      label: 'Tamaño',
    },
    {
      id: 'socket',
      disablePadding: false,
      label: 'Socket',
    },
    {
      id: 'memory_type',
      disablePadding: false,
      label: 'RAM',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Placas Base' />
      <ComponentsTable items={mbs} headCells={headCells} hrefBase={HARDWARE_MB_PATH} />
    </IonGrid>
  )
};

export default React.memo(MBList);