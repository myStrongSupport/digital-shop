import React from "react";
import { Link } from "react-router-dom";
import classes from "./DeviceItem.module.css";

const DeviceItem = ({ device }) => {
  const firstWord = device.title.split(" ")[0];
  const secondWord = device.title.split(" ")[1];
  const thirdWord = device.title.split(" ")[2];
  console.log(device.bg);
  const bg = {
    background: `var(${device.bg})`,
  };
  return (
    <Link style={bg}>
      <div className={classes.device}>
        <div className={classes["device-header"]}>
          <span>{firstWord}</span>
          <h4>{secondWord}</h4>
          <h3>{thirdWord}</h3>
          <button
            className={
              device.btn === "primary"
                ? `${classes.btn} ${classes.primary}`
                : classes.btn
            }
          >
            Browse
          </button>
        </div>
        <div className={`${classes["device-img"]} ${classes[`${device.id}`]}`}>
          <img src={device.img} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default DeviceItem;
