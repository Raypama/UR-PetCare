import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DropdownLogin = () => {
  const { isLogin, user, dispatch } = useAuth();
  const navigate = useNavigate();

  const NavigateToLogin = () => {
    navigate("/login-pages");
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning, ";
    if (hours < 18) return "Good Afternoon, ";
    if (hours < 22) return "Good Evening, ";
    return "Good Night, ";
  };

  return (
    <div className="relative group">
      <div
        className={
          isLogin
            ? "text-slate-900 bg-transparent cursor-pointer"
            : "p-0 sm:px-0 px-0 bg-transparent text-gray-900 cursor-pointer"
        }
      >
        {isLogin ? getGreeting() : " "} {" "}
        <span className="  font-bold text-emerald-500">
          {user?.name}
        </span>{" "}
        <span
          className={
            isLogin
              ? "bg-slate-100 rounded"
              : "dark:text-white hover:underline hover:text-emerald-500 transition-all ease-in-out duration-[700ms]"
          }
        >
          {isLogin ? "" : "Login/Register"}
        </span>{" "}
      </div>
      <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg p-4 rounded w-48">
        {/* {isLogin && (
          <div className="space-y-4 duration-200">
            <NavLink
              to="/update"
              className="text-xs md:text-base hover:text-emerald-500 dark:hover:text-primary-500 font-semibold"
            >
              Update User
            </NavLink>
          </div>
        )} */}
        <div className="space-y-4 duration-200">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-xs md:text-base text-emerald-500 dark:hover:text-primary-500 font-semibold underline"
                : "text-xs md:text-base hover:text-emerald-500 dark:hover:text-primary-500 font-semibold"
            }
          >
            {isLogin ? "" : "Register"}
          </NavLink>
        </div>
        <div className="space-y-4 duration-200">
          <NavLink
            to="/login-pages"
            className={({ isActive }) =>
              isActive
                ? "text-xs md:text-base text-emerald-500 hover:text-primary-600 dark:hover:text-primary-500 font-semibold underline"
                : "text-xs md:text-base hover:text-emerald-500 hover:text-primary-600 dark:hover:text-primary-500 font-semibold"
            }
          >
            {isLogin ? (
              <div>
                <button
                  onClick={() => dispatch({ type: "LOGOUT" })}
                  className="hover:text-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={NavigateToLogin} className="hover:text-green-500">
                Login
              </button>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DropdownLogin;
