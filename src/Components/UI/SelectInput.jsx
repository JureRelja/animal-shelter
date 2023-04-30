import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import classes from "./SelectInput.module.css";

function SelectInput(props) {
  return (
    <div className={classes.select}>
      <InputLabel id="demo-simple-select-label" sx={{ width: "fitContent" }}>
        {props.label}:
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        label={props.label}
        onChange={(e) => props.handleChange(e.target.value)}
        sx={{ flexGrow: "1" }}
      >
        {props.options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default SelectInput;
