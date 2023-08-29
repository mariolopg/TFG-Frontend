import React from 'react';
import { IonGrid } from '@ionic/react';
import useSSDList from './hooks/useSSDList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const SSDList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ssds, isSuccess } = useSSDList();

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
      id: 'size',
      disablePadding: false,
      label: t('gbSize', { ns: 'components' }),
    },
    {
      id: 'form_factor',
      disablePadding: false,
      label: t('formFactor', { ns: 'components' }),
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('ssds', { ns: 'components' })} />
      <ComponentsTable items={ssds} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(SSDList);