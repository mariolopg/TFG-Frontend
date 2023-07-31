import { IonAvatar, IonItem, IonLabel } from '@ionic/react';
import './comment.css'

interface CommentProps{
    img: string,
    alt: string,
    author: string,
    comment: string,
}

const Comment = (props: CommentProps) => {
    return (
        <IonItem lines='none' className='avatar-top'>
            <IonAvatar slot='start' >
                <img alt={props.alt} src={props.img} />
            </IonAvatar>
            <IonLabel className='ion-text-wrap'>
                <h2>{props.author}</h2>
                <p>{props.comment}</p>
            </IonLabel>
        </IonItem>
    );
};

export default Comment;