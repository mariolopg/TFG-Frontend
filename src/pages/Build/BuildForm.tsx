import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useCreateBuildMutation, useGetAirCoolersQuery, useGetCPUsQuery, useGetCasesQuery, useGetGPUsQuery, useGetHDDsQuery, useGetLiquidCoolersQuery, useGetMotherboardsQuery, useGetPSUsQuery, useGetRAMSQuery, useGetSSDsQuery } from '../../features/api/apiSlice';
import { useState } from 'react';
import { BuildErrorsInterface, BuildInterface } from '../../features/types';
import InputForm from '../../components/inputs/InputForm';
import TextAreaForm from '../../components/inputs/TextAreaForm';
import SelectForm from '../../components/inputs/SelectForm';
import '../../theme/app.css'


const BuildForm: React.FC = () => {

  const { data: cpus } = useGetCPUsQuery(null);
  const { data: motherboards } = useGetMotherboardsQuery(null);
  const { data: rams } = useGetRAMSQuery(null);
  const { data: gpus } = useGetGPUsQuery(null);
  const { data: air_coolers } = useGetAirCoolersQuery(null);
  const { data: liquid_coolers } = useGetLiquidCoolersQuery(null);
  const { data: hdds } = useGetHDDsQuery(null);
  const { data: ssds } = useGetSSDsQuery(null);
  const { data: psus } = useGetPSUsQuery(null);
  const { data: cases } = useGetCasesQuery(null);

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

  function handleSubmit(event: any) {
    postBuild(build).then((value: any) => {
      if (value.error) {
        setErrors(value.error.data)
      }
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nueva Build</IonTitle>
          <IonButtons slot='end'>
            <IonButton shape='round' fill='outline' onClick={handleSubmit} href={response.isSuccess ? `/build/${response.data.id}` : undefined} color='primary'>
              Guardar
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              <InputForm label="Nombre" value={build.name} onIonInput={(e: any) => { setBuild({ ...build, name: e.target.value as string }) }} errors={errors ? errors.name : []} />
              <TextAreaForm label="Descripción" value={build.description} onIonInput={(e: any) => { setBuild({ ...build, description: e.target.value as string }) }} errors={errors ? errors.description : []} />

              <SelectForm label="Procesador" placeholder='Selecciona un procesador...' options={cpus ? cpus : []} onIonChange={(e: any) => { e ? setBuild({ ...build, cpu: e['value'] as string }) : setBuild({ ...build, cpu: "" }) }} errors={errors ? errors.cpu : []} />

              <SelectForm label="Placa base" placeholder='Selecciona una placa base...' options={motherboards ? motherboards : []} onIonChange={(e: any) => { e ? setBuild({ ...build, motherboard: e['value'] as string }) : setBuild({ ...build, motherboard: "" }) }} errors={errors ? errors.motherboard : []} />

              <SelectForm label="Memoria RAM" placeholder='Selecciona un kit de memorias RAM...' options={rams ? rams : []} onIonChange={(e: any) => { e ? setBuild({ ...build, ram: e['value'] as string }) : setBuild({ ...build, ram: "" }) }} errors={errors ? errors.ram : []} />

              <SelectForm label="Tarjeta gráfica" placeholder='Selecciona una tarjeta gráfica...' options={gpus ? gpus : []} onIonChange={(e: any) => { e ? setBuild({ ...build, gpu: e['value'] as string }) : setBuild({ ...build, gpu: "" }) }} errors={errors ? errors.gpu : []} />

              <SelectForm label="Refrigeración por aire" placeholder='Selecciona una refrigeración por aire...' options={air_coolers ? air_coolers : []} onIonChange={(e: any) => { e ? setBuild({ ...build, air_cooler: e['value'] as string }) : setBuild({ ...build, air_cooler: "" }) }} errors={errors ? [errors.air_cooler, errors.cooler] : []} />

              <SelectForm label="Refrigeración líquida" placeholder='Selecciona una refrigeración líquida...' options={liquid_coolers ? liquid_coolers : []} onIonChange={(e: any) => { e ? setBuild({ ...build, liquid_cooler: e['value'] as string }) : setBuild({ ...build, liquid_cooler: "" }) }} errors={errors ? [errors.liquid_cooler, errors.cooler] : []} />

              <SelectForm label="Disco duro" placeholder='Selecciona un disco duro...' options={hdds ? hdds : []} onIonChange={(e: any) => { e ? setBuild({ ...build, hdd: e['value'] as string }) : setBuild({ ...build, hdd: "" }) }} errors={errors ? [errors.hdd, errors.storage_drive] : []} />

              <SelectForm label="Unidad de estado sólido" placeholder='Selecciona una unidad de estado sólido...' options={ssds ? ssds : []} onIonChange={(e: any) => { e ? setBuild({ ...build, ssd: e['value'] as string }) : setBuild({ ...build, ssd: "" }) }} errors={errors ? [errors.ssd, errors.storage_drive] : []} />

              <SelectForm label="Fuente de alimentación" placeholder='Selecciona una fuente de alimentación...' options={psus ? psus : []} onIonChange={(e: any) => { e ? setBuild({ ...build, psu: e['value'] as string }) : setBuild({ ...build, psu: "" }) }} errors={errors ? errors.psu : []} />

              <SelectForm label="Chasis" placeholder='Selecciona un chasis...' options={cases ? cases : []} onIonChange={(e: any) => { e ? setBuild({ ...build, case: e['value'] as string }) : setBuild({ ...build, case: "" }) }} errors={errors ? errors.case : []} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BuildForm;
