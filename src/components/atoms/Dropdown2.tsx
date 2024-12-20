import { MegaMenu } from "flowbite-react"
import { NavLink } from "react-router-dom"

function Dropdown2() {
    return (
        <div>
            <MegaMenu className="bg-transparent p-0 sm:px-0 px-0 text-gray-900 dark:text-white hover:underline hover:text-red-500 transition-all duration-250 ">
                <MegaMenu.Dropdown toggle={<>category</>} >
                    <div className="grid grid-cols-6  md:grid-cols-4 sm:grid-cols-2 text-center px-5 md:text-base py-2 mx-auto gap-4">

                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/Home"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                T-SHIRT
                            </NavLink>
                        </div>

                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/asdas"} className="text-sm hover:text-primary-600 dark:hover:text-primary-500">
                                ACCESORIS
                            </NavLink>
                        </div>

                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                BALL
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                TUMBLR
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                PANTS
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                WATCH
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                MASK
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                SHOES
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                CAP              </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                BAG
                            </NavLink>
                        </div>

                    </div>
                </MegaMenu.Dropdown>
            </MegaMenu>

        </div>
    )
}

export default Dropdown2