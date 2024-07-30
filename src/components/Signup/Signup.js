import React from "react";
import SignupForm from "./Forms/SignupForm";
import LoginForm from "./Forms/LoginForm";
const Signup = ({ login }) => {
  let LogAndSignPuter;
  if (login) {
    LogAndSignPuter = <LoginForm />;
  }
  if (!login) {
    LogAndSignPuter = <SignupForm />;
  }
  return (
    <>
      {/* SignUp */}
      {LogAndSignPuter}
      {/* Image Field */}
    </>
  );
};

export default Signup;
