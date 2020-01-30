import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Statement from "./components/statement/statement.component";
import { SearchBox } from "./components/search-box/search-box.component";

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
    this.setState({ statements: data });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { statements, searchField } = this.state;

    const transactionNames = statements.map(
      statement => statement.transactions
    );
    console.log(statements);
    console.log(transactionNames);

    const filteredStatements = statements.filter(statement =>
      statement.date.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Header />
        <SearchBox placeholder="Search..." handleChange={this.handleChange} />
        <Statement statements={filteredStatements} />
      </div>
    );
  }
}

export default App;
