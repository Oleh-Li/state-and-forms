import React, { Fragment } from "react";
import styles from "./Section.module.css"

const Section = ({ title, children }) => (
  <Fragment>
    <h3 className={styles.sectionTitle}>{title}</h3>
    {children}
  </Fragment>
);

export default Section;
