import { Link } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import DropdownLogin from "../atoms/DropdownLogin";


function HeaderH() {


    return (
        <div className="bg-white border-gray-200 dark:bg-gray-900 h-48 pt-5 fixed z-30">
            <div>
                <nav className="relative w-screen flex">
                    <div className="flex flex-wrap justify-between items-center   max-w-screen-xl p-4">
                        <Link to={"/"} className="flex items-center mx-auto space-x-3 rtl:space-x-reverse">
                            <img src="/src/assets/logo-hoops.png" className="h-14" alt="Hoops Logo" />

                        </Link>

                    </div>
                    <div className="flex absolute right-3 flex-wrap justify-between items-center   max-w-screen-xl p-4">
                        <DropdownLogin/>
                    </div>
                </nav>
            </div>
            <div >
                <Navbar />
            </div>
        </div>

    );
}

export default HeaderH