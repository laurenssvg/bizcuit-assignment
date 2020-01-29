import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      statements: []
    };
  }

  componentDidMount() {
    let data = require("./statements.json");
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
                <td>{transaction.description}</td>
              </tr>
            </table>
          ))}
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Bank account:</h1>
        {statement}
      </div>
    );
  }
}

export default App;
