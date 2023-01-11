import React from "react";
import styled from "styled-components";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

export default function NoteSide(props) {
  const noteElements = props.note.map((note) => (
    <div
      key={note.id}
      className={`note-list ${
        note.id === props.currentNoteId ? "selected" : ""
      }`}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      {note.noteText.split("\n")[0]}
    </div>
  ));

  return (
    <section className="note-sidebar">
      <div className="note-button">
        <button className="new" onClick={props.createNew}>
          <FaPlus />
        </button>
        <button className="delete" onClick={props.deleteNote}>
          <FaTrashAlt />
        </button>
      </div>
      <div className="note-listbox">
        <div>{noteElements}</div>
        {/* <div className="note-list selected">Hellodjfdkjfjjldfffggkj</div>
      <div className="note-list">Hello</div>
      <div className="note-list">Hello</div>
      <div className="note-list">Hello</div> */}
      </div>
    </section>
  );
}
