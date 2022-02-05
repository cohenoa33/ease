import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <div className="open-bar"> Im gonna be a navbar! </div>}
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
