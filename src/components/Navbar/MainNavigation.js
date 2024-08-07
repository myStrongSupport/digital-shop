import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LOGO from "../../assets/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { GrShop } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/slices/ui_slice";
import { userActions } from "../../store/slices/user-slice";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const MainNavigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const totalQuentity = useSelector((state) => state.cart.totalQuentity);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const goSearchHandler = () => {
    dispatch(uiActions.toggleSearch());
  };

  const onModalUserHandler = () => {
    dispatch(uiActions.toggleUser());
  };

  // Functions
  const toggleMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  // UseEffects

  useEffect(() => {
    const onGetCurrentUser = async () => {
      // Todo
      // Error handling
      const response = await fetch(
        "https://digital-shop-235e5-default-rtdb.firebaseio.com/person.json"
      );

      const user = await response.json();
      if (!user) {
        setCurrentUser(null);
      } else {
        setCurrentUser(user);
      }
    };
    onGetCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      dispatch(userActions.login(currentUser));
    }
  }, [currentUser, dispatch]);

  // Responsive

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes["menu-part"]}>
          <div className={classes.logo}>
            <Link to="">
              <img src={LOGO} alt="A Shop Logo" />
            </Link>
          </div>
          {/* Desktop */}
          {width >= 768 && (
            <nav className={classes.navbar}>
              <ul className={classes.list}>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to=""
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
          {/* Menu */}
          {width <= 768 && showMenu && (
            <nav className={classes.navbar}>
              <div className={classes["logo_res"]}>
                <Link to="">
                  <img src={LOGO} alt="A Shop Logo" />
                </Link>
                <MdOutlineClose
                  size="2rem"
                  onClick={toggleMenuHandler}
                  className={classes.ham}
                />
              </div>
              <ul className={classes.list}>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to=""
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li></li>
              </ul>
              <ul className={classes["login-part"]}>
                <li className={classes.login}>
                  {user.user ? (
                    <div onClick={onModalUserHandler}>U</div>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </li>

                <li className={classes.badge}>
                  <Link to="cart">
                    <span>{totalQuentity}</span>
                    Your Badge
                  </Link>
                </li>
                <li onClick={goSearchHandler}>
                  <IoSearchOutline size="1.5rem" />
                </li>
              </ul>
            </nav>
          )}
        </div>
        {/* Search & Badge  */}
        {width >= 768 && (
          <div className={classes["login-part"]}>
            <div className={classes.login}>
              {user.user ? (
                <div onClick={onModalUserHandler}>U</div>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </div>
            <div className={classes["badge-search-part"]}>
              <div onClick={goSearchHandler}>
                <IoSearchOutline />
              </div>
              <div className={classes.badge}>
                <Link to="cart">
                  <span>{totalQuentity}</span>
                  <GrShop />
                </Link>
              </div>
            </div>
          </div>
        )}
        {width <= 768 && (
          <HiMenuAlt2
            size="2rem"
            onClick={toggleMenuHandler}
            className={classes.ham}
          />
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
