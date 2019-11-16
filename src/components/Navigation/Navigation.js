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
      <nav className="nav">
        <ul className="nav-links">
          <li className="item" onClick={() => onRouteChange("signin")}>
            <a>Sign In</a>
          </li>
          <li className="./image" onClick={() => onRouteChange("register")}>
            <a>Register</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
