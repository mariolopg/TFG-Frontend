import React from 'react';
import { IonGrid } from '@ionic/react';
import useLCList from './hooks/useLCList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_LC_PATH } from '../../../constants';

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

  return (
    <IonGrid fixed>
      <PageTitle center title='Refrigeraciones líquidas' />
      <ComponentsTable items={liquidCoolers} headCells={headCells} hrefBase={HARDWARE_LC_PATH} />
    </IonGrid>
  )
};

export default React.memo(LCList);