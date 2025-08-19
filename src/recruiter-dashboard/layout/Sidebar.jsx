import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  CalendarIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ activeView, setActiveView, collapsed, toggleSidebar }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'candidates', label: 'Candidates', icon: UsersIcon },
    { id: 'positions', label: 'Positions', icon: BriefcaseIcon },
    { id: 'interviews', label: 'Interviews', icon: CalendarIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '72px' }
  };

  return (
    <motion.aside
      initial={collapsed ? 'collapsed' : 'expanded'}
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`
        ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
        border-r h-full flex flex-col sticky top-0 z-10
      `}
    >
      {/* Menu Items */}
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

      {/* Collapse/Expand Button */}
      <div className={`p-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSidebar}
          className={`
            w-full flex items-center justify-center p-2 rounded-lg
            ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-gray-900'}
            transition-colors
          `}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRightIcon size={18} /> : <ChevronLeftIcon size={18} />}
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
