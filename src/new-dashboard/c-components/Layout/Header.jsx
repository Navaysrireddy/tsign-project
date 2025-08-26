import React, { useState } from "react";
import { BellIcon, MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import image from "../../../assests/TG-SIGN (2).png";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  const [notifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCollegeDetails, setShowCollegeDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate(); 

  // Extended College Info
  const [college, setCollege] = useState({
    name: "Your College Name",
    code: "COL123",
    affiliation: "JNTU Hyderabad",
    established: "1995",
    principal: "Dr. Ramesh Kumar",
    address: "123 College Street, Hyderabad, Telangana",
    contact: "+91 12345 67890",
    email: "info@yourcollege.edu.in",
    website: "http://www.yourcollege.edu.in",
    departments: "12",
    about: "Your college is committed to providing world-class education and research opportunities."
  });

  const userName = "CollegeName";
  const userAvatar =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80";

  const toggleNotifications = () => {
    setShowNotifications(prev => !prev);
    if (showProfile) setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
    if (showNotifications) setShowNotifications(false);
  };

  const openCollegeDetails = () => {
    setShowCollegeDetails(true);
    setShowProfile(false);
    setEditMode(false);
  };

  const closeCollegeDetails = () => {
    setShowCollegeDetails(false);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setCollege({ ...college, [e.target.name]: e.target.value });
  };

  const saveCollegeDetails = () => {
    setEditMode(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Morning";
    if (hour < 16) return "Afternoon";
    return "Evening";
  };

  return (
    <>
      <header className={`sticky top-0 z-10 ${darkMode ? "bg-gray-800/80" : "bg-white/80"} backdrop-blur-md border-b ${darkMode ? "border-gray-700" : "border-gray-200"} px-4 py-2 flex items-center justify-between`}>

        {/* Left Section */}
        <div className="flex items-center">
          <motion.button whileTap={{ scale: 0.95 }} className="mr-4 p-2 rounded-full md:hidden" onClick={toggleSidebar}>
            <MenuIcon className={`h-6 w-6 ${darkMode ? "text-white" : "text-gray-700"}`} />
          </motion.button>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <img src={image} alt="logo" className="h-10 object-contain" />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">

          {/* Notifications */}
          <motion.div className="relative" whileHover={{ scale: 1.05 }}>
            <motion.button whileTap={{ scale: 0.95 }} className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`} onClick={toggleNotifications}>
              <BellIcon className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </motion.button>

            {showNotifications && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`absolute right-0 mt-2 w-80 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className={`p-3 ${darkMode ? "bg-gray-700" : "bg-gray-50"} border-b ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div className={`p-3 border-b ${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-50"}`}>
                    <p className="text-sm font-medium">Assignment due tomorrow</p>
                    <p className="text-xs text-gray-500">Data Structures - Lab 2</p>
                  </div>
                  <div className={`p-3 border-b ${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-50"}`}>
                    <p className="text-sm font-medium">Google recruiting event</p>
                    <p className="text-xs text-gray-500">Jan 20, 2025 at 10:00 AM</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Dark Mode Toggle */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <motion.button whileTap={{ scale: 0.95 }} className="p-2 rounded-full" onClick={toggleDarkMode}>
              {darkMode ? <SunIcon className="h-6 w-6 text-yellow-300" /> : <MoonIcon className="h-6 w-6 text-gray-700" />}
            </motion.button>
          </motion.div>

          {/* Profile */}
          <motion.div className="relative" whileHover={{ scale: 1.05 }}>
            <motion.button whileTap={{ scale: 0.95 }} className="flex items-center" onClick={toggleProfile}>
              <span className="hidden md:block mr-2 text-sm">{userName.split(" ")[0]}!</span>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-teal-400">
                <img src={userAvatar} alt="User avatar" className="h-full w-full object-cover" />
              </div>
            </motion.button>

            {showProfile && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`absolute right-0 mt-2 w-60 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className="p-4 border-b border-gray-200">
                  <p className="font-medium">Good {getTimeOfDay()},</p>
                  <p className="font-bold">{userName}</p>
                  <p className="text-sm text-gray-500">College ID: CG12345</p>
                </div>
                <div>
                  <button onClick={openCollegeDetails} className={`w-full text-left p-3 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}>
                    Profile
                  </button>
                  <button onClick={handleLogout} className={`w-full text-left p-3 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} text-red-500`}>
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </header>

      {/* College Details Popup */}
      {showCollegeDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className={`bg-white ${darkMode ? "dark:bg-gray-800" : ""} rounded-lg p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto`}>
            {!editMode ? (
              <>
                <h2 className="text-xl font-bold mb-4">College Details</h2>
                {Object.entries(college).map(([key, value]) => (
                  <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
                ))}
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setEditMode(true)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button onClick={closeCollegeDetails} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close</button>
                </div>
              </>
            ) : (
              <>
               <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Edit College Details</h2>
{Object.keys(college).map((key) =>
  key === "about" ? (
    <textarea
      key={key}
      name={key}
      value={college[key]}
      onChange={handleInputChange}
      placeholder="About"
      className="w-full p-2 mb-2 border rounded h-20 
                 bg-white text-gray-800 border-gray-300
                 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    />
  ) : (
    <input
      key={key}
      type="text"
      name={key}
      value={college[key]}
      onChange={handleInputChange}
      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
      className="w-full p-2 mb-2 border rounded
                 bg-white text-gray-800 border-gray-300
                 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    />
  )
)}
<div className="mt-4 flex gap-2">
  <button
    onClick={saveCollegeDetails}
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600
               dark:bg-green-600 dark:hover:bg-green-700"
  >
    Save
  </button>
  <button
    onClick={() => setEditMode(false)}
    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500
               dark:bg-gray-600 dark:hover:bg-gray-700"
  >
    Cancel
  </button>
</div>

              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
 