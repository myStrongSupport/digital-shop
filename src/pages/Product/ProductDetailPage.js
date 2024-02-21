import React, { useEffect } from "react";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
import { useRouteLoaderData, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData } from "../../store/actions/actions";
let initialize = false;
const ProductDetailPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { product, id } = useParams();
  const data = useRouteLoaderData("product-type");

  useEffect(() => {
    if (!initialize) {
      initialize = true;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  const ProductData = data.filter(
    (p) => p.category === product && p.id === id
  )[0];

  return <ProductDetail data={ProductData} />;
};

export default ProductDetailPage;
