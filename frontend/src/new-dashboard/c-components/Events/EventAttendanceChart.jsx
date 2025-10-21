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

const EventAttendanceChart = ({ darkMode, events }) => {
  // Sort events by attendance percentage
  const sortedEvents = [...events]
    .sort((a, b) => b.attendees / b.maxCapacity - a.attendees / a.maxCapacity)
    .slice(0, 6); // Top 6 events

  const labels = sortedEvents.map(event =>
    event.title.length > 20 ? event.title.substring(0, 20) + '...' : event.title
  );

  const attendancePercentages = sortedEvents.map(event =>
    Math.round((event.attendees / event.maxCapacity) * 100)
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Attendance Rate (%)',
        data: attendancePercentages,
        backgroundColor: darkMode
          ? 'rgba(45, 212, 191, 0.8)'
          : 'rgba(20, 184, 166, 0.8)',
        borderColor: darkMode
          ? 'rgb(45, 212, 191)'
          : 'rgb(20, 184, 166)',
        borderWidth: 1,
        borderRadius: 6,
        barThickness: 20
      }
    ]
  };

  const options = {
    indexAxis: 'y', // Removed `as const`
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: darkMode
          ? 'rgba(31, 41, 55, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        titleColor: darkMode ? '#ffffff' : '#000000',
        bodyColor: darkMode ? '#ffffff' : '#000000',
        borderColor: darkMode
          ? 'rgba(55, 65, 81, 1)'
          : 'rgba(229, 231, 235, 1)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const event = sortedEvents[index];
            return [
              `Attendance Rate: ${context.raw}%`,
              `Attendees: ${event.attendees}/${event.maxCapacity}`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: {
          color: darkMode
            ? 'rgba(55, 65, 81, 0.3)'
            : 'rgba(229, 231, 235, 0.8)',
          drawBorder: false
        },
        ticks: {
          color: darkMode
            ? 'rgba(156, 163, 175, 1)'
            : 'rgba(107, 114, 128, 1)',
          callback: value => `${value}%`
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: darkMode
            ? 'rgba(156, 163, 175, 1)'
            : 'rgba(107, 114, 128, 1)',
          font: {
            size: 11
          }
        }
      }
    },
    animation: {
      duration: 1000
    }
  };

  return <Bar data={data} options={options} />;
};

export default EventAttendanceChart;
