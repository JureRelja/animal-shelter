import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
import { UserStatusContext } from "../store/UserStatusProvider";
import { useContext } from "react";
import classes from "./Navigation.module.css";

function Navigation() {
  const { userStatus, changeUserStatus } = useContext(UserStatusContext);

  const handleUserStatusChange = () => {
    changeUserStatus();
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Jurin azil za životinje</h1>
        <div className={classes["admin-switch"]}>
          <p>Admin</p>
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            onChange={handleUserStatusChange}
            checked={userStatus === "admin"}
          />
        </div>
      </header>
      <nav>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Početna
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animals"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Popis životinja
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donations"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Donacije
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Obavijesti
            </NavLink>
          </li>
          {userStatus === "admin" && (
            <li>
              <NavLink
                to="/animals/new"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Dodaj životinju
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
