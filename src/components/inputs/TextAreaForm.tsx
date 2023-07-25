import { IonItem, IonLabel, IonTextarea } from '@ionic/react';
import InputErrorMsg from './InputErrorMsg';

interface InputProps{
    label: string,
    value: string,
    onIonChange?: any,
    errors?: any
}

const TextAreaForm = (props: InputProps) => {
  return (
    <IonLabel>
      <IonTextarea fill='outline' shape='round' autoGrow={true} label={props.label} value={props.value} onIonChange={props.onIonChange}></IonTextarea>
      <InputErrorMsg errors={props.errors} />
    </IonLabel>
  );
};

export default TextAreaForm;