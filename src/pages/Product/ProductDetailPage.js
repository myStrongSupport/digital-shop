import React from "react";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
const ProductDetailPage = () => {
  return <ProductDetail />;
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  console.log(params);
  const response = await fetch("http://localhost:3000/shop");
  return [];
};
