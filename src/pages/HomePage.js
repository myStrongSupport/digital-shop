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
