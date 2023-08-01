import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useGetBuildQuery, useUpdateBuildMutation } from '../../features/api/apiSlice';
import { useEffect, useState } from 'react';
import { BuildErrorsInterface, BuildInterface } from '../../features/types';
import BuildForm from './components/BuildForm';
import { useParams } from 'react-router';


const BuildEdit: React.FC = () => {
  type params = { id: string }

  const { id } = useParams<params>()
  const { data: build, isLoading } = useGetBuildQuery(id);
  const [updateBuild, response] = useUpdateBuildMutation();  
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(undefined);

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

  useEffect(()=>{
    if(build)
      setBuildUpdates(build)
	}, [build])

  function handleSubmit() {
    updateBuild({id: id, body: buildUpdates}).then((value: any) => {
      console.log(value)
      console.log(buildUpdates)
      if (value.error) {
        setErrors(value.error.data)
      }
    })
  }

  if(response.isSuccess) {
    window.location.replace(`/build/${id}`)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{build? build.name : ""}</IonTitle>
          <IonButtons slot='end'>
            <IonButton shape='round' fill='outline' onClick={handleSubmit} href={response.isSuccess ? `/build/${id}` : undefined} color='primary'>
              Guardar cambios
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow>
            <IonCol>
                  <BuildForm build={buildUpdates} errors={errors ? errors : []} setBuild={setBuildUpdates} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BuildEdit;
