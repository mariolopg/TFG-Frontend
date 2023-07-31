import { IonLabel, IonTextarea } from '@ionic/react';
import InputErrorMsg from './InputErrorMsg';

interface InputProps{
    label: string,
    value: string,
    onIonInput?: any,
    errors?: any
}

const TextAreaForm = (props: InputProps) => {
  return (
    <IonLabel>
      <IonTextarea fill='outline' shape='round' autoGrow={true} label={props.label} value={props.value} onIonInput={props.onIonInput}/>
      <InputErrorMsg errors={props.errors} />
    </IonLabel>
  );
};

export default TextAreaForm;