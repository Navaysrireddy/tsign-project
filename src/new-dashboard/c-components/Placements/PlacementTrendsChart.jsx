import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const PlacementTrendsChart = ({
  darkMode,
  department
}) => {
  // Sample data that changes based on department
  const getChartData = () => {
    const labels = ['2021', '2022', '2023', '2024', '2025'];
    let placementRate, averageSalary;
    switch (department) {
      case 'Computer Science':
        placementRate = [84, 86, 88, 90, 92];
        averageSalary = [9.5, 10.2, 11.0, 11.5, 12.0];
        break;
      case 'Mechanical':
        placementRate = [70, 72, 74, 76, 78];
        averageSalary = [5.5, 6.0, 6.5, 6.8, 7.0];
        break;
      case 'Electrical':
        placementRate = [72, 75, 78, 80, 82];
        averageSalary = [6.0, 6.5, 7.0, 7.5, 8.0];
        break;
      case 'Engineering':
        placementRate = [75, 78, 80, 82, 84];
        averageSalary = [6.2, 6.8, 7.0, 7.2, 7.5];
        break;
      default:
        placementRate = [78, 80, 82, 84, 86];
        averageSalary = [7.0, 7.5, 8.0, 8.5, 9.0];
    }
    return {
      labels,
      placementRate,
      averageSalary
    };
  };
  const {
    labels,
    placementRate,
    averageSalary
  } = getChartData();
  const data = {
    labels,
    datasets: [{
      label: 'Placement Rate (%)',
      data: placementRate,
      borderColor: darkMode ? 'rgb(168, 85, 247)' : 'rgb(126, 34, 206)',
      backgroundColor: 'transparent',
      tension: 0.4,
      yAxisID: 'y',
      pointBackgroundColor: darkMode ? 'rgb(168, 85, 247)' : 'rgb(126, 34, 206)',
      pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }, {
      label: 'Average Salary (LPA)',
      data: averageSalary,
      borderColor: darkMode ? 'rgb(249, 115, 22)' : 'rgb(234, 88, 12)',
      backgroundColor: 'transparent',
      tension: 0.4,
      yAxisID: 'y1',
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
    interaction: {
      mode: 'index' ,
      intersect: false
    },
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
        type: 'linear' ,
        display: true,
        position: 'left' ,
        min: 60,
        max: 100,
        grid: {
          color: darkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.8)',
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          callback: value => `${value}%`
        }
      },
      y1: {
        type: 'linear' ,
        display: true,
        position: 'right',
        min: 4,
        max: 14,
        grid: {
          drawOnChartArea: false,
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          callback: value => `₹${value} LPA`
        }
      }
    },
    animation: {
      duration: 1000
    }
  };
  return <Line data={data} options={options} />;
};
export default PlacementTrendsChart;