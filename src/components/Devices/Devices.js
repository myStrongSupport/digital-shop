import React from "react";
import classes from "./Devices.module.css";
import DeviceItem from "./DeviceItem";
import DeviceFeatures from "./DeviceFeatures";

import { BsTruck } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

import img1 from "../../assets/Devices/headphone.png";
import img2 from "../../assets/Devices/watch.png";
import img3 from "../../assets/Devices/laptop.png";
import img4 from "../../assets/Devices/consolegame.png";
import img5 from "../../assets/Devices/oculus.png";
import img6 from "../../assets/Devices/speaker.png";
import DeviceBanner from "./DeviceBanner";

const ListDevices = [
  { id: "headphone", title: "Enjoy With Earphone", bg: "--bg-dark", img: img1 },
  {
    id: "watch",
    title: "New Wear Gadget",
    img: img2,
    bg: "--bg-yellow",
    btn: "primary",
  },
  {
    id: "laptop",
    title: "Trend Devices laptop",
    img: img3,
    bg: "--bg-red",
    btn: "primary",
  },
  { id: "game", title: "Best Game Console", img: img4, bg: "--bg-light" },
  {
    id: "oculus",
    title: "Play Game Oculus",
    img: img5,
    bg: "--bg-green",
    btn: "primary",
  },
  {
    id: "speaker",
    title: "New Amazon Speaker",
    img: img6,
    bg: "--bg-blue",
    btn: "primary",
  },
];

const features = [
  {
    id: "f1",
    title: "Free Shipping",
    subtitle: "free shipping on all orders",
    icon: <BsTruck />,
  },
  {
    id: "f2",
    title: "Money Guarantee ",
    subtitle: "30 Day mony Backs",
    icon: <VscWorkspaceTrusted />,
  },
  {
    id: "f3",
    title: "Online support 24/7",
    subtitle: "Technical Support 24/7",
    icon: <FaHeadphonesAlt />,
  },
  {
    id: "f4",
    title: "secure  payment",
    subtitle: "all cards accepted",
    icon: <GiWallet />,
  },
];

const Devices = () => {
  const devices = ListDevices.map((device) => (
    <DeviceItem key={device.id} device={device} />
  ));
  const feature = features.map((feature) => (
    <DeviceFeatures
      icon={feature.icon}
      key={feature.id}
      title={feature.title}
      subtitle={feature.subtitle}
    />
  ));
  return (
    <section className={classes.devices}>
      <div className={classes.container}>{devices}</div>
      <div className={classes["feature-container"]}>
        <div className={classes.features}>{feature}</div>
        <DeviceBanner
          title="Fine Smile"
          off="20% off"
          date="15 Nov To 7 Dec"
          uptitle="Beats Solo air"
          title2="Summer sale"
          text=" Company that's grown from 270 to 480 employees in the last 12
          months."
        />
      </div>
    </section>
  );
};

export default Devices;
