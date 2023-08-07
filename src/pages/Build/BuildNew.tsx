import React, { useEffect } from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonRow, IonToolbar } from '@ionic/react';
import { useCreateBuildMutation, useCreateImageMutation } from '../../features/api/apiSlice';
import { useState } from 'react';
import { BuildErrorsInterface, BuildInterface } from '../../features/types';
import '../../theme/app.css'
import BuildForm from './components/BuildForm';
import PageTitle from '../../components/PageTitle';

const BuildNew: React.FC = () => {
  const [postBuild, response] = useCreateBuildMutation();
  const [postImage, responseImage] = useCreateImageMutation();

  const [build, setBuild] = useState<BuildInterface>({
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

  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(undefined);

  function handleSubmit() {
    postBuild(build).then((value: any) => {
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
        window.location.replace(`/build/${value.data.id}`)
      }
    })
  }

  return (
    <IonContent>
      <IonGrid fixed>
        <IonToolbar>
          <PageTitle title='Nueva Build' />
          <IonButtons slot='end'>
            <IonButton shape='round' fill='outline' onClick={handleSubmit} color='primary'>
              Guardar
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonRow>
          <IonCol>
            <BuildForm build={build} setBuild={setBuild} errors={errors ?? []} images={images} setImages={setImages} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default React.memo(BuildNew);
