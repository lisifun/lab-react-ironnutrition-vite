// Your code here
import React from "react";

const FoodBox = ({ food }) => {
  const { name, calories, image, servings } = food;
  return (
    <div>
      <p>
        <b>{name}</b>
      </p>

      <img src={image} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button>Delete</button>
    </div>
  );
};

export default FoodBox;
