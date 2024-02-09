import React from "react";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
import { useRouteLoaderData } from "react-router-dom";
const ProductDetailPage = () => {
  const data = useRouteLoaderData("product-detail");
  console.log(data);
  return <ProductDetail data={data} />;
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  const type = params.product;
  const id = params.id;
  const response = await fetch(`http://localhost:3000/${type}/${id}`);
  return response;
};
