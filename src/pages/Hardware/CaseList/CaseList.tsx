import React from 'react';
import { IonGrid } from '@ionic/react';
import useCaseList from './hooks/useCaseList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const CaseList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { cases, isSuccess } = useCaseList();

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
      id: 'motherboard_size',
      disablePadding: false,
      label: t('mb', { ns: 'components' }),
    },
    {
      id: 'psu_size',
      disablePadding: false,
      label: t('psu', { ns: 'components' }),
    },
    {
      id: 'gpu_length',
      disablePadding: false,
      label: t('gpuCaseSize', { ns: 'components' }),
    },
    {
      id: 'air_cooler_height',
      disablePadding: false,
      label: t('acCaseHeight', { ns: 'components' }),
    },
  ];

  const aditionalInfo = [
    {
      id: 'width',
      disablePadding: true,
      label: t('width', { ns: 'components' }),
    },
    {
      id: 'depth',
      disablePadding: false,
      label: t('depth', { ns: 'components' }),
    },
    {
      id: 'height',
      disablePadding: false,
      label: t('height', { ns: 'components' }),
    },
    {
      id: '_120_radiator_support',
      disablePadding: false,
      label: t('radiator120', { ns: 'components' }),
    },
    {
      id: '_140_radiator_support',
      disablePadding: false,
      label: t('radiator140', { ns: 'components' }),
    },
    {
      id: '_240_radiator_support',
      disablePadding: false,
      label: t('radiator240', { ns: 'components' }),
    },
    {
      id: '_280_radiator_support',
      disablePadding: false,
      label: t('radiator280', { ns: 'components' }),
    },
    {
      id: '_360_radiator_support',
      disablePadding: false,
      label: t('radiator360', { ns: 'components' }),
    },
    {
      id: '_2_5_disk_slot',
      disablePadding: false,
      label: t('25slots', { ns: 'components' }),
    },
    {
      id: '_3_5_disk_slot',
      disablePadding: false,
      label: t('35slots', { ns: 'components' }),
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