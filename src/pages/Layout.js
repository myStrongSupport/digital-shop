import { Outlet, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../components/Navbar/MainNavigation";
import Footer from "../components/Footer/Footer";
import { getCartData } from "../store/actions/actions";
import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import Loading from "../UI/Loading";
const Layout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && (
          <Modal>
            <Loading />
          </Modal>
        )}

        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
