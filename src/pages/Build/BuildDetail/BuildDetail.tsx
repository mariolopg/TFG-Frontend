import React from 'react';
import { IonAvatar, IonButton, IonButtons, IonChip, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonItem, IonLabel, IonRouterLink, IonRow, IonTitle } from '@ionic/react';
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
import { BUILDER_BASE_PATH, BUILD_BASE_PATH, PROFILE_ICON } from '../../../constants';

const BuildDetail: React.FC = () => {

  const { id, build, firstName, lastName, isAdmin, isLogged, builderId, builderUsername, isSuccess } = useBuildDetail()

  if (!isSuccess) {
    return <LoadingSpinner />
  }

  function GetCommentInput() {
    if (!isLogged) { return null }

    const { comments, errors, comment, setValue, handleSubmitComment } = useBuildDetail()
    return (
      <>
        <CommentInput firstName={firstName} lastName={lastName} placeholder='Añade un comentario...' value={comment} onIonInput={(e: any) => { setValue("comment", e) }} />
        <IonItem lines='none'>
          <IonLabel slot='end'>
            <InputErrorMsg errors={errors?.comment!} />
          </IonLabel>
          <IonButtons slot='end'>
            <IonButton size='default' fill='outline' shape='round' color='primary' disabled={!!!comment} onClick={handleSubmitComment}>Comentar</IonButton>
          </IonButtons>
        </IonItem>
        {comments.slice().reverse().map((comment: any) => (
          <Comment author={builderUsername} firstName={firstName} lastName={lastName} comment={comment.comment} />
        ))}
      </>
    )
  }

  function GetEditOptions() {
    const isOwner = build.builder == builderId
    if (!isOwner && !isAdmin) { return null }

    const { modal, handleDelete } = useBuildDetail()

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
        <IonRouterLink color="dark" href={`${BUILDER_BASE_PATH}/${build.builder}`} >
          <IonChip style={{ marginLeft: 15 }}>
            <IonAvatar>
              <img src={PROFILE_ICON} />
            </IonAvatar>
            <IonLabel>{build.builder_data.username}</IonLabel>
          </IonChip>
        </IonRouterLink>
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
          <Comment author={comment.builder_data.username} firstName={comment.builder_data.first_name} lastName={comment.builder_data.last_name} comment={comment.comment} />
        ))}
      </IonGrid>
      <GetEditOptions />
    </>
  );
};

export default React.memo(BuildDetail);

