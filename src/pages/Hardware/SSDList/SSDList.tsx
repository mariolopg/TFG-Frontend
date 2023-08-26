import React from 'react';
import { IonGrid } from '@ionic/react';
import useSSDList from './hooks/useSSDList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_SSD_PATH } from '../../../constants';

const PSUList: React.FC = () => {

  const { ssds, isSuccess } = useSSDList();

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
      label: 'Capacidad (GB)',
    },
    {
      id: 'form_factor',
      disablePadding: false,
      label: 'Factor de forma',
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Unidades de estado sólido' />
      <ComponentsTable items={ssds} headCells={headCells} hrefBase={HARDWARE_SSD_PATH} />
    </IonGrid>
  )
};

export default React.memo(PSUList);