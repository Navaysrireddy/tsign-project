import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, LineElement, PointElement } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const PerformanceSection = () => {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: 'cs101', name: 'CS101: Intro to Programming' },
    { id: 'cs201', name: 'CS201: Data Structures' },
    { id: 'cs301', name: 'CS301: Algorithms' },
    { id: 'cs401', name: 'CS401: Machine Learning' }
  ];

  // GPA Data
  const gpaData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Current'],
    datasets: [{
      label: 'GPA',
      data: [3.5, 3.7, 3.6, 3.8, 3.9, 3.85],
      borderColor: 'rgb(56, 189, 248)',
      backgroundColor: 'rgba(56, 189, 248, 0.5)',
      tension: 0.3
    }]
  };
  // Placement Data
  const placementData = {
    labels: ['Placed', 'Pending', 'Rejected'],
    datasets: [{
      data: [65, 30, 5],
      backgroundColor: [
        'rgba(52, 211, 153, 0.8)',
        'rgba(251, 146, 60, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
        'rgba(52, 211, 153, 1)',
        'rgba(251, 146, 60, 1)',
        'rgba(239, 68, 68, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Chart options for clarity
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      }
    },
    scales: {
      y: {
        min: 3.0,
        max: 4.0,
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        },
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100, 116, 139, 0.2)'
            : 'rgba(203, 213, 225, 0.5)'
        }
      },
      x: {
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        },
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100, 116, 139, 0.2)'
            : 'rgba(203, 213, 225, 0.5)'
        }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      }
    },
    cutout: '70%'
  };

  return (
    <div
      className="
        w-full max-w-[100vw] 
        bg-white dark:bg-gray-900 
        rounded-xl 
        px-8 py-6 
        shadow-lg dark:shadow-xl 
        border border-gray-200 dark:border-gray-700 
        transition-colors duration-300
      "
      // Ensures the component uses full available width, with max width for very wide screens
    >
      {/* Header with course selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Course and Performance
        </h3>
        <select
          value={selectedCourse}
          onChange={e => setSelectedCourse(e.target.value)}
          className="
            w-full md:w-64 p-3
            bg-gray-100 dark:bg-gray-800 
            rounded-lg border border-gray-300 dark:border-gray-600 
            focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 
            text-gray-900 dark:text-gray-200 
            backdrop-blur-md transition-all duration-300
            appearance-none
          "
          aria-label="Select Course"
        >
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
      </div>

      {/* Main Chart Grid - adjust columns for wider look */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 w-full">
        
        {/* GPA Trends */}
        <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-6 border border-gray-300 dark:border-gray-700 shadow-md flex flex-col">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-5">GPA Trends</h4>
          {/* Height set for responsive full-width charts */}
          <div className="flex-grow h-80 min-h-[18rem] relative">
            <Line options={lineOptions} data={gpaData} />
          </div>
        </div>

        {/* Placement Status */}
        <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-6 border border-gray-300 dark:border-gray-700 shadow-md flex flex-col">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-5 text-center">Placement Status</h4>
          <div className="flex-grow h-80 min-h-[18rem] flex items-center justify-center relative">
            <Doughnut options={doughnutOptions} data={placementData} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PerformanceSection;
