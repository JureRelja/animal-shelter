import React from "react";
import { useState } from "react";
import classes from "./ContactForm.module.css";
import Button from "../UI/Button";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formValid, setFormValid] = useState(true);
  const [formSubmited, setFormSubmited] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFormValid(false);
      return;
    }
    setFormValid(true);
    setFormSubmited(true);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h2>Pošaljite upit</h2>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="name">Ime i prezime</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="message">Poruka</label>
          <textarea
            id="message"
            name="message"
            onChange={messageChangeHandler}
          />
        </div>
        {!formValid && (
          <p className={classes.error}>Molimo popunite sva polja!</p>
        )}

        {formValid && formSubmited && (
          <p className={classes.error}>Vaša poruka je uspješno poslana</p>
        )}
        <Button type="black" label="Pošalji upit" />
      </form>
    </div>
  );
}

export default ContactForm;
