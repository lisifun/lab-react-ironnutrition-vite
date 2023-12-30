// Your code here
import React from "react";

const FoodBox = ({ food, deleteThisFood }) => {
  const { id, name, calories, image, servings } = food;

  return (
    <div
      style={{
        margin: "16px",
        padding: "16px",
        borderRadius: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p>
        <b>{name}</b>
      </p>

      <img src={image} style={{ width: "150px", height: "100px" }} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button
        onClick={() => {
          deleteThisFood(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default FoodBox;
