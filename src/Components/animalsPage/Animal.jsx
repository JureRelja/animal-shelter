import React from "react";
import classes from "./Animal.module.css";
import { UserStatusContext } from "../../store/UserStatusProvider";
import { useContext, useState } from "react";
import Customizing from "./Customizing";
import Button from "../UI/Button";

function Animal(props) {
  const userStatus = useContext(UserStatusContext);
  const [customizing, setCustomizing] = useState(false);

  const adopted = props.animal.adopted ? "Udomljen" : "Nije udomljen";
  const chip = props.animal.chip ? "Da" : "Ne";

  const animalClass = props.animal.adopted
    ? classes.animal + " " + classes.adopted
    : classes.animal + " " + classes["not-adopted"];

  const adoptHandler = () => {
    props.adopt(props.animal.id);
  };

  const openCloseCustomize = () => {
    setCustomizing((prevState) => !prevState);
  };

  const saveChangesHandler = (item) => {
    openCloseCustomize();
    props.updateAnimal(item);
  };

  return (
    <>
      {customizing && (
        <Customizing
          saveChanges={saveChangesHandler}
          close={openCloseCustomize}
          animal={props.animal}
        />
      )}
      <div className={animalClass}>
        <img src={props.animal.image} />
        <div className={classes.info}>
          <div className={classes["name-description"]}>
            <h2>{props.animal.name}</h2>
            <i>{props.animal.description}</i>
          </div>
          <div className={classes.properties}>
            <p>
              <b>Godine: </b>
              {props.animal.age}
            </p>
            <p>
              <b>Vrsta: </b>
              {props.animal.type}
            </p>
            <p>
              <b>Status: </b>
              {adopted}
            </p>
            <p>
              <b>Čipiran: </b>
              {chip}
            </p>
            <p>
              <b>Posljednji pregled: </b>
              {props.animal.appointment}
            </p>
          </div>
        </div>
        <div className={classes.buttons}>
          {!props.animal.adopted && (
            <Button type="green" onClick={adoptHandler} label={"Udomi"} />
          )}

          {userStatus.userStatus === "admin" && (
            <Button
              type="yellow"
              onClick={openCloseCustomize}
              label={"Uredi"}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Animal;
