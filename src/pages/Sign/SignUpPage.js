import React, { useEffect } from "react";
import Signup from "../../components/Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { sendUser } from "../../store/actions/actions";
const SignUpPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(sendUser(user));
  }, [user, dispatch]);
  return <Signup />;
};

export default SignUpPage;
