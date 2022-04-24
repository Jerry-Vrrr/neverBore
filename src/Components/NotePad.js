import React from "react";
import raven from "../raven.png";
import Note from "./Note";

export default function NotePad({
  open,
  onClose,
  notes,
  deleteNote,
  
}) {
  if (!open) return null;
  
  const noteDisplay = notes.map((note) => {
    return (
      <Note
        {...note}
        key={note.id}
        id={note.id}
        deleteNote={deleteNote}
        note={note.note}
      />
    );
  });
  return (
    <>
      <div className="note-overlay">
        <div className="notepad">
          <div className="note-head">
            <img src={raven}></img>
            <button className='close' onClick={onClose}>&times;</button>
          </div>
          { noteDisplay.length ? noteDisplay : <h1>No Notes To Display Yet!</h1> }
        </div>
      </div>
    </>
  );
}
