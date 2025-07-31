import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AcademicProgressChart = ({
  darkMode,
  department
}) => {
  const [view, setView] = useState('year');
  // Sample data that changes based on department and view
  const getChartData = () => {
    let labels, values;
    if (view === 'year') {
      labels = ['2020', '2021', '2022', '2023', '2024', '2025'];
      switch (department) {
        case 'Computer Science':
          values = [3.2, 3.4, 3.5, 3.6, 3.8, 3.9];
          break;
        case 'Mechanical':
          values = [3.0, 3.1, 3.3, 3.4, 3.5, 3.6];
          break;
        case 'Electrical':
          values = [3.1, 3.3, 3.4, 3.5, 3.6, 3.7];
          break;
        case 'Engineering':
          values = [3.1, 3.2, 3.3, 3.5, 3.6, 3.7];
          break;
        default:
          values = [3.1, 3.3, 3.4, 3.6, 3.7, 3.8];
      }
    } else {
      labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      switch (department) {
        case 'Computer Science':
          values = [3.7, 3.8, 3.6, 3.9, 3.8, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8, 3.9];
          break;
        case 'Mechanical':
          values = [3.4, 3.5, 3.3, 3.6, 3.7, 3.5, 3.6, 3.7, 3.8, 3.7, 3.6, 3.7];
          break;
        case 'Electrical':
          values = [3.5, 3.6, 3.4, 3.7, 3.8, 3.6, 3.7, 3.8, 3.9, 3.8, 3.7, 3.8];
          break;
        case 'Engineering':
          values = [3.5, 3.6, 3.4, 3.7, 3.8, 3.6, 3.7, 3.8, 3.9, 3.8, 3.7, 3.8];
          break;
        default:
          values = [3.6, 3.7, 3.5, 3.8, 3.9, 3.7, 3.8, 3.9, 4.0, 3.9, 3.8, 3.9];
      }
    }
    return {
      labels,
      values
    };
  };
  const {
    labels,
    values
  } = getChartData();
  const data = {
    labels,
    datasets: [{
      label: 'Average GPA',
      data: values,
      borderColor: darkMode ? 'rgb(20, 184, 166)' : 'rgb(13, 148, 136)',
      backgroundColor: darkMode ? 'rgba(20, 184, 166, 0.1)' : 'rgba(13, 148, 136, 0.1)',
      tension: 0.4,
      fill: true,
      pointBackgroundColor: darkMode ? 'rgb(20, 184, 166)' : 'rgb(13, 148, 136)',
      pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: darkMode ? '#ffffff' : '#000000',
        bodyColor: darkMode ? '#ffffff' : '#000000',
        borderColor: darkMode ? 'rgba(55, 65, 81, 1)' : 'rgba(229, 231, 235, 1)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          title: () => department === 'All' ? 'All Departments' : department
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)'
        }
      },
      y: {
        min: 2.5,
        max: 4.0,
        grid: {
          color: darkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.8)',
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          callback: value => value.toFixed(1)
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    animation: {
      duration: 1000
    }
  };
  return <div className="h-72">
      <div className="flex justify-end mb-4">
        <div className={`inline-flex rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <button className={`px-4 py-1 text-sm ${view === 'year' ? `${darkMode ? 'bg-gray-600' : 'bg-white'} font-medium` : ''}`} onClick={() => setView('year')}>
            Year
          </button>
          <button className={`px-4 py-1 text-sm ${view === 'month' ? `${darkMode ? 'bg-gray-600' : 'bg-white'} font-medium` : ''}`} onClick={() => setView('month')}>
            Month
          </button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>;
};
export default AcademicProgressChart;