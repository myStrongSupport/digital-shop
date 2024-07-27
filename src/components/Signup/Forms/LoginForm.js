import React from "react";
import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../assets/Logo.png";
import useForm from "../../../hooks/use-validate";
const LoginForm = () => {
  // Email
  const {
    value: enteredEmail,
    isInvalid: emailIsInvalid,
    isValid: emailIsValid,
    valueChangeHander: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    rest: restEmailinput,
  } = useForm((value) => {
    return value.includes("@");
  });
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

  const onSubmitLoginHandler = () => {
    restEmailinput();
    restpasswordinput();
  };
  return (
    <div className={classes["signup_container"]}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["form-container"]}>
          <h3>Welcome Back</h3>
          <p>Log in in to your account</p>

          <form className={classes.form} onSubmit={onSubmitLoginHandler}>
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
          </form>
          <div className={classes.or}>
            <p>or</p>
          </div>
          <div className={classes["signup-with-google"]}>
            <button>
              <FcGoogle size="1.5rem" />
              <span> Log in with Google</span>
            </button>
          </div>
          <span className={classes["link-to-login"]}>
            Already have an account ? <Link to="/sign_up">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
