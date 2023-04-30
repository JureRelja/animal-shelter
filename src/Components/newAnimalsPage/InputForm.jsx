import React from "react";
import classes from "./InputForm.module.css";
import SelectInput from "../UI/SelectInput";
import RadioInput from "../UI/RadioInput";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import DateInput from "../UI/DateInput";
import dayjs from "dayjs";
import ImageInput from "../UI/ImageInput";
import { types, chipList } from "../../store/animalProperties";
import Button from "../UI/Button";

const newTypes = [{ label: "Odaberi vrstu", value: "odaberi-vrstu" }, ...types];

let initial = 0;

function InputForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("odaberi-vrstu");
  const [appointmentDate, setAppointmentDate] = useState(dayjs(new Date())); // [
  const [chip, setChip] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [displayImageLink, setDisplayImageLink] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      age.trim() === "" ||
      chip.trim() === "" ||
      type === "odaberi-vrstu" ||
      imageLink.trim() === ""
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const newAnimal = {
      name,
      description,
      age,
      type,
      chip,
      appointment: appointmentDate.toISOString().split("T")[0],
      image: imageLink,
    };
    props.newAnimal(newAnimal);

    setName("");
    setDescription("");
    setAge("");
    setType("odaberi-vrstu");
    setChip("");
    setAppointmentDate(dayjs(new Date()));
    setImageLink("");
    setDisplayImageLink("");
    initial++;
  };

  useEffect(() => {
    if (initial === 0) {
      return;
    } else {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [initial]);

  return (
    <>
      {showSuccess && <h2>Životinja uspješno dodana</h2>}
      <form className={classes.center} onSubmit={handleSubmit}>
        <ImageInput
          imageLink={imageLink}
          setImageLink={setImageLink}
          displayImageLink={displayImageLink}
          setDisplayImageLink={setDisplayImageLink}
        />
        <div className={classes.info}>
          {showError && <p>Molimo popunite ispravno sva polja</p>}

          <TextField
            id="standard-basic"
            label="Ime"
            variant="standard"
            value={name}
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Opis"
            variant="standard"
            value={description}
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Godine"
            variant="standard"
            type="number"
            value={age}
            fullWidth
            onChange={(e) => {
              if (e.target.value < 0) {
                setAge(0);
              } else {
                setAge(e.target.value);
              }
            }}
          />
          <SelectInput
            value={type}
            label={"Vrsta"}
            handleChange={setType}
            options={newTypes}
          />
          <RadioInput
            options={chipList}
            value={chip}
            label="Čipiran"
            handleChange={setChip}
            style={true}
            direction="row"
          />
          <DateInput
            value={appointmentDate}
            handleChange={setAppointmentDate}
            label={"Posljednji pregled"}
          />
        </div>
        <Button label="Dodaj novu životinju" type="yellow" />
      </form>
    </>
  );
}

export default InputForm;
