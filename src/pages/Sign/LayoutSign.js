import React from "react";
import { Outlet } from "react-router-dom";
import BannerForSignAndLogin from "../../components/Signup/BannerForSignAndLogin/BannerForSignAndLogin";
const LayoutSign = () => {
  return (
    <>
      <main style={{ height: "100dvh", display: "flex" }}>
        <Outlet />
        <BannerForSignAndLogin />
      </main>
    </>
  );
};

export default LayoutSign;
