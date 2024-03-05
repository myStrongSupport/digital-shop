import React from "react";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/slices/ui_slice";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props.price}`;
  const cls = props.className
    ? `static ${classes["product-item"]}`
    : classes["product-item"];

  const clickHandler = () => {
    if (!props.className) {
      return;
    }
    dispatch(uiActions.toggleSearch());
  };
  return (
    <div className={cls} onClick={clickHandler}>
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
