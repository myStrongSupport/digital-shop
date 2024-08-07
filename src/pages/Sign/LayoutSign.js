import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BannerForSignAndLogin from "../../components/Signup/BannerForSignAndLogin/BannerForSignAndLogin";
import { AnimatePresence } from "framer-motion";
const LayoutSign = () => {
  const location = useLocation();
  return (
    <>
      <main style={{ height: "100dvh", display: "flex" }}>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
        <BannerForSignAndLogin />
      </main>
    </>
  );
};

export default LayoutSign;
