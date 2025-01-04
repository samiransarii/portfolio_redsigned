import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";
import logo from "../../static/icons/logo.png";
import { navLinks } from "@/data/footerData";

const Navbar = () => {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar-container bg-transparent backdrop-blur-3xl border-b border-purple-light/30">
        <Link
          className="logo-container"
          to="#home"
          onClick={(e) => handleScrollToSection(e, "#home")}
        >
          <h1 className="logo">
            <img src={logo} alt="Logo" />
          </h1>
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="link"
              to={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
