import React from 'react';
import { IonGrid } from '@ionic/react';
import useGPUList from './hooks/useGPUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_GPU_PATH } from '../../../constants';

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

  return (
    <IonGrid fixed>
      <PageTitle center title='Tarjetas gráficas' />
      <ComponentsTable items={gpus} headCells={headCells} hrefBase={HARDWARE_GPU_PATH} />
    </IonGrid>
  )
};

export default React.memo(GPUList);