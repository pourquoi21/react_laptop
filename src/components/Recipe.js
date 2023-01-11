import React, { useEffect, useState } from "react";
import "../Recipe.css";
import RecipeHead from "./RecipeHead";
import RecipeCont from "./RecipeCont";
import RecipeSearch from "./RecipeSearch";

export default function Recipe() {
  const backImages = [
    "main_image01.jpg",
    "main_image02.jpg",
    "main_image03.jpg",
    "main_image04.jpg",
    "main_image05.jpg",
  ];

  const randomBack = backImages[Math.floor(Math.random() * backImages.length)];
  const url = require(`../image/${randomBack}`);

  const styles = {
    backgroundImage: `url(${url})`,
  };

  const [backColor, setBackColor] = useState(false);

  function handleMouseOver() {
    setBackColor(true);
  }

  function handleMouseLeave() {
    setBackColor(false);
  }

  return (
    <div className={`recipe_App ${backColor ? "otherColor" : ""}`}>
      <div className="recipe_back" style={styles}>
        <RecipeHead />
      </div>
      <RecipeCont />
      <RecipeSearch mouseOver={handleMouseOver} mouseLeave={handleMouseLeave} />
    </div>
  );
}
