import React from "react";
import "./header.styles.css";

const Header = ({ iban }) => (
  <div className='header'>
    <h1>{iban[0]}</h1>
  </div>
);

export default Header;
