import React from 'react';
import { IonGrid, IonList } from '@ionic/react';
import ListItem from '../../components/ListItem/ListItem';
import { HARDWARE_AC_PATH, HARDWARE_CASE_PATH, HARDWARE_CPU_PATH, HARDWARE_GPU_PATH, HARDWARE_HDD_PATH, HARDWARE_LC_PATH, HARDWARE_MB_PATH, HARDWARE_PSU_PATH, HARDWARE_RAM_PATH, HARDWARE_SSD_PATH } from '../../constants';
import { useTranslation } from 'react-i18next';

const Hardware: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <IonGrid fixed className='hardware-list-wrapper'>
      <IonList lines='none' class='hardware-list'>
        <ListItem text={t('cpus', { ns: 'components' })} href={HARDWARE_CPU_PATH} />
        <ListItem text={t('mbs', { ns: 'components' })} href={HARDWARE_MB_PATH} />
        <ListItem text={t('ram', { ns: 'components' })} href={HARDWARE_RAM_PATH} />
        <ListItem text={t('airCoolers', { ns: 'components' })} href={HARDWARE_AC_PATH} />
        <ListItem text={t('liquidCoolers', { ns: 'components' })} href={HARDWARE_LC_PATH} />
        <ListItem text={t('gpus', { ns: 'components' })} href={HARDWARE_GPU_PATH} />
        <ListItem text={t('hdds', { ns: 'components' })} href={HARDWARE_HDD_PATH} />
        <ListItem text={t('ssds', { ns: 'components' })} href={HARDWARE_SSD_PATH} />
        <ListItem text={t('psus', { ns: 'components' })} href={HARDWARE_PSU_PATH} />
        <ListItem text={t('cases', { ns: 'components' })} href={HARDWARE_CASE_PATH} />
      </IonList>
    </IonGrid>
  );
};

export default React.memo(Hardware);