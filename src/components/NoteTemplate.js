import React from "react";
import styled from "styled-components";

const NoteTemplateBlock = styled.div`
  width: 50vw;
  height: 70vh;

  position: relative;
  background: #fdfdff;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  box-sizing: border-box;

  margin: 0 auto;

  display: flex;
`;

export default function NoteTemplate({ children }) {
  return <NoteTemplateBlock>{children}</NoteTemplateBlock>;
}
