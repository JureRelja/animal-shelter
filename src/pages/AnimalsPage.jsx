import React from "react";
import FilterOptions from "../Components/animalsPage/FilterOptions";
import SearchBar from "../Components/UI/SearchBar";
import Animals from "../Components/animalsPage/Animals";
import classes from "./AnimalsPage.module.css";
import { useState } from "react";

function AnimalsPage() {
  const [adoptedFilter, setAdoptedFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={classes["animals-page"]}>
      <h2>Životinje u našem azilu</h2>
      <div className={classes["filter-display"]}>
        <div>
          <SearchBar
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <FilterOptions
            adoptedFilter={adoptedFilter}
            setAdoptedFilter={setAdoptedFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        </div>
        <Animals
          searchFilter={searchFilter}
          adoptedFilter={adoptedFilter}
          setAdoptedFilter={setAdoptedFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
        />
      </div>
    </div>
  );
}

export default AnimalsPage;
