import React from "react";
import { Route, Navigate } from "react-router-dom";
// import Container from "../components/common/Container";
import Container from "./Container";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component and sidebar only when the user is logged in
    // Otherwise, Navigate the user to / page

    // isLogin() ? (
    //   <Container>
    //     <Component {...rest} />
    //   </Container>
    // ) : (
    //   <Navigate to="/" />
    // )
    true ? (
      <Container>
        <Component {...rest} />
      </Container>
    ) : (
      <Navigate to="/" />
    )
  );
};

export default PrivateRoute;
