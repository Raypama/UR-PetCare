import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { LuTable2 } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MySideBar = () => {
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar example"
        className="fixed top-[80px] left-0 min-h-screen bg-slate-200 w-1/4"
      >
        <Sidebar.Items className="min-h-screen">
          <Sidebar.ItemGroup className="flex flex-col gap-3 justify-center">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`
              }
            >
<TbLayoutDashboardFilled />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/admin/inbox"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`
              }
            >
              <MdForwardToInbox />
              <span>Inbox</span>
              <span className="ml-auto bg-dark text-white px-2 py-0.5 rounded">
                Pro
              </span>
            </NavLink>

            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`
              }
            >
              <RiUserSearchLine />
              <span>Users</span>
              <span className="ml-auto bg-gray-500 text-white px-2 py-0.5 rounded">
                3
              </span>
            </NavLink>

            <NavLink
              to="/admin/service"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`
              }
            >
              <LuTable2 />
              <span>Service List</span>
            </NavLink>

            <NavLink
              to="/admin/product"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`
              }
            >
              <HiChartPie />
              <span>Products?/ <span className="text-red-600">Soon!</span></span>
            </NavLink>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default MySideBar;
