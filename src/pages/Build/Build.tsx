import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import './Build.css';
import { useCreateCommentMutation, useDeleteBuildMutation, useGetBuildQuery } from '../../features/api/apiSlice';
import { useParams } from 'react-router';
import Comment from '../../components/comment/Comment';
import IonSubtitle from '../../components/inputs/IonSubtitle';
import { add, create, options, trash } from 'ionicons/icons';
import CommentInput from '../../components/comment/CommentInput';
import { useState } from 'react';
import { CommentErrorsInterface, CommentInterface } from '../../features/types';
import InputErrorMsg from '../../components/inputs/InputErrorMsg';
import BuildComponents from './components/BuildComponents';


const Build: React.FC = () => {
  type params = { id: string }

  const { id } = useParams<params>()
  const { data: build } = useGetBuildQuery(id);
  const [deleteBuild, response_delete] = useDeleteBuildMutation();
  const [postComment, response_comment] = useCreateCommentMutation();

  const [comments, setComments] = useState<JSX.Element[]>([])
  const [commentInput, setCommentInput] = useState<CommentInterface>({
    build: id,
    comment: ""
  })
  const [errors, setErrors] = useState<CommentErrorsInterface | undefined>(undefined);

  function handleSubmitComment(event: any) {
    postComment(commentInput).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data)
      }
      else{
        const newComment = <Comment img='https://ionicframework.com/docs/img/demos/avatar.svg' alt='Avatar de autor' author='Nombre del autor' comment={commentInput.comment} />
        setComments([...comments, newComment])
        setCommentInput({...commentInput, comment: ""})
      }
    })
  }

  function handleDelete() {
    deleteBuild(id)
  }

  if(response_delete.isSuccess) {
    window.location.replace('/build')
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {
          build ?
            <>
              <IonGrid fixed>
                <IonTitle><h1>{build.name}</h1></IonTitle>
                <IonTitle>Descripción</IonTitle>
                <IonSubtitle text={build.description} />
                <IonTitle>Componentes</IonTitle>
                <IonRow>
                  <BuildComponents build={build} />
                </IonRow>
                <IonTitle>Comentarios</IonTitle>
                <CommentInput img='https://ionicframework.com/docs/img/demos/avatar.svg' alt='Avatar de autor' placeholder='Añade un comentario...' value={commentInput.comment} onIonInput={(e: any) => { setCommentInput({ ...commentInput, comment: e.target.value as string }) }} />
                <IonItem lines='none'>
                  <IonLabel slot='end'>
                    <InputErrorMsg errors={errors?.comment!} />
                  </IonLabel>
                  <IonButtons slot='end'>
                    <IonButton size='default' fill='outline' shape='round' color='primary' disabled={!!!commentInput.comment} onClick={handleSubmitComment}>Comentar</IonButton>
                  </IonButtons>
                </IonItem>
                {comments.slice().reverse()}
                {build.comments.slice().reverse().map((comment: any) => (
                  <Comment img='https://ionicframework.com/docs/img/demos/avatar.svg' alt='Avatar de autor' author='Nombre del autor' comment={comment.comment} />
                ))}
              </IonGrid>
            </>
            : null
        }
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton color='medium' >
            <IonIcon icon={options}></IonIcon>
          </IonFabButton>
          <IonFabList side='top'>
            <IonFabButton color='primary' href='/build/new'>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
            {
              build ?
                <>
                  <IonFabButton color='medium'>
                    <IonIcon icon={create}></IonIcon>
                  </IonFabButton>
                  <IonFabButton color={'danger'} onClick={handleDelete}>
                    <IonIcon icon={trash}></IonIcon>
                  </IonFabButton>
                </>
                :
                null
            }
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Build;

