import React from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(props) {
  return (
    <div className={classes["search-bar"]}>
      <input
        type="text"
        placeholder="Pretraži po imenu životinje"
        onChange={(e) => props.setSearchFilter(e.target.value)}
        value={props.searchFilter}
      />
      <SearchIcon
        className={classes["search-icon"]}
        sx={{
          padding: "3px",
          color: "#f8f8f8",
          backgroundColor: "#1976D2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      />
    </div>
  );
}

export default SearchBar;
