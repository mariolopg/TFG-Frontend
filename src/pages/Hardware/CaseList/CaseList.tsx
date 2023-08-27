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
      label: 'Placa',
    },
    {
      id: 'psu_size',
      disablePadding: false,
      label: 'Fuente',
    },
    {
      id: 'gpu_length',
      disablePadding: false,
      label: 'L. gráfica (mm)',
    },
    {
      id: 'air_cooler_height',
      disablePadding: false,
      label: 'A. disipador (mm)',
    },
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
    },
    {
      id: '_120_radiator_support',
      disablePadding: false,
      label: 'Radiador 120mm',
    },
    {
      id: '_140_radiator_support',
      disablePadding: false,
      label: 'Radiador 140mm',
    },
    {
      id: '_240_radiator_support',
      disablePadding: false,
      label: 'Radiador 240mm',
    },
    {
      id: '_280_radiator_support',
      disablePadding: false,
      label: 'Radiador 280mm',
    },
    {
      id: '_360_radiator_support',
      disablePadding: false,
      label: 'Radiador 360mm',
    },
    {
      id: '_2_5_disk_slot',
      disablePadding: false,
      label: 'Bahías 2.5"',
    },
    {
      id: '_3_5_disk_slot',
      disablePadding: false,
      label: 'Bahías 3.5"',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Cajas' />
      <ComponentsTable items={cases} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(CaseList);