import React from "react";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  return (
    <div className={classes["product-item"]}>
      <div className={classes["product-item_img"]}>
        <img src={props.link} alt="" />
      </div>
      <div className={classes["product-item_header"]}>
        <h4>{props.title}</h4>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
