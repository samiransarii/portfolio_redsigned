import React from "react";
import { Link } from "react-router-dom";
import "./secondary-button.styles.scss";

const SecondaryButton = ({ children, ...otherProps }) => (
  <Link className="secondary-button" {...otherProps}>
    {children}
  </Link>
);

export default SecondaryButton;
