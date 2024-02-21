import React, { useEffect } from "react";
import classes from "./CartItem.module.css";
import { IoAdd } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";
const CartItem = ({ cart }) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmountOfItem = cart.totalAmount.toFixed(2);

  useEffect(() => {
    console.log(items);
  }, [items]);
  // Fucntions

  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeCart(id));
  };
  const addToCartHandler = (item) => {
    dispatch(
      cartActions.addCart({ ...item, quantity: 1, totalAmount: +item.price })
    );
  };
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
            Total price : ${totalAmountOfItem}
          </div>
          {/* Amount */}
          <div className={classes["cart-amount"]}>
            <button onClick={removeFromCartHandler.bind(null, cart.id)}>
              <IoMdRemove />
            </button>
            <span>{cart.quantity}</span>
            <button onClick={addToCartHandler.bind(null, cart)}>
              <IoAdd />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
