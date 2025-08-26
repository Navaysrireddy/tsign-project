// import React from 'react';
// import { motion } from 'framer-motion';
// import { BookOpenIcon, ClipboardCheckIcon, UserCheckIcon, CalendarIcon, CodeIcon } from 'lucide-react';
 
// const StatusCard = ({ title, value, icon, color, onClick }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       onClick={onClick}
//       className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
//         onClick ? 'cursor-pointer' : ''
//       }`}
//     >
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
//           <h3 className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
//         </div>
//         <div className={`p-3 rounded-full ${color} bg-opacity-10 dark:bg-opacity-20`}>{icon}</div>
//       </div>
//     </motion.div>
//   );
// };
 
// const StatusCards = ({ setActiveSection }) => {
//   const cards = [
//     {
//       title: 'Courses Enrolled',
//       value: 8,
//       icon: <BookOpenIcon className="w-6 h-6 text-blue-500" />,
//       color: 'bg-blue-500',
//       section: 'courses'
//     },
//     {
//       title: 'Assignments Pending',
//       value: 5,
//       icon: <ClipboardCheckIcon className="w-6 h-6 text-red-500" />,
//       color: 'bg-red-500',
//       section: 'assignments'
//     },
//     {
//       title: 'Attendance',
//       value: '92%',
//       icon: <UserCheckIcon className="w-6 h-6 text-green-500" />,
//       color: 'bg-green-500',
//       section: 'attendance'
//     },
//     {
//       title: 'Upcoming Events',
//       value: 3,
//       icon: <CalendarIcon className="w-6 h-6 text-purple-500" />,
//       color: 'bg-purple-500',
//       section: 'events'
//     },
//     {
//       title: 'Active Projects',
//       value: 2,
//       icon: <CodeIcon className="w-6 h-6 text-orange-500" />,
//       color: 'bg-orange-500',
//       section: 'projects'
//     }
//   ];
 
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//       {cards.map((card, index) => (
//         <StatusCard
//           key={index}
//           title={card.title}
//           value={card.value}
//           icon={card.icon}
//           color={card.color}
//           onClick={() => setActiveSection(card.section)}
//         />
//       ))}
//     </div>
//   );
// };
 
// export default StatusCards;











// student-dashboard/s-components/widgets/StatusCards.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  ClipboardList,
  UserCheck,
  Calendar,
  FolderKanban,
} from "lucide-react";

const StatusCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Courses Enrolled",
      value: 8,
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      gradient: "from-blue-500/10 to-blue-500/20",
      path: "/student-dashboard/courses",
    },
    {
      title: "Assignments Pending",
      value: 5,
      icon: <ClipboardList className="w-5 h-5 text-red-500" />,
      gradient: "from-red-500/10 to-red-500/20",
      path: "/student-dashboard/assignments",
    },
    {
      title: "Attendance",
      value: "92%",
      icon: <UserCheck className="w-5 h-5 text-green-500" />,
      gradient: "from-green-500/10 to-green-500/20",
      path: "/student-dashboard/attendance",
    },
    {
      title: "Upcoming Events",
      value: 3,
      icon: <Calendar className="w-5 h-5 text-purple-500" />,
      gradient: "from-purple-500/10 to-purple-500/20",
      path: "/student-dashboard/events",
    },
    {
      title: "Active Projects",
      value: 2,
      icon: <FolderKanban className="w-5 h-5 text-orange-500" />,
      gradient: "from-orange-500/10 to-orange-500/20",
      path: "/student-dashboard/projects",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate(card.path)}
          className={`group relative overflow-hidden rounded-xl p-4 cursor-pointer
            bg-white/80 dark:bg-gray-900/80 backdrop-blur-md 
            border border-gray-200 dark:border-gray-700
            shadow-sm hover:shadow-lg transition-all duration-300`}
        >
          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${card.gradient}`}
          ></div>

          {/* Title */}
          <h3 className="relative text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 group-hover:text-cyan-500 transition">
            {card.title}
          </h3>

          {/* Icon + Number Row */}
          <div className="relative flex items-center justify-between">
            <div
              className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient} 
                group-hover:scale-110 transform transition`}
            >
              {card.icon}
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {card.value}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatusCards;
