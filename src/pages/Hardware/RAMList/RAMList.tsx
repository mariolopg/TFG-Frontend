import React from 'react';
import { IonGrid } from '@ionic/react';
import useRAMList from './hooks/useRAMList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const RAMList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { rams, isSuccess } = useRAMList();

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  const headCells = [
    {
      id: 'name',
      disablePadding: true,
      label: t('name', { ns: 'common' }),
    },
    {
      id: 'type',
      disablePadding: false,
      label: t('ramType', { ns: 'components' }),
    },
    {
      id: 'size',
      disablePadding: false,
      label: t('gbSize', { ns: 'components' }),
    },
    {
      id: 'mhz',
      disablePadding: false,
      label: t('frecuency', { ns: 'components' }),
    },
    {
      id: 'units',
      disablePadding: false,
      label: t('ramUnits', { ns: 'components' }),
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('ram', { ns: 'components' })} />
      <ComponentsTable items={rams} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(RAMList);