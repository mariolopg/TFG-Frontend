import React from 'react';
import { IonGrid, IonLoading } from '@ionic/react';

const LoadingSpinner: React.FC = () => {
	return (
		<IonGrid fixed>
			<IonLoading message="Cargando..." radioGroup='20' spinner="bubbles" isOpen={true} />
		</IonGrid>
	)
};

export default React.memo(LoadingSpinner);