import React from "react";
import raven from "../raven.png";

export default function NotePad({ open, children, onClose, props }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div className="notepad">
          {children}
          <div className="note-head">
            <img src={raven}></img>
            <button onClick={onClose}>&times;</button>
          </div>

          <div className="note-foot">
            <button>Add To List</button>
            <button>View List</button>
          </div>
        </div>
      </div>
    </>
  );
}
