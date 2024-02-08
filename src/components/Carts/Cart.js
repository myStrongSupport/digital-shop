import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <section className={classes.cart}>
      <div className={`container ${classes["cart-container"]}`}>
        <div className={classes["carts-container"]}>
          <h1>Shopping Basket</h1>

          <div className={classes["cart-titles"]}>
            <div></div>
            <div className={classes.title}>
              <h5>Product Name</h5>
            </div>
            <div className={classes.price}>
              <h5>Price</h5>
            </div>
          </div>
          <ul>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        </div>
        <aside className={classes["total-amount"]}>
          <div className={classes["total-amount_box"]}>
            <h3>Subtotal (10 items) : $25000</h3>
            <button className={classes.btn}>Procced To Checkout</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
