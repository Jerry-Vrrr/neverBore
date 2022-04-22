import React from "react";
import raven from "../raven.png";

export default function Modal({
  open,
  children,
  onClose,
  props,
  addToList,
  openNotes,
}) {

  if (!open) return null;
  

  return (
    <>
      <div className="overlay">
        <div className="modal">
          {children}
          <div className="modal-head">
            <img src={raven}></img>
            <button onClick={onClose}>&times;</button>
          </div>
          <div>
            <h1>{props[props.currentCategory]}</h1>
          </div>
          <a
              target="blank"
              href={`https://www.youtube.com/results?search_query=${props.currentCategory}`}
            >
              Check Out Some Tutorials
            </a>
          <div className="modal-foot">
            
            <button value={props[props.currentCategory]} onClick={addToList}>
              Add To List
            </button>
            <button onClick={openNotes}>View List</button>
          </div>
        </div>
      </div>
    </>
  );
}
