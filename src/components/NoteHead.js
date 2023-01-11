import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NoteWeather from "./NoteWeather";
import NoteSide from "./NoteSide";

const NoteHeadBlock = styled.div`
  width: 46vw;
  height: 11%;
  margin: 0 auto;
  overflow: hidden;

  border-bottom: 1px solid #bec7c9;

  .head {
    width: 95%;
    margin: 0 auto;
    padding-top: 0.5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #484848;
  }

  .head-right {
    display: grid;
    text-align: right;
  }

  h1 {
    font-size: 3.5vh;
    color: #555;
    margin: 0;
    font-family: "KOTRAHOPE";
    font-weight: normal;
  }

  p.date {
    font-family: "KOTRAHOPE";
    margin-top: -0.7vh;
    font-size: 1.8vh;
  }
`;

const today = new Date();
const dateString = today.toLocaleDateString();
const weekday = today.toLocaleDateString("ko-KR", { weekday: "short" });

export default function NoteHead() {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("Journal")) || []
  );

  const [currentNoteId, setCurrentNoteId] = useState(
    (note[0] && note[0].id) || ""
  );

  const textInput = useRef();

  useEffect(() => {
    localStorage.setItem("Journal", JSON.stringify(note));
  }, [note]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prev) => {
      let newArray = [];
      prev.map((note) => {
        return note.id === currentNoteId
          ? newArray.unshift({ ...note, [name]: value })
          : newArray.push(note);
      });
      return newArray;
      // return {
      //   ...prev,
      //   [name]: value,
      // };
    });
  }

  function createNew() {
    const newNote = {
      id: Date.now(),
      noteText: "오늘의 일기",
    };
    setNote((prev) => [newNote, ...prev]);
    setCurrentNoteId(newNote.id);
  }

  function findCurrentNote() {
    return (
      note.find((note) => {
        return note.id === currentNoteId;
      }) || note[0]
    );
  }

  function deleteNote(e) {
    setNote((prev) => prev.filter((prev) => prev.id !== currentNoteId));
    {
      note[1] && note[1].id
        ? setCurrentNoteId((prev) => {
            return note[0].id === currentNoteId ? note[1].id : note[0].id;
          })
        : setCurrentNoteId("");
    }
    textInput.current.focus();
  }

  return (
    <div className="note-main">
      <NoteHeadBlock>
        <div className="head">
          <h1>오늘의 일기</h1>
          <div className="head-right">
            <NoteWeather />
            <p className="date">
              {dateString} {weekday}
            </p>
          </div>
        </div>
      </NoteHeadBlock>
      {note.length > 0 ? (
        <div className="note-cont">
          <NoteSide
            createNew={createNew}
            note={note}
            setCurrentNoteId={setCurrentNoteId}
            currentNoteId={currentNoteId}
            deleteNote={deleteNote}
          />
          <textarea
            className="note-text"
            name="noteText"
            value={findCurrentNote().noteText}
            onChange={handleChange}
            ref={textInput}
          />
        </div>
      ) : (
        <div className="note-empty">
          <h1>새로운 일기를 써 볼까요?</h1>
          <button onClick={createNew}>지금 쓰기</button>
        </div>
      )}
    </div>
  );
}
