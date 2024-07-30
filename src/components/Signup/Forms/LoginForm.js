import React from "react";
import classes from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../assets/Logo.png";
import useForm from "../../../hooks/use-validate";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/slices/user-slice";
import { addUser } from "../../../store/actions/actions";
const LoginForm = () => {
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
      console.log(message);
    } else if (!email && !password) {
      // Todo
      console.log(message);
    }

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
