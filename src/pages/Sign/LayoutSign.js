import React from "react";
import { Outlet } from "react-router-dom";

const LayoutSign = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutSign;
