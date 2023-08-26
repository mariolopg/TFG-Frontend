import React from 'react';
import { IonButton, IonGrid, IonItem, IonList, IonText } from '@ionic/react';

interface ListItemProps {
  text: string,
  href: string,
}

const ListItem = (props: ListItemProps) => {

  return (
    <IonItem lines='none'>
      <IonButton expand='block' fill='outline' href={props.href}><IonText color="dark">{props.text}</IonText></IonButton>
    </IonItem>
  );
};

export default React.memo(ListItem);