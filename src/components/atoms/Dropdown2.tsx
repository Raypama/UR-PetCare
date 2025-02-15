import { useState } from "react";
import { NavLink } from "react-router-dom";

function Dropdown2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="bg-transparent text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250 cursor-pointer">
                category
            </div>

            {isOpen && (
                <div className="absolute left-[-50px] bg-white dark:bg-gray-800 shadow-lg p-4 rounded w-max">
                    <div className="flex text-center px-5 md:text-base py-2 mx-auto gap-8">

                        <div className="space-y-4 hover:text-emerald-500 duration-200 ">
                            <NavLink to={"/category/cat"} className="text-sm hover:text-primary-600 dark:hover:text-primary-500">
                                Cat
                            </NavLink>
                        </div>

                        <div className="space-y-4 hover:text-emerald-500 duration-200 ">
                            <NavLink to={"/category/dog"} className="text-sm hover:text-primary-600 dark:hover:text-primary-500">
                                Dog
                            </NavLink>
                        </div>

                        <div className="space-y-4 hover:text-emerald-500 duration-200 ">
                            <NavLink to={"/category/hamster"} className="text-sm hover:text-primary-600 dark:hover:text-primary-500">
                                Hamster
                            </NavLink>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown2;
