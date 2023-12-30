import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
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
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <h3>Add Food Entry</h3>
      <AddFoodForm addNewFood={addNewFood} />
      <h3>Food List</h3>
      {foods.map((food, index) => {
        return (
          <FoodBox key={index} food={food} deleteThisFood={deleteThisFood} />
        );
      })}
    </div>
  );
}

export default App;
