import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Layout = () => {
  const { theme } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const getActiveView = () => {
    const path = location.pathname.split('/')[2]; // Recruiter route: /recruiter/dashboard
    return path || 'dashboard';
  };

  const setActiveView = (view) => {
    navigate(`/recruiter/${view}`);
  };

  return (
    <div
      className={`flex flex-col h-screen w-full ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeView={getActiveView()}
          setActiveView={setActiveView}
          collapsed={sidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <motion.main
          className="flex-1 overflow-y-auto p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
