import React, { useState } from "react";
import logo from "../../assets/logo.png"
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDashboardCustomize, MdFavorite } from "react-icons/md";
import { FaDropbox, FaQuestion } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import defpic from "../../assets/default.webp"
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

  const dashsections = [
    { icon: MdOutlineDashboardCustomize, name: "Dashboard", link: "dashboard" },
    { icon: FaDropbox, name: "Order", link: "order" },
    { icon: MdFavorite, name: "Favorites", link: "favorite" },
    { icon: FaQuestion, name: "FAQ", link: "faq" },
    { icon: IoSettingsSharp, name: "Settings", link: "settings" },
  ]

  const [expanded, setExpanded] = useState(true)

  return (
    // ✅ ADDED overflow-x-hidden
    <section className="bg-[#F3D5B5] min-h-screen overflow-x-hidden">
      <div className="flex items-start">

        {/* ================= Sidebar ================= */}
        <div
          className={`
            flex flex-col justify-between
            min-h-screen
            border-r-2 border-[#BC8A5F]
            transition-all duration-300 py-5
            ${expanded ? "w-64 px-4" : "w-20 px-2"}
          `}
        >

          {/* ===== Logo + Toggle ===== */}
          <div className="flex flex-col gap-5">

            <div className="flex items-center justify-between pb-4">
              <img
                src={logo}
                alt="LOGO"
                className={`overflow-hidden transition-all duration-300
                  ${expanded ? "w-35 opacity-100" : "w-0 opacity-0"}
                `}
              />

              <button
                onClick={() => setExpanded(c => !c)}
                className="p-2 rounded-lg bg-[#BC8A5F] hover:text-white cursor-pointer"
              >
                {expanded ? <GoSidebarExpand size={16} /> : <GoSidebarCollapse size={16} />}
              </button>
            </div>

            {/* ===== Menu Items ===== */}
            <div className="flex flex-col gap-2">
              {dashsections.map((pre, key) => {
                const Icon = pre.icon
                return (
                  <Link
                    to={pre.link}
                    key={key}
                    className={`
                      flex items-center rounded-md border border-black
                      py-2 cursor-pointer hover:bg-[#BC8A5F]
                      transition-all
                      ${expanded ? "gap-4 px-4" : "gap-0 px-2 justify-center"}
                    `}
                  >
                    <Icon size={18} />

                    <h1
                      className={`
                        overflow-hidden whitespace-nowrap min-w-0
                        transition-all duration-300
                        ${expanded ? "w-40 opacity-100" : "w-0 opacity-0"}
                      `}
                    >
                      {pre.name}
                    </h1>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* ===== Logout ===== */}
          <div
            className={`
              flex items-center rounded-md border border-black
              py-2 cursor-pointer hover:bg-[#BC8A5F]
              transition-all
              ${expanded ? "gap-4 px-4" : "gap-0 px-2 justify-center"}
            `}
          >
            <CgLogOut size={18} />
            <h1
              className={`
                overflow-hidden whitespace-nowrap min-w-0
                transition-all duration-300
                ${expanded ? "w-40 opacity-100" : "w-0 opacity-0"}
              `}
            >
              Logout
            </h1>
          </div>
        </div>

        {/* ================= Top Bar / Content ================= */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center border-b-2 px-10 py-3 border-[#BC8A5F]">

            <div className="flex items-center w-full">

              {/* 🔍 Search (RESPONSIVE WIDTH) */}
              <div className="relative w-72 max-md:w-48 max-sm:w-36">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoSearch className="w-5 h-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full rounded-lg border p-2.5 pl-10"
                />
              </div>

            </div>

            {/* 👤 User Info (RESPONSIVE) */}
            <div className="flex items-center gap-3 max-sm:gap-2">
              <img className="w-10 rounded-full" src={defpic} alt="def" />
              <h1 className="max-sm:hidden">
                {localStorage.getItem("username")}
              </h1>
            </div>
          </div>

          {/* 📄 Page Content (RESPONSIVE PADDING) */}
          <div className="p-6 max-md:p-4 max-sm:p-3 min-w-0">
            <Outlet />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Dashboard