import FoodBox from "./FoodBox";

function FoodList({ allFoods, setallFoods, setAllFoodsMasterList }) {
  return allFoods.map((oneFoodz) => {
    return (
      <FoodBox
        key={Math.random() * 1000000}
        food={oneFoodz}
        allFoods={allFoods}
        setallFoods={setallFoods}
        setAllFoodsMasterList={setAllFoodsMasterList}
      />
    );
  });
}

export default FoodList;
