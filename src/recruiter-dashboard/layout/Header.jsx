// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { BellIcon,  UserIcon, MoonIcon, SunIcon, MenuIcon } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { useNavigate } from 'react-router-dom';
// import image from "../../assests/TG-SIGN (2).png";
 
// const Header = ({ toggleSidebar }) => {
//   const { theme, toggleTheme } = useTheme();
//   const isDarkMode = theme === 'dark';
//   // eslint-disable-next-line
//   const navigate = useNavigate();
 
//   // const [searchQuery, setSearchQuery] = useState('');
//   // const [isListening, setIsListening] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const [showProfilePanel, setShowProfilePanel] = useState(false);
 
//   // Profile details state
//   const [user, setUser] = useState({
//     name: 'Nikitha',
//     email: 'nikitha@student.com',
//     studentId: 'ST12345',
//     department: 'Computer Science',
//     year: '3rd',
//     phone: '+91 98765 43210',
//     bio: 'Enthusiastic CSE student with a passion for coding, hackathons and AI research.',
//   });
//   const [tempUser, setTempUser] = useState(user);
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [profileMsg, setProfileMsg] = useState('');
 
//   const notifications = [
//     { id: 1, type: 'application', message: 'Assignment grades released for DBMS', time: '10 min ago' },
//     { id: 2, type: 'event', message: 'Broadridge Hackathon this Saturday', time: '2 hours ago' },
//     { id: 3, type: 'status', message: 'Project presentation reviewed by faculty', time: 'yesterday' }
//   ];
 
//   // const handleSearchChange = (e) => setSearchQuery(e.target.value);
 
//   // const toggleVoiceSearch = () => setIsListening(!isListening);
 
//   // Profile panel handlers
//   const startEditProfile = () => {
//     setTempUser(user);
//     setIsEditingProfile(true);
//     setProfileMsg('');
//   };
 
//   const handleProfileChange = (e) => {
//     setTempUser({ ...tempUser, [e.target.name]: e.target.value });
//   };
 
//   const handleProfileSave = (e) => {
//     e.preventDefault();
//     setUser(tempUser);
//     setIsEditingProfile(false);
//     setProfileMsg('Profile updated successfully!');
//     setTimeout(() => setProfileMsg(''), 2500);
//   };
 
//   const handleProfileCancel = () => {
//     setTempUser(user);
//     setIsEditingProfile(false);
//     setProfileMsg('');
//   };
 
//   return (
//     <header className={`sticky top-0 z-10 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} px-4 py-3 flex items-center justify-between shadow-sm`}>
//       {/* Left: Logo & Menu */}
//       <div className="flex items-center gap-4">
//         <button onClick={toggleSidebar} className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors md:hidden`}>
//           <MenuIcon size={20} />
//         </button>
//         <img src={image} alt="Logo" className="h-8 w-auto object-contain" />
//       </div>
 
//       {/* Middle: Search */}
//       {/* <div className="flex-1 max-w-2xl mx-4">
//         <div className={`relative flex items-center ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} backdrop-blur-md rounded-full px-4 py-2`}>
//           <SearchIcon size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//           <input
//             type="text"
//             placeholder="Search courses, events, or updates..."
//             className={`w-full bg-transparent border-none outline-none px-3 ${isDarkMode ? 'placeholder:text-gray-500 text-white' : 'placeholder:text-gray-400 text-gray-800'}`}
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button onClick={toggleVoiceSearch}
//             className={`p-1 rounded-full ${isListening ? 'text-red-500' : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'} transition-colors`}>
//             <MicIcon size={18} />
//           </button>
//         </div>
//       </div> */}
 
//       {/* Right: Notifications, Theme, User */}
//       <div className="flex items-center gap-1 sm:gap-3">
//         {/* Notifications */}
//         <div className="relative">
//           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//             onClick={() => setShowNotifications(!showNotifications)}
//             className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors relative`}
//             aria-label="Notifications"
//           >
//             <BellIcon size={20} />
//             <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
//           </motion.button>
//           {showNotifications && (
//             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//               className={`absolute right-0 mt-2 w-80 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg overflow-hidden z-50`}>
//               <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} font-medium`}>Notifications</div>
//               <div className="max-h-80 overflow-y-auto">
//                 {notifications.map(notification => (
//                   <div key={notification.id}
//                     className={`p-3 border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-100 hover:bg-gray-50'} cursor-pointer transition-colors`}>
//                     <div className="flex gap-3 items-start">
//                       <div className={`mt-0.5 h-2 w-2 rounded-full
//                         ${notification.type === 'application' ? 'bg-blue-500' : notification.type === 'event' ? 'bg-yellow-500' : 'bg-green-500'} flex-shrink-0`}></div>
//                       <div>
//                         <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-sm`}>{notification.message}</p>
//                         <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className={`p-2 text-center ${isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
//                 <button className="text-sm text-teal-500 hover:underline">View all notifications</button>
//               </div>
//             </motion.div>
//           )}
//         </div>
 
//         {/* Theme toggle */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={toggleTheme}
//           className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
//           aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//         >
//           {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
//         </motion.button>
 
//         {/* User/Dropdown */}
//         <div className="relative">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setShowUserMenu(!showUserMenu)}
//             className="flex items-center gap-2"
//           >
//             <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center overflow-hidden border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
//               <UserIcon size={16} />
//             </div>
//             <span className="hidden md:block text-sm font-medium">{user.name}</span>
//           </motion.button>
//           {showUserMenu && (
//             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//               className={`absolute right-0 mt-2 w-56
//                 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
//                 border rounded-lg shadow-lg overflow-hidden z-50`}>
//               <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//                 <p className="font-medium">{user.name}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>
//               </div>
//               <div>
//                 <button onClick={() => {
//                     setShowProfilePanel(true);
//                     setShowUserMenu(false);
//                   }}
//                   className={`w-full text-left p-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
//                   Profile
//                 </button>
//                 {/* <button
//                   onClick={() => { navigate('/settings'); setShowUserMenu(false); }}
//                   className={`w-full text-left p-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
//                   Settings
//                 </button> */}
//                 <button
//                   className={`w-full text-left p-3 ${isDarkMode ? 'hover:bg-gray-700 text-red-400' : 'hover:bg-gray-50 text-red-600'} transition-colors`}>
//                   Logout
//                 </button>
//               </div>
//             </motion.div>
//           )}
 
//           {/* Profile details/edit panel (as modal dropdown) */}
//           {showProfilePanel && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`absolute right-0 mt-2 w-96 max-h-[90vh] overflow-y-auto
//                 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}
//                 border rounded-xl shadow-2xl p-6 z-50`}
//             >
//               <div className="mb-3 flex items-center justify-between">
//                 <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
//                   {isEditingProfile ? 'Edit Profile' : 'Profile Details'}
//                 </h2>
//                 <button onClick={() => { setShowProfilePanel(false); setIsEditingProfile(false); }} className="text-gray-400 hover:text-red-400 text-lg">&times;</button>
//               </div>
//               {profileMsg && (
//                 <div className="mb-3 p-2 bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-300">
//                   {profileMsg}
//                 </div>
//               )}
//               {!isEditingProfile ? (
//                 <div>
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="h-16 w-16 rounded-full bg-teal-600/10 flex items-center justify-center text-3xl font-bold text-teal-600">
//                       {user.name[0]}
//                     </div>
//                     <div>
//                       <div className="text-lg font-medium">{user.name}</div>
//                       <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                         {user.email}
//                       </div>
//                       <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                        ID: {user.Id}
//                       </div>
//                     </div>
//                   </div>
//                   <dl className="space-y-2 text-sm">
//                     <div><span className="font-semibold">Department:</span> {user.department}</div>
//                     <div><span className="font-semibold">Year:</span> {user.year}</div>
//                     <div><span className="font-semibold">Phone:</span> {user.phone}</div>
//                     <div><span className="font-semibold">Bio:</span> <span className="">{user.bio}</span></div>
//                   </dl>
//                   <div className="flex justify-end mt-6">
//                     <button onClick={startEditProfile} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all text-sm">Edit Profile</button>
//                   </div>
//                 </div>
//               ) : (
//                 <form onSubmit={handleProfileSave} className="space-y-3">
//                   <input
//                     type="text"
//                     name="name"
//                     value={tempUser.name}
//                     onChange={handleProfileChange}
//                     placeholder="Full Name"
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={tempUser.email}
//                     onChange={handleProfileChange}
//                     placeholder="Email"
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="Id"
//                     value={tempUser.Id}
//                     onChange={handleProfileChange}
//                     placeholder="Student ID"
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="department"
//                     value={tempUser.department}
//                     onChange={handleProfileChange}
//                     placeholder="Department"
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="year"
//                     value={tempUser.year}
//                     onChange={handleProfileChange}
//                     placeholder="Year"
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="phone"
//                     value={tempUser.phone}
//                     onChange={handleProfileChange}
//                     placeholder="Phone"
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                   />
//                   <textarea
//                     name="bio"
//                     value={tempUser.bio}
//                     onChange={handleProfileChange}
//                     placeholder="Bio"
//                     rows={3}
//                     className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//                   />
//                   <div className="flex justify-end gap-2 mt-4">
//                     <button
//                       type="button"
//                       onClick={handleProfileCancel}
//                       className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 transition"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };
 
// export default Header;
 
 








import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BellIcon, UserIcon, MoonIcon, SunIcon, MenuIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import image from "../../assests/TG-SIGN (2).png";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  // Profile details state
  const [user, setUser] = useState({
    name: 'Nikitha',
    email: 'nikitha@student.com',
    studentId: 'ST12345',
    department: 'Computer Science',
    year: '3rd',
    phone: '+91 98765 43210',
    bio: 'Enthusiastic CSE student with a passion for coding, hackathons and AI research.',
  });
  const [tempUser, setTempUser] = useState(user);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState('');

  const notifications = [
    { id: 1, type: 'application', message: 'Assignment grades released for DBMS', time: '10 min ago' },
    { id: 2, type: 'event', message: 'Broadridge Hackathon this Saturday', time: '2 hours ago' },
    { id: 3, type: 'status', message: 'Project presentation reviewed by faculty', time: 'yesterday' }
  ];

  // Profile panel handlers
  const startEditProfile = () => {
    setTempUser(user);
    setIsEditingProfile(true);
    setProfileMsg('');
  };

  const handleProfileChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    setUser(tempUser);
    setIsEditingProfile(false);
    setProfileMsg('Profile updated successfully!');
    setTimeout(() => setProfileMsg(''), 2500);
  };

  const handleProfileCancel = () => {
    setTempUser(user);
    setIsEditingProfile(false);
    setProfileMsg('');
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem('token');
    // You can clear other storage/items/context here if needed
    navigate('/login');
  };

  return (
    <header className={`sticky top-0 z-10 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} px-4 py-3 flex items-center justify-between shadow-sm`}>
      {/* Left: Logo & Menu */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors md:hidden`}>
          <MenuIcon size={20} />
        </button>
        <img src={image} alt="Logo" className="h-8 w-auto object-contain" />
      </div>

      {/* Right: Notifications, Theme, User */}
      <div className="flex items-center gap-1 sm:gap-3">
        {/* Notifications */}
        <div className="relative">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors relative`}
            aria-label="Notifications"
          >
            <BellIcon size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </motion.button>
          {showNotifications && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`absolute right-0 mt-2 w-80 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg overflow-hidden z-50`}>
              <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} font-medium`}>Notifications</div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id}
                    className={`p-3 border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-100 hover:bg-gray-50'} cursor-pointer transition-colors`}>
                    <div className="flex gap-3 items-start">
                      <div className={`mt-0.5 h-2 w-2 rounded-full
                        ${notification.type === 'application' ? 'bg-blue-500' : notification.type === 'event' ? 'bg-yellow-500' : 'bg-green-500'} flex-shrink-0`}></div>
                      <div>
                        <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-sm`}>{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`p-2 text-center ${isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
                <button className="text-sm text-teal-500 hover:underline">View all notifications</button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Theme toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </motion.button>

        {/* User/Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2"
          >
            <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center overflow-hidden border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
              <UserIcon size={16} />
            </div>
            <span className="hidden md:block text-sm font-medium">{user.name}</span>
          </motion.button>
          {showUserMenu && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`absolute right-0 mt-2 w-56
                ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                border rounded-lg shadow-lg overflow-hidden z-50`}>
              <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <div>
                <button onClick={() => {
                    setShowProfilePanel(true);
                    setShowUserMenu(false);
                  }}
                  className={`w-full text-left p-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className={`w-full text-left p-3 ${isDarkMode ? 'hover:bg-gray-700 text-red-400' : 'hover:bg-gray-50 text-red-600'} transition-colors`}>
                  Logout
                </button>
              </div>
            </motion.div>
          )}

          {/* Profile details/edit panel (as modal dropdown) */}
          {showProfilePanel && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute right-0 mt-2 w-96 max-h-[90vh] overflow-y-auto
                ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}
                border rounded-xl shadow-2xl p-6 z-50`}
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {isEditingProfile ? 'Edit Profile' : 'Profile Details'}
                </h2>
                <button onClick={() => { setShowProfilePanel(false); setIsEditingProfile(false); }} className="text-gray-400 hover:text-red-400 text-lg">&times;</button>
              </div>
              {profileMsg && (
                <div className="mb-3 p-2 bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-300">
                  {profileMsg}
                </div>
              )}
              {!isEditingProfile ? (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-teal-600/10 flex items-center justify-center text-3xl font-bold text-teal-600">
                      {user.name[0]}
                    </div>
                    <div>
                      <div className="text-lg font-medium">{user.name}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {user.email}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        ID: {user.studentId}
                      </div>
                    </div>
                  </div>
                  <dl className="space-y-2 text-sm">
                    <div><span className="font-semibold">Department:</span> {user.department}</div>
                    <div><span className="font-semibold">Year:</span> {user.year}</div>
                    <div><span className="font-semibold">Phone:</span> {user.phone}</div>
                    <div><span className="font-semibold">Bio:</span> <span className="">{user.bio}</span></div>
                  </dl>
                  <div className="flex justify-end mt-6">
                    <button onClick={startEditProfile} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all text-sm">Edit Profile</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleProfileSave} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={tempUser.name}
                    onChange={handleProfileChange}
                    placeholder="Full Name"
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={tempUser.email}
                    onChange={handleProfileChange}
                    placeholder="Email"
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="studentId"
                    value={tempUser.studentId}
                    onChange={handleProfileChange}
                    placeholder="Student ID"
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="department"
                    value={tempUser.department}
                    onChange={handleProfileChange}
                    placeholder="Department"
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="year"
                    value={tempUser.year}
                    onChange={handleProfileChange}
                    placeholder="Year"
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={tempUser.phone}
                    onChange={handleProfileChange}
                    placeholder="Phone"
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                  />
                  <textarea
                    name="bio"
                    value={tempUser.bio}
                    onChange={handleProfileChange}
                    placeholder="Bio"
                    rows={3}
                    className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      onClick={handleProfileCancel}
                      className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
