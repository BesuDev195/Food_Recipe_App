import React from "react";
import styles from "./FoodItem.module.css";

export default function FoodItem({ food,setFoodId }) {
  return (
    <div className={styles.itemConatiner}>
      <img className={styles.itemImage} src={food.image} alt="pasta" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttContainer}>
        {" "}
        <button onClick={()=>{
          setFoodId(food.id)
        }} className={styles.itemButton}>View recipe</button>
      </div>
    </div>
  );
}
