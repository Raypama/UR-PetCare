import { FaBasketball } from "react-icons/fa6"
import { GiRunningShoe, GiSchoolBag, GiWinterHat } from "react-icons/gi"
import { IoMdWatch } from "react-icons/io"
import { LuShirt } from "react-icons/lu"
import { PiPantsFill, PiSunglassesDuotone } from "react-icons/pi"
import { RiSurgicalMaskFill } from "react-icons/ri"
import { TbBottleFilled } from "react-icons/tb"
import { NavLink } from "react-router-dom"


const category = [
    {
        title: "T-SHIRT",
        icon: <LuShirt size={40} />
    },
    {
        title: "ACCESORIS",
        icon: <PiSunglassesDuotone size={40} />
    },
    {
        title: "BALL",
        icon: <FaBasketball size={40} />
    },
    {
        title: "TUMBLR",
        icon: <TbBottleFilled size={40} />
    },
    {
        title: "PANTS",
        icon: <PiPantsFill size={40} />
    },
    {
        title: "WATCH",
        icon: <IoMdWatch size={40} />
    },
    {
        title: "MASK",
        icon: <RiSurgicalMaskFill size={40} />
    },
    {
        title: "SHOES",
        icon: <GiRunningShoe size={40} />
    },
    {
        title: "HAT",
        icon: <GiWinterHat size={40} />
    },
    {
        title: "BAG",
        icon: <GiSchoolBag size={40} />
    },
]


const Category = () => {
    return (
        <div>
            <div className="flex h-96 mt-4 ">
                <div className="flex flex-col w-6/12  justify-center items-center md:text-2xl sm:text-xl text-4xl">
                    <h2 className="text-center font-bold">Bowse by Category</h2>
                </div>
                <div className=" grid grid-cols-6 md:grid-cols-4 sm:grid-cols-4 items-center justify-center  text-center min-h-fit px-3 py-4 my-auto font-bold mx-auto gap-6">
                    {category.map((item, i) => (
                        <div key={i} className="space-y-4  hover:text-orange-700 duration-200 ">
                            <NavLink to={"/category"} className="text-sm over:text-primary-600 dark:hover:text-primary-500 md:text-sm sm:text-xs ">
                                <div className="flex h-12 align-center justify-center ">
                                    {item.icon}
                                </div>
                                <div>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category
