import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Cart = () => {
  const { items, totalAmount, totalQuentity } = useSelector(
    (state) => state.cart
  );

  const variants = {
    open: {
      transition: { staggerChildren: 2, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 6, staggerDirection: -1 },
    },
  };
  return (
    <section className={classes.cart}>
      <div className={`container ${classes["cart-container"]}`}>
        <div className={classes["carts-container"]}>
          <motion.h1
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              opacity: {
                delay: 0.3,
              },
            }}
          >
            Shopping Basket
          </motion.h1>

          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className={classes["cart-titles"]}
          >
            <div></div>
            <div className={classes.title}>
              <h5>Product Name</h5>
            </div>
            <div className={classes.price}>
              <h5>Price</h5>
            </div>
          </motion.div>
          <motion.ul variants={variants} initial="closed" animate="open">
            {items.map((cart, index) => (
              <CartItem key={cart.id} cart={{ ...cart }} index={index} />
            ))}
          </motion.ul>
        </div>
        <aside className={classes["total-amount"]}>
          <div className={classes["total-amount_box"]}>
            <h3>
              Subtotal ({totalQuentity} items) : ${+totalAmount.toFixed(2)}
            </h3>
            <button className={classes.btn}>Procced To Checkout</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
