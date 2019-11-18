import React from "react";
import "./Navigation.css";
import logo from "./logo.png";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navbar">
        <a href="#" className="logo">
          <img src={logo} />
        </a>
        <ul className="main-nav">
          <li>
            <a
              href="#"
              className="nav-links"
              onClick={() => onRouteChange("signout")}
            >
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <a href="#" className="logo">
          <img src={logo} />
        </a>
        <ul className="main-nav">
          <li>
            <a
              href="#"
              className="nav-links"
              onClick={() => onRouteChange("signin")}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-links"
              onClick={() => onRouteChange("register")}
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
