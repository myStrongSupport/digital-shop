import React from "react";

import classes from "./Products.module.css";
import Product from "./Product";

const Products = ({ data }) => {
  const categories = Array.from(
    new Set(data.map((product) => product.category))
  );

  const CategoriedProducts = categories.map((category) => {
    const categoryProducts = data.filter(
      (prodoct) => prodoct.category === category
    );

    return (
      <Product key={category} data={categoryProducts} category={category} />
    );
  });

  console.log(categories);
  return <div className={classes.container}>{CategoriedProducts}</div>;
};

export default Products;
