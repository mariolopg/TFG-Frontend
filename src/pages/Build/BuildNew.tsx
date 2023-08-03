import React from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useCreateBuildMutation } from '../../features/api/apiSlice';
import { useState } from 'react';
import { BuildErrorsInterface, BuildInterface } from '../../features/types';
import '../../theme/app.css'
import BuildForm from './components/BuildForm';


const BuildNew: React.FC = () => {
  const [postBuild, response] = useCreateBuildMutation();
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(undefined);

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

  function handleSubmit() {
    postBuild(build).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data)
      }
    })
  }

  if (response.isSuccess) {
    window.location.replace(`/build/${response.data.id}`)
  }

  return (
    <IonContent>
      <IonGrid fixed>
        <IonToolbar>
          <IonTitle>Nueva Build</IonTitle>
          <IonButtons slot='end'>
            <IonButton shape='round' fill='outline' onClick={handleSubmit} color='primary'>
              Guardar
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonRow>
          <IonCol>
            <BuildForm build={build} errors={errors ?? []} setBuild={setBuild} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default React.memo(BuildNew);
