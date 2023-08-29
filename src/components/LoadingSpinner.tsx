import React from 'react';
import { IonGrid, IonLoading } from '@ionic/react';
import { useTranslation } from 'react-i18next';

const LoadingSpinner: React.FC = () => {
	const { t, i18n } = useTranslation();
	return (
		<IonGrid fixed>
			<IonLoading message={t('loading', { ns: 'common' })} radioGroup='20' spinner="bubbles" isOpen={true} />
		</IonGrid>
	)
};

export default React.memo(LoadingSpinner);