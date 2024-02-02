import React from "react";
import classes from "./Product.module.css";
import ProductItem from "./ProductItem";

const laptops = [
  {
    id: 1,
    image_link:
      "https://m.media-amazon.com/images/I/81fiaID-a+L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Dell XPS 13",
    price: 1199.99,
  },
  {
    id: 2,
    image_link:
      "https://m.media-amazon.com/images/I/51ej1kt06bL._AC_UY327_FMwebp_QL65_.jpg",
    title: "MacBook Air",
    price: 1299.99,
  },
  {
    id: 3,
    image_link:
      "https://m.media-amazon.com/images/I/81XCxLxzwSL._AC_UY327_FMwebp_QL65_.jpg",
    title: "HP Spectre x360",
    price: 999.99,
  },
  {
    id: 4,
    image_link:
      "https://m.media-amazon.com/images/I/61un4swv9vL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Asus ROG Zephyrus G14",
    price: 1499.99,
  },
  {
    id: 5,
    image_link:
      "https://m.media-amazon.com/images/I/51JJPaCrm9L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Lenovo ThinkPad X1 Carbon",
    price: 1099.99,
  },
  {
    id: 6,
    image_link:
      "https://m.media-amazon.com/images/I/51KNFzBG3qL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Acer Swift 3",
    price: 799.99,
  },
  {
    id: 7,
    image_link:
      "https://m.media-amazon.com/images/I/61GqSlHr41L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Microsoft Surface Laptop 4",
    price: 1399.99,
  },
  {
    id: 8,
    image_link:
      "https://m.media-amazon.com/images/I/61haL7447DL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Galaxy Book Pro",
    price: 1099.99,
  },
];
const Product = (props) => {
  return (
    <section className={classes.products}>
      <div className={`container ${classes["products-container"]}`}>
        <div className={classes["product-title"]}>
          <h2>Laptop</h2>
        </div>
        <div className={classes["product-list"]}>
          <div className={classes["product-list-container"]}>
            {laptops.map((product) => (
              <ProductItem
                link={product.image_link}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
