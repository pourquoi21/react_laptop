import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLogOut from "./MainLogOut";

export default function MainClock(props) {
  const [time, setTime] = useState(new Date());
  const hours = String(time.getHours()).padStart(2, "0");
  const mins = String(time.getMinutes()).padStart(2, "0");
  const secs = String(time.getSeconds()).padStart(2, "0");

  function AMPM() {
    if (new Date().getHours() >= 0 && new Date().getHours() < 12) return "AM";
    else return "PM";
  }

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1 className="main_clock">
        {hours}:{mins}:{secs}
        <span>{AMPM()}</span>
      </h1>
      <div className="main_buttonbox">
        <Link to={`/meme`}>
          <button>Meme Generator</button>
        </Link>
        <Link to={`/note`}>
          <button>Today's diary</button>
        </Link>
        <Link to={`/recipes`}>
          <button>Today's recipe</button>
        </Link>
      </div>
      <MainLogOut open={props.open} handleClick={props.handleClick} />
    </>
  );
}
