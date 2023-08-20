import React from "react";
import { IonTitle } from "@ionic/react";

import './components.css'

interface PageTitleProps {
  title: string,
  center?: boolean,
}

const PageTitle = (props: PageTitleProps) => {
  return <IonTitle className={props.center ? "center-title" : ""}><h1>{props.title}</h1></IonTitle>
};

export default React.memo(PageTitle);