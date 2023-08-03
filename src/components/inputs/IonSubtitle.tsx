import React from 'react';
import './ionSubtitle.css'

interface IonSubtitleProps {
  text: string,
}

const IonSubtitle = (props: IonSubtitleProps) => {
  return (
    <div className="ion-subtitle">{props.text}</div>
  );
};

export default React.memo(IonSubtitle);