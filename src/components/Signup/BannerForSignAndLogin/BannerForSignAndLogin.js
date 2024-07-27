import React from "react";
import tech1 from "../../../assets/Signup/s1.jpg";
import svg from "../../../assets/Signup/Asset2.png";
import svg1 from "../../../assets/Signup/Asset3.png";
import classes from "./BannerForSignAndLogin.module.css";
const BannerForSignAndLogin = () => {
  return (
    <div className={classes["signup_container-img"]}>
      <div className={classes["img-container"]}>
        <img src={svg} className={classes.svg} alt="svg" />
        <img
          src={tech1}
          className={classes["main-img"]}
          alt="Enjoy Technology"
        />
        <img src={svg1} className={classes.svg1} alt="svg" />
      </div>
    </div>
  );
};

export default BannerForSignAndLogin;
