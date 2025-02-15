// import React from 'react'

import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useEffect, useState } from "react";
// import API from "../utils/api";

interface User {
  role: string
}

const AdminRoute = () => {
  let user = localStorage.getItem("user") ||  ""
  let data: User = JSON.parse(user)

  return data?.role  === "karyawan" ? <Outlet /> : <Navigate to={"/notfound"} />;
};

export default AdminRoute;
