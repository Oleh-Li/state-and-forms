import React from "react";
import styles from "./Statistics.module.css"

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

export default Statistics;
