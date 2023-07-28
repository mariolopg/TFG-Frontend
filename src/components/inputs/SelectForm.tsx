import Select from 'react-select';
import { IonLabel } from '@ionic/react';
import InputErrorMsg from './InputErrorMsg';
import './customInputs.css'

interface InputProps{
    label: string,
    placeholder: string,
    onIonChange?: any,
    options?: any,
    errors?: any,
}

const SelectForm = (props: InputProps) => {
  const options = new Array()

  props.options.map((option: any) => {
    options.push({ value: option.id, label: option.name })
  });

  const NoOptionsMessage = () => (<span>No hay opciones disponibles</span>);

  return (
    <>
      <IonLabel>
        <h2>{props.label}</h2>
        <Select placeholder={props.placeholder}
                options={options}
                onChange={props.onIonChange}
                noOptionsMessage={NoOptionsMessage}
                isClearable={true}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 20,
                })}
        />
        <InputErrorMsg errors={props.errors} />
      </IonLabel>
    </>
  );
};

export default SelectForm;