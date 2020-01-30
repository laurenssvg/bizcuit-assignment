import React from "react";
import "./statement.styles.css";

const Statement = ({ statements }) => {
  const statement = statements.map(statement => {
    return (
      <div>
        {statement.date}

        {statement.transactions.map(transaction => (
          <table>
            <tr>
              <td>{transaction.name}</td>
              {transaction.debit_credit === "credit" ? (
                <td>+{transaction.amount}</td>
              ) : (
                <td>-{transaction.amount}</td>
              )}
            </tr>
          </table>
        ))}
      </div>
    );
  });

  return <div>{statement}</div>;
};

export default Statement;
