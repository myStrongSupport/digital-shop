import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LOGO from "../../assets/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { GrShop } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/slices/ui_slice";
import { userActions } from "../../store/slices/user-slice";
const MainNavigation = () => {
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

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes["menu-part"]}>
          <div className={classes.logo}>
            <Link to="">
              <img src={LOGO} alt="A Shop Logo" />
            </Link>
          </div>
          <nav>
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
        </div>
        <div className={classes["login-part"]}>
          <div className={classes.login}>
            {user.user ? (
              <div onClick={onModalUserHandler}>U</div>
            ) : (
              <Link to={"/sign_up"}>Sign up</Link>
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
      </div>
    </header>
  );
};

export default MainNavigation;
