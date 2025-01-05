import React from "react";
import { socialLinks, navLinks } from "../../data/footer_data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full min-h-16 border-t bg-transparent border-purple-light/30">
      <div className="min-w-7xl mx-auto px-[10%] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue/70 transition-colors duration-150"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-xs text-white/70 text-center">
          © {currentYear} Samir Ansari. All rights reserved.
        </div>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-xs text-white/70 hover:text-blue/70 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
