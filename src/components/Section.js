import React, { Fragment } from "react";

const Section = ({ title, children }) => (
  <Fragment>
    <h3>{title}</h3>
    {children}
  </Fragment>
);

export default Section;
