import React from "react";
import classes from "./CartItem.module.css";
import { IoAdd } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";

const CartItem = () => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-item_img"]}>
        <img
          src="https://m.media-amazon.com/images/I/61aT4CcnGmL._AC_UY327_FMwebp_QL65_.jpg"
          alt=""
        />
      </div>
      <div className={classes["cart-item_content"]}>
        {/* tilel */}
        <div className={classes["cart-item_content_header"]}>
          <h3>Sony WH-1000XM5 The Best Wireless Noise Canceling Headphones</h3>
          <p>$1000</p>
        </div>
        {/* Amount */}
        <div className={classes["cart-item_content_amount"]}>
          {/* Price */}
          <div className={classes["cart-price"]}>Total price : $1000</div>
          {/* Amount */}
          <div className={classes["cart-amount"]}>
            <button>
              <IoMdRemove />
            </button>
            <input type="number" defaultValue="1" />
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
