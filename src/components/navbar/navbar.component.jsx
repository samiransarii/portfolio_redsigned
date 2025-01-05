import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/footer_data";
import logo from "../../static/icons/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navbar-container border-b bg-transparent border-purple-light/30 backdrop-blur-3xl">
        <Link
          className="logo-container"
          to="#home"
          onClick={(e) => handleScrollToSection(e, "#home")}
        >
          <h1 className="logo">
            <img src={logo} alt="Logo" />
          </h1>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "mobile-menu-open" : ""}`}>
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
