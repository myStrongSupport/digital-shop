import React from "react";
import ProductItem from "../Products/ProductItem";
import classes from "./SearchList.module.css";
const SearchList = ({ filteredList }) => {
  return (
    <div className={classes["search-list"]}>
      <div className={classes["search-list-container"]}>
        {filteredList.map((product) => (
          <ProductItem
            className="static"
            key={product.id}
            id={product.id}
            type={product.category}
            title={product.title}
            price={product.price}
            link={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
