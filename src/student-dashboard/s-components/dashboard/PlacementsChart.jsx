import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Link } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const PlacementsChart = ({ setActiveSection }) => {
  const [filter, setFilter] = useState('cs');

  // Get placement data depending on selected department filter
  const getDataForDepartment = () => {
    switch (filter) {
      case 'cs':
        return [78, 82, 88, 92, 95, 98];
      case 'me':
        return [65, 70, 75, 80, 85, 88];
      case 'ee':
        return [70, 75, 80, 85, 88, 90];
      default:
        return [72, 76, 81, 86, 90, 92];
    }
  };

  // Line chart data for placed and pending statuses
  const data = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Placed',
        data: getDataForDepartment(),
        borderColor: 'rgba(56, 189, 248, 0.9)',
        backgroundColor: 'rgba(56, 189, 248, 0.4)',
        fill: false, // no area fill for trends graph
        tension: 0.3, // smooth curves
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
      {
        label: 'Pending',
        data: [28, 24, 19, 14, 10, 8].map(
          (val, idx) => 100 - val - getDataForDepartment()[idx]
        ),
        borderColor: 'rgba(251, 146, 60, 0.9)',
        backgroundColor: 'rgba(251, 146, 60, 0.4)',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
    ],
  };

  // Chart options with dark mode and tooltip styling
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        },
      },
      tooltip: {
        backgroundColor: document.documentElement.classList.contains('dark')
          ? 'rgba(30, 41, 59, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        titleColor: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        bodyColor: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        borderColor: document.documentElement.classList.contains('dark')
          ? 'rgba(100, 116, 139, 0.2)'
          : 'rgba(203, 213, 225, 0.8)',
        borderWidth: 1,
        padding: 16,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100,116,139,0.2)'
            : 'rgba(203,213,225,0.5)',
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        },
      },
      y: {
        max: 100,
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100,116,139,0.2)'
            : 'rgba(203,213,225,0.5)',
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
          callback: value => `${value}%`,
        },
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 sm:mb-0">
          Placement Statistics (2020-2025)
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            All Depts
          </button>
          <button
            onClick={() => setFilter('cs')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              filter === 'cs'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            CS
          </button>
          <button
            onClick={() => setFilter('me')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              filter === 'me'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            ME
          </button>
          <button
            onClick={() => setFilter('ee')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              filter === 'ee'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            EE
          </button>
        </div>
      </div>
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
      <div className="mt-4 flex justify-end">
  <Link
    to="/student-dashboard/placements"
    className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
  >
    View All Placements
  </Link>
</div>
    </div>
  );
};

export default PlacementsChart;
