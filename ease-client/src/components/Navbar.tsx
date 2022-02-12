import { useState } from "react";
import { HashRouter } from "react-router-dom";
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <HashRouter>
          <div className="open-bar">
            <a href="#single-box">Single Box</a>
          </div>
        </HashRouter>
      )}
      <div
        className={open ? `change navbar` : `navbar`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="navbar-bar1"></div>
        <div className="navbar-bar2"></div>
        <div className="navbar-bar3"></div>
      </div>
    </>
  );
}
