// Your code here
import React, { useState } from "react";

const AddFoodForm = ({ addNewFood }) => {
  const [newFood, setNewFood] = useState({
    id: "",
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleTextInput = (e) => {
    setNewFood((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumberInput = (e) => {
    setNewFood((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",

          gap: "20px",
        }}
      >
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={newFood.name}
            onChange={handleTextInput}
          ></input>
        </div>

        <div>
          <label>Image</label>
          <input
            name="image"
            type="text"
            value={newFood.image}
            onChange={handleTextInput}
          ></input>
        </div>

        <div>
          <label>Calories</label>
          <input
            name="calories"
            type="number"
            value={newFood.calories}
            onChange={handleNumberInput}
          ></input>
        </div>

        <div>
          <label>Servings</label>
          <input
            name="servings"
            type="number"
            value={newFood.servings}
            onChange={handleNumberInput}
          ></input>
        </div>
      </form>
      <button
        style={{ margin: "20px" }}
        onClick={() => {
          addNewFood(newFood);
        }}
      >
        Create
      </button>
    </div>
  );
};

export default AddFoodForm;
