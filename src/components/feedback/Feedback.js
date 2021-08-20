import React from "react";
import styles from "./Feedback.module.css";
import propTypes from "prop-types";

const Feedback = ({ onLeaveFeedback }) => (
  <div className={styles.buttonContainer}>
    <button
      className={styles.buttonStyles}
      type="button"
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={styles.buttonStyles}
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={styles.buttonStyles}
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

Feedback.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};

export default Feedback;
