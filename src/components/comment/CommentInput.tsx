import React from 'react';
import { IonItem, IonTextarea } from '@ionic/react';
import './comment.css'

interface CommentInputProps {
    firstName: string,
    lastName: string,
    value: string,
    placeholder: string,
    onIonInput?: any
}

const CommentInput = (props: CommentInputProps) => {
    const initials = `${props.firstName[0]}${props.lastName[0]}`.toUpperCase();

    return (
        <>
            <IonItem lines='none' className='avatar-top'>
                <div className="initials-avatar">
                    {initials}
                </div>
                <IonTextarea fill='outline' shape='round' autoGrow={true} value={props.value} placeholder={props.placeholder} onIonInput={props.onIonInput} />
            </IonItem>
        </>
    );
};

export default React.memo(CommentInput);