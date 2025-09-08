import React, { useState, useEffect } from "react";
import { BellIcon, MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import image from "../../../assests/TG-SIGN (2).png";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar, userName, userAvatar }) => {
  const [notifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCollegeDetails, setShowCollegeDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [collegeData, setCollegeData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Get college data from localStorage
    const storedData = localStorage.getItem('collegeData');
    if (storedData) {
      setCollegeData(JSON.parse(storedData));
    }
  }, []);

  // College Info from registration data
  const [college, setCollege] = useState({
    name: collegeData?.collegeName || "Your College Name",
    code: collegeData?.registrationNo || "COL123",
    affiliation: "JNTU Hyderabad",
    established: collegeData?.yearOfEstablishment || "1995",
    principal: collegeData?.directorName || "Dr. Ramesh Kumar",
    address: collegeData?.address || "123 College Street, Hyderabad, Telangana",
    contact: collegeData?.phone || "+91 12345 67890",
    email: collegeData?.email || "info@yourcollege.edu.in",
    website: "",
    departments: "12",
    about: "Your college is committed to providing world-class education and research opportunities."
  });

  // Update college data when collegeData changes
  useEffect(() => {
    if (collegeData) {
      setCollege(prev => ({
        ...prev,
        name: collegeData.collegeName || prev.name,
        code: collegeData.registrationNo || prev.code,
        established: collegeData.yearOfEstablishment || prev.established,
        principal: collegeData.directorName || prev.principal,
        address: collegeData.address || prev.address,
        contact: collegeData.phone || prev.contact,
        email: collegeData.email || prev.email
      }));
    }
  }, [collegeData]);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    if (showProfile) setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
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
      <header
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800/80" : "bg-white/80"
        } backdrop-blur-md border-b ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } px-4 py-2 flex items-center justify-between`}
      >
        {/* Left Section */}
        <div className="flex items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mr-4 p-2 rounded-full md:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon
              className={`h-6 w-6 ${darkMode ? "text-white" : "text-gray-700"}`}
            />
          </motion.button>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
            {/* {collegeData?.logo && (
              <img 
                src={collegeData.logo} 
                alt="College Logo" 
                className="h-10 w-10 object-contain rounded-full mr-3 border-2 border-teal-400"
              />
            )} */}
            <img src={image} alt="logo" className="h-10 object-contain" />
            {/* {collegeData?.collegeName && (
              <span className="ml-3 hidden md:block text-lg font-semibold">
                {collegeData.collegeName}
              </span>
            )} */}
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <motion.div className="relative" whileHover={{ scale: 1.05 }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              onClick={toggleNotifications}
            >
              <BellIcon className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </motion.button>

            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`absolute right-0 mt-2 w-80 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-lg border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div
                  className={`p-3 ${
                    darkMode ? "bg-gray-700" : "bg-gray-50"
                  } border-b ${darkMode ? "border-gray-600" : "border-gray-200"}`}
                >
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div
                    className={`p-3 border-b ${
                      darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-medium">Assignment due tomorrow</p>
                    <p className="text-xs text-gray-500">Data Structures - Lab 2</p>
                  </div>
                  <div
                    className={`p-3 border-b ${
                      darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-medium">Google recruiting event</p>
                    <p className="text-xs text-gray-500">Jan 20, 2025 at 10:00 AM</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Dark Mode Toggle */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-300" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-700" />
              )}
            </motion.button>
          </motion.div>

          {/* Profile */}
          <motion.div className="relative" whileHover={{ scale: 1.05 }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
              onClick={toggleProfile}
            >
              <span className="hidden md:block mr-2 text-sm">
                {collegeData?.collegeName ? collegeData.collegeName.split(" ")[0] + "!" : "User!"}
              </span>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-teal-400">
                {collegeData?.logo ? (
                  <img
                    src={collegeData.logo}
                    alt="College logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={userAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80"}
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </motion.button>

            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`absolute right-0 mt-2 w-60 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-lg border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="p-4 border-b border-gray-200">
                  <p className="font-medium">Good {getTimeOfDay()},</p>
                  <p className="font-bold">{collegeData?.collegeName || userName}</p>
                  <p className="text-sm text-gray-500">ID: {collegeData?.registrationNo || "CG12345"}</p>
                </div>
                <div>
                  <button
                    onClick={openCollegeDetails}
                    className={`w-full text-left p-3 ${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                    }`}
                  >
                    College Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left p-3 ${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                    } text-red-500`}
                  >
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
          <div
            className={`bg-white ${darkMode ? "dark:bg-gray-800" : ""} rounded-lg p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto`}
          >
            {!editMode ? (
              <>
                <h2 className="text-xl font-bold mb-4">College Details</h2>
                {collegeData && (
                  <div className="space-y-3">
                    <p><strong>College Name:</strong> {collegeData.collegeName}</p>
                    <p><strong>Registration No:</strong> {collegeData.registrationNo}</p>
                    <p><strong>Email:</strong> {collegeData.email}</p>
                    <p><strong>Phone:</strong> {collegeData.phone}</p>
                    <p><strong>Address:</strong> {collegeData.address}</p>
                    <p><strong>State:</strong> {collegeData.state}</p>
                    <p><strong>Established:</strong> {collegeData.yearOfEstablishment}</p>
                    <p><strong>Institution Sector:</strong> {collegeData.institutionSector}</p>
                    <p><strong>Director Name:</strong> {collegeData.directorName}</p>
                    <p><strong>Director Email:</strong> {collegeData.directorEmail}</p>
                    <p><strong>Director Contact:</strong> {collegeData.directorContact}</p>
                    <p><strong>POC Name:</strong> {collegeData.poCName}</p>
                    <p><strong>POC Email:</strong> {collegeData.poCEmail}</p>
                    <p><strong>POC Mobile:</strong> {collegeData.poCMobile}</p>
                    <p><strong>Streams:</strong> {collegeData.streams?.join(', ')}</p>
                    <p><strong>Courses:</strong> {collegeData.courses?.join(', ')}</p>
                  </div>
                )}
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setEditMode(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={closeCollegeDetails}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  Edit College Details
                </h2>
                {collegeData && Object.keys(collegeData).map((key) => (
                  <div key={key} className="mb-2">
                    <label className="block text-sm font-medium mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={collegeData[key] || ''}
                      onChange={(e) => {
                        const updatedData = {...collegeData, [key]: e.target.value};
                        setCollegeData(updatedData);
                        localStorage.setItem('collegeData', JSON.stringify(updatedData));
                      }}
                      className="w-full p-2 border rounded bg-white text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                    />
                  </div>
                ))}
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => {
                      setEditMode(false);
                      localStorage.setItem('collegeData', JSON.stringify(collegeData));
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700"
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