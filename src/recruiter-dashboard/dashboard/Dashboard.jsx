import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatsCard  from './StatsCard';
import LineChart  from './chart/LineChart';
import BarChart  from './chart/BarChart';
import PieChart  from './chart/PieChart';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const { data } = useData();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Mechanical', label: 'Mechanical' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Computer Science', label: 'Computer Science' }
  ];

  const courses = [
    { value: 'all', label: 'All Courses' },
    { value: 'CSE', label: 'CSE' },
    { value: 'ECE', label: 'ECE' },
    { value: 'IT', label: 'IT' },
    { value: 'Business', label: 'Business' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.h2 variants={itemVariants}      className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Dashboard Overview
        </motion.h2>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
  {/* Department Dropdown */}
  <select
    value={selectedDepartment}
    onChange={e => {
      setSelectedDepartment(e.target.value);
      setSelectedCourse('all'); // reset course when department changes
    }}
    className={`
      rounded-lg px-3 py-2 text-sm
      ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
      border shadow-sm backdrop-blur-md
    `}
  >
    {departments.map(dept => (
      <option key={dept.value} value={dept.value}>
        {dept.label}
      </option>
    ))}
  </select>

  {/* Course Dropdown - Only visible for Engineering */}
  {selectedDepartment === 'Engineering' && (
    <select
      value={selectedCourse}
      onChange={e => setSelectedCourse(e.target.value)}
      className={`
        rounded-lg px-3 py-2 text-sm
        ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
        border shadow-sm backdrop-blur-md
      `}
    >
      {courses.map(course => (
        <option key={course.value} value={course.value}>
          {course.label}
        </option>
      ))}
    </select>
  )}
</motion.div>

      </div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Candidates" value={data.stats.totalCandidates} icon="users" trend={8} />
        <StatsCard title="Selected" value={data.stats.selected} icon="check" trend={12} color="green" />
        <StatsCard title="Rejected" value={data.stats.rejected} icon="x" trend={-5} color="red" />
        <StatsCard title="In Review" value={data.stats.inReview} icon="clock" trend={3} color="yellow" />
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className={`
            rounded-xl overflow-hidden
            ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
            p-5
          `}
        >
          <h3 className="font-medium mb-4">Monthly Applications (2025)</h3>
          <div className="h-80">
            <LineChart
              labels={data.monthlyApplications.labels}
              datasets={[
                {
                  label: 'Applications',
                  data:
                    data.monthlyApplications.datasets[
                      selectedDepartment === 'all'
                        ? 'Engineering (CSE)'
                        : `${selectedDepartment}${selectedCourse !== 'all' ? ` (${selectedCourse})` : ''}`
                    ] || data.monthlyApplications.datasets['Engineering (CSE)'],
                  borderColor: isDarkMode ? '#14b8a6' : '#0891b2',
                  backgroundColor: isDarkMode ? 'rgba(20, 184, 166, 0.1)' : 'rgba(8, 145, 178, 0.1)'
                }
              ]}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`
            rounded-xl overflow-hidden
            ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
            p-5
          `}
        >
          <h3 className="font-medium mb-4">Selections per Department</h3>
          <div className="h-80">
           {/* Department / Course Graph */}
<BarChart
  labels={
    selectedDepartment === "all"
      ? Object.keys(data.departmentData).flatMap(
          dept => data.departmentData[dept]?.labels || []
        )
      : data.departmentData[selectedDepartment]?.labels || []
  }
  datasets={[
    {
      label:
        selectedDepartment === "all"
          ? "All Departments"
          : `${selectedDepartment} Courses`,
      data:
        selectedDepartment === "all"
          ? Object.keys(data.departmentData).flatMap(
              dept => data.departmentData[dept]?.data || []
            )
          : data.departmentData[selectedDepartment]?.data || [],
      backgroundColor: "rgba(59,130,246,0.6)",
    },
  ]}
/>

          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <h3 className="font-medium mb-4">Application Status</h3>
        <div className="h-80">
          <PieChart
            labels={data.applicationStatus.labels}
            datasets={[
              {
                data:
                  data.applicationStatus.datasets[
                    selectedDepartment === 'all'
                      ? 'Engineering (CSE)'
                      : `${selectedDepartment}${selectedCourse !== 'all' ? ` (${selectedCourse})` : ''}`
                  ] || data.applicationStatus.datasets['Engineering (CSE)'],
                backgroundColor: [
                  'rgba(34, 197, 94, 0.8)',
                  'rgba(239, 68, 68, 0.8)',
                  'rgba(234, 179, 8, 0.8)',
                  'rgba(20, 184, 166, 0.8)' // In Review - Teal
                ]
              }
            ]}
          />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Recent Activity</h3>
          <button className={`text-sm ${isDarkMode ? 'text-teal-400' : 'text-teal-600'} hover:underline`}>
            View All
          </button>
        </div>
        <div className="space-y-4">
          {[
            { id: 1, action: 'Selected', candidate: 'Ananya R', position: 'Software Intern', time: '10 minutes ago' },
            { id: 2, action: 'Interviewed', candidate: 'Vikram S', position: 'ML Engineer', time: '1 hour ago' },
            { id: 3, action: 'Rejected', candidate: 'Kiran T', position: 'Analytics Intern', time: '2 hours ago' },
            { id: 4, action: 'In Review', candidate: 'Arun M', position: 'R&D Engineer', time: '3 hours ago' }
          ].map(activity => (
            <div
              key={activity.id}
              className={`
                flex items-center gap-3 p-3 rounded-lg
                ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
              `}
            >
              <div
                className={`
                  h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0
                  ${
                    activity.action === 'Selected'
                      ? 'bg-green-100 text-green-600'
                      : activity.action === 'Rejected'
                      ? 'bg-red-100 text-red-600'
                      : activity.action === 'Interviewed'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-teal-100 text-teal-600'
                  }
                `}
              >
                {activity.action === 'Selected' && <span>✓</span>}
                {activity.action === 'Rejected' && <span>✕</span>}
                {activity.action === 'Interviewed' && <span>👁️</span>}
                {activity.action === 'In Review' && <span>⟳</span>}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activity.candidate} - {activity.position}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span
                    className={`
                      ${
                        activity.action === 'Selected'
                          ? 'text-green-500'
                          : activity.action === 'Rejected'
                          ? 'text-red-500'
                          : activity.action === 'Interviewed'
                          ? 'text-yellow-500'
                          : 'text-teal-500'
                      }
                    `}
                  >
                    {activity.action}
                  </span>{' '}
                  • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
