import React from "react";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
import { useRouteLoaderData, useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const { product, id } = useParams();
  const data = useRouteLoaderData("product-type");

  const ProductData = data.filter(
    (p) => p.category === product && p.id === id
  )[0];

  return <ProductDetail data={ProductData} />;
};

export default ProductDetailPage;
