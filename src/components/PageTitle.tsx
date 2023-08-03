import React from "react";
import { IonTitle } from "@ionic/react";

interface PageTitleProps {
  title: string
}

const PageTitle = (props: PageTitleProps) => {
  return <h1>{props.title}</h1>
};

export default React.memo(PageTitle);