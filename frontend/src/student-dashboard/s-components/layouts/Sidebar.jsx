import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  CalendarCheck,
  Calendar,
  Briefcase,
  FolderKanban,
  Settings,
  Menu,
  X,
} from "lucide-react";

import Logo from "../../../assests/TG-SIGN (2).png";

function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { name: "Dashboard", path: "/student-dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Courses", path: "/student-dashboard/courses", icon: <BookOpen size={20} /> },
    { name: "Assignments", path: "/student-dashboard/assignments", icon: <ClipboardList size={20} /> },
    { name: "Attendance", path: "/student-dashboard/attendance", icon: <CalendarCheck size={20} /> },
    { name: "Events", path: "/student-dashboard/events", icon: <Calendar size={20} /> },
    { name: "Placements", path: "/student-dashboard/placements", icon: <Briefcase size={20} /> },
    { name: "Projects", path: "/student-dashboard/projects", icon: <FolderKanban size={20} /> },
    { name: "Settings", path: "/student-dashboard/settings", icon: <Settings size={20} /> },
  ];

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileDropdownOpen(false);
      }
    }

    if (mobileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileDropdownOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 hidden sm:flex flex-col`}
      >
        {/* Logo */}
       <div className="flex items-center justify-between p-4">
  <div className="flex items-center gap-2">
    <img src={Logo} alt="Logo" className="h-10 w-50 object-contain" />
  </div>
</div>


        {/* Nav */}
        <nav className="mt-4 flex flex-col gap-2 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/student-dashboard"}
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-4 py-2 mx-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md border-l-4 border-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
              onClick={() => {
                // optionally close sidebar on link click if you want
              }}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Hamburger */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          aria-label="Toggle menu"
          className="p-2 rounded-md bg-white dark:bg-gray-900 shadow text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {mobileDropdownOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown with Sidebar Links */}
      {mobileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="sm:hidden fixed top-14 left-4 right-4 z-40 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        >
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                end={item.path === "/student-dashboard"}
                className={({ isActive }) =>
                  `block px-6 py-4 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setMobileDropdownOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default Sidebar;
