import React, { Component } from "react";
import logo from "../../public/assets/offwhiteLaze.png";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

export default class NavContainer extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-wrapper">
          <NavLink to="/" className="logo" activeClassName="active-nav">
            <img src={logo} />
          </NavLink>
        </div>

        <div className="navlinks">
          <div className="navlink">
            <NavLink to="/" activeClassName="active-nav">
              Home
            </NavLink>
          </div>
          <div className="navlink">
            <NavLink to="/catalog" activeClassName="active-nav">
              Catalog
            </NavLink>
          </div>
          <div className="navlink">
            <NavLink to="/about" activeClassName="active-nav">
              About Us
            </NavLink>
          </div>
          <div className="navlink">
            <NavLink to="/faq" activeClassName="active-nav">
              FAQ
            </NavLink>
          </div>
        </div>
        <div className="account">
          <NavLink to="/account" activeClassName="active-nav">
            Account
          </NavLink>
        </div>
      </div>
    );
  }
}
