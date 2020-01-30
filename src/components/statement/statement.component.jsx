import React from "react";
import "./statement.styles.css";

import StatementTransaction from "../statement-transaction/statement-transaction.component";

const Statement = ({ statements }) => {
  const statement = statements.map(statement => {
    return (
      <div className="overview">
        <div className="date-and-balance">{statement.date}</div>
        <div className="transactions">
          {statement.transactions.map(transaction => (
            <StatementTransaction
              key={transaction.description}
              transaction={transaction}
            />
          ))}
        </div>
      </div>
    );
  });

  return <div className="container">{statement}</div>;
};

export default Statement;
