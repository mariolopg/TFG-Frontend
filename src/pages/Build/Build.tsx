import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Build.css';
import { useCreateCommentMutation, useDeleteBuildMutation, useGetBuildQuery } from '../../features/api/apiSlice';
import { useParams } from 'react-router';
import ComponentCard from './components/ComponentCard';
import Comment from '../../components/comment/Comment';
import IonSubtitle from '../../components/inputs/IonSubtitle';
import { add, create, options, trash } from 'ionicons/icons';
import CommentInput from '../../components/comment/CommentInput';
import { useState } from 'react';
import { CommentErrorsInterface, CommentInterface } from '../../features/types';
import InputErrorMsg from '../../components/inputs/InputErrorMsg';


const Build: React.FC = () => {
  type params = { id: string }

  const { id } = useParams<params>()
  const { data: build } = useGetBuildQuery(id);
  const [deleteBuild, response_delete] = useDeleteBuildMutation();
  const [postComment, response_comment] = useCreateCommentMutation();

  const [commentInput, setComment] = useState<CommentInterface>({
    build: id,
    comment: ""
  })

  const [errors, setErrors] = useState<CommentErrorsInterface | undefined>(undefined);

  function handleDelete() {
    deleteBuild(id)
  }

  if(response_delete.isSuccess){
    window.location.replace('/build')
  }

  function handleSubmitComment(event: any){
    postComment(commentInput).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data)
      }
    })
  }

  function GetCoolerCard() {
    if (build.air_cooler_data)
      return <ComponentCard title='Refrigeración por aire' subtitle={build.air_cooler_data.name}/>
    else if(build.liquid_cooler_data)
      return <ComponentCard title='Refrigeración líquida' subtitle={build.liquid_cooler_data.name}/>
    return null
  }

  function GetHDDCard() {
    if (build.hdd_data)
      return <ComponentCard title='Disco duro' subtitle={build.hdd_data.name}/>
    return null
  }

  function GetSSDCard() {
    if (build.ssd_data)
      return <ComponentCard title='Disco sólido' subtitle={build.ssd_data.name}/>
    return null
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{build ? build.name : ""}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {
          build ?
          <>
            <IonGrid fixed>
                <IonTitle>Descripción</IonTitle>
                <IonSubtitle text={build.description} />
                <IonTitle>Componentes</IonTitle>
              <IonRow>
                <ComponentCard title='Procesador' subtitle={build.cpu_data.name}/>
                <ComponentCard title='Placa Base' subtitle={build.motherboard_data.name}/>
                <ComponentCard title='Memoria RAM' subtitle={build.ram_data.name}/>
                <GetCoolerCard/>
                <GetHDDCard/>
                <GetSSDCard/>
                <ComponentCard title='Fuente de alimentación' subtitle={build.psu_data.name}/>
                <ComponentCard title='Caja' subtitle={build.case_data.name}/>
              </IonRow>
              <IonTitle>Comentarios</IonTitle>
              <CommentInput img='https://ionicframework.com/docs/img/demos/avatar.svg' alt='Avatar de autor' placeholder='Añade un comentario...' value={commentInput.comment} onIonInput={(e: any) => { setComment({ ...commentInput, comment: e.target.value as string }) }}/>
              <IonItem lines='none'>
              <IonLabel slot='end'>
                <InputErrorMsg errors={errors?.comment!} />
              </IonLabel>
                <IonButtons slot='end'>
                  <IonButton size='default' fill='outline' shape='round' color='primary' disabled={!!!commentInput.comment} onClick={handleSubmitComment}>Comentar</IonButton>
                </IonButtons>
              </IonItem>
              {
                build.comments ?
                build.comments.slice().reverse().map((comment: any) => (
                  <Comment img='https://ionicframework.com/docs/img/demos/avatar.svg' alt='Avatar de autor' author='Nombre del autor' comment={comment.comment} />
                ))
                :
                null
              }
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

