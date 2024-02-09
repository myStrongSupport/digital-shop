import React from "react";
import Product from "../../components/Products/Product";
import { useRouteLoaderData } from "react-router";

const ProductPage = () => {
  const data = useRouteLoaderData("product-type");
  return <Product data={data} />;
};

export default ProductPage;

export const loader = async ({ request, params }) => {
  let type = params;
  console.log(type.product);
  if (type.product === undefined) {
    const response = fetch("http://localhost:3000/shop");
    return response;
  }
  if (type.product) {
    const response = fetch("http://localhost:3000/" + type.product);
    return response;
  }
};
