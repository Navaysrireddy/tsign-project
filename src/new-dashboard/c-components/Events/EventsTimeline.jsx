import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const EventsTimeline = ({
  darkMode,
  events
}) => {
  // Count events by month
  const months = ['January', 'February', 'March', 'April', 'May', 'June'];
  const categories = ['Workshop', 'Conference', 'Recruitment', 'Competition', 'Seminar', 'Exhibition', 'Networking'];
  // Initialize counts
  const monthlyData = {};
  categories.forEach(category => {
    monthlyData[category] = months.map(month => {
      return events.filter(event => event.month === month && event.category === category).length;
    });
  });
  const data = {
    labels: months,
    datasets: [{
      label: 'Workshop',
      data: monthlyData['Workshop'],
      borderColor: darkMode ? 'rgb(20, 184, 166)' : 'rgb(13, 148, 136)',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: darkMode ? 'rgb(20, 184, 166)' : 'rgb(13, 148, 136)',
      pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }, {
      label: 'Conference',
      data: monthlyData['Conference'],
      borderColor: darkMode ? 'rgb(56, 189, 248)' : 'rgb(2, 132, 199)',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: darkMode ? 'rgb(56, 189, 248)' : 'rgb(2, 132, 199)',
      pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }, {
      label: 'Recruitment',
      data: monthlyData['Recruitment'],
      borderColor: darkMode ? 'rgb(168, 85, 247)' : 'rgb(126, 34, 206)',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: darkMode ? 'rgb(168, 85, 247)' : 'rgb(126, 34, 206)',
      pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }, {
      label: 'Competition',
      data: monthlyData['Competition'],
      borderColor: darkMode ? 'rgb(249, 115, 22)' : 'rgb(234, 88, 12)',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: darkMode ? 'rgb(249, 115, 22)' : 'rgb(234, 88, 12)',
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
        position: 'top' ,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 20,
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)'
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
        usePointStyle: true
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
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          stepSize: 1
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
  return <Line data={data} options={options} />;
};
export default EventsTimeline;