import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DepartmentCourseChart = ({ department, courses, darkMode }) => {
  const core = courses.filter(c => c.category === 'Core').length;
  const elective = courses.filter(c => c.category === 'Elective').length;
  const btech = courses.filter(c => c.degree === 'B.Tech').length;
  const mtech = courses.filter(c => c.degree === 'M.Tech').length;
  // const credits = courses.reduce((sum, c) => sum + c.credits, 0);

  const data = {
    labels: ['Core', 'Elective', 'B.Tech', 'M.Tech', 'Credits'],
    datasets: [
      {
        label: `${department} Courses`,
        data: [core, elective, btech, mtech],
        backgroundColor: [
          darkMode ? '#14b8a6' : '#06b6d4',
          darkMode ? '#f97316' : '#fb923c',
          '#3b82f6',
          '#8b5cf6',
          darkMode ? '#facc15' : '#eab308'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: { color: darkMode ? '#d1d5db' : '#1f2937' },
        beginAtZero: true
      },
      x: {
        ticks: { color: darkMode ? '#d1d5db' : '#1f2937' }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default DepartmentCourseChart;
