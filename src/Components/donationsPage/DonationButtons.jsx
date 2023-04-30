import React from "react";
import classes from "./DonationButtons.module.css";
import Button from "../UI/Button";
import { UserStatusContext } from "../../store/UserStatusProvider";
import { useContext } from "react";

function DonationButtons(props) {
  const userStatus = useContext(UserStatusContext);

  return (
    <div className={classes.buttons}>
      {props.category === "donirano" ? (
        userStatus.userStatus === "admin" ? (
          <>
            <Button
              type="yellow"
              onClick={() => props.reList(props.donation)}
              label={"Ponovi"}
            />
            <Button
              type="red"
              onClick={() => props.delete(props.donation.id)}
              label={"Izbriši"}
            />
          </>
        ) : null
      ) : props.category === "nudi" ? (
        userStatus.userStatus === "admin" ? (
          <Button
            type="yellow"
            onClick={() => props.donate(props.donation.id)}
            label={"Prihvati"}
          />
        ) : null
      ) : props.category === "trazi" ? (
        userStatus.userStatus === "admin" ? (
          <>
            <Button
              type="green"
              onClick={() => props.donate(props.donation.id)}
              label={"Donirano"}
            />
            <Button
              type="red"
              onClick={() => props.delete(props.donation.id)}
              label={"Izbriši"}
            />
          </>
        ) : (
          <Button
            type="green"
            onClick={() => props.donate(props.donation.id)}
            label={"Doniraj"}
          />
        )
      ) : null}
    </div>
  );
}

export default DonationButtons;
