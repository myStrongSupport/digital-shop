import { Outlet, useNavigation, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../components/Navbar/MainNavigation";
import Footer from "../components/Footer/Footer";
import { getCartData } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import Loading from "../UI/Loading";
import Search from "../components/Search/Search";
import User from "../components/Signup/User/User";
import { AnimatePresence } from "framer-motion";
const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const { searching, user } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && (
          <Modal closable={true}>
            <Loading />
          </Modal>
        )}

        {searching && <Search />}
        {user && (
          <Modal>
            <User />
          </Modal>
        )}
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
