// import React from 'react';
// import { motion } from 'framer-motion';
// const Settings = ({
//   darkMode
// }) => {
//   return <div className="space-y-6">
//       <motion.div initial={{
//       opacity: 0,
//       y: 20
//     }} animate={{
//       opacity: 1,
//       y: 0
//     }} transition={{
//       duration: 0.5
//     }}>
//         <h1 className="text-2xl font-bold mb-6">Settings</h1>
//       </motion.div>
//       <motion.div initial={{
//       opacity: 0,
//       y: 20
//     }} animate={{
//       opacity: 1,
//       y: 0
//     }} transition={{
//       duration: 0.5,
//       delay: 0.2
//     }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
//         <h2 className="text-xl font-semibold mb-4">User Settings</h2>
//         <p className="text-gray-500">
//           This is a placeholder for the Settings page. Content will be
//           implemented in future updates.
//         </p>
//       </motion.div>
//     </div>;
// };
// export default Settings;









import React, { useState } from 'react'
import {
  UserIcon,
  BellIcon,
  LockIcon,
  KeyIcon,
  SaveIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'

const Settings = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [bio, setBio] = useState(
  //   'Computer Science student with interests in AI and web development.',
  // )
  const [profileImage, setProfileImage] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [assignmentNotifications, setAssignmentNotifications] = useState(true)
  const [eventNotifications, setEventNotifications] = useState(true)
  const [placementNotifications, setPlacementNotifications] = useState(true)
  const [notificationFrequency, setNotificationFrequency] = useState('instant')

  // Handle image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target) {
          setProfileImage(event.target.result )
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">
          Customize your dashboard experience
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-5"
        >
          <div className="flex items-center mb-4">
            <UserIcon className="w-5 h-5 mr-2 text-teal-500" />
            <h2 className="text-lg font-semibold">Profile Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500 text-white text-4xl font-bold">
                      {name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  )}
                </div>
                <label className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg cursor-pointer transition-colors text-sm text-center">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>
              {/* <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div> */}
              <div>
                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg transition-colors flex items-center">
                  <SaveIcon className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notification Preferences */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-5"
        >
          <div className="flex items-center mb-4">
            <BellIcon className="w-5 h-5 mr-2 text-teal-500" />
            <h2 className="text-lg font-semibold">Notification Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-500">
                  Receive notifications via email
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-gray-500">
                  Receive notifications in browser
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={() => setPushNotifications(!pushNotifications)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
              </label>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium mb-2">Notification Types</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="assignment-notifications" className="text-sm">
                    Assignment Updates
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="assignment-notifications"
                      type="checkbox"
                      checked={assignmentNotifications}
                      onChange={() =>
                        setAssignmentNotifications(!assignmentNotifications)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="event-notifications" className="text-sm">
                    Event Announcements
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="event-notifications"
                      type="checkbox"
                      checked={eventNotifications}
                      onChange={() =>
                        setEventNotifications(!eventNotifications)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="placement-notifications" className="text-sm">
                    Placement Opportunities
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="placement-notifications"
                      type="checkbox"
                      checked={placementNotifications}
                      onChange={() =>
                        setPlacementNotifications(!placementNotifications)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="notification-frequency"
                className="block text-sm font-medium mb-1"
              >
                Notification Frequency
              </label>
              <select
                id="notification-frequency"
                value={notificationFrequency}
                onChange={(e) => setNotificationFrequency(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              >
                <option value="instant">Instant</option>
                <option value="hourly">Hourly Digest</option>
                <option value="daily">Daily Digest</option>
                <option value="weekly">Weekly Digest</option>
              </select>
            </div>
            <div>
              <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg transition-colors flex items-center">
                <SaveIcon className="w-4 h-4 mr-2" />
                Save Preferences
              </button>
            </div>
          </div>
        </motion.div>

        {/* Account Security */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
        >
          <div className="flex items-center mb-4">
            <LockIcon className="w-5 h-5 mr-2 text-teal-500" />
            <h2 className="text-lg font-semibold">Account Security</h2>
          </div>
          <div className="space-y-4">
            <div>
              <button className="w-full py-2 px-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center">
                <KeyIcon className="w-4 h-4 mr-2" />
                Change Password
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
              </label>
            </div>
            <div className="pt-4">
              <button className="w-full py-2 px-3 text-red-600 rounded-lg border border-red-200 hover:bg-red-50 transition-colors">
                Logout from All Devices
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Settings;