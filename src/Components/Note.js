import React from "react";

export default function Note({handleNote, id, deleteNote, note}) {
    console.log(note)
  return (
    <form className="note">
      <input
        id={Date.now()}
        type="checkbox"
        // checked={checked}
        onChange={() => handleNote(id)}
      />
      <p>{note}</p>
      <button className="delete-button" onClick={() => deleteNote(id)}>&times;</button>
    </form>
  );
}
