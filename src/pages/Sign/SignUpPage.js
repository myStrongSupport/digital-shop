import React from "react";
import Signup from "../../components/Signup/Signup";
import { json } from "react-router-dom";

const SignUpPage = () => {
  return <Signup />;
};

export default SignUpPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    "https://learn-firebase-749de-default-rtdb.firebaseio.com/users.json"
  );

  if (!response.ok) {
    throw json({ message: "Couldn't Load User Data" }, { status: 500 });
  }

  const data = await response.json();
  return data;
};
