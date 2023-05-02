import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import classes from "./Animals.module.css";
import Animal from "./Animal";

function Animals(props) {
  const [animals, setAnimals] = useState([]);

  const getAnimals = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/animals.json"
      );
      const animals = response.data;
      const animalsArray = [];

      for (const key in animals) {
        animalsArray.push({
          id: key,
          ...animals[key],
        });
      }
      setAnimals(animalsArray);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAnimals();
  }, [getAnimals]);

  const adoptHandler = async (id) => {
    try {
      const response = await axios.patch(
        `https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/animals/${id}.json`,
        { adopted: true }
      );
      setAnimals((currentState) =>
        currentState.map((animal) =>
          animal.id === id ? { ...animal, adopted: true } : animal
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateAnimalHandler = async (animal) => {
    try {
      const response = await axios.patch(
        `https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/animals/${animal.id}.json`,
        animal
      );
      setAnimals((currentState) => {
        const newArray = currentState.map((item) => {
          if (item.id === animal.id) {
            return animal;
          }
          return item;
        });
        return newArray;
      });
    } catch (error) {
      console.log(error);
    }
  };

  let filteredByStatus = null;

  if (props.adoptedFilter === "false") {
    filteredByStatus = false;
  } else if (props.adoptedFilter === "true") {
    filteredByStatus = true;
  }

  let searchFilter =
    props.searchFilter.toLowerCase() === ""
      ? "all"
      : props.searchFilter.toLowerCase();

  return (
    <div className={classes["animals"]}>
      {animals.length === 0 ? (
        <h1>Učitavanje...</h1>
      ) : (
        <>
          {animals.map((animal) =>
            (filteredByStatus === null ||
              filteredByStatus === animal.adopted) &&
            (props.typeFilter === "all" || props.typeFilter === animal.type) &&
            (searchFilter === "all" ||
              searchFilter === animal.name.toLowerCase()) ? (
              <Animal
                key={animal.id}
                animal={animal}
                adopt={adoptHandler}
                updateAnimal={updateAnimalHandler}
              />
            ) : null
          )}
        </>
      )}
    </div>
  );
}

export default Animals;
