import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, CheckIcon, XIcon, ClockIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
 
const StatsCard = ({ title, value, icon, trend = 0, color = 'default' }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
 
  const getIcon = () => {
    switch (icon) {
      case 'users':
        return <UsersIcon size={20} />;
      case 'check':
        return <CheckIcon size={20} />;
      case 'x':
        return <XIcon size={20} />;
      case 'clock':
        return <ClockIcon size={20} />;
      default:
        return <UsersIcon size={20} />;
    }
  };
 
  const getColorClass = () => {
    switch (color) {
      case 'green':
        return isDarkMode ? 'text-green-400' : 'text-green-600';
      case 'red':
        return isDarkMode ? 'text-red-400' : 'text-red-600';
      case 'yellow':
        return isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
      default:
        return isDarkMode ? 'text-teal-400' : 'text-teal-600';
    }
  };
 
  const getIconBgClass = () => {
    switch (color) {
      case 'green':
        return isDarkMode ? 'bg-green-900/30' : 'bg-green-100';
      case 'red':
        return isDarkMode ? 'bg-red-900/30' : 'bg-red-100';
      case 'yellow':
        return isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100';
      default:
        return isDarkMode ? 'bg-teal-900/30' : 'bg-teal-100';
    }
  };
 
  return (
    <motion.div
      whileHover={{ translateY: -5 }}
      className={`
        rounded-xl p-5
        ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value.toLocaleString()}</h3>
          {trend !== 0 && (
            <div className="flex items-center mt-2">
              {trend > 0 ? (
                <TrendingUpIcon size={16} className="text-green-500 mr-1" />
              ) : (
                <TrendingDownIcon size={16} className="text-red-500 mr-1" />
              )}
              <span className={trend > 0 ? 'text-green-500' : 'text-red-500'}>
                {Math.abs(trend)}% {trend > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${getIconBgClass()}`}>
          <span className={getColorClass()}>{getIcon()}</span>
        </div>
      </div>
    </motion.div>
  );
};
 
export default StatsCard;
 
 