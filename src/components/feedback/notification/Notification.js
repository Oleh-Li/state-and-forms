import React from "react";
import styles from "./Notification.module.css";
import propTypes from 'prop-types'

const Notification = ({ message }) => (
  <h3 className={styles.notificationTitle}>{message}</h3>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

Notification.defaultProps = {
  message: "feedback message",
};

export default Notification;
