import React from "react";
import styles from "./ItemList.module.css";
import ItemElement from "./ItemElement";
import Button from "../UI/Button";


const ItemList = (props) => {
  return (
    <div className={styles["item-list"]}>
      <div className={styles["item-grid"]}>
        {Array(25).fill(<ItemElement />)}
      </div>
      <Button>SEE MORE</Button>
    </div>
  );
};

export default ItemList;
