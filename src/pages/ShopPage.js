import React from "react";
import Products from "../components/Products/Products";
import { useRouteLoaderData } from "react-router-dom";

const ShopPage = () => {
  const data = useRouteLoaderData("product-type");

  return <Products data={data} />;
};

export default ShopPage;
