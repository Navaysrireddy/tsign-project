import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  GraduationCapIcon,
  BuildingIcon,
  BriefcaseIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react';
import { navigationItems } from '../../utils/mockData';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useTheme();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Home':
        return <HomeIcon size={20} />;
      case 'GraduationCap':
        return <GraduationCapIcon size={20} />;
      case 'Building':
        return <BuildingIcon size={20} />;
      case 'Briefcase':
        return <BriefcaseIcon size={20} />;
      case 'Settings':
        return <SettingsIcon size={20} />;
      default:
        return <HomeIcon size={20} />;
    }
  };

  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out h-screen fixed left-0 top-0 z-30 
        ${theme === 'dark' ? 'bg-[#1E1E1E] text-[#E5E7EB]' : 'bg-white text-[#1F2937]'} 
        border-r ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {!collapsed && <h1 className="text-lg font-semibold truncate">AF 3 Dashboard</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRightIcon size={20} /> : <ChevronLeftIcon size={20} />}
        </button>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-[#2563EB] text-white'
                        : theme === 'dark'
                        ? 'hover:bg-gray-800'
                        : 'hover:bg-gray-100'
                    }`
                }
              >
                <span className="flex-shrink-0">{getIcon(item.icon)}</span>
                {!collapsed && <span className="ml-3 transition-opacity duration-300">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
