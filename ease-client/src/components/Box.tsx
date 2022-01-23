import type { Box as BoxType } from "../types";
import { titleCase } from "../helpers";

export function Box({ single, box, open }: BoxProps) {
  const className = single ? "box single-box" : "box";
  return (
    <div className={className} onClick={open}>
      <div className={"box-title"}>{titleCase(box.title)}</div>
      <div className={"box-sub-title"}> {titleCase(box.subTitle, true)}</div>
    </div>
  );
}
interface BoxProps {
  single?: boolean;
  box: BoxType;
  open: () => void;
}
