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
            <h1>{props[props.currentCategory][0]}</h1>
          </div>
          <br></br>
          <a
              target="blank"
              href={`https://www.youtube.com/results?search_query=${props[props.currentCategory][0]}`}
            >
              Check Out Some Tutorials
            </a>
          <div className="but-box">
            <button className='add' value={props[props.currentCategory][0]} onClick={addToList}>
              Add To List
            </button>
            <button className='view' onClick={openNotes}>View List</button>
          </div>
        </div>
      </div>
    </>
  );
}
