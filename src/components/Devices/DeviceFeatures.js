import React from "react";
import classes from "./DeviceFeatures.module.css";
import { motion } from "framer-motion";

const DeviceFeatures = (props) => {
  const fadeAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      variants={fadeAnimation}
      initial="hidden"
      whileInView="visible"
      className={classes.feature}
    >
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.title}>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </motion.div>
  );
};

export default DeviceFeatures;
