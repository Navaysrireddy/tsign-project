import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const DepartmentPerformance = ({
  darkMode,
  department
}) => {
  // Sample data that changes based on department
  const getChartData = () => {
    const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'];
    const gpaData = {
      All: [3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9],
      'Computer Science': [3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 3.9],
      Mechanical: [3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.5],
      Electrical: [3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8, 3.7],
      Engineering: [3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.7]
    };
    const completionData = {
      All: [78, 82, 85, 88, 90, 92, 94, 95],
      'Computer Science': [82, 85, 88, 90, 92, 94, 96, 97],
      Mechanical: [75, 78, 80, 83, 85, 87, 89, 90],
      Electrical: [76, 79, 82, 85, 87, 89, 91, 92],
      Engineering: [78, 81, 84, 86, 88, 90, 92, 94]
    };
    return {
      labels,
      gpaValues: gpaData[department] || gpaData['All'],
      completionValues: completionData[department] || completionData['All']
    };
  };
  const {
    labels,
    gpaValues,
    completionValues
  } = getChartData();
  const data = {
    labels,
    datasets: [{
      label: 'GPA',
      data: gpaValues,
      borderColor: darkMode ? 'rgb(45, 212, 191)' : 'rgb(20, 184, 166)',
      backgroundColor: darkMode ? 'rgb(45, 212, 191)' : 'rgb(20, 184, 166)',
      tension: 0.4,
      yAxisID: 'y',
      pointBackgroundColor: darkMode ? 'rgb(45, 212, 191)' : 'rgb(20, 184, 166)',
      pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }, {
      label: 'Assignment Completion (%)',
      data: completionValues,
      borderColor: darkMode ? 'rgb(216, 180, 254)' : 'rgb(168, 85, 247)',
      backgroundColor: darkMode ? 'rgb(216, 180, 254)' : 'rgb(168, 85, 247)',
      tension: 0.4,
      yAxisID: 'y1',
      pointBackgroundColor: darkMode ? 'rgb(216, 180, 254)' : 'rgb(168, 85, 247)',
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
      tooltip: {
        backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: darkMode ? '#ffffff' : '#000000',
        bodyColor: darkMode ? '#ffffff' : '#000000',
        borderColor: darkMode ? 'rgba(55, 65, 81, 1)' : 'rgba(229, 231, 235, 1)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6
      },
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 20,
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)'
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
        type: 'linear' ,
        display: true,
        position: 'left' ,
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
      },
      y1: {
        type: 'linear' ,
        display: true,
        position: 'right' ,
        min: 70,
        max: 100,
        grid: {
          drawOnChartArea: false,
          drawBorder: false
        },
        ticks: {
          color: darkMode ? 'rgba(156, 163, 175, 1)' : 'rgba(107, 114, 128, 1)',
          callback: value => `${value}%`
        }
      }
    },
    animation: {
      duration: 1000
    }
  };
  return <div className="h-80">
      <Line data={data} options={options} />
    </div>;
};
export default DepartmentPerformance;