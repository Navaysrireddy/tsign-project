import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const SalaryDistributionChart = ({
  darkMode,
  department
}) => {
  // Sample salary distribution data based on department
  const getSalaryData = () => {
    switch (department) {
      case 'Computer Science':
        return {
          'Under 5 LPA': 10,
          '5-8 LPA': 25,
          '8-12 LPA': 35,
          '12-18 LPA': 20,
          'Above 18 LPA': 10
        };
      case 'Mechanical':
        return {
          'Under 5 LPA': 25,
          '5-8 LPA': 40,
          '8-12 LPA': 25,
          '12-18 LPA': 8,
          'Above 18 LPA': 2
        };
      case 'Electrical':
        return {
          'Under 5 LPA': 20,
          '5-8 LPA': 35,
          '8-12 LPA': 30,
          '12-18 LPA': 12,
          'Above 18 LPA': 3
        };
      case 'Engineering':
        return {
          'Under 5 LPA': 18,
          '5-8 LPA': 35,
          '8-12 LPA': 32,
          '12-18 LPA': 12,
          'Above 18 LPA': 3
        };
      default:
        return {
          'Under 5 LPA': 15,
          '5-8 LPA': 35,
          '8-12 LPA': 30,
          '12-18 LPA': 15,
          'Above 18 LPA': 5
        };
    }
  };
  const salaryData = getSalaryData();
  const labels = Object.keys(salaryData);
  const values = Object.values(salaryData);
  // Colors for the doughnut chart
  const backgroundColors = darkMode ? ['rgba(239, 68, 68, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(234, 179, 8, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(20, 184, 166, 0.8)'] : ['rgba(220, 38, 38, 0.8)', 'rgba(234, 88, 12, 0.8)', 'rgba(202, 138, 4, 0.8)', 'rgba(22, 163, 74, 0.8)', 'rgba(13, 148, 136, 0.8)'];
  const data = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: backgroundColors,
      borderColor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      borderWidth: 2,
      hoverOffset: 15
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right' ,
        labels: {
          boxWidth: 15,
          padding: 15,
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          font: {
            size: 11
          }
        }
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
            const label = context.label || '';
            const value = context.raw ;
            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0) ;
            const percentage = Math.round(value / total * 100);
            return `${label}: ${percentage}%`;
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000
    }
  };
  return <div className="h-full flex items-center justify-center">
      <Doughnut data={data} options={options} />
    </div>;
};
export default SalaryDistributionChart;