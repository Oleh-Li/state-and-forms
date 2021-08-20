import React from "react";
import styles from "./Statistics.module.css";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercent }) => (
  <div className={styles.statContainer}>
    <span>Good: </span>
    <span>{good}</span>
    <br></br>
    <span>Neutral: </span>
    <span>{neutral}</span>
    <br></br>
    <span>Bad: </span>
    <span>{bad}</span>
    <br></br>
    <span>Total: </span>
    <span>{total}</span>
    <br></br>
    <span>Positive feedback: </span>
    <span>{Math.round(positivePercent)}%</span>
  </div>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercent: 0,
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercent: propTypes.number.isRequired,
};

export default Statistics;
