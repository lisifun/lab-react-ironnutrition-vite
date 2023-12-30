import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteThisFood = (selectedId) => {
    let udpatedFood = foods.filter((food) => {
      return food.id !== selectedId;
    });
    setFoods(udpatedFood);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => {
        return (
          <FoodBox key={index} food={food} deleteThisFood={deleteThisFood} />
        );
      })}
    </div>
  );
}

export default App;
