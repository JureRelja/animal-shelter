import React from "react";
import classes from "./DisplayDonations.module.css";
import Donations from "./Donations";

function DisplayDonations(props) {
  const donated = props.donations.filter(
    (donation) => donation.category === "donirano"
  );
  const needDonations = props.donations.filter(
    (donation) => donation.category === "trazi"
  );
  const giveDonations = props.donations.filter(
    (donation) => donation.category === "nudi"
  );

  return (
    <div className={classes.donations}>
      <Donations
        donations={needDonations}
        heading={"Tražimo"}
        color={"red"}
        delete={props.deleteDonation}
        donate={props.donateDonation}
      />
      <Donations
        donations={giveDonations}
        heading={"Nudi se"}
        color={"yellow"}
        donate={props.donateDonation}
      />
      <Donations
        donations={donated}
        heading={"Donirano"}
        color="green"
        delete={props.deleteDonation}
        reList={props.reListDonation}
      />
    </div>
  );
}

export default DisplayDonations;
