import React from "react";
import Showcase from "../components/ShowCase/Showcase";
import Devices from "../components/Devices/Devices";
import BestSeller from "../components/Products/BestSeller";
import RecentNews from "../components/News/RecentNews";
const HomePage = () => {
  return (
    <>
      <Showcase />
      <Devices />
      <BestSeller />
      <RecentNews />
    </>
  );
};

export default HomePage;

export const loader = async () => {
  const response = await fetch(
    "https://digital-shop-235e5-default-rtdb.firebaseio.com/bestSellers.json"
  );

  if (!response.ok) {
  }
  const data = await response.json();
  return data;
};
