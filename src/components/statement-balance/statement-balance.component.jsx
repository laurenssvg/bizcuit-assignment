import React from "react";
import "./statement-balance.styles.css";

const StatementBalance = ({ balance }) => {
  return <div>{balance.amount}</div>;
};

export default StatementBalance;
