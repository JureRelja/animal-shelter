import React from "react";
import classes from "./DonationForm.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import SelectInput from "../UI/SelectInput";
import TextField from "@mui/material/TextField";
import Modal from "../UI/Modal";

const donationTypes = [
  { label: "Odaberi tip donacije", value: "odaberi" },
  { label: "Igračke", value: "igracke" },
  { label: "Hrana", value: "hrana" },
  { label: "Lijekovi", value: "lijekovi" },
  { label: "Veterinarski troškovi", value: "vetTroskovi" },
  { label: "Ostalo", value: "ostalo" },
];

function DonationForm(props) {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationType, setDonationType] = useState("odaberi");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const handleOpenCloseDonateForm = () => {
    setShowDonationForm((currentState) => !currentState);
  };

  const handleNewDonation = (e) => {
    e.preventDefault();
    if (donationType === "odaberi" || amount === "") {
      setShowError(true);
      return;
    }
    setShowDonationForm((currentState) => !currentState);

    const labelDonationType = donationTypes.find(
      (donation) => donation.value === donationType
    ).label;

    const donation = {
      variant: labelDonationType,
      value: amount,
      description: description,
      category: "",
    };
    props.addDonation(donation);
    setDonationType("odaberi");
    setAmount("");
    setDescription("");
  };

  return (
    <>
      <div className={classes["new-donation-btn"]}>
        <Button
          onClick={handleOpenCloseDonateForm}
          label="Dodaj donaciju"
          type="yellow"
        />
      </div>
      {showDonationForm && (
        <Modal closeCustomize={handleOpenCloseDonateForm}>
          <div className={classes["donation-form"]}>
            <h2>Dodaj novu donaciju</h2>
            {showError && <p>Molimo unesite ispravne podatke</p>}
            <form className={classes["donation-form__form"]}>
              <SelectInput
                options={donationTypes}
                label={"Vrsta donacije"}
                value={donationType}
                handleChange={setDonationType}
              />
              <TextField
                label={"Iznos"}
                type="number"
                variant="standard"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <TextField
                label={"Opis donacije"}
                type="text"
                variant="standard"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Button
                onClick={handleNewDonation}
                label="Dodaj donaciju"
                type="yellow"
              />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DonationForm;
