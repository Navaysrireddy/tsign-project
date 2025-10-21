// import React, { useState } from 'react';
// import { UserIcon, BellIcon, ShieldIcon, PaletteIcon, GlobeIcon, KeyIcon, CreditCardIcon, HelpCircleIcon, SaveIcon } from 'lucide-react';
// export const Settings = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return <ProfileSettings />;
//       case 'notifications':
//         return <NotificationSettings />;
//       case 'security':
//         return <SecuritySettings />;
//       case 'appearance':
//         return <AppearanceSettings />;
//       default:
//         return <ProfileSettings />;
//     }
//   };
//   return <div className="space-y-6">
//       <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
//       <div className="bg-white rounded-xl shadow-sm overflow-hidden backdrop-blur-sm bg-opacity-80 border border-gray-100">
//         <div className="flex flex-col md:flex-row">
//           {/* Sidebar */}
//           <div className="w-full md:w-64 border-r border-gray-200">
//             <nav className="p-4">
//               <ul className="space-y-1">
//                 <li>
//                   <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
//                     <UserIcon size={18} />
//                     <span>Profile</span>
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
//                     <BellIcon size={18} />
//                     <span>Notifications</span>
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActiveTab('security')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeTab === 'security' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
//                     <ShieldIcon size={18} />
//                     <span>Security</span>
//                   </button>
//                 </li>
//                 <li>
//                   <button onClick={() => setActiveTab('appearance')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeTab === 'appearance' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
//                     <PaletteIcon size={18} />
//                     <span>Appearance</span>
//                   </button>
//                 </li>
//                 <li className="pt-4 mt-4 border-t border-gray-200">
//                   <a href="#" className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100">
//                     <HelpCircleIcon size={18} />
//                     <span>Help & Support</span>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           {/* Content */}
//           <div className="flex-1 p-6">{renderTabContent()}</div>
//         </div>
//       </div>
//     </div>;
// };
// const ProfileSettings = () => {
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Profile Settings
//         </h2>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
//           JS
//         </div>
//         <div className="space-y-1">
//           <p className="text-sm text-gray-500">Profile Photo</p>
//           <div className="flex items-center space-x-2">
//             <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg transition-colors duration-200">
//               Upload
//             </button>
//             <button className="text-xs bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1 rounded-lg transition-colors duration-200">
//               Remove
//             </button>
//           </div>
//         </div>
//       </div>
//       <form className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//               First Name
//             </label>
//             <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="John" />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//               Last Name
//             </label>
//             <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="Smith" />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email Address
//           </label>
//           <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="john.smith@university.edu" />
//         </div>
//         <div>
//           <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
//             Major
//           </label>
//           <select id="major" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="Computer Science">
//             <option>Computer Science</option>
//             <option>Information Technology</option>
//             <option>Data Science</option>
//             <option>Cybersecurity</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
//             Bio
//           </label>
//           <textarea id="bio" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue="Computer Science student with interests in artificial intelligence and machine learning."></textarea>
//         </div>
//         <div className="pt-4 flex justify-end">
//           <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
//             <SaveIcon size={16} />
//             <span>Save Changes</span>
//           </button>
//         </div>
//       </form>
//     </div>;
// };
// const NotificationSettings = () => {
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Notification Settings
//         </h2>
//       </div>
//       <div className="space-y-4">
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">
//             Email Notifications
//           </h3>
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-800">Assignment Reminders</p>
//                 <p className="text-xs text-gray-500">
//                   Get notified before assignments are due
//                 </p>
//               </div>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" defaultChecked />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               </label>
//             </div>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-800">Grade Updates</p>
//                 <p className="text-xs text-gray-500">
//                   Get notified when grades are posted
//                 </p>
//               </div>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" defaultChecked />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               </label>
//             </div>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-800">Course Announcements</p>
//                 <p className="text-xs text-gray-500">
//                   Get notified about course updates
//                 </p>
//               </div>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" defaultChecked />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">Push Notifications</h3>
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-800">Due Date Reminders</p>
//                 <p className="text-xs text-gray-500">
//                   Get push notifications for upcoming deadlines
//                 </p>
//               </div>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" defaultChecked />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               </label>
//             </div>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-800">Project Updates</p>
//                 <p className="text-xs text-gray-500">
//                   Get notified when team members update projects
//                 </p>
//               </div>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">
//             Notification Frequency
//           </h3>
//           <div className="space-y-2">
//             <div className="flex items-center">
//               <input id="freq-immediate" name="notification_frequency" type="radio" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
//               <label htmlFor="freq-immediate" className="ml-3 block text-sm text-gray-700">
//                 Immediate
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input id="freq-daily" name="notification_frequency" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
//               <label htmlFor="freq-daily" className="ml-3 block text-sm text-gray-700">
//                 Daily Digest
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input id="freq-weekly" name="notification_frequency" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
//               <label htmlFor="freq-weekly" className="ml-3 block text-sm text-gray-700">
//                 Weekly Digest
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="pt-4 flex justify-end">
//         <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
//           <SaveIcon size={16} />
//           <span>Save Changes</span>
//         </button>
//       </div>
//     </div>;
// };
// const SecuritySettings = () => {
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Security Settings
//         </h2>
//       </div>
//       <div className="space-y-6">
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">Change Password</h3>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                 Current Password
//               </label>
//               <input type="password" id="currentPassword" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                 New Password
//               </label>
//               <input type="password" id="newPassword" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                 Confirm New Password
//               </label>
//               <input type="password" id="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <div className="pt-2">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
//                 Update Password
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">
//             Two-Factor Authentication
//           </h3>
//           <p className="text-sm text-gray-600 mb-4">
//             Add an extra layer of security to your account
//           </p>
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-gray-800">Enable 2FA</span>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input type="checkbox" className="sr-only peer" />
//               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//             </label>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">Login Sessions</h3>
//           <div className="space-y-3">
//             <div className="flex items-center justify-between p-3 bg-white rounded-lg">
//               <div className="flex items-center space-x-3">
//                 <GlobeIcon size={16} className="text-gray-500" />
//                 <div>
//                   <p className="text-sm font-medium text-gray-800">
//                     Chrome on Windows
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Active now • Boston, USA
//                   </p>
//                 </div>
//               </div>
//               <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
//                 Current
//               </span>
//             </div>
//             <div className="flex items-center justify-between p-3 bg-white rounded-lg">
//               <div className="flex items-center space-x-3">
//                 <GlobeIcon size={16} className="text-gray-500" />
//                 <div>
//                   <p className="text-sm font-medium text-gray-800">
//                     Safari on iPhone
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     3 days ago • Boston, USA
//                   </p>
//                 </div>
//               </div>
//               <button className="text-xs text-red-600 hover:text-red-800">
//                 Logout
//               </button>
//             </div>
//           </div>
//           <button className="mt-3 text-sm text-blue-600 hover:text-blue-800">
//             Logout from all devices
//           </button>
//         </div>
//       </div>
//     </div>;
// };
// const AppearanceSettings = () => {
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Appearance Settings
//         </h2>
//       </div>
//       <div className="space-y-6">
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">Theme</h3>
//           <div className="grid grid-cols-3 gap-3">
//             <div className="relative">
//               <input type="radio" id="theme-light" name="theme" className="peer sr-only" defaultChecked />
//               <label htmlFor="theme-light" className="block p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
//                 <div className="h-24 bg-white border-b border-gray-200"></div>
//                 <div className="mt-2 text-sm font-medium text-gray-800 text-center">
//                   Light
//                 </div>
//               </label>
//             </div>
//             <div className="relative">
//               <input type="radio" id="theme-dark" name="theme" className="peer sr-only" />
//               <label htmlFor="theme-dark" className="block p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
//                 <div className="h-24 bg-gray-800 border-b border-gray-700"></div>
//                 <div className="mt-2 text-sm font-medium text-gray-800 text-center">
//                   Dark
//                 </div>
//               </label>
//             </div>
//             <div className="relative">
//               <input type="radio" id="theme-system" name="theme" className="peer sr-only" />
//               <label htmlFor="theme-system" className="block p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
//                 <div className="h-24 bg-gradient-to-b from-white to-gray-800 border-b border-gray-200"></div>
//                 <div className="mt-2 text-sm font-medium text-gray-800 text-center">
//                   System
//                 </div>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">Color Scheme</h3>
//           <div className="grid grid-cols-4 gap-3">
//             <div className="relative">
//               <input type="radio" id="color-blue" name="color" className="peer sr-only" defaultChecked />
//               <label htmlFor="color-blue" className="flex items-center justify-center h-12 bg-blue-600 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-300 peer-checked:ring-2 peer-checked:ring-blue-500">
//                 <span className="text-white">Blue</span>
//               </label>
//             </div>
//             <div className="relative">
//               <input type="radio" id="color-purple" name="color" className="peer sr-only" />
//               <label htmlFor="color-purple" className="flex items-center justify-center h-12 bg-purple-600 rounded-lg cursor-pointer hover:ring-2 hover:ring-purple-300 peer-checked:ring-2 peer-checked:ring-purple-500">
//                 <span className="text-white">Purple</span>
//               </label>
//             </div>
//             <div className="relative">
//               <input type="radio" id="color-green" name="color" className="peer sr-only" />
//               <label htmlFor="color-green" className="flex items-center justify-center h-12 bg-green-600 rounded-lg cursor-pointer hover:ring-2 hover:ring-green-300 peer-checked:ring-2 peer-checked:ring-green-500">
//                 <span className="text-white">Green</span>
//               </label>
//             </div>
//             <div className="relative">
//               <input type="radio" id="color-orange" name="color" className="peer sr-only" />
//               <label htmlFor="color-orange" className="flex items-center justify-center h-12 bg-orange-600 rounded-lg cursor-pointer hover:ring-2 hover:ring-orange-300 peer-checked:ring-2 peer-checked:ring-orange-500">
//                 <span className="text-white">Orange</span>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="font-medium text-gray-800 mb-3">Layout Density</h3>
//           <div className="space-y-2">
//             <div className="flex items-center">
//               <input id="density-compact" name="density" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
//               <label htmlFor="density-compact" className="ml-3 block text-sm text-gray-700">
//                 Compact
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input id="density-comfortable" name="density" type="radio" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
//               <label htmlFor="density-comfortable" className="ml-3 block text-sm text-gray-700">
//                 Comfortable
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input id="density-spacious" name="density" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
//               <label htmlFor="density-spacious" className="ml-3 block text-sm text-gray-700">
//                 Spacious
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="pt-4 flex justify-end">
//         <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
//           <SaveIcon size={16} />
//           <span>Save Changes</span>
//         </button>
//       </div>
//     </div>;
// };



import React, { useState } from 'react';
import {
  UserIcon, BellIcon, ShieldIcon, PaletteIcon, GlobeIcon,
  HelpCircleIcon, SaveIcon
} from 'lucide-react';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'appearance':
        return <AppearanceSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden backdrop-blur-sm bg-opacity-80 border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-r border-gray-200">
            <nav className="p-4">
              <ul className="space-y-1">
                {[
                  ['profile', UserIcon, 'Profile'],
                  ['notifications', BellIcon, 'Notifications'],
                  ['security', ShieldIcon, 'Security'],
                  ['appearance', PaletteIcon, 'Appearance']
                ].map(([tab, Icon, label]) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeTab === tab
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </button>
                  </li>
                ))}
                <li className="pt-4 mt-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100"
                  >
                    <HelpCircleIcon size={18} />
                    <span>Help & Support</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

// ----------------------
// Child Components Below
// ----------------------

const ProfileSettings = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-800">Profile Settings</h2>
    </div>
    <div className="flex items-center space-x-4">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
        JS
      </div>
      <div>
        <p className="text-sm text-gray-500">Profile Photo</p>
        <div className="flex items-center space-x-2">
          <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
            Upload
          </button>
          <button className="text-xs bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
            Remove
          </button>
        </div>
      </div>
    </div>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            defaultValue="John"
            className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            defaultValue="Smith"
            className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          defaultValue="john.smith@university.edu"
          className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="major" className="block text-sm text-gray-700 mb-1">
          Major
        </label>
        <select
          id="major"
          defaultValue="Computer Science"
          className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500"
        >
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Data Science</option>
          <option>Cybersecurity</option>
        </select>
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm text-gray-700 mb-1">
          Bio
        </label>
        <textarea
          id="bio"
          rows="3"
          defaultValue="Computer Science student with interests in artificial intelligence and machine learning."
          className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end">
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <SaveIcon size={16} />
          <span>Save Changes</span>
        </button>
      </div>
    </form>
  </div>
);

const NotificationSettings = () => (
  <div className="space-y-6">
    <h2 className="text-lg font-semibold text-gray-800">Notification Settings</h2>
    <div className="space-y-4">
      {/* Email Notifications */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">Email Notifications</h3>
        {[
          ['Assignment Reminders', true],
          ['Grade Updates', true],
          ['Course Announcements', true],
        ].map(([label, checked], idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <div>
              <p className="text-sm text-gray-800">{label}</p>
              <p className="text-xs text-gray-500">Get notified about {label.toLowerCase()}</p>
            </div>
            <ToggleSwitch defaultChecked={checked} />
          </div>
        ))}
      </div>

      {/* Push Notifications */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">Push Notifications</h3>
        {[
          ['Due Date Reminders', true],
          ['Project Updates', false],
        ].map(([label, checked], idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <div>
              <p className="text-sm text-gray-800">{label}</p>
              <p className="text-xs text-gray-500">Get notified when {label.toLowerCase()}</p>
            </div>
            <ToggleSwitch defaultChecked={checked} />
          </div>
        ))}
      </div>

      {/* Frequency */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">Notification Frequency</h3>
        {['Immediate', 'Daily Digest', 'Weekly Digest'].map((opt, idx) => (
          <div className="flex items-center" key={idx}>
            <input
              type="radio"
              id={`freq-${opt.replace(/\s+/g, '').toLowerCase()}`}
              name="notification_frequency"
              defaultChecked={idx === 0}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor={`freq-${opt.replace(/\s+/g, '').toLowerCase()}`} className="ml-3 text-sm text-gray-700">
              {opt}
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <SaveIcon size={16} />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  </div>
);

const SecuritySettings = () => (
  <div className="space-y-6">
    <h2 className="text-lg font-semibold text-gray-800">Security Settings</h2>
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">Change Password</h3>
        <form className="space-y-4">
          {['currentPassword', 'newPassword', 'confirmPassword'].map((id, idx) => (
            <div key={idx}>
              <label htmlFor={id} className="block text-sm text-gray-700 mb-1">
                {id === 'confirmPassword' ? 'Confirm New Password' : id.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              <input
                type="password"
                id={id}
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500"
              />
            </div>
          ))}
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Update Password
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800">Enable 2FA</span>
          <ToggleSwitch />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">Login Sessions</h3>
        {[
          { label: 'Chrome on Windows', sub: 'Active now • Boston, USA', current: true },
          { label: 'Safari on iPhone', sub: '3 days ago • Boston, USA', current: false }
        ].map((sess, i) => (
          <div className="flex items-center justify-between bg-white rounded-lg p-3" key={i}>
            <div className="flex items-center space-x-3">
              <GlobeIcon size={16} className="text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-800">{sess.label}</p>
                <p className="text-xs text-gray-500">{sess.sub}</p>
              </div>
            </div>
            {sess.current ? (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Current</span>
            ) : (
              <button className="text-xs text-red-600 hover:text-red-800">Logout</button>
            )}
          </div>
        ))}
        <button className="mt-3 text-sm text-blue-600 hover:text-blue-800">Logout from all devices</button>
      </div>
    </div>
  </div>
);

const AppearanceSettings = () => (
  <div className="space-y-6">
    <h2 className="text-lg font-semibold text-gray-800">Appearance Settings</h2>
    {[
      {
        title: 'Theme',
        options: [
          { id: 'theme-light', name: 'Light' },
          { id: 'theme-dark', name: 'Dark' },
          { id: 'theme-system', name: 'System' }
        ]
      },
      {
        title: 'Color Scheme',
        options: [
          { id: 'color-blue', name: 'Blue', bg: 'bg-blue-600' },
          { id: 'color-purple', name: 'Purple', bg: 'bg-purple-600' },
          { id: 'color-green', name: 'Green', bg: 'bg-green-600' },
          { id: 'color-orange', name: 'Orange', bg: 'bg-orange-600' }
        ]
      }
    ].map((section, si) => (
      <div key={si} className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-3">{section.title}</h3>
        <div className={`${section.title === 'Theme' ? 'grid grid-cols-3 gap-3' : 'grid grid-cols-4 gap-3'}`}>
          {section.options.map((opt, oi) => (
            <div key={oi} className="relative">
              <input
                id={opt.id}
                name={section.title.toLowerCase().replace(' ', '_')}
                type="radio"
                className="peer sr-only"
                defaultChecked={oi === 0}
              />
              <label htmlFor={opt.id} className={`block p-3 bg-white border rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 ${opt.bg || ''}`}>
                {section.title === 'Theme' ? (
                  <div className={`${oi === 0 ? 'bg-white' : oi === 1 ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-gray-800'} h-24 border-b border-gray-200`}></div>
                ) : (
                  <div className={`flex items-center justify-center h-12 ${opt.bg} rounded-lg hover:ring-2 peer-checked:ring-2 peer-checked:ring-blue-500`}>
                    <span className="text-white">{opt.name}</span>
                  </div>
                )}
                {section.title === 'Theme' && <div className="mt-2 text-sm font-medium text-gray-800 text-center">{opt.name}</div>}
              </label>
            </div>
          ))}
        </div>
      </div>
    ))}

    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium text-gray-800 mb-3">Layout Density</h3>
      {['Compact', 'Comfortable', 'Spacious'].map((opt, idx) => (
        <div className="flex items-center" key={idx}>
          <input id={`density-${opt.toLowerCase()}`} name="density" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" defaultChecked={idx === 1} />
          <label htmlFor={`density-${opt.toLowerCase()}`} className="ml-3 text-sm text-gray-700">{opt}</label>
        </div>
      ))}
    </div>

    <div className="flex justify-end pt-4">
      <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
        <SaveIcon size={16} />
        <span>Save Changes</span>
      </button>
    </div>
  </div>
);

// Reusable toggle
const ToggleSwitch = ({ defaultChecked = false }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
  </label>
);
