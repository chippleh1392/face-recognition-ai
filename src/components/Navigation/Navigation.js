import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li className="item" onClick={() => onRouteChange("signout")}>
            <a>Sign Out</a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <a href="#" className="logo">
          logo
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
