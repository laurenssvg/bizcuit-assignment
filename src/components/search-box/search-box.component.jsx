import React from "react";

import "./search-box.styles.css";
import { TextField } from "@material-ui/core";

export const SearchBox = ({ handleChange }) => {
  return (
    <div className="search-and-sort">
      <TextField label="Search..." onChange={handleChange} />
    </div>
  );
};
