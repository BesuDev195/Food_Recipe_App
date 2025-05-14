import React, { useEffect, useState } from "react";
import styles from "../Components/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "d3bbf27960514987ae3db7252e51effb";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
