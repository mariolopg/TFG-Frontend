import React from 'react';
import { IonGrid } from '@ionic/react';
import useCaseList from './hooks/useCaseList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { HARDWARE_CASE_PATH } from '../../../constants';

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

  return (
    <IonGrid fixed>
      <PageTitle center title='Cajas' />
      <ComponentsTable items={cases} headCells={headCells} hrefBase={HARDWARE_CASE_PATH} />
    </IonGrid>
  )
};

export default React.memo(CaseList);