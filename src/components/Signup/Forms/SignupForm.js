import React, { useEffect, useState } from "react";
import classes from "./SignupForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import useForm from "../../../hooks/use-validate";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/slices/user-slice";
import { v4 as uuidv4 } from "uuid";
import { addUsers, addUser } from "../../../store/actions/actions";
import { motion } from "framer-motion";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [agreedWithTerms, setAgreedWithTerms] = useState(false);
  const [error, setError] = useState("");
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
    return value.trim().length >= 2;
  });

  // Confirm Password

  const {
    value: enteredConfirmPassword,
    isInvalid: passwordConfirmIsInvalid,
    isValid: passwordConfirmIsvalid,
    valueChangeHander: passwordConfirmChangeHandler,
    valueBlurHandler: passwordConfirmBlurHandler,
    rest: restpasswordConfirminput,
  } = useForm((value) => {
    return value.trim() === enteredPassword;
  });
  // Email Classes
  const emailClasses = emailIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]} `;
  // Password
  const passwordClasses = passwordIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]} `;
  // Confirm Password
  const passwordConfirmClasses = passwordConfirmIsInvalid
    ? `${classes["form-control"]} ${classes["err-input"]}`
    : `${classes["form-control"]} `;

  let formValidity =
    emailIsValid &&
    passwordIsvalid &&
    passwordConfirmIsvalid &&
    agreedWithTerms;

  const onAgreedWithTermsHandler = () => {
    setAgreedWithTerms((prev) => !prev);
  };

  const isUserExisted = async (email) => {
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
        if (user.email === email) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const onSubmitSignUpHandler = async (e) => {
    e.preventDefault();
    // Create new user
    const user = {
      email: enteredEmail,
      password: enteredPassword,
      id: uuidv4(),
    };

    // Check user Existed or not
    const userExists = await isUserExisted(user.email);
    if (userExists) {
      setError("User already exists");
    } else {
      dispatch(userActions.login(user));
      dispatch(addUsers(user));
      dispatch(addUser(user));
      navigate("/");
      restEmailinput();
      restpasswordinput();
      restpasswordConfirminput();
    }
  };

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
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {}, []);
  return (
    <div className={classes["signup_container"]}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <motion.div
          variants={variantContainer}
          initial="hidden"
          animate="visible"
          className={classes["form-container"]}
        >
          <motion.h3
            variants={variantItem}
            onClick={() => {
              console.log("hamed");
            }}
          >
            Create Your Account
          </motion.h3>
          <motion.p variants={variantItem}>
            Let's Get Started With your 30 days Free Trail
          </motion.p>
          <div className={classes["signup-with-google"]}>{error}</div>
          <motion.div variants={variantItem} className={classes.or}>
            <p>or</p>
          </motion.div>
          <motion.form
            variants={variantItem}
            className={classes.form}
            onSubmit={onSubmitSignUpHandler}
          >
            {/* Email */}
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
            {/* Passoword */}
            <div className={passwordClasses}>
              <label>Password</label>
              <input
                type="password"
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
            {/* Confirm Password */}
            <div className={passwordConfirmClasses}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                value={enteredConfirmPassword}
                onChange={passwordConfirmChangeHandler}
                onBlur={passwordConfirmBlurHandler}
              />

              {passwordConfirmIsInvalid && (
                <p className={classes.err}>Password is not Correct</p>
              )}
            </div>
            <div className={`${classes["form-control"]} ${classes.checkbox}`}>
              <input type="checkbox" onClick={onAgreedWithTermsHandler} />
              <span>I agree with all term, Privacy Policy and Fees</span>
            </div>
            <button className={classes.btn} disabled={!formValidity}>
              Sign up
            </button>
          </motion.form>
          <motion.span
            variants={variantItem}
            className={classes["link-to-login"]}
          >
            Already have an account ? <Link to="/login">Log in</Link>
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupForm;
