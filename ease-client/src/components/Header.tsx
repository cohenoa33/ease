import type { ReactElement } from "react";
import type { WebData } from "../types";

export function Header({ webData }: Props): ReactElement {
  return (
    <section id={"home"}>
      <div className="app-header">
        <div className="title"> {webData.title} </div>
        <div className="sub-title">{webData.subTitle}</div>
      </div>
    </section>
  );
}
interface Props {
  webData: WebData;
}
