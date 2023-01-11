import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import RecipeLoader from "./RecipeLoader";

function RecipeCard(props) {
  return (
    // Here put `link to` and give unique ids to move
    <>
      {props.data.instructions ? (
        <Link to={`/recipes/${props.data.id}`}>
          <div className="recipe_card">
            <div
              className="recipe_img"
              style={{ backgroundImage: `url(${props.data.thumbnail_url})` }}
            />
            <h1>{props.data.name}</h1>
          </div>
        </Link>
      ) : (
        <div
          className="recipe_card"
          onClick={(e) =>
            props.onCompRecipeClicked({
              id: props.data.recipes,
              name: props.data.name,
              description: props.data.description,
              recipes: props.data.recipes,
            })
          }
        >
          <div
            className="recipe_img"
            style={{ backgroundImage: `url(${props.data.thumbnail_url})` }}
          />
          <h1>{props.data.name}</h1>
        </div>
      )}
    </>
  );
}

function RecipeApi(props) {
  const searchedOne = props.search;

  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(props.loading);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const [compRecipe, setCompRecipe] = useState({
    id: "",
    name: "",
    description: "",
    recipes: [],
  });

  function onCompRecipe(recipeInfo) {
    setCompRecipe({ ...recipeInfo });
    window.scroll(0, 0);
  }
  useEffect(() => {
    fetch(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=$${searchedOne}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setApi([...response.results]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [searchedOne]);

  return (
    <>
      {compRecipe.recipes.length !== 0 && (
        <div className="recipe_comp_wrapper">
          <CgClose
            style={{ cursor: "pointer", color: "#fff" }}
            size="4vh"
            onClick={() =>
              setCompRecipe({ id: "", name: "", description: "", recipes: [] })
            }
          />
          <h1>{compRecipe.name}</h1>
          <div className="recipe_comp_card_wrapper">
            {compRecipe.recipes.map((re) => (
              <Link
                to={`/recipes/${re.id}`}
                className="recipe_comp_card"
                key={re.id}
              >
                <div
                  className="recipe_comp_img"
                  style={{ backgroundImage: `url(${re.thumbnail_url})` }}
                />
                <h4>{re.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}
      <section className="recipe_api">
        <h2 className="recepe_api_title">Here are the recipes for you!</h2>
        {loading ? <RecipeLoader /> : ""}
        <div className="recipe_api_boxes">
          {searchedOne.length > 0 &&
            api.map((api) => (
              <div key={api.id}>
                <RecipeCard data={api} onCompRecipeClicked={onCompRecipe} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default React.memo(RecipeApi);
