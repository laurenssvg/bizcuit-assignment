import React from "react";
import "./statement.styles.css";

import StatementTransaction from "../statement-transaction/statement-transaction.component";

const Statement = ({ statements }) => {
  const statement = statements.map(statement => {
    return (
      <div className='statement'>
        <div className='date-and-balance'>Date: {statement.date}</div>
        <div className='transactions'>
          {statement.transactions.map(transaction => (
            <StatementTransaction transaction={transaction} />
          ))}
        </div>
      </div>
    );
  });

  return <div className='overview'>{statement}</div>;
};

export default Statement;
