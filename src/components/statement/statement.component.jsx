import React from "react";
import "./statement.styles.css";

import StatementTransaction from "../statement-transaction/statement-transaction.component";

const Statement = ({ statements, searchField }) => {
  const statement = statements.map(statement => {
    const filteredTransactions = statement.transactions.filter(
      transaction =>
        transaction.name.toLowerCase().includes(searchField.toLowerCase()) ||
        // eslint-disable-next-line eqeqeq
        transaction.amount == searchField.toLowerCase() ||
        // eslint-disable-next-line eqeqeq
        transaction.description
          .toLowerCase()
          .includes(searchField.toLowerCase())
    );

    return (
      <div key={statement.id} className='statement'>
        <div className='date-and-balance'>
          {new Date(Date.parse(statement.date)).toLocaleDateString("en-GB", {
            dateStyle: "full"
          })}
        </div>
        <div className='transactions'>
          {filteredTransactions.map(transaction => {
            return (
              <StatementTransaction
                key={transaction.description}
                transaction={transaction}
              />
            );
          })}
        </div>
      </div>
    );
  });
  return statement;
};

export default Statement;
