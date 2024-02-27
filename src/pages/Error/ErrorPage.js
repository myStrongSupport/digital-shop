import React from "react";
import MainNavigation from "../../components/Navbar/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const style = {
    width: "700px",
    background: "#000",
    color: "red",
    padding: "30px",
    lineHeight: "2",
    margin: "100px auto",
    borderRadius: "20px",
    textTransform: "capitalize",
  };
  const err = useRouteError();
  let message = "Something went wrong";
  let title = "An error occurred";
  console.log(err.status);
  if (err.status === 500) {
    message = err.data.message;
  }
  if (err.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <MainNavigation />
      <main className="container">
        <div style={style}>
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
