import type { Box } from "../types";

export function createBox(boxes: Box[]): JSX.Element {
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
  let element = [];

  while (data.length > max) {
    element.push(createStrip(data.slice(0, max)));
    data = data.slice(max);
  }

  // Check for remaining data to render
  if (data.length > 0) {
    element.push(createStrip(data, true));
  }
  return <>{element}</>;
}

function createStrip(boxes: Box[], single?: boolean): JSX.Element {
  const className = single ? "box single-box" : "box";
  return (
    <div className={"strip"}>
      {boxes.map((box) => (
        <>
          <div className={className} key={box.title}>
            {box.title}
            <br />
            {box.subTitle}
          </div>
        </>
      ))}
    </div>
  );
}
