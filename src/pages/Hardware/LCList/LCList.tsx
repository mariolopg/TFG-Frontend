import React from 'react';
import { IonGrid } from '@ionic/react';
import useLCList from './hooks/useLCList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';

const LCList: React.FC = () => {

  const { liquidCoolers, isSuccess } = useLCList();

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
      id: 'radiator',
      disablePadding: false,
      label: 'Radiador (mm)',
    },
    {
      id: 'supported_sockets',
      type: "array",
      disablePadding: false,
      label: 'Sockets soportados',
    },
  ];

  const aditionalInfo = [
    {
      id: '_80_mm_fans',
      disablePadding: true,
      label: 'Ventiladores de 80mm',
    },
    {
      id: '_92_mm_fans',
      disablePadding: true,
      label: 'Ventiladores de 92mm',
    },
    {
      id: '_120_mm_fans',
      disablePadding: true,
      label: 'Ventiladores de 120mm',
    },
    {
      id: '_140_mm_fans',
      disablePadding: true,
      label: 'Ventiladores de 140mm',
    },
    {
      id: '_200_mm_fans',
      disablePadding: true,
      label: 'Ventiladores de 200mm',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Refrigeraciones líquidas' />
      <ComponentsTable items={liquidCoolers} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(LCList);