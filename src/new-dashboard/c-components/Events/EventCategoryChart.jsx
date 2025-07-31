import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const EventCategoryChart = ({
  darkMode,
  events
}) => {
  // Count events by category
  const categoryCount = events.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {} );
  // Prepare data for chart
  const labels = Object.keys(categoryCount);
  const values = Object.values(categoryCount);
  // Colors for the pie chart
  const backgroundColors = darkMode ? ['rgba(20, 184, 166, 0.8)', 'rgba(56, 189, 248, 0.8)', 'rgba(168, 85, 247, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(234, 179, 8, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(79, 70, 229, 0.8)'] : ['rgba(13, 148, 136, 0.8)', 'rgba(2, 132, 199, 0.8)', 'rgba(126, 34, 206, 0.8)', 'rgba(219, 39, 119, 0.8)', 'rgba(234, 88, 12, 0.8)', 'rgba(202, 138, 4, 0.8)', 'rgba(22, 163, 74, 0.8)', 'rgba(220, 38, 38, 0.8)', 'rgba(67, 56, 202, 0.8)'];
  const data = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: backgroundColors,
      borderColor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      borderWidth: 2
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
            const value = Number(context.raw) ;
            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0) ;
            const percentage = Math.round(value / total * 100);
            return `${label}: ${value} (${percentage}%)`;
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
      <Pie data={data} options={options} />
    </div>;
};
export default EventCategoryChart;