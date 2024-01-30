import React from "react";
import classes from "./DeviceBanner.module.css";
import img from "../../assets/BannerImage/headphoneRed.png";
const DeviceBanner = (props) => {
  return (
    <div className={classes.banner}>
      <div className={classes["banner-box"]}>
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
        <img src={img} alt="headphone product" />
      </div>
    </div>
  );
};

export default DeviceBanner;
