import React from "react";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/ui_slice";
const Modal = (props) => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    if (!props.closable) {
      dispatch(uiActions.close());
    }
  };
  return (
    <div onClick={closeModalHandler} className={classes["modal-overlay"]}>
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;
