import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol } from '@ionic/react';

interface ComponentCardProps{
    title: string,
    subtitle: string,
}

const ComponentCard = (props: ComponentCardProps) => {
  return (
    <IonCol sizeXs='6' sizeMd='3'>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  </IonCol>
  );
};

export default ComponentCard;