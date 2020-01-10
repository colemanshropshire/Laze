import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/main.scss";

import Homepage from "./pages/home.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default hot(module)(App);
