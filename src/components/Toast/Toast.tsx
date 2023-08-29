import React from 'react';
import { IonToast } from "@ionic/react";
import useToast from './hooks/useToast';
import { TOAST_TIMEOUT } from '../../constants';
import { useTranslation } from 'react-i18next';

const Toast: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { toast, onDismiss } = useToast()
  return (
    <IonToast mode='ios' isOpen={toast.isOpen} message={t(toast.message, { ns: "toast" })} color={toast.color} duration={TOAST_TIMEOUT} onDidDismiss={onDismiss} position='top'></IonToast>
  );
};

export default React.memo(Toast);