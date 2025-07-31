import React, { useState } from 'react';
import { SearchIcon, MicIcon, BellIcon, MoonIcon, SunIcon, MenuIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Header= ({
  darkMode,
  toggleDarkMode,
  toggleSidebar
}) => {
  const [notifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const userName = 'Nikitha';
  const userAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120&q=80';
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showProfile) setShowProfile(false);
  };
  const toggleProfile = () => {
    setShowProfile(!showProfile);
    if (showNotifications) setShowNotifications(false);
  };
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 18) return 'Afternoon';
    return 'Evening';
  };
  return <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} px-4 py-2 flex items-center justify-between`}>
      <div className="flex items-center">
        <motion.button whileTap={{
        scale: 0.95
      }} className="mr-4 p-2 rounded-full md:hidden" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <MenuIcon className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
        </motion.button>
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="flex items-center">
          <div className="h-8 w-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-md mr-2 flex items-center justify-center text-white font-bold">
            XC
          </div>
          <h1 className="text-xl font-bold"> College</h1>
        </motion.div>
      </div>
      <div className="flex-1 max-w-2xl mx-8 hidden md:block">
        <div className={`relative flex items-center ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} rounded-full px-4 py-2 backdrop-blur-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
          <input type="text" placeholder="Search courses, events..." className="bg-transparent border-none outline-none w-full" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }} className="p-1 rounded-full" aria-label="Voice search">
            <MicIcon className="h-5 w-5 text-gray-500" />
          </motion.button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <motion.div className="relative" whileHover={{
        scale: 1.05
      }}>
          <motion.button whileTap={{
          scale: 0.95
        }} className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`} onClick={toggleNotifications} aria-label="Notifications">
            <BellIcon className="h-6 w-6" />
            {notifications > 0 && <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {notifications}
              </span>}
          </motion.button>
          {showNotifications && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`absolute right-0 mt-2 w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden backdrop-blur-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className={`p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                <div className={`p-3 border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'}`}>
                  <p className="text-sm font-medium">Assignment due tomorrow</p>
                  <p className="text-xs text-gray-500">
                    Data Structures - Lab 2
                  </p>
                </div>
                <div className={`p-3 border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'}`}>
                  <p className="text-sm font-medium">Google recruiting event</p>
                  <p className="text-xs text-gray-500">
                    Jan 20, 2025 at 10:00 AM
                  </p>
                </div>
                <div className={`p-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <p className="text-sm font-medium">New course available</p>
                  <p className="text-xs text-gray-500">
                    AI for Engineering - CS404
                  </p>
                </div>
              </div>
            </motion.div>}
        </motion.div>
        <motion.div className="relative" whileHover={{
        scale: 1.05
      }}>
          <motion.button whileTap={{
          scale: 0.95
        }} className="p-2 rounded-full" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? <SunIcon className="h-6 w-6 text-yellow-300" /> : <MoonIcon className="h-6 w-6 text-gray-700" />}
          </motion.button>
        </motion.div>
        <motion.div className="relative" whileHover={{
        scale: 1.05
      }}>
          <motion.button whileTap={{
          scale: 0.95
        }} className="flex items-center" onClick={toggleProfile} aria-label="User profile">
            <span className="hidden md:block mr-2 text-sm">
              Hello, {userName.split(' ')[0]}!
            </span>
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-teal-400">
              <img src={userAvatar} alt="User avatar" className="h-full w-full object-cover" />
            </div>
          </motion.button>
          {showProfile && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`absolute right-0 mt-2 w-60 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden backdrop-blur-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="p-4 border-b border-gray-200">
                <p className="font-medium">Good {getTimeOfDay()},</p>
                <p className="font-bold">{userName}</p>
                <p className="text-sm text-gray-500">Student ID: ST12345</p>
              </div>
              <div>
                <button className={`w-full text-left p-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  Profile
                </button>
                <button className={`w-full text-left p-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  Settings
                </button>
                <button className={`w-full text-left p-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} text-red-500`}>
                  Logout
                </button>
              </div>
            </motion.div>}
        </motion.div>
      </div>
    </header>;
};
export default Header;