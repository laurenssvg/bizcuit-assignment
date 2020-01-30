import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Statement from "./components/statement/statement.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      statements: []
    };
  }

  componentDidMount() {
    const data = require("./statements.json");
    this.setState({ statements: data });
  }

  render() {
    const { statements } = this.state;

    const statement = statements.map(statement => {
      return (
        <div>
          {statement.date}

          {statement.transactions.map(transaction => (
            <table>
              <tr>
                <td>{transaction.name}</td>
                <td>{transaction.date}</td>
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

    return (
      <div>
        <Header />
        <Statement statement={statement} />
      </div>
    );
  }
}

export default App;
