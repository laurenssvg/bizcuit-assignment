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

    return (
      <div>
        <Header />
        <Statement statements={statements} />
      </div>
    );
  }
}

export default App;
