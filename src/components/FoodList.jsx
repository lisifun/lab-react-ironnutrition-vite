import React, { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);

  const deleteThisFood = (selectedId) => {
    let udpatedFood = foods.filter((food) => {
      return food.id !== selectedId;
    });
    setFoods(udpatedFood);
  };

  const addNewFood = (newFood) => {
    let udpatedFood = [newFood, ...foods];
    setFoods(udpatedFood);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>LAB | React IronNutrition</h1>
      <h3>Add Food Entry</h3>
      <AddFoodForm addNewFood={addNewFood} />
      <h3>Food List</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {foods.map((food, index) => {
          return (
            <FoodBox key={index} food={food} deleteThisFood={deleteThisFood} />
          );
        })}
      </div>
    </div>
  );
};

export default FoodList;
