import React, { useState } from 'react';
import {  BuildingIcon, MapPinIcon, DollarSignIcon, CalendarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const JobCard = ({
  company,
  position,
  location,
  salary,
  deadline,
  status = 'open',
  applicationUrl,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'open':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'closing-soon':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
      case 'applied':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'closed':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400';
      default:
        return '';
    }
  };

  const formatDeadline = () => {
    const date = new Date(deadline);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <BuildingIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{position}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
          </div>
        </div>
        <span
          className={`ml-3 text-xs px-2 py-1 rounded-full ${getStatusColor()}`}
        >
          {status.replace('-', ' ').charAt(0).toUpperCase() + status.replace('-', ' ').slice(1)}
        </span>
      </div>

      <div className="space-y-3 mt-4">
        <div className="flex items-center text-sm">
          <MapPinIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">{location}</span>
        </div>
        <div className="flex items-center text-sm">
          <DollarSignIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">{salary}</span>
        </div>
        <div className="flex items-center text-sm">
          <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">Apply by {formatDeadline()}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        {status === 'applied' ? (
          <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            View Application
          </button>
        ) : status === 'closed' ? (
          <button
            disabled
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
          >
            Closed
          </button>
        ) : (
          <button
            onClick={() => window.open(applicationUrl, '_blank')}
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
          >
            Apply Now
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Placements = () => {
  // eslint-disable-next-line
  const [selectedStudent, setSelectedStudent] = useState('john-smith'); // Currently unused, but can be extended

  const jobs = [
    {
      id: 'j1',
      company: 'Google',
      position: 'Software Engineer',
      location: 'Mountain View, CA (Remote)',
      salary: '₹90,00,000 - ₹1,12,50,000',
      deadline: '2025-01-30',
      status: 'open',
      applicationUrl: 'https://careers.google.com/jobs/results/',
    },
    {
      id: 'j2',
      company: 'Microsoft',
      position: 'React JS',
      location: 'Redmond, WA',
      salary: '₹82,50,000 - ₹1,05,00,000',
      deadline: '2025-01-25',
      status: 'closing-soon',
      applicationUrl: 'https://careers.microsoft.com/us/en',
    },
    {
      id: 'j3',
      company: 'Amazon',
      position: 'Data Scientist',
      location: 'Seattle, WA',
      salary: '₹97,50,000 - ₹1,20,00,000',
      deadline: '2025-02-15',
      status: 'open',
      applicationUrl: 'https://www.amazon.jobs/en/',
    },
    {
      id: 'j4',
      company: 'Facebook',
      position: 'Product Manager',
      location: 'Menlo Park, CA',
      salary: '₹1,05,00,000 - ₹1,27,50,000',
      deadline: '2025-01-20',
      status: 'applied',
      applicationUrl: 'https://www.meta.com/careers/',
    },
    {
      id: 'j5',
      company: 'Apple',
      position: 'iOS Developer',
      location: 'Cupertino, CA',
      salary: '₹93,75,000 - ₹1,16,25,000',
      deadline: '2025-01-15',
      status: 'closed',
      applicationUrl: 'https://www.apple.com/careers/',
    },
    {
      id: 'j6',
      company: 'Netflix',
      position: 'Backend Engineer',
      location: 'Los Gatos, CA',
      salary: '₹1,01,25,000 - ₹1,23,75,000',
      deadline: '2025-02-10',
      status: 'open',
      applicationUrl: 'https://jobs.netflix.com/',
    },
  ];

  const applicationStatusData = {
    labels: ['Accepted', 'Rejected', 'Pending', 'On Hold'],
    datasets: [
      {
        data: [3, 2, 4, 1],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 146, 60, 0.8)',
        ],
        borderColor: [
          'rgba(52, 211, 153, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(251, 146, 60, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right', // ✅ Move legend to the right
      labels: {
        boxWidth: 20,
        padding: 15,
        font: {
          size: 12,
        },
      },
    },
  },
};


  const companyData = {
    labels: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple', 'Netflix'],
    datasets: [
      {
        label: 'Applications',
        data: [2, 1, 3, 1, 2, 1],
        backgroundColor: 'rgba(56, 189, 248, 0.8)',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
          stepSize: 1,
        },
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100, 116, 139, 0.2)'
            : 'rgba(203, 213, 225, 0.5)',
        },
      },
      x: {
        ticks: {
          color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
        },
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(100, 116, 139, 0.2)'
            : 'rgba(203, 213, 225, 0.5)',
        },
      },
    },
  };

  const salaryData = {
    labels: ['₹60-75L', '₹75-90L', '₹90-1.05Cr', '₹1.05-1.20Cr', '₹1.20Cr+'],
    datasets: [
      {
        label: 'Number of Offers',
        data: [1, 0, 2, 0, 0],
        backgroundColor: [
          'rgba(168, 85, 247, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(52, 211, 153, 0.8)',
          'rgba(251, 146, 60, 0.8)',
        ],
      },
    ],
  };

 const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right', // ✅ Legend on the right
      labels: {
        boxWidth: 20,
        padding: 15,
        font: {
          size: 12,
        },
      },
    },
  },
};


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Placements</h1>
        <button className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
          My Applications
        </button>
      </div>

      {/* Student Selection - Fixed layout for equal width sections */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-lg mr-4">
            JS
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">John Smith</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Computer Science, Year 3</p>
          </div>
        </div>

        {/* Changed from grid-cols-3 to grid-cols-2 for equal width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Application Status</h3>
            <div className="h-48 w-64">
  <Doughnut data={applicationStatusData} options={doughnutOptions} />
</div>

          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Companies Applied</h3>
            <div className="h-48">
              <Bar data={companyData} options={barOptions} />
            </div>
          </div>
        </div>

        {/* Changed from grid-cols-3 to grid-cols-2 for equal width */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Salary Range</h3>
            {/* Flex container to safely add padding on left */}
            <div className="h-48 w-full flex justify-center">
  <div className="w-96 h-48"> {/* instead of w-80 */}
    <Pie data={salaryData} options={pieOptions} />
  </div>
</div>

          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Application Timeline</h3>
            <div className="space-y-4 mt-4">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Applied to Google</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jan 5, 2025</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Interview with Google</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jan 12, 2025</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Applied to Facebook</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jan 15, 2025</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Received offer from Google</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Jan 18, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8">Current Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            company={job.company}
            position={job.position}
            location={job.location}
            salary={job.salary}
            deadline={job.deadline}
            status={job.status}
            applicationUrl={job.applicationUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Placements;