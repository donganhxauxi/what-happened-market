import React  from "react";
import styles from "./SecondaryHeader.module.css";


const SecondaryHeader = (props) => {
  return (
    <div className={styles["secondary-header"]}>
      <div className={styles.description}>
        <h1>WHAT HAPPENED!</h1>
        <p>
          How to create mobile-optimized videos in a minute. Not a designer,
          every team makes a lot of videos can be trimmed. Take the first step
          to your brand's success, How to create mobile-optimized video in a
          minute
        </p>
      </div>
    </div>
  );
};

export default SecondaryHeader;
