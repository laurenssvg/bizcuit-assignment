import React from "react";
import "./statement.styles.css";

import StatementTransaction from "../statement-transaction/statement-transaction.component";

const Statement = ({ statements }) => {
  const statement = statements.map(statement => {
    return (
      <div className='statement'>
        {statement.date}

        {statement.transactions.map(transaction => (
          <StatementTransaction transaction={transaction} />
        ))}
      </div>
    );
  });

  return <div>{statement}</div>;
};

export default Statement;
