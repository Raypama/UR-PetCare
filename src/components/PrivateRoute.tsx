// import React from 'react'

// import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute() {
  // const authContext = useContext(AuthContext)
  // const isLogin = authContext?.isLogin
  const { isLogin } = useAuth();
  console.log(isLogin);

  return isLogin ? <Outlet /> : <Navigate to={"/login-pages"} />;
}

export default PrivateRoute;
