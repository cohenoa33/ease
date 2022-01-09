import { ReactElement } from "react";
import type { SingleBoxProps } from "../../types";
import { Strip } from "../Strip";

export function SingleBox({ text }: SingleBoxProps): ReactElement {
  return (
    <Strip>
      <div className="box">{text}</div>
    </Strip>
  );
}
