import type { Box as BoxType } from "../types";

export function Box({ single, box, open }: BoxProps) {
  const className = single ? "box single-box" : "box";
  return (
    <div className={className} onClick={open}>
      {box.title}
      <br />
      {box.subTitle}
    </div>
  );
}
interface BoxProps {
  single?: boolean;
  box: BoxType;
  open: () => void;
}
