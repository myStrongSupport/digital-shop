import BannerSlider from "./BannerSlider";
import classes from "./Showcase.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Showcase = () => {
  const slides = [1, 2, 3, 4];

  const Vslider = {
    init: {
      opacity: 0,
      y: 400,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      variants={Vslider}
      initial="init"
      animate="animate"
      transition={{ type: "spring", delay: 0.5 }}
      className={classes.showcase}
    >
      <div className={classes.container}>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 100000,
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
    </motion.section>
  );
};

export default Showcase;
