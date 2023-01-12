import React, { useState } from "react";
import "../Laptop.css";
import Keyboard from "../image/laptop_keyboard.png";
import Main from "./Main";

export default function Laptop() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div className="laptop_room">
      <div className={`laptop_back ${open ? "" : "close"}`}>
        <div className="laptop_front">
          <div className="laptop_display">
            <Main
              open={open}
              handleClick={handleClick}
              handleOpen={handleOpen}
            />
          </div>
        </div>
      </div>
      <div className="laptop_keyboard">
        <img src={Keyboard} />
      </div>
      <p className="laptop_notice">Copyright 2023. Jay all rights reserved.</p>
      <div className="laptop_desk"></div>
    </div>
  );
}
