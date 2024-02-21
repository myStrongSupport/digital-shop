import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LOGO from "../../assets/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { GrShop } from "react-icons/gr";
import { useSelector } from "react-redux";
const MainNavigation = () => {
  const totalQuentity = useSelector((state) => state.cart.totalQuentity);

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
          <div className={classes.login}>Login</div>
          <div className={classes["badge-search-part"]}>
            <div>
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
