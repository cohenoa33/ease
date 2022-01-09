import type { ReactElement } from "react";
import type { WebData } from "../types";

export function Header({ webData }: Props): ReactElement {
  return (
    <div className="app-header">
      <div className="title"> {webData.title} </div>
      <div className="sub-title">{webData.subTitle}</div>
    </div>
  );
}
interface Props {
  webData: WebData;
}
