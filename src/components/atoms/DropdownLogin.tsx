// import React from 'react'

import { MegaMenu } from "flowbite-react";
// import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DropdownLogin = () => {
  const { isLogin, user, dispatch } = useAuth();

  const navigate = useNavigate();

  const NavigateToLogin = () => {
    navigate("/login-pages");
  };
  return (
    <MegaMenu
      className={
        isLogin ? "text-slate-900" : " p-0 sm:px-0 px-0  text-gray-900 "
      }
    >
      <MegaMenu.Dropdown
        toggle={
          <>
            {isLogin ? "Hi!!" : " "}{" "}
            <span className="block mx-2 font-bold text-green-700">
              {user?.name}
            </span>{" "}
            <span
              className={
                isLogin
                  ? " bg-slate-400 rounded"
                  : "dark:text-white hover:underline hover:text-red-500 transition-all duration-250"
              }
            >
              {isLogin ? "" : "Login/Register"}
            </span>{" "}
          </>
        }
      >
        <div className="p-4 w-80 ">
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink
              to="/register"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-xs md:text-base text-orange-700  over:text-primary-600 dark:hover:text-primary-500 font-semibold underline" // Untuk link aktif
                    : "text-xs md:text-base hover:text-orange-700 over:text-primary-600 dark:hover:text-primary-500 font-semibold underline" // Untuk link tidak aktif
              }
            >
              {isLogin? '' : 'Register'}
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink
              to="/login-pages"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-xs md:text-base text-orange-700  over:text-primary-600 dark:hover:text-primary-500 font-semibold underline" // Untuk link aktif
                    : "text-xs md:text-base hover:text-orange-700 over:text-primary-600 dark:hover:text-primary-500 font-semibold underline" // Untuk link tidak aktif
              }
            >
              {isLogin ? (
                <div>
                  <button
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    className="text-red-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button onClick={NavigateToLogin} className="text-green-500">
                  Login
                </button>
              )}
            </NavLink>
          </div>
        </div>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
};

export default DropdownLogin;
