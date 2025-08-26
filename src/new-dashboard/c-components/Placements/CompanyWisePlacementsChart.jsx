import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompanyWisePlacementsChart = ({
  darkMode,
  companies
}) => {
  const labels = companies.map(company => company.name);
  const values = companies.map(company => company.placements);
  const data = {
    labels,
    datasets: [{
      label: 'Number of Placements',
      data: values,
      backgroundColor: darkMode ? 'rgba(56, 189, 248, 0.8)' : 'rgba(2, 132, 199, 0.8)',
      borderColor: darkMode ? 'rgb(56, 189, 248)' : 'rgb(2, 132, 199)',
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
          label: function (context) {
            const index = context.dataIndex;
            const company = companies[index];
            return [`Placements: ${context.raw}`, `Departments: ${company.departments.join(', ')}`];
          }
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
   return (
  <div style={{ height: '300px' }}> {/* Reduced from default (usually 400–500px) */}
    <Bar data={data} options={options} />
  </div>
);
};
export default CompanyWisePlacementsChart;