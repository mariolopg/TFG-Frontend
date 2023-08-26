import React from 'react';
import { IonGrid, IonList } from '@ionic/react';
import ListItem from '../../components/ListItem/ListItem';
import { HARDWARE_AC_PATH, HARDWARE_CASE_PATH, HARDWARE_CPU_PATH, HARDWARE_GPU_PATH, HARDWARE_HDD_PATH, HARDWARE_LC_PATH, HARDWARE_MB_PATH, HARDWARE_PSU_PATH, HARDWARE_RAM_PATH, HARDWARE_SSD_PATH } from '../../constants';

const Hardware: React.FC = () => {
  return (
    <IonGrid fixed className='hardware-list-wrapper'>
      <IonList lines='none' class='hardware-list'>
        <ListItem text='Procesadores' href={HARDWARE_CPU_PATH} />
        <ListItem text='Placas base' href={HARDWARE_MB_PATH} />
        <ListItem text='Memorias RAM' href={HARDWARE_RAM_PATH} />
        <ListItem text='Refrigeraciones por aire' href={HARDWARE_AC_PATH} />
        <ListItem text='Refrigeraciones líquidas' href={HARDWARE_LC_PATH} />
        <ListItem text='Tarjetas gráficas' href={HARDWARE_GPU_PATH} />
        <ListItem text='Discos duros' href={HARDWARE_HDD_PATH} />
        <ListItem text='Unidades de estado sólido' href={HARDWARE_SSD_PATH} />
        <ListItem text='Fuentes de alimentación' href={HARDWARE_PSU_PATH} />
        <ListItem text='Cajas' href={HARDWARE_CASE_PATH} />
      </IonList>
    </IonGrid>
  );
};

export default React.memo(Hardware);