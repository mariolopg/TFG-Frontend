import React from 'react';
import { IonGrid } from '@ionic/react';
import useHDDList from './hooks/useHDDList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const HDDList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { hdds, isSuccess } = useHDDList();

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
      label: t('tbSize', { ns: 'components' }),
    },
    {
      id: 'rpm',
      disablePadding: false,
      label: t('speed', { ns: 'components' }),
    },
    {
      id: 'form_factor',
      disablePadding: false,
      label: t('formFactor', { ns: 'components' }),
    }
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('hdds', { ns: 'components' })} />
      <ComponentsTable items={hdds} headCells={headCells} />
    </IonGrid>
  )
};

export default React.memo(HDDList);