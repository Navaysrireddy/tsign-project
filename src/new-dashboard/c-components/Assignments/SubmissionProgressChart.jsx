import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SubmissionProgressChart = ({
  darkMode,
  department
}) => {
  // Sample data that changes based on department
  const getChartData = () => {
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
    // Different submission trends for each department
    const submissionData = {
      All: [85, 78, 82, 75, 88, 92],
      'Computer Science': [90, 85, 88, 80, 92, 95],
      Mechanical: [82, 75, 80, 72, 85, 88],
      Electrical: [80, 72, 78, 70, 82, 85],
      Engineering: [88, 80, 85, 78, 90, 93]
    };
    // Return the data for the selected department or all departments
    return {
      labels,
      values: submissionData[department] || submissionData['All']
    };
  };
  const {
    labels,
    values
  } = getChartData();
  const data = {
    labels,
    datasets: [{
      label: 'Submission Rate (%)',
      data: values,
      borderColor: darkMode ? 'rgb(45, 212, 191)' : 'rgb(20, 184, 166)',
      backgroundColor: context => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, darkMode ? 'rgba(45, 212, 191, 0.5)' : 'rgba(20, 184, 166, 0.5)');
        gradient.addColorStop(1, darkMode ? 'rgba(45, 212, 191, 0.0)' : 'rgba(20, 184, 166, 0.0)');
        return gradient;
      },
      tension: 0.4,
      fill: true,
      pointBackgroundColor: darkMode ? 'rgb(45, 212, 191)' : 'rgb(20, 184, 166)',
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
          title: () => department === 'All' ? 'All Departments' : department,
          label: context => `Submission Rate: ${context.raw}%`
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
        min: 50,
        max: 100,
        grid: {
          color: darkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.8)',
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          callback: value => `${value}%`
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
export default SubmissionProgressChart;