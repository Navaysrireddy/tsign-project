import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AssignmentDifficultyChart = ({ darkMode, assignments }) => {
  const easyAssignments = assignments.filter(a => a.difficulty === 'Easy');
  const mediumAssignments = assignments.filter(a => a.difficulty === 'Medium');
  const hardAssignments = assignments.filter(a => a.difficulty === 'Hard');

  const easyCompleted = easyAssignments.filter(a => a.status === 'Submitted' || a.status === 'Graded').length;
  const easyPending = easyAssignments.filter(a => a.status === 'Pending').length;
  const easyLate = easyAssignments.filter(a => a.status === 'Late' || a.status === 'Missed').length;

  const mediumCompleted = mediumAssignments.filter(a => a.status === 'Submitted' || a.status === 'Graded').length;
  const mediumPending = mediumAssignments.filter(a => a.status === 'Pending').length;
  const mediumLate = mediumAssignments.filter(a => a.status === 'Late' || a.status === 'Missed').length;

  const hardCompleted = hardAssignments.filter(a => a.status === 'Submitted' || a.status === 'Graded').length;
  const hardPending = hardAssignments.filter(a => a.status === 'Pending').length;
  const hardLate = hardAssignments.filter(a => a.status === 'Late' || a.status === 'Missed').length;

  const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Completed',
        data: [easyCompleted, mediumCompleted, hardCompleted],
        backgroundColor: darkMode ? 'rgba(34, 197, 94, 0.8)' : 'rgba(22, 163, 74, 0.8)',
        borderColor: darkMode ? 'rgb(34, 197, 94)' : 'rgb(22, 163, 74)',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.7,
        categoryPercentage: 0.8
      },
      {
        label: 'Pending',
        data: [easyPending, mediumPending, hardPending],
        backgroundColor: darkMode ? 'rgba(234, 179, 8, 0.8)' : 'rgba(202, 138, 4, 0.8)',
        borderColor: darkMode ? 'rgb(234, 179, 8)' : 'rgb(202, 138, 4)',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.7,
        categoryPercentage: 0.8
      },
      {
        label: 'Late/Missed',
        data: [easyLate, mediumLate, hardLate],
        backgroundColor: darkMode ? 'rgba(239, 68, 68, 0.8)' : 'rgba(220, 38, 38, 0.8)',
        borderColor: darkMode ? 'rgb(239, 68, 68)' : 'rgb(220, 38, 38)',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.7,
        categoryPercentage: 0.8
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
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
    animation: {
      duration: 1000
    }
  };

  return <Bar data={data} options={options} />;
};

export default AssignmentDifficultyChart;
