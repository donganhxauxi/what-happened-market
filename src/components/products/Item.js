import React from "react";
import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.item} style={{backgroundColor: props.color}}>
      <div className={styles.number}>
        <h3>{props.number}</h3>
      </div>
      <div className={styles.footer}>
        <p>How to create mobile-optimized</p>
        <h4>GO</h4>
      </div>
    </div>
  );
};

export default Item;
