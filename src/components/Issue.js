import React from "react";
import styles from "./Issue.module.css";
import Button from "./UI/Button";

const Issue = (props) => {
  return (
    <div className={styles.issue}>
      <div className={styles.description}>
        <h1>HAPPENED ISSUE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>SEE MORE</Button>
      </div>
      <div className={styles.slider}>
        <div className={styles["whpn-issue"]}>
          <div className={styles.text}>
            <h1>WHPN</h1>
            <h1>ISSUE</h1>
            
          </div>
          <div className={styles.box}></div>
        </div>
        <div className={styles["black-brand"]}>B BRAND</div>
        <div className={styles["black-brand"]}>C BRAND</div>
        <div className={styles["tomato-brand"]}>D BRAND</div>
        <div className={styles["black-brand"]}>E BRAND</div>
        <div className={styles["black-product"]}></div>
        <div className={styles["tomato-product"]}></div>
        <div className={styles["black-product"]}></div>
        <div className={styles["yellow-product"]}></div>
      </div>
    </div>
  );
};

export default Issue;
