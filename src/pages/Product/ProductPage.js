import React from "react";
import Product from "../../components/Products/Product";
import { useRouteLoaderData, useParams, json } from "react-router";

const ProductPage = () => {
  const params = useParams();
  const data = useRouteLoaderData("product-type");

  const categoriedProductItem = data.filter(
    (product) => product.category === params.product
  );

  return <Product data={categoriedProductItem} category={params.product} />;
};

export default ProductPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    "https://digital-shop-235e5-default-rtdb.firebaseio.com/products.json"
  );
  console.log(response);

  if (!response.ok) {
    throw json({ message: "Couldn't Load Products Data" }, { status: 500 });
  }

  const data = await response.json();
  const extractData = Object.values(data).flatMap((cat) => cat);
  return extractData;
};
