import type { Box as BoxType } from "../types";

export function PopUp({ box, close }: PopUpProps) {
  return (
    <div className="pop-up">
      <div className="btn-container">
        <button className="btn-x" onClick={close}>
          X
        </button>
      </div>
      {box.title}
      <br />
      {box.subTitle}
      <br />
      {box.text}
    </div>
  );
}

interface PopUpProps {
  box: BoxType;
  close: () => void;
}
