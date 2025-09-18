
import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  GraduationCapIcon,
  BuildingIcon,
  BriefcaseIcon,
  SettingsIcon,
  XIcon,
} from "lucide-react";
import { navigationItems } from "../../utils/mockData";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../../../assests/TG-SIGN (2).png";

const Sidebar = ({ collapsed, sidebarOpen, setSidebarOpen }) => {
  const { theme } = useTheme();

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Home":
        return <HomeIcon size={20} />;
      case "GraduationCap":
        return <GraduationCapIcon size={20} />;
      case "Building":
        return <BuildingIcon size={20} />;
      case "Briefcase":
        return <BriefcaseIcon size={20} />;
      case "Settings":
        return <SettingsIcon size={20} />;
      default:
        return <HomeIcon size={20} />;
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 ease-in-out 
          h-screen fixed left-0 top-0 z-30 hidden md:block
          ${
            theme === "dark"
              ? "bg-[#1E1E1E] text-[#E5E7EB]"
              : "bg-white text-[#1F2937]"
          } 
          border-r ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="flex items-center justify-center h-16">
          <img
            src={Logo}
            alt="Logo"
            className={`object-contain ${
              collapsed ? "w-12 h-8" : "w-32 h-10"
            }`}
          />
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-2">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors
                      ${
                        isActive
                          ? theme === "dark"
                            ? "bg-[#3B82F6] text-white"
                            : "bg-[#2563EB] text-white"
                          : theme === "dark"
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-100"
                      }`
                  }
                >
                  <span className="flex-shrink-0">{getIcon(item.icon)}</span>
                  {!collapsed && (
                    <span className="ml-3 transition-opacity duration-300">
                      {item.name}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar (overlay) */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-64 shadow-lg
            ${theme === "dark" ? "bg-[#1E1E1E] text-white" : "bg-white text-black"}`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <img
              src={Logo}
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <XIcon size={20} />
            </button>
          </div>

          <nav className="mt-6">
            <ul className="space-y-2 px-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setSidebarOpen(false)} // close after click
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg transition-colors
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`
                    }
                  >
                    {getIcon(item.icon)}
                    <span className="ml-3">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
