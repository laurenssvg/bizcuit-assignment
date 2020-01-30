import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Statement from "./components/statement/statement.component";
import { SearchBox } from "./components/search-box/search-box.component";

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
        <SearchBox placeholder='Search...' />
        <Statement statements={statements} />
      </div>
    );
  }
}

export default App;
