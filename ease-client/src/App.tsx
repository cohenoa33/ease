import "./App.css";
import { boxes } from "./mockData";
import { createBox } from "./helpers";

function App() {
  return (
    <div className="page">
      <div className="app-header">
        <div className="title"> NAME </div>
        <div className="sub-title">WEB SUB TITLE. </div>
      </div>
      <div className="strip" style={{ background: "purple" }}>
        <img src="../gold-pond.jpg" alt="Nature" className="image" />
      </div>
      {createBox(boxes)}
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
