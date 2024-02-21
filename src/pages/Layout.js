import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../components/Navbar/MainNavigation";
import Footer from "../components/Footer/Footer";
import { getCartData } from "../store/actions/actions";
import { useDispatch } from "react-redux";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
