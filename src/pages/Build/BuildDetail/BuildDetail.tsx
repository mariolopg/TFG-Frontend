import React from 'react';
import { IonButton, IonButtons, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/react';
import Comment from '../../../components/Comment/Comment';
import IonSubtitle from '../../../components/Inputs/IonSubtitle';
import { create, options, trash } from 'ionicons/icons';
import CommentInput from '../../../components/Comment/CommentInput';
import BuildComponents from './components/BuildComponents';
import PageTitle from '../../../components/PageTitle';
import DeleteModal from '../../../components/DeleteModal';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import InputErrorMsg from '../../../components/Inputs/InputErrorMsg';
import useBuildDetail from './hooks/useBuildDetail';
import { BUILD_BASE_PATH, BUILD_LIST_PATH, DEFAULT_AVATAR_IMG } from '../../../constants';
import { useAppSelector } from '../../../hooks/appHooks';
import { selectToken, selectUserId, selectUserUsername } from '../../../redux/authSlice';


const BuildDetail: React.FC = () => {

  const { id, build, isSuccess } = useBuildDetail()

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  function GetCommentInput() {
    if (!!!useAppSelector(selectToken)) return null
    const { comments, errors, comment, setValue, handleSubmitComment } = useBuildDetail()
    const builder_username = useAppSelector(selectUserUsername)
    return (
      <>
        <CommentInput img={DEFAULT_AVATAR_IMG} alt={`Avatar de ${builder_username}`} placeholder='Añade un comentario...' value={comment} onIonInput={(e: any) => { setValue("comment", e) }} />
        <IonItem lines='none'>
          <IonLabel slot='end'>
            <InputErrorMsg errors={errors?.comment!} />
          </IonLabel>
          <IonButtons slot='end'>
            <IonButton size='default' fill='outline' shape='round' color='primary' disabled={!!!comment} onClick={handleSubmitComment}>Comentar</IonButton>
          </IonButtons>
        </IonItem>
        {comments.slice().reverse().map((comment: any) => (
          <Comment img={DEFAULT_AVATAR_IMG} alt={`Avatar de ${builder_username}`} author={builder_username} comment={comment.comment} />
        ))}
      </>
    )
  }

  function GetEditOptions() {
    if (useAppSelector(selectUserId) != build.builder) return null

    const { modal, handleDelete, isSuccessDelete } = useBuildDetail()
    if (isSuccessDelete) {
      window.location.replace(BUILD_LIST_PATH)
    }

    return (
      <>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton color='medium' >
            <IonIcon icon={options}></IonIcon>
          </IonFabButton>
          <IonFabList side='top'>
            <IonFabButton color='medium' href={`${BUILD_BASE_PATH}/${id}/edit`}>
              <IonIcon icon={create}></IonIcon>
            </IonFabButton>
            <IonFabButton color={'danger'} id='open-delete-modal'>
              <IonIcon icon={trash}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <DeleteModal reference={modal} trigger='open-delete-modal' message='¿Quieres eliminar esta build?' onClick={handleDelete} />
      </>
    )
  }

  return (
    <>
      <IonGrid fixed>
        <PageTitle title={build.name} />
        <IonTitle>Autor</IonTitle>
        <IonSubtitle text={build.builder_data.username} />
        <IonTitle>Descripción</IonTitle>
        <IonSubtitle text={build.description} />
        <IonTitle>Componentes</IonTitle>
        <IonRow>
          <BuildComponents build={build} />
        </IonRow>
        <ImageSlider images={build.images} />
        <IonTitle>Comentarios</IonTitle>
        <GetCommentInput />
        {build.comments.slice().reverse().map((comment: any) => (
          <Comment img={DEFAULT_AVATAR_IMG} alt={`Avatar de ${comment.builder_data.username}`} author={comment.builder_data.username} comment={comment.comment} />
        ))}
      </IonGrid>
      <GetEditOptions />
    </>
  );
};

export default React.memo(BuildDetail);
