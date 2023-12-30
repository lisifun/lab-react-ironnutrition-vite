import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  console.log(foods);
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => {
        return <FoodBox key={index} food={food} />;
      })}
    </div>
  );
}

export default App;
