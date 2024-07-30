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
      console.log(data);
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

export const addUsers = (user) => {
  return (disptach) => {
    const addUserRequest = async () => {
      const response = fetch(
        "https://digital-shop-235e5-default-rtdb.firebaseio.com/people.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      // TODO
      if (!response.ok) {
      }
    };
    addUserRequest();
  };
};
export const addUser = (user) => {
  return (disptach) => {
    const addUserRequest = async () => {
      const response = fetch(
        "https://digital-shop-235e5-default-rtdb.firebaseio.com/person.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      // TODO:
      if (!response.ok) {
        console.log("ok");
      }
    };
    addUserRequest();
  };
};

export const checkUser = () => {
  return (disptach) => {
    const getUser = async () => {
      const response = await fetch(
        "https://learn-firebase-749de-default-rtdb.firebaseio.com/users.json"
      );

      if (!response.ok) {
        console.log("Error");
      }
      const user = await response.json();
      console.log(user);
    };
    getUser();
  };
};
