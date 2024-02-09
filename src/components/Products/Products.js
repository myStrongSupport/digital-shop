import React from "react";
import Laptop from "../Devices/Device/Laptop";
import Watch from "../Devices/Device/Watch";
import Headphone from "../Devices/Device/Headphone";
import classes from "./Products.module.css";

const Products = ({ data }) => {
  return (
    <div className={classes.container}>
      <Laptop data={data} />
      <Watch data={data} />
      <Headphone data={data} />
    </div>
  );
};

export default Products;
