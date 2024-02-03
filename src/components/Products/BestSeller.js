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

const BestSeller = () => {
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
            {laptops.map((product) => (
              <SwiperSlide className={classes.slideItem}>
                <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  link={product.image_link}
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
