import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";
import { ImSearch } from "react-icons/im";
const SearchBar = ({ setFiltered }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const filterDataHandler = (value) => {
    const results = data.filter((product) => {
      return (
        (product &&
          product.title &&
          product.title.toLowerCase().includes(value)) ||
        product.category.toLowerCase().includes(value)
      );
    });

    if (value.trim().length === 0) {
      setFiltered([]);
    } else {
      setFiltered(results);
    }
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    filterDataHandler(e.target.value);
  };
  //   useEffect
  useEffect(() => {
    fetch(
      "https://digital-shop-235e5-default-rtdb.firebaseio.com/products.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className={classes["search-bar-container"]}>
      <div className={classes["search-bar"]}>
        <ImSearch />
        <input type="text" onChange={searchHandler} value={search} />
      </div>
    </div>
  );
};

export default SearchBar;
