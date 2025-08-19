import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, ClipboardCheckIcon, UserCheckIcon, CalendarIcon, CodeIcon } from 'lucide-react';
 
const StatusCard = ({ title, value, icon, color, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${color} bg-opacity-10 dark:bg-opacity-20`}>{icon}</div>
      </div>
    </motion.div>
  );
};
 
const StatusCards = ({ setActiveSection }) => {
  const cards = [
    {
      title: 'Courses Enrolled',
      value: 8,
      icon: <BookOpenIcon className="w-6 h-6 text-blue-500" />,
      color: 'bg-blue-500',
      section: 'courses'
    },
    {
      title: 'Assignments Pending',
      value: 5,
      icon: <ClipboardCheckIcon className="w-6 h-6 text-red-500" />,
      color: 'bg-red-500',
      section: 'assignments'
    },
    {
      title: 'Attendance',
      value: '92%',
      icon: <UserCheckIcon className="w-6 h-6 text-green-500" />,
      color: 'bg-green-500',
      section: 'attendance'
    },
    {
      title: 'Upcoming Events',
      value: 3,
      icon: <CalendarIcon className="w-6 h-6 text-purple-500" />,
      color: 'bg-purple-500',
      section: 'events'
    },
    {
      title: 'Active Projects',
      value: 2,
      icon: <CodeIcon className="w-6 h-6 text-orange-500" />,
      color: 'bg-orange-500',
      section: 'projects'
    }
  ];
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {cards.map((card, index) => (
        <StatusCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
          onClick={() => setActiveSection(card.section)}
        />
      ))}
    </div>
  );
};
 
export default StatusCards;