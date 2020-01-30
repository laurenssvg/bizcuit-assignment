import React from "react";
import "./statement-transaction.styles.css";

const StatementTransaction = ({ transaction }) => {
  return (
    <div className="transaction">
      <span className="name">{transaction.name}</span>
      {transaction.debit_credit === "credit" ? (
        <span className="amount">+{transaction.amount.toFixed(2)},-</span>
      ) : (
        <span className="amount">-{transaction.amount.toFixed(2)},-</span>
      )}
    </div>
  );
};
export default StatementTransaction;
