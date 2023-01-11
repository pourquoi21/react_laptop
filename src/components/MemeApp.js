import React, { useState } from "react";
import "../Meme.css";
import MemeHeader from "./MemeHeader";
import Meme from "./Meme";

function MemeApp() {
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark((prev) => !prev);
  }

  return (
    <div className={`MemeApp ${dark ? "dark" : ""}`}>
      <MemeHeader darkMode={dark} toggleDark={toggleDark} />
      <Meme darkMode={dark} />
    </div>
  );
}

export default MemeApp;
