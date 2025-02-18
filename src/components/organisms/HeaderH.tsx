import { Link, NavLink } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import DropdownLogin from "../atoms/DropdownLogin";
import { useEffect, useState } from "react";
import API from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import unknownImage from "/assets/unknown.jpeg";

interface UserProps {
  id: number;
  name: string;
  email: string;
  address: string;
  photo: string;
  phone: string;
  role: string;
}

function HeaderH() {
  const { user, isLogin } = useAuth();
  const [users, setUsers] = useState<UserProps | null>(null);
  const [onscroll, setOnScroll] = useState(false);

  const getUser = async () => {
    if (!user?.id) return;
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await API.get(`/users/${user.id}`, config);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      getUser();
    } else {
      setUsers(null); // Pastikan users di-reset jika user logout
    }
  }, [user?.id]);

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 w-full border-gray-200 transition-all duration-[400ms] ${
        onscroll
          ? "h-24 bg-white sm:h-20 md:h-24 lg:h-28"
          : "h-28 bg-gray-100 sm:h-24 md:h-28 lg:h-32"
      }`}
    >
      <div>
        <nav className="relative w-screen flex justify-between">
          <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
            <div>
              <Link to="/" className="flex pl-3 items-center mx-auto space-x-3">
                <img
                  src="/assets/petlogo.png"
                  className="h-[40px] sm:h-[70px] md:h-[80px] object-cover  rounded-full"
                  alt="petcare Logo"
                />
              </Link>
            </div>
            <div>
              <h1 className="text-blue-950 px-1 sm:px-3 md:px-4 font-semibold text-sm sm:text-lg md:text-xl lg:text-3xl mt-4 font-sans uppercase italic">
                Ur.Pet<span className="text-emerald-400">Cares..</span>
              </h1>
              <Navbar />
            </div>
          </div>

          <div
            className={
              `flex absolute flex-wrap items-center transition-all duration-300 right-0`
              // onscroll ? "right-20 " : "right-10"
            }
          >
            <div className="flex-col mr-6">
              {isLogin ? (
                <div className="py-4 sm:py-3 flex items-center space-x-3 sm:space-x-4 flex-wrap max-w-full">
                  <div className="shrink-0">
                    <NavLink
                      to={users?.id ? "/my-profile" : "/login-pages"}
                      className={"cursor-pointer"}
                    >
                      <img
                        alt="my-profile"
                        src={users?.photo ? users.photo : unknownImage}
                        onError={(e) => (e.currentTarget.src = unknownImage)}
                        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full object-cover border border-gray-300"
                      />
                    </NavLink>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
                      {users?.email}
                    </p>
                    <DropdownLogin />
                  </div>
                </div>
              ) : (
                <div className="py-4 sm:py-3 flex items-center space-x-3 sm:space-x-4 flex-wrap max-w-full">
                  <div className="shrink-0 hidden">
                    <NavLink to={"/my-profile"} className={"cursor-pointer"}>
                      <img
                        alt="my-profile"
                        src={users?.photo ? users.photo : unknownImage}
                        onError={(e) => (e.currentTarget.src = unknownImage)}
                        className="h-6 w-6 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full object-cover border border-gray-300"
                      />
                    </NavLink>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate hidden text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
                      {"No email available"}
                    </p>
                    <DropdownLogin />
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderH;
