import React from "react";
import classes from "./FilterOptions.module.css";
import RadioInput from "../UI/RadioInput";
import { types, status } from "../../store/animalProperties";

const allTypes = [{ label: "Svi", value: "all" }, ...types];
const allStatus = [{ label: "Svi", value: "all" }, ...status];

function FilterOptions(props) {
  return (
    <div className={classes.filter}>
      <RadioInput
        label="Status"
        value={props.adoptedFilter}
        options={allStatus}
        style={false}
        direction="column"
        handleChange={props.setAdoptedFilter}
      />
      <RadioInput
        label="Type"
        value={props.typeFilter}
        options={allTypes}
        handleChange={props.setTypeFilter}
        direction="column"
      />
    </div>
  );
}

export default FilterOptions;
