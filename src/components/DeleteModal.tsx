import { IonButton, IonButtons, IonCol, IonFooter, IonGrid, IonItem, IonModal, IonTitle, IonToolbar } from "@ionic/react";

interface DeleteModalProps{
    reference: any,
    trigger: string,
    message: string,
    onClick: any
}

const DeleteModal = (props: DeleteModalProps) => {
    return (
        <IonModal ref={props.reference} keepContentsMounted={true} trigger={props.trigger}>
            <IonTitle>{props.message}</IonTitle>
            <IonButtons>
                <IonCol>
                    <IonButton onClick={() => props.reference.current?.dismiss()} color='medium' shape='round' fill='outline' expand='block' >Cancelar</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.onClick} color='danger' shape='round' fill='outline' expand="full">Eliminar</IonButton>
                </IonCol>
            </IonButtons>
        </IonModal>
    );
};

export default DeleteModal;