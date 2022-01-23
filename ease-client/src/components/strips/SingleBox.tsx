import { ReactElement } from "react";
import type { SingleBoxProps } from "../../types";
import { Strip } from "../Strip";
import { titleCase } from "../../helpers";

export function SingleBox({ text, title }: SingleBoxProps): ReactElement {
  return (
    <Strip>
      <div className="box">
        <div className="box-title"> {title && titleCase(title)}</div>
        <div className={"box-text"}> {titleCase(text, true)}</div>
      </div>
    </Strip>
  );
}
