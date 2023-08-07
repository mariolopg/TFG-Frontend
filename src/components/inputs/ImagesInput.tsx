import React from 'react'
import { MuiFileInput } from 'mui-file-input'
import './customInputs.css'
import { IonLabel } from '@ionic/react';

interface ImagesInputProps {
  value: File[] | undefined;
  handleChange: any;
}

const ImagesInput: React.FC<ImagesInputProps> = ({ value, handleChange }) => {

  return (
    <IonLabel>
      <h2>Imágenes</h2>
      <MuiFileInput className='image-file-input' multiple value={value ?? []} onChange={handleChange} placeholder='Selecciona una o varias imágenes...'
        InputProps={{
          style: {
            borderRadius: "30px",
          }
        }} />
    </IonLabel>
  )
};

export default React.memo(ImagesInput);