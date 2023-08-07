import React from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonRow, IonToolbar } from '@ionic/react';
import { useCreateImageMutation, useGetBuildQuery, useUpdateBuildMutation } from '../../features/api/apiSlice';
import { useEffect, useState } from 'react';
import { BuildErrorsInterface, BuildInterface } from '../../features/types';
import BuildForm from './components/BuildForm';
import { useParams } from 'react-router';
import LoadingSpinner from '../../components/LoadingSpinner';


const BuildEdit: React.FC = () => {
  type params = { id: string }

  const { id } = useParams<params>()
  const { data: build, isSuccess } = useGetBuildQuery(id);
  const [updateBuild, response] = useUpdateBuildMutation();
  const [postImage, responseImage] = useCreateImageMutation();

  const [buildUpdates, setBuildUpdates] = useState<BuildInterface>({
    id: id,
    name: "",
    description: "",
    cpu: "",
    motherboard: "",
    gpu: "",
    ram: "",
    air_cooler: "",
    liquid_cooler: "",
    hdd: "",
    ssd: "",
    psu: "",
    case: ""
  });

  const [images, setImages] = useState<File[] | undefined>();
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(undefined);

  useEffect(() => {
    if (build) {
      setBuildUpdates(build)
    }
  }, [build])

  function handleSubmit() {
    updateBuild({ id: id, body: buildUpdates }).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data)
      }
      else {
        images?.map((image) => {
          var formData = new FormData();
          formData.append('build', value.data.id);
          formData.append('image', image);
          postImage(formData)
        })
        window.location.replace(`/build/${id}`)
      }
    })
  }

  if (!isSuccess) return <LoadingSpinner />

  return (
    <IonContent>
      <IonGrid fixed>
        <IonToolbar>
          <h1>{build.name}</h1>
          <IonButtons slot='end'>
            <IonButton shape='round' fill='outline' onClick={handleSubmit} color='primary'>
              Guardar cambios
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonRow>
          <IonCol>
            <BuildForm build={buildUpdates} images={images} errors={errors ?? []} setBuild={setBuildUpdates} setImages={setImages} editable />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default React.memo(BuildEdit);
