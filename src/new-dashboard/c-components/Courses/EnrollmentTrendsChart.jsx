import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EnrollmentTrendsChart =({
  darkMode,
  department
}) => {
  // Sample data that changes based on department
  const getChartData = () => {
    const labels = ['Fall 2023', 'Spring 2024', 'Summer 2024', 'SEM1', 'SEM2'];
    let values;
    switch (department) {
      case 'Computer Science':
        values = [250, 280, 200, 320, 350];
        break;
      case 'Mechanical':
        values = [200, 220, 180, 240, 260];
        break;
      case 'Electrical':
        values = [180, 200, 160, 220, 240];
        break;
      case 'Engineering':
        values = [500, 550, 450, 580, 620];
        break;
      default:
        values = [800, 850, 700, 900, 950];
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
      label: 'Enrollment',
      data: values,
      backgroundColor: darkMode ? 'rgba(124, 58, 237, 0.8)' : 'rgba(109, 40, 217, 0.8)',
      borderColor: darkMode ? 'rgb(124, 58, 237)' : 'rgb(109, 40, 217)',
      borderWidth: 1,
      borderRadius: 6,
      barThickness: 30
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
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          font: {
            size: 10
          }
        }
      },
      y: {
        grid: {
          color: darkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.8)',
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)'
        }
      }
    },
    animation: {
      duration: 1000
    }
  };
  return <div className="h-full">
      <Bar data={data} options={options} />
    </div>;
};
export default EnrollmentTrendsChart;