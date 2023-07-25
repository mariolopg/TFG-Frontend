import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Build.css';
import { useGetBuildsQuery } from '../../features/api/apiSlice';


const Build: React.FC = () => {
    const { data: builds } = useGetBuildsQuery(null);

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Builds</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Builds</IonTitle>
            </IonToolbar>
            </IonHeader>
            <ul>
            {builds?.map((build: any) => (
                <li key={build.id}>
                {build.id} - {build.name}
                </li>
            ))}
            </ul>
        </IonContent>
        </IonPage>
    );
};

export default Build;

