import React from "react";
import styles from "./BrandStory.module.css";
import Button from "./UI/Button";

const BrandStory = () => {
  return (
    <div className={styles["brand--story"]}>
      <div className={styles["brand--story__header"]}>
        <h2>BRAND STORY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className={styles.board}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h4>WHAT HAPPENED'S BRAND STORY</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button>SEE MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
