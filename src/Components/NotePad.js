import React from "react";
import raven from "../raven.png";
import Note from "./Note";

export default function NotePad({
  open,
  onClose,
  notes,
  handleTask,
  deleteTask,
}) {
  if (!open) return null;
  console.log(notes)
  const noteDisplay = notes.map(note => {
    console.log('note', note)
    return (
      <Note
        {...note}
        key={note.id}
        handleTask={handleTask}
        deleteTask={deleteTask}
        note={note}
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
