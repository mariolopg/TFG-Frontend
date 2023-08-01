import Select from 'react-select';
import { IonLabel } from '@ionic/react';
import InputErrorMsg from './InputErrorMsg';
import './customInputs.css'

interface InputProps {
  label: string,
  placeholder: string,
  value?: any,
  options: any,
  errors?: any,
  onIonChange: any,
}

const SelectForm = (props: InputProps) => {
  const options = new Array();
  let index = -1;

  if (props.options) {
    props.options.map((option: any) => {
      options.push({ value: option.id, label: option.name })
    });
  }

  if (props.value) {
    index = options.findIndex((option: {value: any;}) => option.value === props.value)
  }

  const NoOptionsMessage = () => (<span>No hay opciones disponibles</span>);

  return (
    <>
      <IonLabel>
        <h2>{props.label}</h2>
        <Select placeholder={props.placeholder}
          options={options}
          onChange={props.onIonChange}
          noOptionsMessage={NoOptionsMessage}
          value={options[index]}
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