import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./FoodDetail.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setfood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d3bbf27960514987ae3db7252e51effb";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setfood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong> ⏲{food.readyInMinutes} Minutes</strong>
        </span>
        <span>serves: {food.servings} People</span>
        <span>{food.vegetarian ? " 🥝Vegeterial" : "🍖Non-Vegiterial"}</span>
        <span>{food.vegan ? " 🐮Vegan" : ""}</span>
        <div>
          <span> ＄{food.pricePerServing}</span>
        </div>
      </div>
      <div>
        <h2>Ingridents</h2>
        {food.extendedIngredients.map((item) => (
          <div>
            <h3>{item.name}</h3>
          </div>
        ))}
        <h2>Instructions </h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
