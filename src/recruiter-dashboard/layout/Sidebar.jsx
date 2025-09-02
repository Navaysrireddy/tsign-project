import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  CalendarIcon,
  SettingsIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ activeView, setActiveView, collapsed, toggleSidebar }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'candidates', label: 'Candidates', icon: UsersIcon },
    { id: 'positions', label: 'Positions', icon: BriefcaseIcon },
    { id: 'interviews', label: 'Interviews', icon: CalendarIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '72px' }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={collapsed ? 'collapsed' : 'expanded'}
        animate={collapsed ? 'collapsed' : 'expanded'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          hidden md:flex
          ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
          border-r h-full flex flex-col sticky top-0 z-10
        `}
      >
        <div className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveView(item.id)}
                    className={`
                      w-full flex items-center relative rounded-lg p-3 transition-all duration-200
                      ${isActive
                        ? isDarkMode
                          ? 'bg-gray-700 text-white shadow-[3px_3px_6px_rgba(0,0,0,0.2),-3px_-3px_6px_rgba(30,30,30,0.1)]'
                          : 'bg-gray-100 text-gray-900 shadow-[3px_3px_6px_rgba(0,0,0,0.05),-3px_-3px_6px_rgba(255,255,255,0.8)]'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'}
                    `}
                    aria-label={item.label}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute left-0 top-0 bottom-0 w-1 ${
                          isDarkMode ? 'bg-teal-500' : 'bg-teal-600'
                        } rounded-r`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <Icon
                      size={20}
                      className={`flex-shrink-0 ${
                        isActive ? (isDarkMode ? 'text-teal-400' : 'text-teal-600') : ''
                      }`}
                    />
                    <AnimatePresence initial={false}>
                      {!collapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-3 whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.aside>

      {/* Mobile hamburger button */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`
            p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500
            ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900 shadow'}
          `}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            ref={mobileMenuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className={`
              fixed top-14 left-4 right-4 z-30 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 overflow-hidden
              md:hidden
            `}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <button
                    onClick={() => {
                      setActiveView(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full text-left px-6 py-4 text-lg font-medium
                      ${activeView === item.id
                        ? isDarkMode
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-100 text-gray-900'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }
                    `}
                    aria-label={item.label}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
