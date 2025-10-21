// src/new-dashboard/NewDashboard.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './c-components/Dashboard/Dashboard';
import Courses from './c-components/Courses/Courses';
import Assignments from './c-components/Assignments/Assignments';
import Events from './c-components/Events/Events';
import Placements from './c-components/Placements/Placements';
import Settings from './c-components/Settings/Settings';
import Students from './c-components/Students/Students';
import Header from './c-components/Layout/Header';
import Sidebar from './c-components/Layout/Sidebar';

const NewDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 768);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className={`flex flex-col h-screen w-full ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} darkMode={darkMode} />
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />} />
            <Route path="courses" element={<Courses darkMode={darkMode} />} />
            <Route path="assignments" element={<Assignments darkMode={darkMode} />} />
            <Route path="events" element={<Events darkMode={darkMode} />} />
            <Route path="placements" element={<Placements darkMode={darkMode} />} />
            <Route path='students' element={<Students darkMode={darkMode}/>} />
            <Route path="settings" element={<Settings darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default NewDashboard;
