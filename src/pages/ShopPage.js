import React from "react";
import Products from "../components/Products/Products";

const ShopPage = () => {
  return <Products />;
};

export default ShopPage;

export const loader = async () => {
  const response = fetch("http://localhost:3000/Products");

  return response;
};
