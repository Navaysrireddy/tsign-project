// import React from 'react';
// import { LayoutDashboard, BookOpen, ClipboardList, FolderKanban, Settings as SettingsIcon } from 'lucide-react';
// interface SidebarProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }
// export const Sidebar: React.FC<SidebarProps> = ({
//   activeTab,
//   setActiveTab
// }) => {
//   const navItems = [{
//     id: 'dashboard',
//     name: 'Dashboard',
//     icon: <LayoutDashboard size={20} />
//   }, {
//     id: 'academics',
//     name: 'Academics',
//     icon: <BookOpen size={20} />
//   }, {
//     id: 'assessments',
//     name: 'Assessments',
//     icon: <ClipboardList size={20} />
//   }, {
//     id: 'projects',
//     name: 'Projects',
//     icon: <FolderKanban size={20} />
//   }, {
//     id: 'settings',
//     name: 'Settings',
//     icon: <SettingsIcon size={20} />
//   }];
//   return <div className="w-64 h-full bg-white shadow-lg rounded-r-xl overflow-hidden transition-all duration-300">
//       <div className="p-6">
//         <div className="flex items-center justify-center mb-8">
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             EduPortal
//           </h1>
//         </div>
//         <nav className="space-y-1">
//           {navItems.map(item => <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeTab === item.id ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
//               <span className={`${activeTab === item.id ? 'text-blue-600' : 'text-gray-500'}`}>
//                 {item.icon}
//               </span>
//               <span className="font-medium">{item.name}</span>
//             </button>)}
//         </nav>
//       </div>
//       <div className="absolute bottom-0 left-0 w-64 p-4">
//         <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
//             JS
//           </div>
//           <div>
//             <p className="text-sm font-medium text-gray-900">John Smith</p>
//             <p className="text-xs text-gray-500">Computer Science</p>
//           </div>
//         </div>
//       </div>
//     </div>;
// };



import React from 'react';
import { LayoutDashboard, BookOpen, ClipboardList, FolderKanban, Settings as SettingsIcon } from 'lucide-react';

export const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'academics', name: 'Academics', icon: <BookOpen size={20} /> },
    { id: 'assessments', name: 'Assessments', icon: <ClipboardList size={20} /> },
    { id: 'projects', name: 'Projects', icon: <FolderKanban size={20} /> },
    { id: 'settings', name: 'Settings', icon: <SettingsIcon size={20} /> },
  ];

  return (
    <div className="w-64 h-full bg-white shadow-lg rounded-r-xl overflow-hidden transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            EduPortal
          </h1>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className={activeTab === item.id ? 'text-blue-600' : 'text-gray-500'}>
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 w-64 p-4">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            JS
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">John Smith</p>
            <p className="text-xs text-gray-500">Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};
