import React, { useState } from "react";
import "../Laptop.css";
import Keyboard from "../image/laptop_keyboard.png";
import Main from "./Main";
import LaptopCloseNotice from "./LaptopCloseNotice";

export default function Laptop() {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div className="laptop_room">
      {open ? null : <LaptopCloseNotice onClick={handleOpen} />}
      <div className={`laptop_back ${open ? "" : "close"}`}>
        <div className="laptop_front">
          <div className="laptop_display">
            <Main open={open} handleClick={handleClick} />
          </div>
        </div>
      </div>
      <div className="laptop_keyboard">
        <img src={Keyboard} />
      </div>
      <p className="laptop_notice">
        본 페이지는 1920*1270px 환경에서 가장 잘 보입니다.
      </p>
      <div className="laptop_desk"></div>
    </div>
  );
}
