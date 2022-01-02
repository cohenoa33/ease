import "./App.css";

import { boxes } from "./mockData";

function App() {
  function createBox() {
    if (boxes.length === 0) return <></>;
    let max = 2;

    // set the best max in a row options
    if (boxes.length % 3 === 0) max = 3;

    let data = boxes;
    let element = [];

    while (data.length > max) {
      element.push(createStrip(data.slice(0, max)));
      data = data.slice(max);
    }

    // Check for lest data to render
    if (data.length > 0) {
      element.push(createStrip(data, true));
    }
    return <>{element}</>;
  }

  return (
    <div className="page">
      <div className="app-header">
        <div className="title"> NAME </div>
        <div className="sub-title">WEB SUB TITLE. </div>
      </div>
      <div className="strip" style={{ background: "purple", height: "400px" }}>
        <img src="../gold-pond.jpg" alt="Nature" className="image" />
      </div>
      {createBox()}
      <div className="strip single">
        <div className="box">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
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
          sometimes on purpose (injected humour and the like).
        </div>
      </div>
      <div className="strip single">
        <div className="box">
          It is a long established fact that a reader will be distracted by the
        </div>
      </div>
      <div className="app-footer">
        <span className="footer-title"> NAME </span>
        <span className="footer-sub-title">WEB SUB TITLE. </span>
        <div className="footer-text">Contact</div>
      </div>
    </div>
  );
}

export default App;

function createStrip(
  boxes: { title: string; text: string }[],
  single?: boolean
): JSX.Element {
  return (
    <div className="strip">
      {boxes.map((box) => (
        <>
          <div
            className="box"
            key={box.title}
            style={single ? { width: "80%" } : {}}
          >
            {box.title} {single}
            <br />
            {box.text}
          </div>
        </>
      ))}
    </div>
  );
}
