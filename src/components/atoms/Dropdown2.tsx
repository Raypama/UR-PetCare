import { MegaMenu } from "flowbite-react"
import { NavLink } from "react-router-dom"

function Dropdown2() {
    return (
        <div>
            <MegaMenu className="bg-transparent p-0 sm:px-0 px-0 text-gray-900 dark:text-white hover:underline hover:text-emerald-400 transition-all duration-250 ">
                <MegaMenu.Dropdown toggle={<>category</>} >
                    <div className="grid grid-cols-6  md:grid-cols-4 sm:grid-cols-2 text-center px-5 md:text-base py-2 mx-auto gap-4">

                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/Home"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                Cat
                            </NavLink>
                        </div>

                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/asdas"} className="text-sm hover:text-primary-600 dark:hover:text-primary-500">
                                Dog
                            </NavLink>
                        </div>

                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                Hamster
                            </NavLink>
                        </div>
                        <div className="space-y-4 hover:text-orange-700 duration-200 ">
                            <NavLink to={"/ssss"} className="text-sm over:text-primary-600 dark:hover:text-primary-500">
                                Etc
                            </NavLink>
                        </div>
                       

                    </div>
                </MegaMenu.Dropdown>
            </MegaMenu>

        </div>
    )
}

export default Dropdown2