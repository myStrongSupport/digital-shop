import React, { useEffect, useState } from "react";
import classes from "./User.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/slices/user-slice";
import { uiActions } from "../../../store/slices/ui_slice";
const User = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email ? user.email : "");
      setPassword(user.password ? user.password : "");
    }
  }, [user]);

  const onRequestLogoutHandler = async () => {
    // Todo
    const response = await fetch(
      "https://digital-shop-235e5-default-rtdb.firebaseio.com/person.json",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(null),
      }
    );
    // Todo
    if (!response.ok) {
      console.log("OK");
    }
  };

  const onLogoutHandler = () => {
    onRequestLogoutHandler();
    dispatch(userActions.logout());
    dispatch(uiActions.toggleUser());
  };

  const backHandler = () => {
    dispatch(uiActions.toggleUser());
  };

  return (
    <div className={classes["user"]}>
      <h1>User Account</h1>
      <div className={classes["form-control"]}>
        <label>email</label>
        <input type="text" defaultValue={email} readOnly />
      </div>
      <div className={classes["form-control"]}>
        <label>Password</label>
        <input type="password" defaultValue={password} readOnly />
      </div>
      <div className={classes.actions}>
        <button onClick={onLogoutHandler}>Logout</button>
        <button onClick={backHandler}>Back</button>
      </div>
    </div>
  );
};

export default User;
