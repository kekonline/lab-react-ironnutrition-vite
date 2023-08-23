import { Divider, Input } from "antd";
import { useState } from "react";

function Search({ setallFoods, allFoodsMasterList }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    const searchResults = allFoodsMasterList.filter((oneFood) => {
      return oneFood.name
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase())
        ? true
        : false;
    });
    console.log(searchResults);
    setSearchInput(event.target.value);
    setallFoods(searchResults);
  };

  return (
    <div>
      <form>
        <Divider orientation="left" htmlFor="search">
          Search:
        </Divider>
        <Input
          type="text"
          name="name"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <br />
      </form>
    </div>
  );
}

export default Search;
