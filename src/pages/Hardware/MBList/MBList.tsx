import React from 'react';
import { IonGrid } from '@ionic/react';
import useMBList from './hooks/useMBList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PageTitle from '../../../components/PageTitle';
import ComponentsTable from '../../../components/ComponentsTable/ComponentsTable';
import { useTranslation } from 'react-i18next';

const MBList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { mbs, isSuccess } = useMBList();

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
      id: 'chipset',
      disablePadding: false,
      label: t('chipset', { ns: 'components' }),
    },
    {
      id: 'form_factor',
      disablePadding: false,
      label: t('formFactor', { ns: 'components' }),
    },
    {
      id: 'socket',
      disablePadding: false,
      label: t('socket', { ns: 'components' }),
    },
    {
      id: 'memory_type',
      disablePadding: false,
      label: t('ramType', { ns: 'components' }),
    },
  ];

  const aditionalInfo = [
    {
      id: 'ram_slots',
      disablePadding: true,
      label: t('ramSlots', { ns: 'components' }),
    },
    {
      id: 'ram_capacity',
      disablePadding: true,
      label: t('maxRam', { ns: 'components' }),
    },
    {
      id: 'm2_3_slots',
      disablePadding: true,
      label: t('m2v3Slots', { ns: 'components' }),
    },
    {
      id: 'm2_4_slots',
      disablePadding: true,
      label: t('m2v4Slots', { ns: 'components' }),
    },
    {
      id: 'sata_slots',
      disablePadding: true,
      label: t('sataPorts', { ns: 'components' }),
    },
  ];

  return (
    <IonGrid fixed>
      <PageTitle center title={t('mbs', { ns: 'components' })} />
      <ComponentsTable items={mbs} headCells={headCells} aditionalInfo={aditionalInfo} />
    </IonGrid>
  )
};

export default React.memo(MBList);