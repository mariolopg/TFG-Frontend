import React from 'react';
import { IonToast } from "@ionic/react";
import useToast from './hooks/useToast';
import { TOAST_TIMEOUT } from '../../constants';

const Toast: React.FC = () => {
  const { toast, onDismiss } = useToast()
  return (
    <IonToast mode='ios' isOpen={toast.isOpen} message={toast.message} color={toast.color} duration={TOAST_TIMEOUT} onDidDismiss={onDismiss} position='top'></IonToast>
  );
};

export default React.memo(Toast);