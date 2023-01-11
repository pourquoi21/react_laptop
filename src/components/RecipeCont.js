import React from "react";
import image1 from "../image/cont_image01.jpg";
import image2 from "../image/cont_image02.jpg";
import image3 from "../image/cont_image03.jpg";

function RecipeCont() {
  return (
    <section className="recipe_section">
      <div className="recipe_part1">
        <div
          className="part1_back"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
        <div className="part1_text">
          <h4>01</h4>
          <h2>
            For your
            <br />
            precious moments
          </h2>
        </div>
      </div>
      <div className="recipe_part2">
        <div
          className="part2_back"
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
        <div className="part2_text">
          <h4>02</h4>
          <h2>
            For your
            <br />
            precious moments
          </h2>
        </div>
      </div>
      <div className="recipe_part3">
        <div
          className="part3_back"
          style={{ backgroundImage: `url(${image3})` }}
        ></div>
        <div className="part3_text">
          <h4>03</h4>
          <h2>
            For your
            <br />
            precious moments
          </h2>
          <p>
            We hope your
            <br />
            happiness and satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default React.memo(RecipeCont);
