import { Link } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import DropdownLogin from "../atoms/DropdownLogin";
import { useEffect, useState } from "react";

function HeaderH() {
  const [onscroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 w-full border-gray-200 transition-all duration-300 ${
        onscroll ? "h-32 bg-white px-4" : "h-32 bg-gray-100"
      }`}
    >
      <div>
        <nav className="relative w-screen flex justify-between">
          <div className="flex flex-wrap justify-between items-center   max-w-screen-xl ">
            <div>    
            <Link
              to={"/"}
              className="flex  pl-3 items-center mx-auto space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/src/assets/petlogo.png"
                className="h-[80px] object-cover p-2 rounded-full"
                alt="petcare Logo"
              />
            </Link>
            </div>
            <div>
                <h1 className="text-blue-950 font-semibold text-2xl font-sans uppercase italic">Ur.Pet<span className="text-emerald-400">Cares..</span></h1>
            </div>
          </div>
          <div className={`flex absolute  flex-wrap justify-between items-center  transition-all duration-300    p-4 ${onscroll? "right-20" : "right-10"}  `}>
            <DropdownLogin />
          </div>
        </nav>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default HeaderH;
