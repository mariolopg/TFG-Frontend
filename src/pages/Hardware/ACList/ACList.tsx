import React from 'react';
import { IonGrid } from '@ionic/react';
import useACList from './hooks/useACList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const ACList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { airCoolers, isSuccess } = useACList();

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
      id: 'height',
      disablePadding: false,
      label: t('height', { ns: 'components' }),
    },
    {
      id: 'supported_sockets',
      type: "array",
      disablePadding: false,
      label: t('supportedSockets', { ns: 'components' }),
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('acHeight', { ns: 'components' })} />
      <ComponentsTable items={airCoolers} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(ACList);