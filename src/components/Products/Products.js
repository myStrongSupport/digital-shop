import React from "react";
import Laptop from "../Devices/Device/Laptop";
import Watch from "../Devices/Device/Watch";
import Headphone from "../Devices/Device/Headphone";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes.container}>
      <Laptop />
      <Watch />
      <Headphone />
    </div>
  );
};

export default Products;
