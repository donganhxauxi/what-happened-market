import React from "react";
import styles from "./ItemElement.module.css";

const ItemElement = (props) => {
  return (
    <div className={styles["item-element"]}>
      <div className={styles.image}></div>
      <p>[What happen] How to create</p>
      <div className={styles.footer}>
        <p>2,500 won</p>
        <p>236</p>
      </div>
    </div>
  );
};

export default ItemElement;
