import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Build.css';
import { useGetBuildQuery } from '../../features/api/apiSlice';
import { useParams } from 'react-router';
import ComponentCard from '../../components/ComponentCard';
import IonSubtitle from '../../components/inputs/IonSubtitle';


const Build: React.FC = () => {
  type params = { id: string }

  const { id } = useParams<params>()
  const { data: build } = useGetBuildQuery(id);

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
          <IonButtons slot='end'>
            <IonButton fill='outline' shape='round' color='primary' href='/build/new'>Nueva build</IonButton>
          </IonButtons>
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
                <ComponentCard title='Tarjeta gráfica' subtitle={build.gpu_data.name}/>
                <GetCoolerCard/>
                <GetHDDCard/>
                <GetSSDCard/>
                <ComponentCard title='Fuente de alimentación' subtitle={build.psu_data.name}/>
                <ComponentCard title='Caja' subtitle={build.case_data.name}/>
              </IonRow>
            </IonGrid>
          </>
            : null
        }
      </IonContent>
    </IonPage>
  );
};

export default Build;

