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
