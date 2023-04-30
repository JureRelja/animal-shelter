import React from "react";
import classes from "./ImageInput.module.css";
import TextField from "@mui/material/TextField";
import axios from "axios";

function ImageInput(props) {
  const checkImage = async (image) => {
    try {
      const response = await axios.get(image);
      console.log(response.status);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const setImage = async (link) => {
    const result = await checkImage(link);
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
