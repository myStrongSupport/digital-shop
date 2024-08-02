import React from "react";
import classes from "./Product.module.css";
import ProductItem from "./ProductItem";
import def from "../../assets/shopImage/laptop1.jpg";
import headphone from "../../assets/shopImage/headphone.jpg";
import watch from "../../assets/shopImage/watch.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

const Product = ({ data = [], category }) => {
  return (
    <section className={classes.products}>
      <div className={`container ${classes["products-container"]}`}>
        <div className={classes["product-title"]}>
          <img
            src={
              category === "laptop"
                ? def
                : category === "watch"
                ? watch
                : category === "headphone"
                ? headphone
                : def
            }
            alt=""
          />
        </div>
        <div className={classes["product-list"]}>
          <Swiper
            className={classes.swiper}
            slidesPerView={1}
            grid={{ rows: 2 }}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            breakpoints={{
              600: {
                slidesPerView: 2,
                grid: { rows: 2 },
              },
              1000: {
                slidesPerView: 3,
                grid: { rows: 2 },
              },
            }}
          >
            {data.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem
                  id={product.id}
                  link={product.img}
                  title={product.title}
                  price={product.price}
                  type={product.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Product;
