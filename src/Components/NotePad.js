import React from "react";
import raven from "../raven.png";

export default function NotePad({ open, children, onClose, notes }) {
  if (!open) return null;
  const noteDisplay = notes.map(note => {
      return <li>{note} </li>
  })
  return (
    <>
      <div className="overlay">
        <div className="notepad">
          {children}
          <div className="note-head">
            <img src={raven}></img>
            <button onClick={onClose}>&times;</button>
        </div>    
            <ul>{noteDisplay}</ul>
            
          
        </div>
      </div>
    </>
  );
}
