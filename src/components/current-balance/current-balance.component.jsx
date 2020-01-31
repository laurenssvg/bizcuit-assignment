import React from "react";
import "./statement-balance.styles.css";

const CurrentBalance = ({ balance }) => {
  return <div>{balance.amount}</div>;
};

export default CurrentBalance;
