import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLogOut from "./MainLogOut";

export default function MainClock(props) {
  const [time, setTime] = useState(new Date());
  function hours() {
    let hours = String(time.getHours() - 12);
    if (hours.length == 1) return (hours = "0" + hours);
    else return hours;
  }
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
    <div className="main_clock_box">
      <h1 className="main_clock">
        {hours()}:{mins}:{secs}
        <span>{AMPM()}</span>
      </h1>
      <div className="main_buttonbox">
        <p>Mouse over!</p>
        <Link to={`/meme`}>
          <button title="You can make your own meme :)">Meme Generator</button>
        </Link>
        <Link to={`/note`}>
          <button title="You can write your journal :)">Today's diary</button>
        </Link>
        <Link to={`/recipes`}>
          <button title="You can search for recipes :)">Today's recipe</button>
        </Link>
      </div>
      <MainLogOut open={props.open} handleClick={props.handleClick} />
    </div>
  );
}
