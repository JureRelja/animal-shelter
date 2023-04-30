import React from "react";
import InputForm from "../Components/newAnimalsPage/InputForm";
import axios from "axios";

function NewAnimalPage() {
  const newAnimalHandler = async (animal) => {
    const chip = animal.chip === "true" ? true : false;
    const adopted = animal.adopted === "true" ? true : false;

    const animalForSubmit = {
      ...animal,
      chip: chip,
      adopted: adopted,
    };

    try {
      axios.post(
        "https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/animals.json",
        animalForSubmit
      );
    } catch (error) {
      console.log(error);
    }
  };

  return <InputForm newAnimal={newAnimalHandler} />;
}

export default NewAnimalPage;
