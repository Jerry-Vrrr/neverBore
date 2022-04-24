import React from "react";
import raven from "../raven.png";
import Note from "./Note";

export default function NotePad({
  open,
  onClose,
  notes,
  // handleNote,
  deleteNote,
  
}) {
  if (!open) return null;
  
  const noteDisplay = notes.map((note) => {
    // console.log('n',note)
    return (
      <Note
        {...note}
        key={note.id}
        id={note.id}
        // handleNote={handleNote}
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
            <button onClick={onClose}>&times;</button>
          </div>
          {noteDisplay}
        </div>
      </div>
    </>
  );
}
