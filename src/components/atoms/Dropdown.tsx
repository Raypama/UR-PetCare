import { MegaMenu } from "flowbite-react";
import { NavLink } from "react-router-dom";

// interface DropdownProps {
//     textButton : string;
// }
const Dropdown = () => {
  return (
    <MegaMenu className="bg-transparent p-0 sm:px-0 px-0  text-gray-800 dark:text-white hover:underline hover:text-emerald-400   transition-all duration-250">
      <MegaMenu.Dropdown toggle={<><span className="text-ellipsis">(products)</span></>} >
        <div className="grid lg:grid-cols-4 md:grid-cols-1 mx-auto h-52 md:h-auto md:mb-5 gap-2 text-center px-3 mt-7">

          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/Home"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              NIKE
            </NavLink>
          </div>

          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/asdas"} className="text-xs md:text-base  hover:text-primary-600 dark:hover:text-primary-500">
              LI-NING
            </NavLink>
          </div>

          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              ADIDAS
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              AIR-JORDAN
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              MCDAVID
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              UNDER ARMOUR
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              PUMA
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              MOLTEN
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              SPALDING              </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              UMBRE
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              STAY HOOPS
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              NEW ERA
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              ARDILES
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              REEBOK
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              NEW BALANCE
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              CONVERSE
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              SKECHERS
            </NavLink>
          </div>
          <div className="space-y-4 hover:text-orange-700 duration-200 ">
            <NavLink to={"/ssss"} className="text-xs md:text-base  over:text-primary-600 dark:hover:text-primary-500">
              NINETEEN
            </NavLink>
          </div>

        </div>
      </MegaMenu.Dropdown>
    </MegaMenu>
  )
}

export default Dropdown
