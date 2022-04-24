import React from "react";

export default function Note({ deleteNote, note, id}) {
  return (
    <form className="note" id={id} >
      <button id={id} className="delete" onClick={(event) => deleteNote(event)}>&Theta;</button>
      <p>{note}</p>
    </form>
  );
}
