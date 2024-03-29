import React from "react";

import "./search-box.styles.css";
import { TextField } from "@material-ui/core";

export const SearchBox = ({ handleChange }) => {
  return (
    <div className='search'>
      <TextField label='Filter transactions...' onChange={handleChange} />
    </div>
  );
};
