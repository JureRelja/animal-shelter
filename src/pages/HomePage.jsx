import React from "react";
import Location from "../Components/homePage/Location";
import ContactForm from "../Components/homePage/ContactForm";
import classes from "./HomePage.module.css";
import ContactData from "../Components/homePage/ContactData";

function HomePage() {
  return (
    <div className={classes.home}>
      <div className={classes.text}>
        <h2>O nama</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          fringilla neque, nec lobortis nunc. In felis justo, interdum id nisi
          vitae, cursus faucibus enim. Nulla tempus arcu eu felis ullamcorper,
          vehicula luctus neque maximus. Integer vel lacinia mi. Aenean at
          tincidunt tortor. Maecenas aliquam purus accumsan sem maximus tempus.
          Morbi aliquet eros eu diam blandit, non commodo justo ultricies.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          fringilla neque, nec lobortis nunc. In felis justo, interdum id nisi
          vitae, cursus faucibus enim. Nulla tempus arcu eu felis ullamcorper,
          vehicula luctus neque maximus. Integer vel lacinia mi. Aenean at
          tincidunt tortor. Maecenas aliquam purus accumsan sem maximus tempus.
          Morbi aliquet eros eu diam blandit, non commodo justo ultricies.
        </p>
      </div>
      <div className={classes["location-map"]}>
        <h2>Lokacija</h2>
        <Location />
      </div>
      <div className={classes.contact}>
        <ContactData />
        <ContactForm />
      </div>
    </div>
  );
}

export default HomePage;
