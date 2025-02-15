import { Link, NavLink } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import DropdownLogin from "../atoms/DropdownLogin";
import { useEffect, useState } from "react";
import API from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import unknownImage from "../../assets/unknown.jpeg";

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
  const { user , isLogin} = useAuth();
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
        onscroll ? "h-24 bg-white px-4" : "h-28 bg-gray-100"
      }`}
    >
      <div>
        <nav className="relative w-screen flex justify-between">
          <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
            <div>
              <Link
                to={"/"}
                className="flex pl-3 items-center mx-auto space-x-3"
              >
                <img
                  src="/src/assets/petlogo.png"
                  className="h-[80px] object-cover p-2 rounded-full"
                  alt="petcare Logo"
                />
              </Link>
            </div>
            <div>
              <h1 className="text-blue-950 px-4 font-semibold text-xl mt-4 font-sans uppercase italic">
                Ur.Pet<span className="text-emerald-400">Cares..</span>
              </h1>
              <Navbar />
            </div>
          </div>
          <div
            className={`flex absolute flex-wrap items-center transition-all duration-300 ${
              onscroll ? "right-20" : "right-10"
            }`}
          >
            
            <div className="flex-col mr-6">
              {isLogin ? (
              <div className="py-4 sm:py-3 flex items-center space-x-4">
                <div className="shrink-0">
                  <NavLink to={users?.id ? "/my-profile" : "/login-pages"} className={'cursor-pointer'}>
                  <img
                    alt="my-profile"
                    height="32"
                    src={users?.photo ? users.photo : unknownImage}
                onError={(e) => (e.currentTarget.src = unknownImage)}
                    width="50"
                    className="rounded-full"
                  />
                  </NavLink>
                </div>
                <div className="min-w-0 flex-1 ">
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {users?.email }
                  </p>
                  <DropdownLogin />
                </div>
              </div>
              ):(
              <div className="py-4  sm:py-3 flex items-center space-x-4">
                <div className="shrink-0 hidden">
                  <NavLink to={"/my-profile"} className={'cursor-pointer'}>
                  <img
                    alt="my-profile"
                    height="32"
                    src={users?.photo ? users.photo : unknownImage}
                onError={(e) => (e.currentTarget.src = unknownImage)}
                    width="50"
                    className="rounded-full"
                  />
                  </NavLink>
                </div>
                <div className="min-w-0  flex-1 ">
                  <p className="truncate hidden text-sm text-gray-500 dark:text-gray-400">
                    {"No email available"}
                  </p>
                  <DropdownLogin />
                </div>
              </div>

              )}
              <div></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderH;
