import './IonSubtitle.css'

interface IonSubtitleProps{
    text: string,
}

const IonSubtitle = (props: IonSubtitleProps) => {
  return (
    <div className="ion-subtitle">{props.text}</div>
  );
};

export default IonSubtitle;