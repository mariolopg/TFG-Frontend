import React from 'react';
import { IonGrid } from '@ionic/react';
import usePSUList from './hooks/usePSUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';

const PSUList: React.FC = () => {

  const { psus, isSuccess } = usePSUList();

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
      label: 'Factor de forma',
    },
    {
      id: 'watts',
      disablePadding: false,
      label: 'Voltios (W)',
    },
    {
      id: 'efficiency_id',
      disablePadding: false,
      label: 'Eficiencia',
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Fuentes de alimentación' />
      <ComponentsTable items={psus} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(PSUList);