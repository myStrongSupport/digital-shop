import React, { useState } from "react";
import classes from "./SignupForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../assets/Logo.png";
import useForm from "../../../hooks/use-validate";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/slices/user-slice";
import { v4 as uuidv4 } from "uuid";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [agreedWithTerms, setAgreedWithTerms] = useState(false);
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

  const onSubmitSignUpHandler = (e) => {
    e.preventDefault();
    const user = {
      email: enteredEmail,
      password: enteredPassword,
      id: uuidv4(),
      login: true,
    };

    dispatch(userActions.addUser(user));
    navigate("/");
    restEmailinput();
    restpasswordinput();
    restpasswordConfirminput();
  };
  return (
    <div className={classes["signup_container"]}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["form-container"]}>
          <h3>Create Your Account</h3>
          <p>Let's Get Started With your 30 days Free Trail</p>
          <div className={classes["signup-with-google"]}>
            <button>
              <FcGoogle size="1.5rem" />
              <span> Sign up with Google</span>
            </button>
          </div>
          <div className={classes.or}>
            <p>or</p>
          </div>
          <form className={classes.form} onSubmit={onSubmitSignUpHandler}>
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
          </form>
          <span className={classes["link-to-login"]}>
            Already have an account ? <Link to="/login">Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
