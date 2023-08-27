import React from 'react';
import { IonGrid } from '@ionic/react';
import useMBList from './hooks/useMBList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';

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
      id: 'chipset',
      disablePadding: false,
      label: 'Chipset',
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

  const aditionalInfo = [
    {
      id: 'ram_slots',
      disablePadding: true,
      label: 'Nº ranuras RAM',
    },
    {
      id: 'ram_capacity',
      disablePadding: true,
      label: 'RAM soportada',
    },
    {
      id: 'm2_3_slots',
      disablePadding: true,
      label: 'Puertos M.2 3.0',
    },
    {
      id: 'm2_4_slots',
      disablePadding: true,
      label: 'Puertos M.2 4.0',
    },
    {
      id: 'sata_slots',
      disablePadding: true,
      label: 'Puertos SATA',
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title='Placas Base' />
      <ComponentsTable items={mbs} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(MBList);