import React from "react";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={styles["main-header"]}>
      <p>LAUNCHING OPEN EVENT</p>
      <div className={styles["main-content"]}>
        <p>WHAT</p>
        <p>HAPPENED</p>
        <p>MAR-KET</p>
      </div>
      <div className={styles.process}>
        <p>LOREM IPSUM</p>
        <p>MARKET LAUNCHING</p>
        <p>LOREM IPSUM</p>
      </div>
    </div>
  );
};

export default MainHeader;
