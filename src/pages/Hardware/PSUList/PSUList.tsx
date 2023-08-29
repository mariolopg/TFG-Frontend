import React from 'react';
import { IonGrid } from '@ionic/react';
import usePSUList from './hooks/usePSUList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const PSUList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { psus, isSuccess } = usePSUList();

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
      id: 'form_factor',
      disablePadding: false,
      label: t('formFactor', { ns: 'components' }),
    },
    {
      id: 'watts',
      disablePadding: false,
      label: t('watts', { ns: 'components' }),
    },
    {
      id: 'efficiency',
      disablePadding: false,
      label: t('efficiency', { ns: 'components' }),
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('psus', { ns: 'components' })} />
      <ComponentsTable items={psus} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(PSUList);