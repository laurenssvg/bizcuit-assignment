import React from "react";
import "./statement.styles.css";

const Statement = ({ statements }) => {
  const statement = statements.map(statement => {
    return (
      <div className='statement'>
        {statement.date}

        {statement.transactions.map(transaction => (
          <div className='transaction'>
            <div>
              <span className='name'>{transaction.name}</span>
              {transaction.debit_credit === "credit" ? (
                <span className='amount'>
                  +{transaction.amount.toFixed(2)},-
                </span>
              ) : (
                <span className='amount'>
                  -{transaction.amount.toFixed(2)},-
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  });

  return <div>{statement}</div>;
};

export default Statement;
