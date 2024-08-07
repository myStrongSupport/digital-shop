import React from "react";
import classes from "./DeviceBanner.module.css";
import img from "../../assets/BannerImage/headphoneRed.png";
import { motion } from "framer-motion";
const DeviceBanner = (props) => {
  const variantContaienr = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className={classes.banner}
      variants={variantContaienr}
      initial="hidden"
      whileInView="visible"
      style={{ paddingTop: props.pad !== undefined ? props.pad : undefined }}
    >
      <div
        className={classes["banner-box"]}
        style={{
          background:
            props.bg === undefined ? "var(--bg-red)" : "var(--bg-green)",
        }}
      >
        <div className={classes["banner-box_1"]}>
          <span>{props.off}</span>
          <h3>{props.title.split(" ")[0]}</h3>
          <h3>{props.title.split(" ")[1]}</h3>
          <span>{props.date}</span>
        </div>
        <div className={classes["banner-box_2"]}>
          <span>{props.uptitle}</span>
          <h5>{props.title2}</h5>
          <p>{props.text}</p>
          <button className={classes.btn} type="button">
            Shop
          </button>
        </div>
      </div>
      <div className={classes["banner-img"]}>
        <img
          src={props.img === undefined ? img : props.img}
          alt="headphone product"
        />
      </div>
    </motion.div>
  );
};

export default DeviceBanner;
