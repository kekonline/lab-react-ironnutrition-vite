// Your code here
import { Card, Divider, Button } from "antd";

function FoodBox(props) {
  const { id, name, calories, image, servings } = props.food;

  //   console.log(props.allFoods);

  const handleDeleteButton = (id) => {
    const allExceptDeletedFoods = props.allFoods.filter((oneFood) => {
      return id === oneFood.id ? false : true;
    });
    props.setallFoods(allExceptDeletedFoods);
    props.setAllFoodsMasterList(allExceptDeletedFoods);
    console.log(id);
  };

  const imageCont = {
    overflow: "hidden",
    width: "200px",
    height: "150px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Card key={id}>
      <p>{name}</p>
      <Divider type="horizontal" />
      <div style={imageCont}>
        <img src={image} width="200px" />
      </div>
      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>
      <p>
        <b>Total Calories: {calories * servings} </b> kcal
      </p>

      <Button
        type="primary"
        onClick={() => {
          handleDeleteButton(id);
        }}
      >
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
