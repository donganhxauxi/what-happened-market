import React from "react";
import styles from "./Navigator.module.css";

const Navigator = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <p>What happened</p>
      </div>

      <div className={styles.navigator}>
        <a href="#">Introduction</a>
        <a href="#">Solution</a>
        <a href="#">Rate plan</a>
        <a href="#">|</a>
        <a href="#">Login</a>
        <a href="#">Apply for free use</a>
      </div>
    </div>
  );
};

export default Navigator;
