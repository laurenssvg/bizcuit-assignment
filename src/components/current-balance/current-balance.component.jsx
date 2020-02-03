import React from "react";
import "./current-balance.styles.css";

const CurrentBalance = ({ balances }) => {
  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });

  const balance = balances.map(balance => balance[1].amount);

  return (
    <div className='balance'>
      Current balance: {formatter.format(balance[0])},-
    </div>
  );
};

export default CurrentBalance;
