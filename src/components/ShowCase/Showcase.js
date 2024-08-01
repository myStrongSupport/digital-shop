import BannerSlider from "./BannerSlider";
import classes from "./Showcase.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Showcase = () => {
  const slides = [1, 2, 3, 4];

  return (
    <section className={classes.showcase}>
      <div className={classes.container}>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="slider"
        >
          {slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <BannerSlider isActive={isActive} index={index} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Showcase;
