import React from "react";
import classes from "./ImageInput.module.css";
import TextField from "@mui/material/TextField";
import axios from "axios";

function ImageInput(props) {
  const checkImage = (image) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image);
  };

  const setImage = (link) => {
    const result = checkImage(link);
    if (result) {
      props.setDisplayImageLink(link);
      return;
    }
    props.setDisplayImageLink("");
  };

  const handleImageChange = (e) => {
    props.setImageLink(e.target.value);

    setImage(e.target.value);
  };

  return (
    <div className={classes.image}>
      {props.displayImageLink.trim() === "" ? (
        ""
      ) : (
        <img src={props.displayImageLink} className={classes.image} />
      )}

      <TextField
        id="standard-basic"
        label="Link Slike"
        variant="standard"
        fullWidth
        onChange={handleImageChange}
        value={props.imageLink}
      />
    </div>
  );
}

export default ImageInput;
