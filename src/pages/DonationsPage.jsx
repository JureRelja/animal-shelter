import classes from "./DonationsPage.module.css";
import DonationForm from "../Components/donationsPage/DonationForm";
import DisplayDonations from "../Components/donationsPage/DisplayDonations";
import { useState, useContext, useEffect, useCallback } from "react";
import { UserStatusContext } from "../store/UserStatusProvider";
import axios from "axios";

function DonationsPage() {
  const [donations, setDonations] = useState([]);
  const ctx = useContext(UserStatusContext);

  const getDonations = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/donations.json"
      );
      const data = response.data;

      const newDonations = [];
      for (const key in response.data) {
        const donation = {
          id: key,
          ...data[key],
        };
        newDonations.push(donation);
      }
      setDonations(newDonations);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getDonations();
  }, [getDonations]);

  const deleteDonation = async (id) => {
    try {
      await axios.delete(
        `https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/donations/${id}.json`
      );
      setDonations((currentState) => {
        const newState = currentState.filter((donation) => donation.id !== id);
        return newState;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const reListDonation = async (donation) => {
    const reListDonation = { ...donation, category: "trazi" };
    delete reListDonation.id;
    try {
      const response = await axios.post(
        `https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/donations.json`,
        reListDonation
      );
      setDonations((currentState) => [
        ...currentState,
        { ...reListDonation, id: response.data.name },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const donateDonation = async (id) => {
    try {
      await axios.patch(
        `https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/donations/${id}.json`,
        { category: "donirano" }
      );
      setDonations((currentState) => {
        const newState = currentState.map((donation) => {
          if (donation.id === id) {
            return { ...donation, category: "donirano" };
          }
          return donation;
        });
        return newState;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addDonation = async (donation) => {
    if (ctx.userStatus === "admin") {
      donation.category = "trazi";
    } else {
      donation.category = "nudi";
    }
    try {
      const response = await axios.post(
        "https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/donations.json",
        donation
      );
      setDonations((currentState) => {
        const newState = [
          ...currentState,
          { ...donation, id: response.data.name },
        ];
        return newState;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <DonationForm addDonation={addDonation} />
      <DisplayDonations
        deleteDonation={deleteDonation}
        donateDonation={donateDonation}
        reListDonation={reListDonation}
        donations={donations}
      />
    </div>
  );
}

export default DonationsPage;
