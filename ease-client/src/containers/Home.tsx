import { useState } from "react";
import { boxes } from "../mockData";
import { Boxes, Image, SingleBox } from "../components/strips";
import { PopUp } from "../components";

export function Home() {
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState(0);

  const handlePopUp = (index?: number) => {
    setOpen(!open);
    if (index) setBox(index);
  };

  return (
    <>
      <Image src={"../gold-pond.jpg"} alt="Nature" />
      {open && <PopUp box={boxes[box]} close={handlePopUp} />}
      <Boxes boxes={boxes} open={handlePopUp} />
      <SingleBox
        title={"single box text"}
        text="It is a long established fact that a reader will be distracted by the 
         readable content of a page when looking at its layout. The point of using 
         Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). It is a
          long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like)."
      />
      <SingleBox text="It is a long established fact that a reader will be distracted by the" />
    </>
  );
}
