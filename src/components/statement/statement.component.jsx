import React from "react";
import "./statement.styles.css";

import StatementTransaction from "../statement-transaction/statement-transaction.component";

const Statement = ({ statements }) => {
  const statement = statements.map(statement => {
    return (
      <div key={statement.id} className='statement'>
        <div className='date-and-balance'>
          {new Date(Date.parse(statement.date)).toLocaleDateString("en-GB", {
            dateStyle: "full"
          })}
        </div>
        <div className='transactions'>
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
  return statement;
};

export default Statement;
