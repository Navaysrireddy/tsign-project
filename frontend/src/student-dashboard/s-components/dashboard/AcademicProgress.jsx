import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
 
const AcademicProgress = () => {
  const [viewMode, setViewMode] = useState('semester');
  const semesterData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Current'],
    datasets: [{
      label: 'GPA',
      data: [3.5, 3.7, 3.6, 3.8, 3.9, 3.85],
      borderColor: 'rgb(56, 189, 248)',
      backgroundColor: 'rgba(56, 189, 248, 0.5)',
      tension: 0.3
    }]
  };
  const monthlyData = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [{
      label: 'Assignment Scores',
      data: [85, 88, 92, 89, 94, 91],
      borderColor: 'rgb(56, 189, 248)',
      backgroundColor: 'rgba(56, 189, 248, 0.5)',
      tension: 0.3
    }]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      },
      tooltip: {
        backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        bodyColor: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        borderColor: document.documentElement.classList.contains('dark') ? 'rgba(100, 116, 139, 0.2)' : 'rgba(203, 213, 225, 0.8)',
        borderWidth: 1,
        padding: 16,
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(100, 116, 139, 0.2)' : 'rgba(203, 213, 225, 0.5)'
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      },
      x: {
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(100, 116, 139, 0.2)' : 'rgba(203, 213, 225, 0.5)'
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      }
    },
    animation: {
      duration: 1000
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Academic Progress
        </h3>
        <div className="flex space-x-2">
          <button onClick={() => setViewMode('semester')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${viewMode === 'semester' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            Semester
          </button>
          <button onClick={() => setViewMode('month')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${viewMode === 'month' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            Monthly
          </button>
        </div>
      </div>
      <div className="h-64">
        <Line options={options} data={viewMode === 'semester' ? semesterData : monthlyData} />
      </div>
    </div>
  );
};
 
export default AcademicProgress;