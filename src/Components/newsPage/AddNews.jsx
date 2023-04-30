import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./AddNews.module.css";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function AddNews(props) {
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showErrorTitle, setShowErrorTitle] = useState(false);
  const [showErrorDescription, setShowErrorDescription] = useState(false);

  const handleOpenCloseNewsForm = () => {
    setShowNewsForm((currentState) => !currentState);
  };

  const handleAddNews = (e) => {
    e.preventDefault();

    if (title.trim().length === 0 || description.trim().length === 0) {
      setShowError(true);
      return;
    }

    if (title.length > 20) {
      setShowErrorTitle(true);
      return;
    }

    if (description.length > 200 || description.length < 10) {
      setShowErrorDescription(true);
      return;
    }
    submitNewNews();
  };

  const submitNewNews = () => {
    setShowError(false);
    setShowErrorTitle(false);
    setShowErrorDescription(false);
    const news = {
      date: new Date().toISOString(), // Today's date
      title,
      text: description,
      important,
    };
    props.addNews(news);
    setTitle("");
    setDescription("");
    setImportant(false);
    setShowNewsForm(false);
  };

  return (
    <>
      <div className={classes["new-news-btn"]}>
        <Button
          onClick={handleOpenCloseNewsForm}
          label="Nova obavijest"
          type="yellow"
        />
      </div>
      {showNewsForm && (
        <Modal closeCustomize={handleOpenCloseNewsForm}>
          <div className={classes["new-news-form"]}>
            <h2>Dodaj novu obavijest</h2>
            {showError && <p>Unesite sve podatke</p>}
            <form className={classes.form}>
              <TextField
                label={"Naslov"}
                type="text"
                error={showErrorTitle}
                helperText={
                  showErrorTitle
                    ? "Naslov može sadržavati maksimalno 20 znakova"
                    : ""
                }
                variant="standard"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                label={"Tekst"}
                error={showErrorDescription}
                helperText={
                  showErrorDescription
                    ? "Tekst može sadržavati minimalno 10, a maksimalno 200 znakova"
                    : ""
                }
                type="text"
                variant="standard"
                fullWidth
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={important}
                    onChange={(e) =>
                      setImportant((currentState) => !currentState)
                    }
                  />
                }
                sx={{ width: "100%" }}
                label="Važno"
              />
              <Button
                label="Dodaj obavijest"
                onClick={handleAddNews}
                type="yellow"
              />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default AddNews;
