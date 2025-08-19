import React, { useState } from 'react';
import { BellIcon, UserIcon, SunIcon, MoonIcon, XIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { notificationsData } from '../../utils/mockData';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const unreadNotifications = notificationsData.filter(n => !n.read).length;

  return (
    <header
      className={`fixed w-full h-16 z-20 flex items-center justify-end px-6 
        ${theme === 'dark' ? 'bg-[#121212] text-[#E5E7EB]' : 'bg-white text-[#1F2937]'} 
        border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              if (showProfile) setShowProfile(false);
            }}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
            aria-label="Notifications"
          >
            <BellIcon size={20} />
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {unreadNotifications}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div
              className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg overflow-hidden 
              ${theme === 'dark' ? 'bg-[#1E1E1E] border border-gray-800' : 'bg-white border border-gray-200'}`}
            >
              <div className="p-3 border-b flex justify-between items-center">
                <h3 className="font-medium">Notifications</h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className={`p-1 rounded-full ${
                    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <XIcon size={16} />
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notificationsData.length === 0 ? (
                  <p className="p-4 text-center text-gray-500">No notifications</p>
                ) : (
                  notificationsData.map(notification => (
                    <div
                      key={notification.id}
                      className={`p-3 border-b last:border-b-0 ${
                        notification.read ? '' : theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'
                      } ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
                    >
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs mt-1 text-gray-500">{notification.time}</p>
                    </div>
                  ))
                )}
              </div>
              <div className="p-2 border-t text-center">
                <button className="text-sm text-blue-500 hover:underline">Mark all as read</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              if (showNotifications) setShowNotifications(false);
            }}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
            aria-label="User profile"
          >
            <UserIcon size={20} />
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden 
              ${theme === 'dark' ? 'bg-[#1E1E1E] border border-gray-800' : 'bg-white border border-gray-200'}`}
            >
              <div className="p-3 border-b">
                <p className="font-medium">Admin User</p>
                <p className="text-sm text-gray-500">admin@af3dashboard.com</p>
              </div>
              <div>
                <button
                  className={`w-full text-left p-3 text-sm ${
                    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  Profile Settings
                </button>
                <button
                  className={`w-full text-left p-3 text-sm ${
                    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  Account Settings
                </button>
                <button
                  className={`w-full text-left p-3 text-sm text-red-500 border-t ${
                    theme === 'dark' ? 'border-gray-800 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'
                  }`}
                >
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
