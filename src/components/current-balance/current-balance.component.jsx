import React from "react";
import "./current-balance.styles.css";

const CurrentBalance = ({ balances }) => {
  const balance = balances.map(balance => balance[1].amount);

  return (
    <div className='balance'>
      Current balance: €{balance[balance.length - 1]},-
    </div>
  );
};

export default CurrentBalance;
