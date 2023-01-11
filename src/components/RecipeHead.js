import React, { useState, useEffect } from "react";
import { BsMouse } from "react-icons/bs";

function RecipeCont() {
  const [on, setOn] = useState({
    fade: false,
    up: false,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setOn((prev) => {
        return {
          ...prev,
          fade: !prev.fade,
          up: !prev.up,
        };
      });
    }, 650);
    return () => clearInterval(id);
  }, []);

  return (
    <article className="recipe_mainArticle">
      <div className="recipe_main_text">
        <h1>You can be</h1>
        <h1>A better chef</h1>
        <h1>With us.</h1>
        <p>for your precious ones</p>
      </div>
      <div className="recipe_icon_box">
        <BsMouse
          className={`recipe_main_icon ${on.fade ? "fade" : ""} ${
            on.up ? "" : "up"
          }`}
        />
      </div>
    </article>
  );
}

export default React.memo(RecipeCont);
