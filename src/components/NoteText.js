import React from "react";

export default function NoteText(props) {
  return (
    <>
      <textarea
        className="note-text"
        name="noteText"
        value={props.currentNote.noteText}
        onChange={props.handleChange}
        ref={props.ref}
      />
    </>
  );
}
