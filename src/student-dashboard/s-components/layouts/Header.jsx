import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/Themecontext';
import {
  MenuIcon,
  BellIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  LogOutIcon,
  ChevronDownIcon
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
 
const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
 
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'assignment', message: 'Data Structures assignment due tomorrow', unread: true },
    { id: 2, type: 'event', message: 'Google recruiting event on Jan 20, 2025', unread: true },
    { id: 3, type: 'project', message: 'Project review meeting scheduled for next week', unread: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [studentData, setStudentData] = useState({
    studentName: "John Smith",
    profileImage: null,
    email: "john.smith@example.com",
    degreeCollege: "Computer Science, Year 3"
  });
 
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const unreadCount = notifications.filter(n => n.unread).length;
 
  useEffect(() => {
    // Load student profile data from localStorage
    const savedData = localStorage.getItem("StudentProfile");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setStudentData(prevData => ({
          ...prevData,
          ...parsedData,
          // Ensure we have fallback values if some fields are missing
          studentName: parsedData.studentName || prevData.studentName,
          email: parsedData.email || prevData.email,
          degreeCollege: parsedData.degreeCollege || prevData.degreeCollege
        }));
      } catch (e) {
        console.error("Error parsing student profile data:", e);
      }
    }
  }, []);
 
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };
 
  const handleLogout = () => {
    alert('Logging out...');
    navigate("/login");
  };
 
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  // Function to get initials from name
  const getInitials = (name) => {
    if (!name) return "JS";
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
 
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 md:hidden"
          aria-label="Toggle sidebar"
        >
          <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
 
      <div className="flex items-center space-x-4">
        {/* 🔔 Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 relative"
            aria-label="Notifications"
          >
            <BellIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {unreadCount}
              </span>
            )}
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                      notification.unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <p className="text-gray-800 dark:text-gray-200">{notification.message}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{notification.type}</span>
                  </div>
                ))}
              </div>
              <div className="p-2 text-center border-t border-gray-200 dark:border-gray-700">
                <button
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>
 
        {/* 🌙 Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
 
        {/* 👤 Profile Menu */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            {studentData.profileImage ? (
              <img
                src={studentData.profileImage}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-gray-700"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                {getInitials(studentData.studentName)}
              </div>
            )}
            <span className="hidden md:flex items-center text-gray-800 dark:text-white font-medium">
              {studentData.studentName}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </span>
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  {studentData.profileImage ? (
                    <img
                      src={studentData.profileImage}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-semibold">
                      {getInitials(studentData.studentName)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{studentData.studentName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{studentData.email}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{studentData.degreeCollege}</p>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <UserIcon className="w-4 h-4 mr-3" />
                  My Profile
                </button>
 
              </div>
              <div className="py-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <LogOutIcon className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
 
export default Header;
 