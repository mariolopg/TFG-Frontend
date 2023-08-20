import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';

import NavBar from '../../components/Navbar/NavBar';

interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBar />
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {children}
      </IonContent>
    </IonPage>
  )
};

export default React.memo(Layout);