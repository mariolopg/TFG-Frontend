import React from 'react';
import { IonGrid } from '@ionic/react';
import useGPUList from './hooks/useGPUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';

const GPUList: React.FC = () => {

  const { gpus, isSuccess } = useGPUList();

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
      id: 'series',
      disablePadding: false,
      label: 'Serie',
    },
    {
      id: 'vram',
      disablePadding: false,
      label: 'VRAM (GB)',
    },
  ];

  const aditionalInfo = [
    {
      id: 'tdp',
      disablePadding: true,
      label: 'TDP (W)',
    },
    {
      id: 'length',
      disablePadding: true,
      label: 'Longitud (mm)',
    },
    {
      id: '_8_pin_connectors',
      disablePadding: true,
      label: 'Conectores 8 pines',
    },
    {
      id: '_6_pin_connectors',
      disablePadding: true,
      label: 'Conectores 6 pines',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Tarjetas gráficas' />
      <ComponentsTable items={gpus} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(GPUList);