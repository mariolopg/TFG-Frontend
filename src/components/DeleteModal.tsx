import React from 'react';
import { IonButton, IonButtons, IonCol, IonModal, IonTitle } from "@ionic/react";
import IonSubtitle from './Inputs/IonSubtitle';
import { useTranslation } from 'react-i18next';


interface DeleteModalProps {
  reference: any,
  trigger: string,
  message: string,
  additionalMessage?: string,
  onClick: any
}

const DeleteModal = (props: DeleteModalProps) => {
  const { t, i18n } = useTranslation();

  return (
    <IonModal ref={props.reference} keepContentsMounted={true} trigger={props.trigger}>
      <IonTitle>{props.message}</IonTitle>
      <IonSubtitle text={props.additionalMessage ?? ""} />
      <IonButtons>
        <IonCol>
          <IonButton onClick={() => props.reference.current?.dismiss()} color='medium' shape='round' fill='outline' expand='block' >{t('cancel', { ns: 'modal' })}</IonButton>
        </IonCol>
        <IonCol>
          <IonButton onClick={props.onClick} color='danger' shape='round' fill='outline' expand="full">{t('delete', { ns: 'modal' })}</IonButton>
        </IonCol>
      </IonButtons>
    </IonModal>
  );
};

export default React.memo(DeleteModal);