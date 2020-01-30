import React from "react";

import "./search-box.styles.css";
import CustomButton from "../custom-button/custom-button.component";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className='search-and-sort'>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      <CustomButton />
    </div>
  );
};
