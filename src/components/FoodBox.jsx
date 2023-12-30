// Your code here
import React from "react";

const FoodBox = ({ food }) => {
  const { name, calories, image, servings } = food;
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "20px" }}>
      <p>
        <b>{name}</b>
      </p>

      <img src={image} style={{ width: "150px", height: "100px" }} />

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
