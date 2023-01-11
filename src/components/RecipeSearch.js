import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import RecipeApi from "./RecipeApi";

function RecipeForm() {
  let savedSearch = localStorage.getItem("recipe");
  const [recipe, setRecipe] = useState(() => JSON.parse(savedSearch) || "");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
  }, [recipe]);

  function handleChange(e) {
    const { value } = e.target;
    setRecipe(value);
    setLoading(true);
  }

  return (
    <>
      <section className="recipe_form">
        <h2>What are you waiting for?</h2>
        <h4>Start cooking with us!</h4>
        <div>
          <input
            type="text"
            value={recipe}
            onChange={handleChange}
            placeholder="Search recipes"
          ></input>
          <BiSearch color="#fff" size="2vh" />
        </div>
      </section>

      {recipe && <RecipeApi search={recipe} loading={loading} />}
    </>
  );
}

function RecipeSearch(props) {
  return (
    <div
      className="recipe_search"
      onMouseOver={props.mouseOver}
      onMouseLeave={props.mouseLeave}
    >
      <RecipeForm />
    </div>
  );
}

export default React.memo(RecipeSearch);
