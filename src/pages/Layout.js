import { Outlet, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../components/Navbar/MainNavigation";
import Footer from "../components/Footer/Footer";
import { getCartData } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import Loading from "../UI/Loading";
import Search from "../components/Search/Search";
const Layout = () => {
  const navigation = useNavigation();
  const { searching } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
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

        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
