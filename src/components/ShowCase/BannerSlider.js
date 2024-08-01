import React from "react";
import bannerImage from "../../assets/BannerImage/HeadPhone.png";
import classes from "./Showcase.module.css";
const BannerSlider = ({ isActive }) => {
  return (
    <>
      <div className={classes.banner}>
        <div className={classes["banner-inner"]}>
          <h5 className={isActive ? classes.animate : classes.unAnimate}>
            Beats Solo
          </h5>
          <h4 className={isActive ? classes.animate : classes.unAnimate}>
            Wireless
          </h4>
          <h1>
            <span className={isActive ? classes["animate-title"] : "unAnimate"}>
              Head
            </span>
            <span
              className={isActive ? classes["eAnimate-title"] : "unAnimate"}
            >
              p
            </span>
            <span className={isActive ? classes["animate-title"] : "unAnimate"}>
              hone
            </span>
          </h1>
          <div className={classes["banner-actions"]}>
            <button>Buy By Category</button>
            <div className={classes.description}>
              <h6>Description</h6>
              <p>
                There are many variantions passages of Lorem ipsum availble. But
                it's manatory have surffreced alteration
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["banner-img"]}>
        <img
          src={bannerImage}
          className={isActive ? classes.bump : classes.unActive}
          alt="A Banner "
        />
      </div>
    </>
  );
};

export default BannerSlider;
