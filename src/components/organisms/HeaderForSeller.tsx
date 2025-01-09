// import React from "react";
import { Link } from "react-router-dom";
import DropdownLogin from "../atoms/DropdownLogin";

const HeaderForSeller = () => {
  return (
    <div className="bg-slate-50 border-gray-200 dark:bg-gray-900 h-auto  fixed top-0">
      <div  className="relative">
        <nav className=" w-screen flex">
          <div className="flex flex-wrap justify-between items-center   max-w-screen-xl ">
            <Link
              to={"/"}
              className="flex items-center pl-3 mx-auto space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/src/assets/petlogo.png"
                className="h-[80px] object-cover rounded-full"
                alt="Hoops Logo"
              />
            </Link>
          </div>
          <div className="flex absolute right-3 flex-wrap justify-between items-center   max-w-screen-xl p-4">
            <DropdownLogin />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderForSeller;
