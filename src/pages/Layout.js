import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navbar/MainNavigation";
import Footer from "../components/Footer/Footer";
const Layout = () => {
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
