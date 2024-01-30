import React from "react";
import classes from "./DeviceFeatures.module.css";

const DeviceFeatures = (props) => {
  return (
    <div className={classes.feature}>
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.title}>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default DeviceFeatures;
