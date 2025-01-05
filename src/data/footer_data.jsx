import React from "react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
  SiFacebook,
  SiInstagram,
  SiReaddotcv,
} from "@icons-pack/react-simple-icons";

const socialLinks = [
  {
    icon: <SiGithub size={20} />,
    href: "https://github.com/samiransarii",
    label: "GitHub",
  },
  {
    icon: <SiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/samiransarii/",
    label: "LinkedIn",
  },
  {
    icon: <SiX size={20} />,
    href: "https://x.com/_samiransari",
    label: "X",
  },
  {
    icon: <SiGmail size={20} />,
    href: "mailto:samiransari.me@gmail.com",
    label: "Email",
  },
  {
    icon: <SiFacebook size={20} />,
    href: "https://www.facebook.com/samiiir.ansarii/",
    label: "Facebook",
  },
  {
    icon: <SiInstagram size={20} />,
    href: "https://www.instagram.com/samiiir.ansarii/",
    label: "Instagram",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export { socialLinks, navLinks };
