import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardListIcon,
  CalendarIcon,
  BriefcaseIcon,
  SettingsIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ collapsed, darkMode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { path: '/new-dashboard', label: 'Dashboard', icon: HomeIcon },
    { path: '/new-dashboard/courses', label: 'Courses', icon: BookOpenIcon },
    { path: '/new-dashboard/assignments', label: 'Assignments', icon: ClipboardListIcon },
    { path: '/new-dashboard/events', label: 'Events', icon: CalendarIcon },
    { path: '/new-dashboard/placements', label: 'Placements', icon: BriefcaseIcon },
    { path: '/new-dashboard/students', label: 'Students', icon: BriefcaseIcon },
    { path: '/new-dashboard/settings', label: 'Settings', icon: SettingsIcon }
  ];

  // Close mobile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Animations for mobile dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ width: collapsed ? 80 : 240 }}
        animate={{ width: collapsed ? 80 : 240 }}
        transition={{ duration: 0.3 }}
        className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} h-full overflow-y-auto flex-shrink-0 hidden md:block`}
      >
        <div className="py-6 flex flex-col h-full">
          <div className="px-4 mb-8 flex justify-center">
            {collapsed && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="h-10 w-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-md flex items-center justify-center text-white font-bold"
              >
                C
              </motion.div>
            )}
          </div>
          <nav className="flex-1">
            <ul className="space-y-2 px-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <li key={item.path} className="relative">
                    <Link to={item.path}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center py-3 px-4 rounded-xl ${
                          isActive
                            ? `${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]`
                            : `${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? 'text-teal-500' : 'text-gray-500'}`} />
                        {!collapsed && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`ml-3 ${isActive ? 'font-medium' : ''}`}
                          >
                            {item.label}
                          </motion.span>
                        )}
                        {isActive && !collapsed && (
                          <motion.div
                            layoutId="sidebar-indicator"
                            className="absolute left-0 w-1 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-r-full"
                          />
                        )}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-auto px-4 py-2">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-xs text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                {/* Footer or copyright */}
              </motion.div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Mobile hamburger button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900 shadow'
          }`}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className={`fixed top-14 left-4 right-4 z-40 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg md:hidden`}
          >
            <ul>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <Link to={item.path}>
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className={`w-full text-left px-6 py-4 text-lg font-medium ${
                          isActive
                            ? darkMode
                              ? 'bg-gray-700 text-white'
                              : 'bg-gray-100 text-gray-900'
                            : darkMode
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
