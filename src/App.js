import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Statement from "./components/statement/statement.component";
import { SearchBox } from "./components/search-box/search-box.component";
import CurrentBalance from "./components/current-balance/current-balance.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      statements: [],
      searchField: ""
    };
  }

  componentDidMount() {
    const data = require("./statements.json");
    this.setState({ statements: data.reverse() });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { statements } = this.state;

    const balances = statements.map(statement => statement.balances);

    const iban = statements.map(statement => statement.iban);

    return (
      <div className='App'>
        <Header iban={iban} />
        <SearchBox handleChange={this.handleChange} />
        <CurrentBalance balances={balances} statements={statements} />
        <Statement
          statements={statements}
          searchField={this.state.searchField}
        />
      </div>
    );
  }
}

export default App;
