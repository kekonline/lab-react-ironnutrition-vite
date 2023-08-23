import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";
import Search from "./components/Search";
import foodsJson from "./foods.json";
import { useState } from "react";

import { Collapse, Divider } from "antd";

function App() {
  const [allFoods, setallFoods] = useState(foodsJson);
  const [allFoodsMasterList, setAllFoodsMasterList] = useState(foodsJson);

  const contStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // height: "98vh",
    // width: "100vw",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <div className="App">
      <Divider orientation="left">LAB | React IronNutrition</Divider>

      <Collapse
        collapsible="all"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "Zearch Some Foodz",
            children: (
              <Search
                allFoods={allFoods}
                setallFoods={setallFoods}
                allFoodsMasterList={allFoodsMasterList}
              />
            ),
          },
          {
            key: "2",
            label: "Addz Some Foodz",
            children: (
              <AddFoodForm
                allFoods={allFoods}
                setallFoods={setallFoods}
                setAllFoodsMasterList={setAllFoodsMasterList}
              />
            ),
          },
        ]}
      />

      <div style={contStyle}>
        {allFoods.length !== 0 ? (
          <FoodList
            allFoods={allFoods}
            setallFoods={setallFoods}
            setAllFoodsMasterList={setAllFoodsMasterList}
          />
        ) : (
          <div>
            <Divider orientation="center">OH!!!!!! No Foodz!!!</Divider>
            <img src="https://media.tenor.com/0IXfCqDrIAQAAAAC/no-food-angry.gif" />
          </div>
        )}
      </div>
      {/* <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      /> */}
    </div>
  );
}

export default App;
