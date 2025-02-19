import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
// import Dropdown from "../atoms/Dropdown";
// import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const {isLogin} = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle klik di luar sidebar untuk menutup menu
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="">
      <div className="w-full px-4 py-1 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo dan Hamburger */}
          <div>
            <div className="flex items-center">
              <button
                className="lg:hidden text-gray-900  focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12" // Ikon "X"
                        : "M4 6h16M4 12h16M4 18h16" // Ikon menu
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Menu Desktop */}
            <ul className="hidden lg:flex lg:items-center font-medium space-x-8 rtl:space-x-reverse text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-900  hover:underline hover:text-emerald-400 transition-all duration-250 ${
                      isActive ? "font-bold text-emerald-500" : ""
                    }`
                  }                >
                  Home
                </NavLink>
              </li>
              
                <li>
                  <NavLink
                    to="/booking"
                    className={({ isActive }) =>
                      `text-gray-900  hover:underline hover:text-emerald-400 transition-all duration-250 ${
                        isActive ? "font-bold text-emerald-500" : ""
                      }`
                    }                  >
                    Service
                  </NavLink>
                </li>
                {isLogin && (
                  
                <li>
                  <NavLink
                    to="/my-profile"
                    className={({ isActive }) =>
                      `text-gray-900  hover:underline hover:text-emerald-400 transition-all duration-250 ${
                        isActive ? "font-bold text-emerald-500" : ""
                      }`
                    }                  >
                    Profiles & Payments
                  </NavLink>
                </li>
                )}
                <li>
                  <NavLink
                    to="/news&blog"
                    className={({ isActive }) =>
                      `text-gray-900  hover:underline hover:text-emerald-400 transition-all duration-250 ${
                        isActive ? "font-bold text-emerald-500" : ""
                      }`
                    }                  >
                    Blog & News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      `text-gray-900  hover:underline hover:text-emerald-400 transition-all duration-250 ${
                        isActive ? "font-bold text-emerald-500" : ""
                      }`
                    }                  >
                    FAQ
                  </NavLink>
                </li>
                
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <ul className="flex flex-col font-medium space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-200 hover:text-emerald-400 transition-all ${
                  isActive ? "font-bold text-emerald-500" : ""
                }`
              }              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <Dropdown />
          </li> */}
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `text-gray-200 hover:text-emerald-400 transition-all ${
                  isActive ? "font-bold text-emerald-500" : ""
                }`
              }              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </NavLink>
          </li>
          {isLogin&&(

          <li>
            <NavLink
              to="/my-profile"
              className={({ isActive }) =>
                `text-gray-200 hover:text-emerald-400 transition-all ${
                  isActive ? "font-bold text-emerald-500" : ""
                }`
              }              onClick={() => setIsMenuOpen(false)}
            >
              Profiles & Payments
            </NavLink>
          </li>
          )}
          <li>
            <NavLink
              to="/news&blog"
              className={({ isActive }) =>
                `text-gray-200 hover:text-emerald-400 transition-all ${
                  isActive ? "font-bold text-emerald-500" : ""
                }`
              }              onClick={() => setIsMenuOpen(false)}
            >
             Blog & News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-gray-200 hover:text-emerald-400 transition-all ${
                  isActive ? "font-bold text-emerald-500" : ""
                }`
              }              onClick={() => setIsMenuOpen(false)}
            >
             FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
