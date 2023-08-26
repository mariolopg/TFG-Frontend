import React from 'react';
import { IonGrid } from '@ionic/react';
import useHDDList from './hooks/useHDDList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_HDD_PATH } from '../../../constants';

const HDDList: React.FC = () => {

  const { hdds, isSuccess } = useHDDList();

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
      id: 'size',
      disablePadding: false,
      label: 'Capacidad (TB)',
    },
    {
      id: 'rpm',
      disablePadding: false,
      label: 'Velocidad (rpm)',
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Discos duros' />
      <ComponentsTable items={hdds} headCells={headCells} hrefBase={HARDWARE_HDD_PATH} />
    </IonGrid>
  )
};

export default React.memo(HDDList);