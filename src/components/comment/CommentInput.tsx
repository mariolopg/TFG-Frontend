import { IonAvatar, IonItem, IonLabel, IonTextarea } from '@ionic/react';
import './comment.css'

interface CommentInputProps{
    img: string,
    alt: string,
    value: string,
    placeholder: string,
    onIonInput?: any
}

const CommentInput = (props: CommentInputProps) => {
    return (
        <>
        <IonItem lines='none' className='avatar-top'>
            <IonAvatar slot='start'>
                <img alt={props.alt} src={props.img} />
            </IonAvatar>
            <IonTextarea fill='outline' shape='round' autoGrow={true} value={props.value} placeholder={props.placeholder} onIonInput={props.onIonInput} />
        </IonItem>
        </>
    );
};

export default CommentInput;