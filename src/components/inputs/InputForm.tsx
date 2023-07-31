import { IonInput, IonLabel } from '@ionic/react';
import InputErrorMsg from './InputErrorMsg';

interface InputProps{
    label: string,
    value: string,
    onIonInput?: any,
    errors?: any,
}

const InputForm = (props: InputProps) => {
  return (
    <IonLabel>
      <IonInput fill='outline' shape='round' label={props.label} value={props.value} onIonInput={props.onIonInput}></IonInput>
      <InputErrorMsg errors={props.errors} />
    </IonLabel>
  );
};

export default InputForm;