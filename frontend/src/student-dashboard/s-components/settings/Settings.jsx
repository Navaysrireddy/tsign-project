import React, { useState } from 'react';
import {
  UserIcon,
  BellIcon,
  ShieldIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  SaveIcon,
  MailIcon
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    department: 'Computer Science',
    year: '3',
    bio: 'Computer Science student with a passion for web development and machine learning.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    smsNotifications: false,
    assignmentReminders: true,
    eventUpdates: true,
    placementAlerts: true,
    twoFactorAuth: false,
    sessionTimeout: '30',
    dataSharing: 'minimal'
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? e.target.checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Settings</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 h-fit">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeTab === 'profile'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <UserIcon className="w-5 h-5 mr-3" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeTab === 'password'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <LockIcon className="w-5 h-5 mr-3" />
              <span>Password</span>
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeTab === 'notifications'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <BellIcon className="w-5 h-5 mr-3" />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeTab === 'privacy'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <ShieldIcon className="w-5 h-5 mr-3" />
              <span>Privacy & Security</span>
            </button>
          </nav>
        </div>
        {/* Main content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Profile Information</h2>
                {/* Uploaded Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="profileImage">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile preview"
                        className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                        <UserIcon className="w-8 h-8" />
                      </div>
                    )}
                    <input
                      type="file"
                      id="profileImage"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                        <MailIcon className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="flex-1 p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-r-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Year
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200 appearance-none"
                    >
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                  ></textarea>
                </div>
              </div>
            )}
            {/* Password Settings */}
            {activeTab === 'password' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                      >
                        {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      New Password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    />
                  </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.
                  </p>
                </div>
              </div>
            )}
            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Notification Preferences</h2>
                <div className="space-y-4">
                  {['emailNotifications', 'smsNotifications', 'assignmentReminders', 'eventUpdates', 'placementAlerts'].map((name) => (
                    <div key={name} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <h3 className="text-base font-medium text-gray-800 dark:text-white">
                          {name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {`Receive ${name.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name={name}
                          checked={formData[name]}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Privacy & Security</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="text-base font-medium text-gray-800 dark:text-white">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="twoFactorAuth"
                        checked={formData.twoFactorAuth}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="mb-2">
                      <h3 className="text-base font-medium text-gray-800 dark:text-white">Session Timeout</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Automatically log out after inactivity</p>
                    </div>
                    <select
                      name="sessionTimeout"
                      value={formData.sessionTimeout}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200 appearance-none"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                  <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="mb-2">
                      <h3 className="text-base font-medium text-gray-800 dark:text-white">Data Sharing</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Control what data is shared with third parties</p>
                    </div>
                    <select
                      name="dataSharing"
                      value={formData.dataSharing}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200 appearance-none"
                    >
                      <option value="none">None - Don't share my data</option>
                      <option value="minimal">Minimal - Only essential data</option>
                      <option value="moderate">Moderate - Include academic data</option>
                      <option value="all">All - Share all data for better experience</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            {/* Submit Button (for all tabs) */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center"
              >
                <SaveIcon className="w-4 h-4 mr-1" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;






// import React, { useState } from "react";
// import {
//   UserIcon,
//   BellIcon,
//   ShieldIcon,
//   LockIcon,
//   SaveIcon,
//   MailIcon,
//   CameraIcon,
// } from "lucide-react";

// const Settings = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   // const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Smith",
//     email: "john.smith@example.com",
//     phone: "+1 (555) 123-4567",
//     department: "Computer Science",
//     year: "3",
//     bio: "Computer Science student with a passion for web development and machine learning.",
//     profilePhoto: null, // new field
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//     emailNotifications: true,
//     smsNotifications: false,
//     assignmentReminders: true,
//     eventUpdates: true,
//     placementAlerts: true,
//     twoFactorAuth: false,
//     sessionTimeout: "30",
//     dataSharing: "minimal",
//   });

//   const [photoPreview, setPhotoPreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     const checked = type === "checkbox" ? e.target.checked : undefined;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, profilePhoto: file }));
//       setPhotoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Student profile updated successfully!");
//     // TODO: send formData (including profilePhoto) to backend via fetch/axios
//   };

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
//         Settings
//       </h1>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Sidebar */}
//         <div className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-100 dark:border-gray-700 h-fit">
//           <nav className="space-y-1">
//             <button
//               onClick={() => setActiveTab("profile")}
//               className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
//                 activeTab === "profile"
//                   ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
//                   : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               <UserIcon className="w-5 h-5 mr-3" />
//               <span>Profile</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("password")}
//               className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
//                 activeTab === "password"
//                   ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
//                   : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               <LockIcon className="w-5 h-5 mr-3" />
//               <span>Password</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("notifications")}
//               className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
//                 activeTab === "notifications"
//                   ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
//                   : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               <BellIcon className="w-5 h-5 mr-3" />
//               <span>Notifications</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("privacy")}
//               className={`flex items-center w-full px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
//                 activeTab === "privacy"
//                   ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
//                   : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               <ShieldIcon className="w-5 h-5 mr-3" />
//               <span>Privacy & Security</span>
//             </button>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-100 dark:border-gray-700">
//           <form onSubmit={handleSubmit}>
//             {/* Profile Settings */}
//             {activeTab === "profile" && (
//               <div className="space-y-6">
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//                   Student Profile Update
//                 </h2>

//                 {/* Profile Photo Upload */}
//                 <div className="flex items-center space-x-6">
//                   <div className="relative w-24 h-24">
//                     <img
//                       src={
//                         photoPreview ||
//                         "https://via.placeholder.com/150?text=Student"
//                       }
//                       alt="Profile Preview"
//                       className="w-24 h-24 rounded-full object-cover border"
//                     />
//                     <label
//                       htmlFor="profilePhoto"
//                       className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full cursor-pointer hover:bg-blue-700"
//                     >
//                       <CameraIcon className="w-4 h-4" />
//                       <input
//                         type="file"
//                         id="profilePhoto"
//                         accept="image/*"
//                         onChange={handlePhotoUpload}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       Upload a profile photo (JPG or PNG, max 2MB).
//                     </p>
//                   </div>
//                 </div>

//                 {/* Profile Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="w-full p-2.5 rounded-lg border bg-gray-100 dark:bg-gray-700"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="w-full p-2.5 rounded-lg border bg-gray-100 dark:bg-gray-700"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Student Email
//                     </label>
//                     <div className="flex">
//                       <span className="inline-flex items-center px-3 rounded-l-md border bg-gray-50 dark:bg-gray-700">
//                         <MailIcon className="w-4 h-4" />
//                       </span>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="flex-1 p-2.5 rounded-r-lg border bg-gray-100 dark:bg-gray-700"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full p-2.5 rounded-lg border bg-gray-100 dark:bg-gray-700"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Department
//                     </label>
//                     <input
//                       type="text"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleChange}
//                       className="w-full p-2.5 rounded-lg border bg-gray-100 dark:bg-gray-700"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Year
//                     </label>
//                     <select
//                       name="year"
//                       value={formData.year}
//                       onChange={handleChange}
//                       className="w-full p-2.5 rounded-lg border bg-gray-100 dark:bg-gray-700"
//                     >
//                       <option value="1">1st Year</option>
//                       <option value="2">2nd Year</option>
//                       <option value="3">3rd Year</option>
//                       <option value="4">4th Year</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Bio</label>
//                   <textarea
//                     name="bio"
//                     value={formData.bio}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full p-2.5 rounded-lg border bg-gray-100 dark:bg-gray-700"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Other tabs remain unchanged (password, notifications, privacy) */}

//             {/* Save Button */}
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 <SaveIcon className="w-5 h-5 mr-2" />
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;
