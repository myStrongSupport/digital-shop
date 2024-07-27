import React from "react";
import classes from "./Signup.module.css";
import SignupForm from "./Forms/SignupForm";
import LoginForm from "./Forms/LoginForm";
import BannerForSignAndLogin from "./BannerForSignAndLogin/BannerForSignAndLogin";
const Signup = ({ login }) => {
  let LogAndSignPuter;
  if (login) {
    LogAndSignPuter = <LoginForm />;
  }
  if (!login) {
    LogAndSignPuter = <SignupForm />;
  }
  return (
    <div className={classes["signup_container"]}>
      {/* SignUp */}
      {LogAndSignPuter}
      {/* Image Field */}
      <BannerForSignAndLogin />
    </div>
  );
};

export default Signup;
