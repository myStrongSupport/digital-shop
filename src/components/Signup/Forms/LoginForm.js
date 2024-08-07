import React, { useEffect, useState } from "react";
import classes from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../assets/Logo.png";
import useForm from "../../../hooks/use-validate";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/slices/user-slice";
import { addUser } from "../../../store/actions/actions";
import { AnimatePresence, motion } from "framer-motion";
const LoginForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Email

  function isEmail(email) {
    return /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
      email
    );
  }
  const {
    value: enteredEmail,
    isInvalid: emailIsInvalid,
    isValid: emailIsValid,
    valueChangeHander: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    rest: restEmailinput,
  } = useForm(isEmail);
  // Password
  const {
    value: enteredPassword,
    isInvalid: passwordIsInvalid,
    isValid: passwordIsvalid,
    valueChangeHander: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    rest: restpasswordinput,
  } = useForm((value) => {
    return value.trim().length > 8;
  });

  // Email Classes
  const emailClasses = emailIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]} `;
  // Password
  const passwordClasses = passwordIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]} `;

  let formValidity = emailIsValid && passwordIsvalid;

  const isUserExisted = async (email, password) => {
    try {
      const response = await fetch(
        "https://digital-shop-235e5-default-rtdb.firebaseio.com/people.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch users");
      }

      const data = await response.json();
      for (const key in data) {
        const user = data[key];
        if (user.email === email && user.password === password) {
          return {
            user: user,
            email: true,
            password: true,
            message: "User can inter",
          };
        }
        if (user.email === email && user.password !== password) {
          return {
            email: true,
            password: false,
            message: "Password is inccorect",
          };
        }
      }
      return {
        email: false,
        password: false,
        message: "You do not have an accont , please sign up",
      };
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();
    const Entereduser = {
      email: enteredEmail,
      password: enteredPassword,
    };
    const { user, email, password, message } = await isUserExisted(
      Entereduser.email,
      Entereduser.password
    );

    if (email && password) {
      dispatch(userActions.login(user));
      dispatch(addUser(user));
      navigate("/");
    } else if (email && !password) {
      // Todo
      setError("Password is incorrect");
    } else if (!email && !password) {
      // Todo
      setError("User is not Existed");
    }

    restEmailinput();
    restpasswordinput();
  };

  // useEffect

  const variantContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const variantItem = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: "-100vh",
    },
  };

  return (
    <div className={classes["signup_container"]}>
      {error && <div className={classes.error}>{error}</div>}
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <AnimatePresence>
          <motion.div
            variants={variantContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes["form-container"]}
          >
            <motion.h3 variants={variantItem}>Welcome Back</motion.h3>
            <motion.p variants={variantItem}>
              Log in in to your account
            </motion.p>

            <motion.form
              variants={variantItem}
              className={classes.form}
              onSubmit={onSubmitLoginHandler}
            >
              <div className={emailClasses}>
                <label id="email">Email</label>
                <input
                  type="text"
                  htmlFor="email"
                  placeholder="Enter Your Email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailIsInvalid && (
                  <p className={classes.err}>Please enter valide Email</p>
                )}
              </div>
              <div className={passwordClasses}>
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                {passwordIsInvalid && (
                  <p className={classes.err}>
                    Password must be at least 8 charechter
                  </p>
                )}
              </div>
              <button className={classes.btn} disabled={!formValidity}>
                Sign up
              </button>{" "}
            </motion.form>
            <motion.div variants={variantItem} className={classes.or}>
              <p>or</p>
            </motion.div>
            <motion.div
              variants={variantItem}
              className={classes["signup-with-google"]}
            >
              <button>
                <FcGoogle size="1.5rem" />
                <span> Log in with Google</span>
              </button>
            </motion.div>
            <motion.span
              variants={variantItem}
              className={classes["link-to-login"]}
            >
              Already have an account ? <Link to="/sign_up">Sign up</Link>
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginForm;
