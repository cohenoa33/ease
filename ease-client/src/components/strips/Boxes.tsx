import type { Box as BoxType } from "../../types";
import { Box } from "../Box";
import { Strip } from "../Strip";
export function Boxes({ boxes, open, section }: BoxesProps) {
  const length = boxes.length;
  if (length === 0) return <></>;
  let max = 2;

  // set the best max in a row options
  if (length % 2 === 0) {
    max = 2;
  }
  if (length % 3 === 0) max = 3;
  if (length > 6) {
    max = 3;
  }

  let data = boxes;
  let elements: { index: number; boxes: BoxType[] }[] = [];
  let index = 0;

  while (data.length > max) {
    elements.push({ index, boxes: data.slice(0, max) });
    data = data.slice(max);
    index += max;
  }

  // Check for remaining data to render
  if (data.length > 0) {
    elements.push({ index, boxes: data.slice(0, max) });
  }

  return (
    <section id={section}>
      {elements.map((element: { index: number; boxes: BoxType[] }) => (
        <Strip key={`strip-box${element.index}`}>
          {element.boxes.map((box: BoxType, index) => {
            return (
              <Box
                key={`strip-box${element.index}-${box.title}`}
                box={box}
                single={element.boxes.length === 1}
                open={() => open(index + element.index)}
              />
            );
          })}
        </Strip>
      ))}
    </section>
  );
}
interface BoxesProps {
  boxes: BoxType[];
  open: (index: number) => void;
  section: string;
}
