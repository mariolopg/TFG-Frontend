import React from 'react';
import { IonGrid } from '@ionic/react';
import useGPUList from './hooks/useGPUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const GPUList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { gpus, isSuccess } = useGPUList();

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
      id: 'series',
      disablePadding: false,
      label: t('series', { ns: 'components' }),
    },
    {
      id: 'vram',
      disablePadding: false,
      label: t('vram', { ns: 'components' }),
    },
  ];

  const aditionalInfo = [
    {
      id: 'tdp',
      disablePadding: true,
      label: t('tdp', { ns: 'components' }),
    },
    {
      id: 'length',
      disablePadding: true,
      label: t('length', { ns: 'components' }),
    },
    {
      id: '_8_pin_connectors',
      disablePadding: true,
      label: t('8PinConnectors', { ns: 'components' }),
    },
    {
      id: '_6_pin_connectors',
      disablePadding: true,
      label: t('6PinConnectors', { ns: 'components' }),
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('gpus', { ns: 'components' })} />
      <ComponentsTable items={gpus} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(GPUList);