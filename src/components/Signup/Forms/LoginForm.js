import React, { useState } from "react";
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

  // Email validation function
  function isEmail(email) {
    return /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
      email
    );
  }

  // UseForm hook for email
  const {
    value: enteredEmail,
    isInvalid: emailIsInvalid,
    isValid: emailIsValid,
    valueChangeHander: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    rest: restEmailinput,
  } = useForm(isEmail);

  // UseForm hook for password
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

  // Email input classes
  const emailClasses = emailIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]}`;

  // Password input classes
  const passwordClasses = passwordIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]}`;

  let formValidity = emailIsValid && passwordIsvalid;

  // Function to check if user exists
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
            message: "User can enter",
          };
        }
        if (user.email === email && user.password !== password) {
          return {
            email: true,
            password: false,
            message: "Password is incorrect",
          };
        }
      }
      return {
        email: false,
        password: false,
        message: "You do not have an account, please sign up",
      };
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  // Submit handler
  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();
    const enteredUser = {
      email: enteredEmail,
      password: enteredPassword,
    };
    const { user, email, password } = await isUserExisted(
      enteredUser.email,
      enteredUser.password
    );

    if (email && password) {
      dispatch(userActions.login(user));
      dispatch(addUser(user));
      navigate("/");
    } else if (email && !password) {
      setError("Password is incorrect");
    } else if (!email && !password) {
      setError("User is not existed");
    }

    restEmailinput();
    restpasswordinput();

    // Clear error message after 3 seconds
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  // Animation variants
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

  const invalidInputVariant = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className={classes["signup_container"]}>
      <AnimatePresence>
        {error && (
          <motion.div
            className={classes.error}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
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
            <motion.p variants={variantItem}>Log in to your account</motion.p>

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
                <AnimatePresence>
                  {emailIsInvalid && (
                    <motion.p
                      className={classes.err}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Please enter a valid Email
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div className={passwordClasses}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                />
                <AnimatePresence>
                  {passwordIsInvalid && (
                    <motion.p
                      className={classes.err}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Password must be at least 8 characters
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <button className={classes.btn} disabled={!formValidity}>
                Log in
              </button>
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
              Already have an account? <Link to="/sign_up">Sign up</Link>
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginForm;
