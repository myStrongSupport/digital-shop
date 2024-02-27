import React, { useEffect, useState } from "react";
import classes from "./ProductAlert.module.css";
import { Link } from "react-router-dom";

const ProductAlert = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <div className={classes["modal-product"]}>
      <div className={classes.head}>
        <div className={classes["head-img"]}>
          <img src={props.img} alt="" />
        </div>
        <div className={classes["head-title"]}>
          <h3>{props.title}</h3>
        </div>
        <div className={isLoading ? classes.loading : classes.done}></div>
      </div>
      <div
        style={{
          backgroundPosition: isLoading ? "100%" : "0%",
          pointerEvents: isLoading ? "none" : "unset",
        }}
        className={classes.btn}
      >
        <Link to={"/cart"}>Go to Cart</Link>
      </div>
    </div>
  );
};

export default ProductAlert;
