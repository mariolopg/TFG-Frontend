import { IonTitle } from "@ionic/react";

interface PageTitleProps{
    title: string
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <IonTitle><h1>{props.title}</h1></IonTitle>
  );
};

export default PageTitle;