import React from "react";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  return (
    <div className={classes["product-item"]}>
      <Link to={`/shop/` + props.id}>
        <div className={classes["product-item_img"]}>
          <img src={props.link} alt="" />
        </div>
        <div className={classes["product-item_header"]}>
          <h4>{props.title}</h4>
          <span>{props.price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
