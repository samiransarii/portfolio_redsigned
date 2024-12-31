import React from "react";

const TopicHeader = ({ children, ...otherProps }) => (
  <h2 className="text-[5.6rem] font-semibold w-fit z-300 pb-24" {...otherProps}>
    <p className="font-medium -mb-4">{children}</p>
    <span className="block w-1/4 h-1 bg-gradient-to-r from-blue via-purple-light to-purple"></span>
  </h2>
);

export default TopicHeader;
