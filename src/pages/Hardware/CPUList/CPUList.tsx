import React from 'react';
import { IonGrid } from '@ionic/react';
import useCPUList from './hooks/useCPUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const CPUList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { cpus, isSuccess } = useCPUList();

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
      id: 'socket',
      disablePadding: false,
      label: t('socket', { ns: 'components' }),
    },
    {
      id: 'cores',
      disablePadding: false,
      label: t('cores', { ns: 'components' }),
    },
    {
      id: 'threads',
      disablePadding: false,
      label: t('threads', { ns: 'components' }),
    },
    {
      id: 'integrated_graphics',
      disablePadding: false,
      label: t('integratedGraphics', { ns: 'components' }),
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('cpus', { ns: 'components' })} />
      <ComponentsTable items={cpus} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(CPUList);