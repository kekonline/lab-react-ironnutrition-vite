import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [servingsInput, setServingsInput] = useState("");

  const handleAddButton = (event) => {
    event.preventDefault();

    props.setallFoods([
      {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput,
      },
      ...props.allFoods,
    ]);

    props.setAllFoodsMasterList([
      {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput,
      },
      ...props.allFoods,
    ]);
  };

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageInput(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServingsInput(event.target.value);
  };

  return (
    <div>
      <form>
        <Divider orientation="left" htmlFor="name">
          Name:{" "}
        </Divider>
        <Input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={nameInput}
        />
        <br />
        <Divider orientation="left" htmlFor="image">
          Image:{" "}
        </Divider>
        <Input
          type="text"
          name="image"
          onChange={handleImageChange}
          value={imageInput}
        />
        <br />
        <Divider orientation="left" htmlFor="calories">
          Calories:{" "}
        </Divider>
        <Input
          type="number"
          name="calories"
          onChange={handleCaloriesChange}
          value={caloriesInput}
        />
        <br />
        <Divider orientation="left" htmlFor="servings">
          Servings:{" "}
        </Divider>
        <Input
          type="number"
          name="servings"
          onChange={handleServingsChange}
          value={servingsInput}
        />
        <br />
        <Button
          style={{ marginTop: "10px" }}
          type="primary"
          onClick={handleAddButton}
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
