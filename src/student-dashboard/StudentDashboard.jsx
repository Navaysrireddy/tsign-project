import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './s-components/layouts/Sidebar';

// Import your page components
import Dashboard from './s-components/dashboard/Dashboard';
import Courses from './s-components/courses/Courses';
import Assignments from './s-components/assignments/Assignments';
import Attendance from './s-components/attendance/Attendance';
import Events from './s-components/events/Events';
import Placements from './s-components/placements/Placements';
import Projects from './s-components/projects/Projects';
import Settings from './s-components/settings/Settings';

const StudentDashboard = () => {
  // Sidebar open state for mobile responsiveness
  const [isOpen, setIsOpen] = useState(false);

  // Track which sidebar section is active
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <Router>
      <div className="flex">
        {/* Sidebar with required props */}
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main content area */}
        <main className="flex-1 p-4 ml-64">
          <Routes>
            {/* Redirect root to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/events" element={<Events />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />

            {/* Optionally, add a NotFound route here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default StudentDashboard;
