import { cartActions } from "../slices/cart-slice";
export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRquest = async () => {
      const response = fetch(
        "https://digital-shop-235e5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
      }
    };

    sendRquest();
  };
};

export const getCartData = () => {
  return (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        "https://digital-shop-235e5-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        console.log(" not ok");
      }
      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: data.items ? data.items : [],
          totalAmount: data.totalAmount ? data.totalAmount : 0,
          totalQuentity: data.totalQuentity ? data.totalQuentity : 0,
        })
      );
    };

    getRequest();
  };
};
