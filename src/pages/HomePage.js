import React from "react";
import Showcase from "../components/ShowCase/Showcase";
import Devices from "../components/Devices/Devices";
import BestSeller from "../components/Products/BestSeller";
import RecentNews from "../components/News/RecentNews";
import { json } from "react-router-dom";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 2 }}
    >
      <Showcase />
      <Devices />
      <BestSeller />
      <RecentNews />
    </motion.div>
  );
};

export default HomePage;

export const loader = async () => {
  const response = await fetch(
    "https://digital-shop-235e5-default-rtdb.firebaseio.com/bestSellers.json"
  );

  if (!response.ok) {
    throw json({ message: "Couldn't Load Best Sellers Data" }, { status: 500 });
  }
  const data = await response.json();
  return data;
};
