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

    return (
      <div className="App">
        <h1>Bank account:</h1>
        {statements.map(statement => (
          <ul>
            <li>{statement.iban}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
