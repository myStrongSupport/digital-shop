import classes from "./BestSeller.module.css";
import ProductItem from "./ProductItem";
import DeviceBanner from "../Devices/DeviceBanner";
import img from "../../assets/BannerImage/SmartWatch.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { useRouteLoaderData } from "react-router-dom";

const BestSeller = () => {
  const data = useRouteLoaderData("best-seller");
  console.log(data);
  return (
    <section className={classes["best-products"]}>
      <div className="container">
        <div className={classes.head}>
          <h3>Best Sellers Products</h3>
          <p>There are many variations passages</p>
        </div>
        <div className={classes.products}>
          <Swiper
            slidesPerView={4}
            grid={{ rows: 2 }}
            pagination={{
              clickable: true,
            }}
            className={classes.swiper}
            modules={[Grid, Pagination]}
          >
            {data.map((product) => (
              <SwiperSlide key={product.id} className={classes.slideItem}>
                <ProductItem
                  key={product.id + Math.random()}
                  id={product.id}
                  type={product.category}
                  title={product.title}
                  price={product.price}
                  link={product.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <DeviceBanner
          title="Happy Hours"
          off="20% off"
          date="15 Nov To 7 Dec"
          uptitle="Beats Solo air"
          title2="Summer sale"
          text=" Company that's grown from 270 to 480 employees in the last 12
          months."
          bg="green"
          img={img}
          pad="200px"
        />
      </div>
    </section>
  );
};

export default BestSeller;
