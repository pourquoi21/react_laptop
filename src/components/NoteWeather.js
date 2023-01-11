import React, { useEffect, useState } from "react";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function NoteWeather() {
  const city = "Gongju";
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.weather[0].id);
      });
  }, []);

  const weatherIcon = () => {
    let iconId = weather === 800 ? 0 : (parseInt(weather) / 100).toFixed(0);
    switch (iconId) {
      case "0":
        return <TiWeatherSunny size="4vh" color="FFD500" />;
      case "2":
        return <TiWeatherStormy size="4vh" color="#0002A8" />;
      case "3":
        return <TiWeatherShower size="4vh" color="0082FF" />;
      case "5":
        return <TiWeatherDownpour size="4vh" color="00D4FF" />;
      case "6":
        return <TiWeatherSnow size="4vh" color="D3EDF3" />;
      case "7":
        return <BsCloudFog size="4vh" color="BFD1D5" />;
      case "8":
        return <TiWeatherCloudy size="4vh" color="BEC5C7" />;
    }
  };

  return <div>{weatherIcon()}</div>;
}
