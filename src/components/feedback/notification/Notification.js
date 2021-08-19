import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ message }) => (
  <h3 className={styles.notificationTitle}>{message}</h3>
);

export default Notification;
