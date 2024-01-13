import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("user");
  // console.log(auth, 6);
  return auth ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
