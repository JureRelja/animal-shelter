import React from "react";
import Modal from "../UI/Modal";
import classes from "./Customizing.module.css";
import SelectInput from "../UI/SelectInput";
import RadioInput from "../UI/RadioInput";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import DateInput from "../UI/DateInput";
import { types, status, chipList } from "../../store/animalProperties";
import Button from "../UI/Button";
import dayjs from "dayjs";
import ImageInput from "../UI/ImageInput";

function Customizing(props) {
  const [name, setName] = useState(props.animal.name);
  const [description, setDescription] = useState(props.animal.description);
  const [age, setAge] = useState(props.animal.age);
  const [type, setType] = useState(props.animal.type);
  const [appointmentDate, setAppointmentDate] = useState(
    props.animal.appointment
  );
  const [adopted, setAdopted] = useState(props.animal.adopted);
  const [chip, setChip] = useState(props.animal.chip);
  const [imageLink, setImageLink] = useState(props.animal.image);
  const [displayImageLink, setDisplayImageLink] = useState(props.animal.image);

  const saveChangesHandler = () => {
    if (
      name === "" ||
      age === "" ||
      chip === "" ||
      type === "" ||
      imageLink === ""
    ) {
      alert("Morate popuniti sva polja!");
      return;
    }

    let adoptedBolean;
    if (typeof adopted === "boolean") {
      adoptedBolean = adopted;
    }
    adoptedBolean = adopted === "true" ? true : false;

    let chipBolean;
    if (typeof chip === "boolean") {
      chipBolean = chip;
    }
    chipBolean = chip === "true" ? true : false;

    let appointment;

    if (typeof appointmentDate == "string") {
      //Runs if date input has not been changed
      appointment = appointmentDate.split("T")[0];
    } else {
      // Workaround because date input is one day behind
      const date = appointmentDate.toISOString().split("T")[0];
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      appointment = newDate.toISOString().split("T")[0];
    }

    props.saveChanges({
      id: props.animal.id,
      name: name,
      description: description,
      age: age,
      type: type,
      adopted: adoptedBolean,
      chip: chipBolean,
      appointment: appointment,
      image: imageLink,
    });
  };

  return (
    <Modal closeCustomize={props.close} animal={props.animal}>
      <div className={classes.animal}>
        <div className={classes.center}>
          <ImageInput
            imageLink={imageLink}
            setImageLink={setImageLink}
            displayImageLink={displayImageLink}
            setDisplayImageLink={setDisplayImageLink}
          />
          <div className={classes.info}>
            <div className={classes["name-description"]}>
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
            </div>
            <div className={classes.properties}>
              <TextField
                id="standard-basic"
                label="Godine"
                variant="standard"
                type="number"
                value={age}
                fullWidth
                onChange={(e) => setAge(e.target.value)}
              />
              <SelectInput
                value={type}
                label={"Vrsta"}
                handleChange={setType}
                options={types}
              />
              <RadioInput
                options={status}
                value={adopted}
                label={"Status"}
                handleChange={setAdopted}
                style={true}
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
          </div>
          <div className={classes.buttons}>
            <Button
              type="yellow"
              onClick={saveChangesHandler}
              label={"Spremi"}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Customizing;
