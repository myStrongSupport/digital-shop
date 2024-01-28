import React from "react";
import classes from "./Devices.module.css";
import DeviceItem from "./DeviceItem";

import img1 from "../../assets/Devices/headphone.png";
import img2 from "../../assets/Devices/watch.png";
import img3 from "../../assets/Devices/laptop.png";
import img4 from "../../assets/Devices/consolegame.png";
import img5 from "../../assets/Devices/oculus.png";
import img6 from "../../assets/Devices/speaker.png";

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

const Devices = () => {
  const devices = ListDevices.map((device) => (
    <DeviceItem key={device.id} device={device} />
  ));
  return (
    <section className={classes.devices}>
      <div className={classes.container}>{devices}</div>
    </section>
  );
};

export default Devices;
