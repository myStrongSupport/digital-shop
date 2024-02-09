import React from "react";
import classes from "./CartItem.module.css";
import { IoAdd } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";

const CartItem = ({ cart }) => {
  console.log(cart);
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item_img"]}>
        <img src={cart.img} alt="" />
      </div>
      <div className={classes["cart-item_content"]}>
        {/* tilel */}
        <div className={classes["cart-item_content_header"]}>
          <h3>{cart.title}</h3>
          <p>${cart.price}</p>
        </div>
        {/* Amount */}
        <div className={classes["cart-item_content_amount"]}>
          {/* Price */}
          <div className={classes["cart-price"]}>
            Total price : ${cart.totalAmount}
          </div>
          {/* Amount */}
          <div className={classes["cart-amount"]}>
            <button>
              <IoMdRemove />
            </button>
            <span>{cart.quantity}</span>
            <button>
              <IoAdd />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
