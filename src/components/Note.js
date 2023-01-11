import "../Note.css";
import React from "react";
import { createGlobalStyle } from "styled-components";
import NoteTemplate from "./NoteTemplate";
import NoteHead from "./NoteHead";

const GlobalStyle = createGlobalStyle`
    body {
      background: #F0F2EE;
    }
  `;

function Note() {
  return (
    <div className="Note">
      <GlobalStyle />
      <NoteTemplate>
        <NoteHead />
      </NoteTemplate>
    </div>
  );
}

export default Note;
