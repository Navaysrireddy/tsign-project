// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   LayoutDashboardIcon,
//   BookOpenIcon,
//   ClipboardListIcon,
//   CalendarIcon,
//   BriefcaseIcon,
//   FolderIcon,
//   SettingsIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   UserCheckIcon
// } from 'lucide-react';

// import logo from '../../../assests/TG-SIGN (2).png'; // ✅ Make sure the path is correct

// const Sidebar = ({ isOpen, setIsOpen, activeSection, setActiveSection }) => {
//   const menuItems = [
//     { id: 'dashboard', icon: <LayoutDashboardIcon size={20} />, label: 'Dashboard' },
//     { id: 'courses', icon: <BookOpenIcon size={20} />, label: 'Courses' },
//     { id: 'assignments', icon: <ClipboardListIcon size={20} />, label: 'Assignments' },
//     { id: 'attendance', icon: <UserCheckIcon size={20} />, label: 'Attendance' },
//     { id: 'events', icon: <CalendarIcon size={20} />, label: 'Events' },
//     { id: 'placements', icon: <BriefcaseIcon size={20} />, label: 'Placements' },
//     { id: 'projects', icon: <FolderIcon size={20} />, label: 'Projects' },
//     { id: 'settings', icon: <SettingsIcon size={20} />, label: 'Settings' }
//   ];

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <motion.aside
//         initial={{ x: -280 }}
//         animate={{ x: isOpen ? 0 : -280 }}
//         transition={{ duration: 0.3, ease: 'easeInOut' }}
//         className={`fixed md:static left-0 top-0 bottom-0 w-64 z-50 md:z-auto flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg md:shadow-none transition-all duration-300 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
//           <div className="flex items-center space-x-3">
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-8 w-auto max-w-[140px] object-contain"
//             />
//           </div>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
//           >
//             <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <nav className="flex-1 py-4 overflow-y-auto">
//           <ul className="space-y-1 px-3">
//             {menuItems.map(item => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => setActiveSection(item.id)}
//                   className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative ${
//                     activeSection === item.id
//                       ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium'
//                       : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   <span>{item.label}</span>

//                   {/* Active indicator */}
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-full"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Footer */}
//         <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-800 dark:text-white">John Smith</p>
//               <p className="text-xs text-gray-500 dark:text-gray-400">
//                 Computer Science, Year 3
//               </p>
//             </div>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hidden md:block"
//             >
//               {isOpen ? (
//                 <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               ) : (
//                 <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>
//       </motion.aside>
//     </>
//   );
// };

// export default Sidebar;










// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import {
//   LayoutDashboardIcon,
//   BookOpenIcon,
//   ClipboardListIcon,
//   CalendarIcon,
//   BriefcaseIcon,
//   FolderIcon,
//   SettingsIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   UserCheckIcon
// } from 'lucide-react';

// import logo from '../../../assests/TG-SIGN (2).png'; // Make sure the path is correct

// const Sidebar = ({ isOpen, setIsOpen, activeSection, setActiveSection }) => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { id: 'dashboard', icon: <LayoutDashboardIcon size={20} />, label: 'Dashboard', route: '/dashboard' },
//     { id: 'courses', icon: <BookOpenIcon size={20} />, label: 'Courses', route: '/courses' },
//     { id: 'assignments', icon: <ClipboardListIcon size={20} />, label: 'Assignments', route: '/assignments' },
//     { id: 'attendance', icon: <UserCheckIcon size={20} />, label: 'Attendance', route: '/attendance' },
//     { id: 'events', icon: <CalendarIcon size={20} />, label: 'Events', route: '/events' },
//     { id: 'placements', icon: <BriefcaseIcon size={20} />, label: 'Placements', route: '/placements' },
//     { id: 'projects', icon: <FolderIcon size={20} />, label: 'Projects', route: '/projects' },
//     { id: 'settings', icon: <SettingsIcon size={20} />, label: 'Settings', route: '/settings' }
//   ];

//   const handleMenuClick = (item) => {
//     setActiveSection(item.id);
//     navigate(item.route);
//     if (isOpen) {
//       setIsOpen(false); // Close sidebar on mobile after selection
//     }
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <motion.aside
//         initial={{ x: -280 }}
//         animate={{ x: isOpen ? 0 : -280 }}
//         transition={{ duration: 0.3, ease: 'easeInOut' }}
//         className={`fixed md:static left-0 top-0 bottom-0 w-64 z-50 md:z-auto flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg md:shadow-none transition-all duration-300 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
//           <div className="flex items-center space-x-3">
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-8 w-auto max-w-[140px] object-contain"
//             />
//           </div>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
//           >
//             <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <nav className="flex-1 py-4 overflow-y-auto">
//           <ul className="space-y-1 px-3">
//             {menuItems.map(item => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => handleMenuClick(item)}
//                   className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative ${
//                     activeSection === item.id
//                       ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium'
//                       : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <span className="mr-3">{item.icon}</span>
//                   <span>{item.label}</span>

//                   {/* Active indicator */}
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-full"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Footer */}
//         <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-800 dark:text-white">John Smith</p>
//               <p className="text-xs text-gray-500 dark:text-gray-400">
//                 Computer Science, Year 3
//               </p>
//             </div>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hidden md:block"
//             >
//               {isOpen ? (
//                 <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               ) : (
//                 <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>
//       </motion.aside>
//     </>
//   );
// };

// export default Sidebar;







// student-dashboard/s-components/layouts/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  CalendarCheck,
  Calendar,
  Briefcase,
  FolderKanban,
  // User,
  Settings,

} from "lucide-react";

// import your logo image
import Logo from "../../../assests/TG-SIGN (2).png"; // <-- adjust path if needed

function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { name: "Dashboard", path: "/student-dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Courses", path: "/student-dashboard/courses", icon: <BookOpen size={20} /> },
    { name: "Assignments", path: "/student-dashboard/assignments", icon: <ClipboardList size={20} /> },
    { name: "Attendance", path: "/student-dashboard/attendance", icon: <CalendarCheck size={20} /> },
    { name: "Events", path: "/student-dashboard/events", icon: <Calendar size={20} /> },
    { name: "Placements", path: "/student-dashboard/placements", icon: <Briefcase size={20} /> },
    { name: "Projects", path: "/student-dashboard/projects", icon: <FolderKanban size={20} /> },
    // { name: "Profile", path: "/student-dashboard/profile", icon: <User size={20} /> },
    { name: "Settings", path: "/student-dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300`}
    >
      {/* Header with Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-10 w-50 object-contain" />
          
        </div>
  
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/student-dashboard"}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-4 py-2 mx-2 rounded-lg text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md border-l-4 border-cyan-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
