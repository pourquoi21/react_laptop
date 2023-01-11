import "../Meme.css";
import React, { useEffect, useState } from "react";

export default function Meme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  console.log(meme);
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <article className={`meme_article ${props.darkMode ? "dark" : ""}`}>
      <div className="form">
        <input
          name="topText"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          name="bottomText"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme_img" />
        <h1 className="meme_text top">{meme.topText}</h1>
        <h1 className="meme_text bottom">{meme.bottomText}</h1>
      </div>
    </article>
  );
}
