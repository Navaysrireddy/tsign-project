import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  XCircleIcon,
  CalendarIcon,
  ClockIcon,
  FilterIcon,
  SortAscIcon
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Attendance Summary Card component (wider)
const AttendanceSummaryCard = ({
  presentClasses,
  absentClasses,
  lateClasses,
  attendancePercentage
}) => {
  const doughnutData = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [
      {
        data: [presentClasses, absentClasses, lateClasses],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(251, 146, 60, 0.8)'
        ],
        borderColor: [
          'rgba(52, 211, 153, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(251, 146, 60, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      }
    },
    cutout: '70%'
  };

  return (
    <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700 mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Attendance Summary
      </h2>
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-6">
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">
                {attendancePercentage}%
              </span>
              <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">Present</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12 w-full text-center">
          <div>
            <p className="text-2xl font-semibold text-green-600">{presentClasses}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Present</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-red-600">{absentClasses}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Absent</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-yellow-600">{lateClasses}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Late</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AttendanceCard = ({ course, date, status, time, duration }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'present':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'absent':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400';
      case 'late':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
      default:
        return '';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'present':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'absent':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      case 'late':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 mt-1">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
              {course}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {formatDate(date)}
            </p>
          </div>
        </div>
        <span
          className={`text-xs px-3 py-1.5 rounded-full flex items-center shadow-sm ${getStatusColor()}`}
        >
          {getStatusIcon()}
          <span className="ml-1 capitalize">{status}</span>
        </span>
      </div>
      {(time || duration) && (
        <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 text-sm">
          {time && (
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>Time: {time}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>Duration: {duration}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Attendance = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: 'cs101', name: 'CS101: Introduction to Programming' },
    { id: 'cs201', name: 'CS201: Data Structures' },
    { id: 'cs301', name: 'CS301: Algorithms' },
    { id: 'cs401', name: 'CS401: Machine Learning' },
    { id: 'math201', name: 'MATH201: Discrete Mathematics' }
  ];

  const attendanceRecords = [
    {
      id: 'a1',
      course: 'CS101: Introduction to Programming',
      date: '2025-01-15',
      status: 'present',
      time: '10:00 AM - 12:00 PM',
      duration: '2 hours'
    },
    {
      id: 'a2',
      course: 'CS201: Data Structures',
      date: '2025-01-14',
      status: 'present',
      time: '1:00 PM - 3:00 PM',
      duration: '2 hours'
    },
    {
      id: 'a3',
      course: 'CS301: Algorithms',
      date: '2025-01-13',
      status: 'absent',
      time: '3:30 PM - 5:30 PM',
      duration: '2 hours'
    },
    {
      id: 'a4',
      course: 'CS401: Machine Learning',
      date: '2025-01-12',
      status: 'late',
      time: '9:00 AM - 11:00 AM',
      duration: '2 hours'
    },
    {
      id: 'a5',
      course: 'MATH201: Discrete Mathematics',
      date: '2025-01-11',
      status: 'present',
      time: '2:00 PM - 4:00 PM',
      duration: '2 hours'
    },
    {
      id: 'a6',
      course: 'CS101: Introduction to Programming',
      date: '2025-01-10',
      status: 'present',
      time: '10:00 AM - 12:00 PM',
      duration: '2 hours'
    },
    {
      id: 'a7',
      course: 'CS201: Data Structures',
      date: '2025-01-09',
      status: 'absent',
      time: '1:00 PM - 3:00 PM',
      duration: '2 hours'
    },
    {
      id: 'a8',
      course: 'CS301: Algorithms',
      date: '2025-01-08',
      status: 'present',
      time: '3:30 PM - 5:30 PM',
      duration: '2 hours'
    }
  ];

  // Filter
  let filteredRecords = attendanceRecords;
  if (filter !== 'all') {
    filteredRecords = filteredRecords.filter((r) => r.status === filter);
  }
  if (selectedCourse !== 'all') {
    filteredRecords = filteredRecords.filter((r) =>
      r.course.toLowerCase().startsWith(selectedCourse.toLowerCase())
    );
  }

  // Sort
  filteredRecords = [...filteredRecords].sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else {
      return sortOrder === 'asc'
        ? a.course.localeCompare(b.course)
        : b.course.localeCompare(a.course);
    }
  });

  // Stats
  const totalClasses = attendanceRecords.length;
  const presentClasses = attendanceRecords.filter((r) => r.status === 'present').length;
  const absentClasses = attendanceRecords.filter((r) => r.status === 'absent').length;
  const lateClasses = attendanceRecords.filter((r) => r.status === 'late').length;
  const attendancePercentage = Math.round((presentClasses / totalClasses) * 100);

  // Doughnut chart data and options
   // eslint-disable-next-line
  const doughnutData = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [
      {
        data: [presentClasses, absentClasses, lateClasses],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(251, 146, 60, 0.8)'
        ],
        borderColor: [
          'rgba(52, 211, 153, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(251, 146, 60, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
   // eslint-disable-next-line
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      }
    },
    cutout: '70%'
  };

  // Line chart data and options
  const courseData = {
    labels: ['CS101', 'CS201', 'CS301', 'CS401', 'MATH201'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [90, 75, 85, 80, 95],
        borderColor: 'rgb(56, 189, 248)',
        backgroundColor: 'rgba(56, 189, 248, 0.5)',
        tension: 0.3
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
          callback: (value) => `${value}%`
        },
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100, 116, 139, 0.2)'
            : 'rgba(203, 213, 225, 0.5)'
        }
      },
      x: {
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black'
        },
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100, 116, 139, 0.2)'
            : 'rgba(203, 213, 225, 0.5)'
        }
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header and Controls */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Attendance
        </h1>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              setSortBy(sortBy === 'date' ? 'course' : 'date');
              setSortOrder('asc');
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
          >
            <SortAscIcon className="w-4 h-4" />
            <span>Sort by {sortBy === 'date' ? 'Course' : 'Date'}</span>
          </button>
          <div className="relative group">
            <button
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FilterIcon className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-300 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-10">
              <div className="p-1">
                {['all', 'present', 'absent', 'late'].map((statusId) => {
                  const statusColors = {
                    all: '',
                    present: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                    absent: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
                    late: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                  };
                  const labelMap = {
                    all: 'All',
                    present: 'Present',
                    absent: 'Absent',
                    late: 'Late'
                  };

                  return (
                    <button
                      key={statusId}
                      onClick={() => setFilter(statusId)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                        filter === statusId
                          ? `${statusColors[statusId]} font-semibold`
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      type="button"
                    >
                      {labelMap[statusId]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Summary + Chart */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AttendanceSummaryCard
          presentClasses={presentClasses}
          absentClasses={absentClasses}
          lateClasses={lateClasses}
          attendancePercentage={attendancePercentage}
        />

        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Course-wise Attendance
          </h2>
          <div className="h-64 md:h-72">
            <Line options={lineOptions} data={courseData} />
          </div>
        </div>
      </section>

      {/* Course Filter */}
      <section className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Attendance Records
        </h2>
        <div className="relative w-full md:w-64">
          <select
            className="block w-full p-2.5 bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            aria-label="Select course"
          >
            {courses.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Attendance Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecords.map((record) => (
          <AttendanceCard
            key={record.id}
            course={record.course}
            date={record.date}
            status={record.status}
            time={record.time}
            duration={record.duration}
          />
        ))}
      </section>
    </div>
  );
};

export default Attendance;
