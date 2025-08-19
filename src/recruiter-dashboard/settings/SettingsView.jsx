import React, { useState } from 'react';
import { motion } from 'framer-motion';
import  {useTheme}  from '../context/ThemeContext';
import  {mockData}  from '../utils/mockdata';
 
const SettingsView = () => {
  const {
    theme,
  } = useTheme();
  const isDarkMode = theme === 'dark';
 
  const [recruiterInfo, setRecruiterInfo] = useState({
    name: mockData.recruiterSettings.name,
    email: mockData.recruiterSettings.email,
    company: mockData.recruiterSettings.company,
    designation: mockData.recruiterSettings.designation
  });
 
  const [notifications, setNotifications] = useState({
    newApplications: mockData.recruiterSettings.notifications.newApplications,
    interviews: mockData.recruiterSettings.notifications.interviews,
    frequency: mockData.recruiterSettings.notifications.frequency
  });
 
  const [resumeParsing, setResumeParsing] = useState({
    enabled: mockData.recruiterSettings.resumeParsing.enabled,
    preferredFormats: [...mockData.recruiterSettings.resumeParsing.preferredFormats]
  });
   // eslint-disable-next-line
  const [integrations, setIntegrations] = useState({
    ats: mockData.recruiterSettings.integrations.ats,
    calendar: mockData.recruiterSettings.integrations.calendar
  });
 
  const handleRecruiterInfoChange = (e) => {
    const { name, value } = e.target;
    setRecruiterInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  const handleNotificationToggle = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
 
  const handleFrequencyChange = (e) => {
    setNotifications(prev => ({
      ...prev,
      frequency: e.target.value
    }));
  };
 
  const handleResumeParsingToggle = () => {
    setResumeParsing(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
  };
 
  const handleFormatToggle = (format) => {
    setResumeParsing(prev => {
      if (prev.preferredFormats.includes(format)) {
        return {
          ...prev,
          preferredFormats: prev.preferredFormats.filter(f => f !== format)
        };
      } else {
        return {
          ...prev,
          preferredFormats: [...prev.preferredFormats, format]
        };
      }
    });
  };
 
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
 
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
 
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.h2 variants={itemVariants} className="text-2xl font-bold">
          Settings
        </motion.h2>
      </div>
 
      {/* Recruiter Info */}
      <motion.div variants={itemVariants} className={`
        rounded-xl overflow-hidden
        ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
        p-5
      `}>
        <h3 className="text-lg font-medium mb-4">Recruiter Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Name
            </label>
            <input type="text" id="name" name="name" value={recruiterInfo.name} onChange={handleRecruiterInfoChange} className={`
              w-full px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-gray-100/80 border-gray-300 text-gray-900'}
              border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500
            `} />
          </div>
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Email
            </label>
            <input type="email" id="email" name="email" value={recruiterInfo.email} onChange={handleRecruiterInfoChange} className={`
              w-full px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-gray-100/80 border-gray-300 text-gray-900'}
              border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500
            `} />
          </div>
          <div>
            <label htmlFor="company" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Company
            </label>
            <input type="text" id="company" name="company" value={recruiterInfo.company} onChange={handleRecruiterInfoChange} className={`
              w-full px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-gray-100/80 border-gray-300 text-gray-900'}
              border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500
            `} />
          </div>
          <div>
            <label htmlFor="designation" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Designation
            </label>
            <input type="text" id="designation" name="designation" value={recruiterInfo.designation} onChange={handleRecruiterInfoChange} className={`
              w-full px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-gray-100/80 border-gray-300 text-gray-900'}
              border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500
            `} />
          </div>
        </div>
        <div className="mt-4">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`
            px-4 py-2 rounded-lg
            bg-gradient-to-r from-teal-500 to-blue-500 text-white
            shadow-[3px_3px_6px_rgba(0,0,0,0.1)]
          `}>
            Save Changes
          </motion.button>
        </div>
      </motion.div>
 
      {/* Notification Preferences */}
      <motion.div variants={itemVariants} className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}>
        <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                New Applications
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Get notified when new applications are received
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={notifications.newApplications} onChange={() => handleNotificationToggle('newApplications')} />
              <div className={`
                w-11 h-6 rounded-full peer
                ${isDarkMode ? 'bg-gray-700 peer-checked:bg-teal-600' : 'bg-gray-200 peer-checked:bg-teal-600'}
                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300
                after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                after:transition-all peer-checked:after:translate-x-full
              `}></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Interview Updates
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Get notified about interview schedules and changes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={notifications.interviews} onChange={() => handleNotificationToggle('interviews')} />
              <div className={`
                w-11 h-6 rounded-full peer
                ${isDarkMode ? 'bg-gray-700 peer-checked:bg-teal-600' : 'bg-gray-200 peer-checked:bg-teal-600'}
                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300
                after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                after:transition-all peer-checked:after:translate-x-full
              `}></div>
            </label>
          </div>
          <div>  
            <label htmlFor="frequency" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Notification Frequency
            </label>
            <select id="frequency" value={notifications.frequency} onChange={handleFrequencyChange} className={`
                w-full px-4 py-2 rounded-lg
                ${isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-gray-100/80 border-gray-300 text-gray-900'}
                border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500
              `}>
              <option value="Instant">Instant</option>
              <option value="Daily">Daily Digest</option>
              <option value="Weekly">Weekly Summary</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`
              px-4 py-2 rounded-lg
              bg-gradient-to-r from-teal-500 to-blue-500 text-white
              shadow-[3px_3px_6px_rgba(0,0,0,0.1)]
            `}>
            Save Preferences
          </motion.button>
        </div>
      </motion.div>
 
      {/* Theme Settings */}
      {/* <motion.div variants={itemVariants} className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}>
        <h3 className="text-lg font-medium mb-4">Theme Settings</h3>
        <div className="space-y-4">
          <div>
            <p className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Dark / Light Mode
            </p>
            <div className="flex gap-4">
              <label className={`
                flex items-center gap-2 p-3 rounded-lg cursor-pointer
                ${theme === 'light' ? 'bg-gray-100 border-2 border-teal-500' : 'bg-gray-100 border-2 border-transparent'}
              `}>
                <input type="radio" name="theme" value="light" checked={theme === 'light'} onChange={toggleTheme} className="sr-only" />
                <span className="text-gray-900">Light</span>
              </label>
              <label className={`
                flex items-center gap-2 p-3 rounded-lg cursor-pointer
                ${theme === 'dark' ? 'bg-gray-800 border-2 border-teal-500' : 'bg-gray-800 border-2 border-transparent'}
              `}>
                <input type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={toggleTheme} className="sr-only" />
                <span className="text-white">Dark</span>
              </label>
            </div>
          </div>
          <div>
            <p className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Accent Color
            </p>
            <div className="flex gap-4">
              <label className={`
                flex items-center justify-center w-10 h-10 rounded-full cursor-pointer
                bg-teal-500
                ${themeColor === 'teal' ? 'ring-2 ring-offset-2 ring-teal-500' : ''}
                ${isDarkMode ? 'ring-offset-gray-800' : 'ring-offset-white'}
              `}>
                <input type="radio" name="color" value="teal" checked={themeColor === 'teal'} onChange={() => setThemeColor('teal')} className="sr-only" />
              </label>
              <label className={`
                flex items-center justify-center w-10 h-10 rounded-full cursor-pointer
                bg-coral-500
                ${themeColor === 'coral' ? 'ring-2 ring-offset-2 ring-coral-500' : ''}
                ${isDarkMode ? 'ring-offset-gray-800' : 'ring-offset-white'}
              `}>
                <input type="radio" name="color" value="coral" checked={themeColor === 'coral'} onChange={() => setThemeColor('coral')} className="sr-only" />
              </label>
              <label className={`
                flex items-center justify-center w-10 h-10 rounded-full cursor-pointer
                bg-purple-500
                ${themeColor === 'purple' ? 'ring-2 ring-offset-2 ring-purple-500' : ''}
                ${isDarkMode ? 'ring-offset-gray-800' : 'ring-offset-white'}
              `}>
                <input type="radio" name="color" value="purple" checked={themeColor === 'purple'} onChange={() => setThemeColor('purple')} className="sr-only" />
              </label>
            </div>
          </div>
        </div>
      </motion.div> */}
 
      {/* Resume Parsing Settings */}
      <motion.div variants={itemVariants} className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}>
        <h3 className="text-lg font-medium mb-4">Resume Parsing Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Enable Resume Parsing
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Automatically extract information from uploaded resumes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={resumeParsing.enabled} onChange={handleResumeParsingToggle} />
              <div className={`
                w-11 h-6 rounded-full peer
                ${isDarkMode ? 'bg-gray-700 peer-checked:bg-teal-600' : 'bg-gray-200 peer-checked:bg-teal-600'}
                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-300
                after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                after:transition-all peer-checked:after:translate-x-full
              `}></div>
            </label>
          </div>
          <div>
            <p className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Preferred Resume Formats
            </p>
            <div className="flex flex-wrap gap-3">
              {['PDF', 'DOCX', 'DOC', 'TXT'].map(format => (
                <label key={format} className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
                  ${resumeParsing.preferredFormats.includes(format) ? (isDarkMode ? 'bg-teal-900/30 text-teal-400 border border-teal-500/50' : 'bg-teal-100 text-teal-800 border border-teal-300') : (isDarkMode ? 'bg-gray-700 text-gray-300 border border-gray-600' : 'bg-gray-100 text-gray-800 border border-gray-300')}
                `}>
                  <input type="checkbox" checked={resumeParsing.preferredFormats.includes(format)} onChange={() => handleFormatToggle(format)} className="sr-only" />
                  {format}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`
              px-4 py-2 rounded-lg
              bg-gradient-to-r from-teal-500 to-blue-500 text-white
              shadow-[3px_3px_6px_rgba(0,0,0,0.1)]
            `}>
            Save Settings
          </motion.button>
        </div>
      </motion.div>
 
      {/* Integration Options */}
      <motion.div variants={itemVariants} className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}>
        <h3 className="text-lg font-medium mb-4">Integration Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`
            p-4 rounded-xl
            ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
          `}>
            <h4 className="font-medium mb-2">Applicant Tracking System</h4>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Connect to your ATS to sync candidate data
            </p>
            <div className={`
              p-3 rounded-lg mb-4
              ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
              border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}
            `}>
              <p className="font-medium">
                {integrations.ats || 'Not connected'}
              </p>
            </div>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`
                w-full px-4 py-2 rounded-lg
                ${isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                transition-colors
              `}>
              {integrations.ats ? 'Change ATS' : 'Connect ATS'}
            </motion.button>
          </div>
          <div className={`
            p-4 rounded-xl
            ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
          `}>
            <h4 className="font-medium mb-2">Calendar Integration</h4>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Connect to your calendar for interview scheduling
            </p>
            <div className={`
              p-3 rounded-lg mb-4
              ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
              border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}
            `}>
              <p className="font-medium">
                {integrations.calendar || 'Not connected'}
              </p>
            </div>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={`
                w-full px-4 py-2 rounded-lg
                ${isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                transition-colors
              `}>
              {integrations.calendar ? 'Change Calendar' : 'Connect Calendar'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
 
export default SettingsView;
 
 
