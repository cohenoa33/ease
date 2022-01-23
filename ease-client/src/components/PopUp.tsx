import type { Box as BoxType } from "../types";
import { titleCase, validateParagraph } from "../helpers";

export function PopUp({ box, close }: PopUpProps) {
  return (
    <div className="pop-up">
      <div className="btn-container">
        <button className="btn-x" onClick={close}>
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
  close: () => void;
}
