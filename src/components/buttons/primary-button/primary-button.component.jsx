import React from "react";
import { Link } from "react-router-dom";
import "./primary-button.styles.scss";

const PrimaryButton = ({ children, ...otherProps }) => (
  <Link className="primary-button" {...otherProps}>
    {children}
  </Link>
);

export default PrimaryButton;
