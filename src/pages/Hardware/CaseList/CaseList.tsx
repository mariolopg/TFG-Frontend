import React from 'react';
import { IonGrid } from '@ionic/react';
import useCaseList from './hooks/useCaseList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';

const CaseList: React.FC = () => {

  const { cases, isSuccess } = useCaseList();

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
      id: 'motherboard_size',
      disablePadding: false,
      label: 'Tamaño de placa',
    },
    {
      id: 'psu_size',
      disablePadding: false,
      label: 'Tamaño de fuente',
    }
  ];

  const aditionalInfo = [
    {
      id: 'width',
      disablePadding: true,
      label: 'Anchura (mm)',
    },
    {
      id: 'depth',
      disablePadding: false,
      label: 'Profundidad (mm)',
    },
    {
      id: 'height',
      disablePadding: false,
      label: 'Altura  (mm)',
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Cajas' />
      <ComponentsTable items={cases} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(CaseList);