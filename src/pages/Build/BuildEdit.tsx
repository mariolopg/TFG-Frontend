import React from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonRow, IonToolbar } from '@ionic/react';
import { useGetBuildQuery, useUpdateBuildMutation } from '../../features/api/apiSlice';
import { useEffect, useState } from 'react';
import { BuildErrorsInterface, BuildInterface } from '../../features/types';
import BuildForm from './components/BuildForm';
import { useParams } from 'react-router';
import PageTitle from '../../components/PageTitle';


const BuildEdit: React.FC = () => {
  type params = { id: string }

  const { id } = useParams<params>()
  const { data: build, isSuccess } = useGetBuildQuery(id);
  const [updateBuild, response] = useUpdateBuildMutation();
  const [errors, setErrors] = useState<BuildErrorsInterface | undefined>(undefined);
  let showButton = false

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

  useEffect(() => {
    if (build) {
      setBuildUpdates(build)

    }
  }, [build])

  function handleSubmit() {
    updateBuild({ id: id, body: buildUpdates }).then((value: any) => {
      console.log(value)
      console.log(buildUpdates)
      if (value.error) {
        setErrors(value.error.data)
      }
    })
  }

  if (response.isSuccess) {
    window.location.replace(`/build/${id}`)
  }

  if (!isSuccess) return null

  return (
    <IonContent>
      <IonGrid fixed>
        <IonToolbar>
          <PageTitle title={build.name} />
          <IonButtons slot='end' hidden={showButton}>
            <IonButton shape='round' fill='outline' onClick={handleSubmit} color='primary'>
              Guardar cambios
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonRow>
          <IonCol>
            <BuildForm build={buildUpdates} errors={errors ?? []} setBuild={setBuildUpdates} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default React.memo(BuildEdit);
