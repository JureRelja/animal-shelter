import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import classes from "./RadioInput.module.css";

function RadioInput(props) {
  const sx = props.style
    ? { flexDirection: "row" }
    : { flexDirection: "column" };

  return (
    <div
      className={
        props.direction === "column"
          ? classes["radio-column"]
          : classes["radio-row"]
      }
    >
      <FormLabel id="demo-radio-buttons-group-label">{props.label}:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={props.value}
        onChange={(e) => {
          props.handleChange(e.target.value);
        }}
        sx={sx}
      >
        {props.options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
            key={option.value}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default RadioInput;
