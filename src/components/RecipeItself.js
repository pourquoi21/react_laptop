import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeItself() {
  // the url of this page should be /id
  const { id } = useParams();
  const [things, setThings] = useState({
    cont: [],
    step: [],
    ingr: [],
    done: false,
  });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const getRecipes = async () => {
    const json = await (
      await fetch(
        `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,
        options
      )
    ).json();
    setThings((prev) => {
      return {
        ...prev,
        cont: json,
        step: json.instructions,
        ingr: json.sections,
        done: true,
      };
    });
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipe_itself">
      <>
        {things.done && (
          <>
            <div
              className="recipe_itself_img"
              style={{ backgroundImage: `url(${things.cont.thumbnail_url})` }}
            />
            <h2 className="recipe_itself_name">{things.cont.name}</h2>
            <div className="recipe_itself_cont">
              <div className="recipe_itself_ingr">
                <h3>Ingredients</h3>
                <p>({things.cont.yields})</p>
                <div className="ingr_ul_div">
                  {things.ingr.map((ingr) => (
                    <ul key={ingr.id}>
                      {ingr.name !== null && (
                        <span className="ingr_ul_title">for {ingr.name}</span>
                      )}
                      {ingr.components.map((cpnt) => (
                        <li key={cpnt.id}>
                          {cpnt.measurements[0].quantity !== "0" &&
                            cpnt.measurements[0].quantity}{" "}
                          {cpnt.measurements[0].unit.abbreviation}{" "}
                          {cpnt.ingredient.name}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
              <div className="recipe_itself_inst">
                <h3>Instructions</h3>
                {things.step.map((step) => (
                  <div key={step.id} className="recipe_itself_step">
                    <h4>Step {step.position}</h4>
                    <p>{step.display_text}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}
