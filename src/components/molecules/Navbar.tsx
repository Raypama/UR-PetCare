import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Search from "../atoms/Search";
import Dropdown from "../atoms/Dropdown";
import Dropdown2 from "../atoms/Dropdown2";
import { useAuth } from "../../context/AuthContext";
// import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isLogin } = useAuth();
  // Handle klik di luar navbar untuk menutup menu
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="dark:bg-gray-700">
      <div className="w-full px-4 py-1 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo dan Hamburger */}
          <div>
            <div className="flex items-center">
              <button
                className="lg:hidden text-gray-900 dark:text-white focus:outline-none"
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
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
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
                  className="text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250"
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/contact"
                  className="text-gray-900 dark:text-white hover:underline hover:text-red-500 transition-all duration-250"
                >
                  New Arrival
                </NavLink>
              </li> */}
              {/* <li>
                <Dropdown />
              </li> */}
              <li>
                <Dropdown2 />
              </li>
              {isLogin && (
                <>
                  <li>
                    <NavLink
                      to="/division"
                      className="text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250"
                    >
                      Sale
                    </NavLink>
                  </li>

                  {/* <li>
                    <NavLink
                      to="/admin/todo-app"
                      className="text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250"
                    >
                      Todo App
                    </NavLink>
                  </li> */}
                  {/* <li>
                    <NavLink
                      to="/users"
                      className="text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250"
                    >
                      Users
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      to="/service"
                      className="text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250"
                    >
                      Our-Service
                    </NavLink>
                  </li>
                  
                </>
              )}
            </ul>
          </div>

          {/* Search & User Menu */}
          <div className="hidden lg:flex items-center gap-x-4  mx-4">
            <Search type="string" placeholder="Search Here"  />
            <Link to="/cart">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 13.00 13.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                stroke="#000000"
                strokeWidth="0.00013000000000000002"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M106.974,837h-12l2-11.031h1.989a1.98,1.98,0,0,1,3.96,0h2.051Zm-6-12.011c-1.042-.01-1.04.338-1.04.98h2.049C101.983,825.367,102.013,825,100.974,824.989ZM102.925,827v.994h-.943V827H99.933v.994h-.974V827H97.848l-1.75,9h9.719l-1.75-9ZM101,824c-.021,0-.041.005-.062.006s-.041-.006-.063-.006Z"
                    transform="translate(-94.974 -824)"
                    fill="#444"
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul className="flex flex-col font-medium space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              className="text-gray-200 hover:text-emerald-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/contact"
              className="text-gray-200 hover:text-emerald-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrival
            </NavLink>
          </li> */}
          <li>
            <Dropdown />
          </li>
          <li>
            <Dropdown2 />
          </li>
          <li>
            <NavLink
              to="/division"
              className="text-gray-200 hover:text-emerald-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Sale
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/todo-app"
              className="text-gray-200 hover:text-emerald-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Todo App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className="text-gray-200 hover:text-emerald-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Users-list
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/service"
              className="text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250"
            >
              Our-Service
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
