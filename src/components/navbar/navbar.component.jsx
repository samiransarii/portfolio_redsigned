import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link className="logo-container" to="/">
        <h1 className="logo">samir.ansari</h1>
      </Link>
      <div className="nav-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/works">
          Works
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
