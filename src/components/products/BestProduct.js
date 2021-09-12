import React from "react";
import styles from "./BestProduct.module.css";
import Item from "./Item";

const productList = [
  {
    number: "01",
    color: "blue",
  },
  {
    number: "02",
    color: "tomato",
  },
  {
    number: "03",
    color: "black",
  },
];
const BestProduct = (props) => {
  return (
    <div className={styles["best-product"]}>
      <div className={styles.description}>
        <h1>BEST PRODUCT</h1>
        <p>
          How to create mobile-optimized videos in a minute. Not a designer,
          every team makes a lot of videos can be trimmed. Take the first
        </p>
      </div>

      <div className={styles.product}>
        {productList.map((product) => {
          return (
            <Item
              number={product.number}
              color={product.color}
              key={props.number}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestProduct;
