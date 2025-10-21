import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlacementsChart = ({
  darkMode,
  department
}) => {
  // Sample data that changes based on department
  const getChartData = () => {
    const labels = ['2020', '2021', '2022', '2023', '2024', '2025'];
    let values;
    switch (department) {
      case 'Computer Science':
        values = [180, 220, 250, 280, 310, 320];
        break;
      case 'Mechanical':
        values = [120, 150, 170, 190, 210, 230];
        break;
      case 'Electrical':
        values = [110, 130, 150, 170, 180, 190];
        break;
      case 'Engineering':
        values = [350, 410, 470, 520, 540, 560];
        break;
      default:
        values = [450, 520, 600, 650, 700, 750];
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
      label: 'Placed Students',
      data: values,
      backgroundColor: darkMode ? 'rgba(45, 212, 191, 0.8)' : 'rgba(20, 184, 166, 0.8)',
      borderColor: darkMode ? 'rgb(45, 212, 191)' : 'rgb(20, 184, 166)',
      borderWidth: 1,
      borderRadius: 6,
      barThickness: 25
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
  return <div className="h-72">
      <Bar data={data} options={options} />
    </div>;
};
export default PlacementsChart;