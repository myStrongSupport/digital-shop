import React from "react";
import { Link } from "react-router-dom";
import classes from "./DeviceItem.module.css";
import { motion } from "framer-motion";
const DeviceItem = ({ device, index }) => {
  const firstWord = device.title.split(" ")[0];
  const secondWord = device.title.split(" ")[1];
  const thirdWord = device.title.split(" ")[2];
  const bg = {
    background: `var(${device.bg})`,
  };

  const itemVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        opacity: {
          delay: 0.6,
        },
        delay: 0.06 * index,
      },
    }),
  };
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      className={classes.product}
      // viewport={{ once: true }}
      style={bg}
    >
      <Link to={`shop/` + device.id}>
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
          <div
            className={`${classes["device-img"]} ${classes[`${device.id}`]}`}
          >
            <img src={device.img} alt="" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DeviceItem;
