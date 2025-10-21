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






import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  UserIcon,
  BellIcon,
  ShieldIcon,
  SaveIcon,
  UploadIcon,
  LockIcon,
  LogOutIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  XIcon,
} from 'lucide-react'
const Settings = ({ darkMode }) => {
  // Profile state
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  })
  const [ setProfilePhoto] = useState(null)
  const [profilePhotoURL, setProfilePhotoURL] = useState('')
  const fileInputRef = useRef(null)
  const [saveStatus, setSaveStatus] = useState({
    show: false,
    success: false,
    message: '',
  })
  // Notification preferences state
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    assignments: true,
    events: true,
    placements: true,
    frequency: 'Instant',
  })
  // Security state
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  })
  const [passwordError, setPasswordError] = useState('')
  // Handle profile photo upload
  const handlePhotoUpload = () => {
    fileInputRef.current.click()
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfilePhoto(file)
      const url = URL.createObjectURL(file)
      setProfilePhotoURL(url)
      // Show success message
      setSaveStatus({
        show: true,
        success: true,
        message:
          'Photo uploaded successfully! Click Save Changes to update your profile.',
      })
      // Hide message after 3 seconds
      setTimeout(() => {
        setSaveStatus({
          show: false,
          success: false,
          message: '',
        })
      }, 3000)
    }
  }
  // Handle profile form changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // Handle profile save
  const handleProfileSave = () => {
    // Validate form
    if (!profile.name.trim() || !profile.email.trim()) {
      setSaveStatus({
        show: true,
        success: false,
        message: 'Please fill in all required fields',
      })
      return
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(profile.email)) {
      setSaveStatus({
        show: true,
        success: false,
        message: 'Please enter a valid email address',
      })
      return
    }
    // Simulate API call
    setSaveStatus({
      show: true,
      success: true,
      message: 'Saving your profile...',
    })
    setTimeout(() => {
      setSaveStatus({
        show: true,
        success: true,
        message: 'Profile updated successfully!',
      })
      // Hide message after 3 seconds
      setTimeout(() => {
        setSaveStatus({
          show: false,
          success: false,
          message: '',
        })
      }, 3000)
    }, 1500)
  }
  // Handle notification toggle
  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }
  // Handle notification frequency change
  const handleFrequencyChange = (e) => {
    setNotifications((prev) => ({
      ...prev,
      frequency: e.target.value,
    }))
  }
  // Handle notification preferences save
  const handleNotificationSave = () => {
    // Simulate API call
    setSaveStatus({
      show: true,
      success: true,
      message: 'Saving your preferences...',
    })
    setTimeout(() => {
      setSaveStatus({
        show: true,
        success: true,
        message: 'Notification preferences updated successfully!',
      })
      // Hide message after 3 seconds
      setTimeout(() => {
        setSaveStatus({
          show: false,
          success: false,
          message: '',
        })
      }, 3000)
    }, 1500)
  }
  // Handle two-factor authentication toggle
  const handleTwoFactorToggle = () => {
    setTwoFactorAuth((prev) => !prev)
    // Show confirmation
    setSaveStatus({
      show: true,
      success: true,
      message: `Two-factor authentication ${!twoFactorAuth ? 'enabled' : 'disabled'} successfully!`,
    })
    // Hide message after 3 seconds
    setTimeout(() => {
      setSaveStatus({
        show: false,
        success: false,
        message: '',
      })
    }, 3000)
  }
  // Handle password change modal
  const handlePasswordModal = () => {
    setShowPasswordModal(true)
    setPasswordData({
      current: '',
      new: '',
      confirm: '',
    })
    setPasswordError('')
  }
  // Handle password input change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // Handle password save
  const handlePasswordSave = () => {
    // Validate password
    if (!passwordData.current || !passwordData.new || !passwordData.confirm) {
      setPasswordError('All fields are required')
      return
    }
    if (passwordData.new.length < 8) {
      setPasswordError('New password must be at least 8 characters long')
      return
    }
    if (passwordData.new !== passwordData.confirm) {
      setPasswordError('New passwords do not match')
      return
    }
    // Simulate API call
    setPasswordError('')
    setSaveStatus({
      show: true,
      success: true,
      message: 'Changing your password...',
    })
    setTimeout(() => {
      setShowPasswordModal(false)
      setSaveStatus({
        show: true,
        success: true,
        message: 'Password changed successfully!',
      })
      // Hide message after 3 seconds
      setTimeout(() => {
        setSaveStatus({
          show: false,
          success: false,
          message: '',
        })
      }, 3000)
    }, 1500)
  }
  // Handle logout from all devices
  const handleLogoutAllDevices = () => {
    // Simulate API call
    setSaveStatus({
      show: true,
      success: true,
      message: 'Logging out from all devices...',
    })
    setTimeout(() => {
      setSaveStatus({
        show: true,
        success: true,
        message: 'Successfully logged out from all devices!',
      })
      // Hide message after 3 seconds
      setTimeout(() => {
        setSaveStatus({
          show: false,
          success: false,
          message: '',
        })
      }, 3000)
    }, 1500)
  }
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Status Message */}
      {saveStatus.show && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md flex items-center gap-2 ${saveStatus.success ? (darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800') : darkMode ? 'bg-red-800 text-red-100' : 'bg-red-100 text-red-800'}`}
        >
          {saveStatus.success ? (
            <CheckCircleIcon size={18} />
          ) : (
            <AlertCircleIcon size={18} />
          )}
          <span>{saveStatus.message}</span>
          <button
            onClick={() =>
              setSaveStatus({
                show: false,
                success: false,
                message: '',
              })
            }
            className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <XIcon size={16} />
          </button>
        </motion.div>
      )}

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-md shadow-xl`}
          >
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            {passwordError && (
              <div
                className={`p-3 mb-4 rounded-md ${darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-800'}`}
              >
                {passwordError}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label
                  className={`block mb-1 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="current"
                  value={passwordData.current}
                  onChange={handlePasswordChange}
                  className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              <div>
                <label
                  className={`block mb-1 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="new"
                  value={passwordData.new}
                  onChange={handlePasswordChange}
                  className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              <div>
                <label
                  className={`block mb-1 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirm"
                  value={passwordData.confirm}
                  onChange={handlePasswordChange}
                  className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className={`px-4 py-2 rounded-md border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordSave}
                  className={`px-4 py-2 rounded-md text-white flex items-center gap-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'}`}
                >
                  <SaveIcon size={16} />
                  <span>Save Password</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
      >
        <h1 className="text-2xl font-bold">Settings</h1>
        <p
          className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          Customize your dashboard experience
        </p>
      </motion.div>

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
          delay: 0.1,
        }}
        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
      >
        <div className="flex items-center gap-2 mb-4">
          <UserIcon
            size={18}
            className={darkMode ? 'text-teal-400' : 'text-teal-500'}
          />
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </div>
        <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-2 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              {profilePhotoURL ? (
                <img
                  src={profilePhotoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserIcon size={48} className="text-gray-400" />
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={handlePhotoUpload}
              className={`mt-2 px-4 py-2 rounded-md text-white flex items-center gap-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'}`}
            >
              <UploadIcon size={16} />
              <span>Upload Photo</span>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label
                className={`block mb-1 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>
            <div>
              <label
                className={`block mb-1 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleProfileSave}
                className={`px-4 py-2 rounded-md text-white flex items-center gap-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'}`}
              >
                <SaveIcon size={16} />
                <span>Save Changes</span>
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
          delay: 0.2,
        }}
        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
      >
        <div className="flex items-center gap-2 mb-4">
          <BellIcon
            size={18}
            className={darkMode ? 'text-teal-400' : 'text-teal-500'}
          />
          <h2 className="text-xl font-semibold">Notification Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Receive notifications via email
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.email}
                onChange={() => handleNotificationToggle('email')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
            </label>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <h3 className="font-medium">Push Notifications</h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Receive notifications in browser
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.push}
                onChange={() => handleNotificationToggle('push')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
            </label>
          </div>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Notification Types</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span>Assignment Updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.assignments}
                    onChange={() => handleNotificationToggle('assignments')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
                </label>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Event Announcements</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.events}
                    onChange={() => handleNotificationToggle('events')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
                </label>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Placement Opportunities</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.placements}
                    onChange={() => handleNotificationToggle('placements')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
                </label>
              </div>
            </div>
          </div>
          <div>
            <label
              className={`block mb-1 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Notification Frequency
            </label>
            <select
              value={notifications.frequency}
              onChange={handleFrequencyChange}
              className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              <option>Instant</option>
              <option>Daily Digest</option>
              <option>Weekly Summary</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleNotificationSave}
              className={`px-4 py-2 rounded-md text-white flex items-center gap-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'}`}
            >
              <SaveIcon size={16} />
              <span>Save Preferences</span>
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
          delay: 0.3,
        }}
        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
      >
        <div className="flex items-center gap-2 mb-4">
          <ShieldIcon
            size={18}
            className={darkMode ? 'text-teal-400' : 'text-teal-500'}
          />
          <h2 className="text-xl font-semibold">Account Security</h2>
        </div>
        <div className="space-y-4">
          <button
            onClick={handlePasswordModal}
            className={`w-full flex items-center justify-center gap-2 p-3 border rounded-md ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'}`}
          >
            <LockIcon size={16} />
            <span>Change Password</span>
          </button>
          <div className="flex justify-between items-center py-2">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Add an extra layer of security
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={twoFactorAuth}
                onChange={handleTwoFactorToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
            </label>
          </div>
          <button
            onClick={handleLogoutAllDevices}
            className="w-full flex items-center justify-center gap-2 p-3 border border-red-300 text-red-600 rounded-md hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
          >
            <LogOutIcon size={16} />
            <span>Logout from All Devices</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
export default Settings;