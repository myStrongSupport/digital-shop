import React, { useEffect } from "react";
import Cart from "../../components/Carts/Cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sendCartData } from "../../store/actions/actions";
let initialize = false;

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!initialize) {
      initialize = true;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return <Cart />;
};

export default CartPage;
