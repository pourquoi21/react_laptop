import React, { useEffect, useState } from "react";
import MainClock from "./MainClock";
import "../Main.css";
import time1 from "../image/time_image01.jpg";
import time2 from "../image/time_image02.jpg";
import time3 from "../image/time_image03.jpg";
import time4 from "../image/time_image04.jpg";
import time5 from "../image/time_image05.jpg";

export default function Main(props) {
  const [back, setBack] = useState("");
  const backtime = new Date().getHours();
  useEffect(() => {
    if (backtime >= 4 && backtime < 9) {
      setBack(time1);
    } else if (backtime >= 9 && backtime < 14) {
      setBack(time2);
    } else if (backtime >= 14 && backtime < 19) {
      setBack(time3);
    } else if (backtime >= 19 && backtime < 22) {
      setBack(time4);
    } else setBack(time5);
  }, []);

  return (
    <div className="mainApp" style={{ backgroundImage: `url(${back})` }}>
      {props.open ? (
        <MainClock open={props.open} handleClick={props.handleClick} />
      ) : null}
    </div>
  );
}
