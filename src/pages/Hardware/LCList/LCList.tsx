import React from 'react';
import { IonGrid } from '@ionic/react';
import useLCList from './hooks/useLCList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const LCList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { liquidCoolers, isSuccess } = useLCList();

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
      id: 'radiator',
      disablePadding: false,
      label: t('radiatorSize', { ns: 'components' }),
    },
    {
      id: 'supported_sockets',
      type: "array",
      disablePadding: false,
      label: t('supportedSockets', { ns: 'components' }),
    },
  ];

  const aditionalInfo = [
    {
      id: '_80_mm_fans',
      disablePadding: true,
      label: t('fans80', { ns: 'components' }),
    },
    {
      id: '_92_mm_fans',
      disablePadding: true,
      label: t('fans92', { ns: 'components' }),
    },
    {
      id: '_120_mm_fans',
      disablePadding: true,
      label: t('fans120', { ns: 'components' }),
    },
    {
      id: '_140_mm_fans',
      disablePadding: true,
      label: t('fans140', { ns: 'components' }),
    },
    {
      id: '_200_mm_fans',
      disablePadding: true,
      label: t('fans200', { ns: 'components' }),
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('liquidCoolers', { ns: 'components' })} />
      <ComponentsTable items={liquidCoolers} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(LCList);