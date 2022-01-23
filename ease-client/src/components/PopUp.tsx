import type { Box as BoxType } from "../types";
import { titleCase, validateParagraph } from "../helpers";

export function PopUp({ box, close, index }: PopUpProps) {
  return (
    <div className="pop-up">
      <div className="btn-container">
        <button className="btn-x" onClick={() => close(index)}>
          X
        </button>
      </div>
      <div className={"box-title"}> {titleCase(box.title)}</div>
      <div className={"box-sub-title"}> {titleCase(box.subTitle, true)}</div>
      <div className={"box-text"}>
        {" "}
        {validateParagraph(titleCase(box.text))}
      </div>
    </div>
  );
}

interface PopUpProps {
  box: BoxType;
  index: number;
  close: (index: number) => void;
}
