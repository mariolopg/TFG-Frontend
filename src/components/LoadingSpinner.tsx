import React from 'react';
import { IonContent, IonGrid, IonLoading } from '@ionic/react';

const LoadingSpinner: React.FC = () => {
	return (
		<IonContent>
			<IonGrid fixed>
				<IonLoading message="Cargando..." radioGroup='20' spinner="bubbles" isOpen={true} />
			</IonGrid>
		</IonContent>
	)
};

export default React.memo(LoadingSpinner);