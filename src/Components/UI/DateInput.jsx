import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import classes from "./DateInput.module.css";

function DateInput(props) {
  return (
    <div className={classes.date}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label={props.label}
            value={dayjs(props.value)}
            onAccept={(newValue) => props.handleChange(newValue)}
            sx={{ width: "100%" }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default DateInput;
