import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import "../styles/main.scss";

import NavContainer from "./navbar.js";
import Homepage from "./pages/home.js";
import Catalog from "./pages/catalog.js";
import About from "./pages/about-us.js";
import FAQ from "./pages/faq.js";
import AcctManage from "./pages/account-management.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="laze">
            <NavContainer />
            <div className="page-content">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={FAQ} />
                <Route path="/account" component={AcctManage} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
