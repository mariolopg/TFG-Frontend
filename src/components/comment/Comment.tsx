import React from 'react';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import './comment.css'

interface CommentProps {
    author: string,
    firstName: string,
    lastName: string,
    comment: string,
}

const Comment = (props: CommentProps) => {
    const initials = `${props.firstName[0]}${props.lastName[0]}`.toUpperCase();

    return (
        <IonItem lines='none' className='avatar-top'>
            <div className="initials-avatar">
                {initials}
            </div>
            <IonLabel className='ion-text-wrap'>
                <h2>{props.author}</h2>
                <p>{props.comment}</p>
            </IonLabel>
        </IonItem>
    );
};

export default React.memo(Comment);