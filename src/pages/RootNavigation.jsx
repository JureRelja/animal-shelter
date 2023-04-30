import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import classes from "./RootNavigation.module.css";

function RootNavigation() {
  return (
    <div className={classes["root-navigation"]}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default RootNavigation;
