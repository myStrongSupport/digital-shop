import React from "react";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const price = `$${props.price}`;
  console.log(props.type);
  return (
    <div className={classes["product-item"]}>
      <Link to={`/shop/` + props.type + "/" + props.id}>
        <div className={classes["product-item_img"]}>
          <img src={props.link} alt="" />
        </div>
        <div className={classes["product-item_header"]}>
          <h4>{props.title}</h4>
          <span>{price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
