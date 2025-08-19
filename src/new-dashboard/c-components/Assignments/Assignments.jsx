import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardListIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  BookOpenIcon,
  ArrowRightIcon,
  FilterIcon,
} from 'lucide-react';
import SubmissionProgressChart from './SubmissionProgressChart';
import AssignmentStatusPieChart from './AssignmentStatusPieChart';
import AssignmentDifficultyChart from './AssignmentDifficultyChart';

const Assignments = ({ darkMode }) => {
  // Only import useState ONCE at the top!
  const [department, setDepartment] = useState('All');
  const [status, setStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAssignmentId, setExpandedAssignmentId] = useState(null);
  const [filterStatusOverride, setFilterStatusOverride] = useState('All');

  const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
  const statuses = ['All', 'Pending', 'Submitted', 'Graded', 'Late', 'Missed'];

  // assignments data (no change)
  const allAssignments = [
    {
      id: 1,
      title: 'Data Structures Lab 1',
      course: 'CS201 - Data Structures',
      department: 'Computer Science',
      dueDate: 'Jan 25, 2025',
      status: 'Submitted',
      grade: '92/100',
      description: 'Implement a linked list and perform basic operations.',
      difficulty: 'Medium',
    },
    {
      id: 2,
      title: 'Programming Assignment 2',
      course: 'CS101 - Introduction to Programming',
      department: 'Computer Science',
      dueDate: 'Jan 30, 2025',
      status: 'Pending',
      description: 'Write a program to solve the Tower of Hanoi problem.',
      difficulty: 'Easy',
    },
    {
      id: 3,
      title: 'AI Project Proposal',
      course: 'CS401 - Artificial Intelligence',
      department: 'Computer Science',
      dueDate: 'Feb 10, 2025',
      status: 'Pending',
      description: 'Submit a proposal for your AI project, including problem statement and methodology.',
      difficulty: 'Hard',
    },
    {
      id: 4,
      title: 'Database Design Project',
      course: 'CS301 - Database Systems',
      department: 'Computer Science',
      dueDate: 'Jan 15, 2025',
      status: 'Graded',
      grade: '88/100',
      description: 'Design and implement a database for a hospital management system.',
      difficulty: 'Hard',
    },
    {
      id: 5,
      title: 'Thermodynamics Problem Set',
      course: 'ME201 - Thermodynamics',
      department: 'Mechanical',
      dueDate: 'Jan 22, 2025',
      status: 'Submitted',
      description: 'Solve problems related to the first and second laws of thermodynamics.',
      difficulty: 'Medium',
    },
    {
      id: 6,
      title: 'Machine Design Analysis',
      course: 'ME401 - Machine Design',
      department: 'Mechanical',
      dueDate: 'Feb 5, 2025',
      status: 'Pending',
      description: 'Analyze the design of a given machine component and suggest improvements.',
      difficulty: 'Hard',
    },
    {
      id: 7,
      title: 'Fluid Mechanics Lab Report',
      course: 'ME301 - Fluid Mechanics',
      department: 'Mechanical',
      dueDate: 'Jan 10, 2025',
      status: 'Graded',
      grade: '95/100',
      description: 'Write a report on the fluid flow experiment conducted in the lab.',
      difficulty: 'Medium',
    },
    {
      id: 8,
      title: 'Circuit Analysis',
      course: 'EE101 - Electric Circuits',
      department: 'Electrical',
      dueDate: 'Jan 28, 2025',
      status: 'Pending',
      description: 'Analyze the given circuits using mesh and nodal analysis methods.',
      difficulty: 'Medium',
    },
    {
      id: 9,
      title: 'Digital Logic Design',
      course: 'EE201 - Digital Electronics',
      department: 'Electrical',
      dueDate: 'Jan 12, 2025',
      status: 'Late',
      grade: '75/100',
      description: 'Design a sequential circuit for a traffic light controller.',
      difficulty: 'Hard',
    },
    {
      id: 10,
      title: 'Power Systems Simulation',
      course: 'EE401 - Power Systems',
      department: 'Electrical',
      dueDate: 'Feb 8, 2025',
      status: 'Pending',
      description: 'Simulate a power distribution network and analyze its performance.',
      difficulty: 'Hard',
    },
    {
      id: 11,
      title: 'Engineering Drawing Project',
      course: 'GE101 - Engineering Drawing',
      department: 'Engineering',
      dueDate: 'Jan 20, 2025',
      status: 'Pending',
      description: 'Create detailed engineering drawings for the assigned mechanical part.',
      difficulty: 'Medium',
    },
    {
      id: 12,
      title: 'Engineering Mathematics',
      course: 'GE201 - Engineering Mathematics',
      department: 'Engineering',
      dueDate: 'Jan 5, 2025',
      status: 'Missed',
      description: 'Solve problems on differential equations and their applications.',
      difficulty: 'Hard',
    },
    {
      id: 13,
      title: 'Project Management Plan',
      course: 'GE401 - Project Management',
      department: 'Engineering',
      dueDate: 'Feb 15, 2025',
      status: 'Pending',
      description: 'Develop a project management plan for a construction project.',
      difficulty: 'Medium',
    },
  ];

  // Status filter logic
  // eslint-disable-next-line
  const activeStatus = filterStatusOverride === 'All' ? status : filterStatusOverride;
  const filteredAssignments = allAssignments.filter(assignment => {
    const departmentMatch = department === 'All' || assignment.department === department;

    let statusMatch = false;
    if (filterStatusOverride === 'All') {
      statusMatch = status === 'All' || assignment.status === status;
    } else if (filterStatusOverride === 'Late/Missed') {
      statusMatch = assignment.status === 'Late' || assignment.status === 'Missed';
    } else {
      statusMatch = assignment.status === filterStatusOverride;
    }

    const searchMatch =
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchQuery.toLowerCase());

    return departmentMatch && statusMatch && searchMatch;
  });

  // Statistics for cards
  const totalAssignments = filteredAssignments.length;
  const submittedAssignments = filteredAssignments.filter(a => a.status === 'Submitted' || a.status === 'Graded').length;
  const pendingAssignments = filteredAssignments.filter(a => a.status === 'Pending').length;
  const lateAssignments = filteredAssignments.filter(a => a.status === 'Late').length;
  const missedAssignments = filteredAssignments.filter(a => a.status === 'Missed').length;

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Submitted':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Graded':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Pending':
        return darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      case 'Late':
        return darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800';
      case 'Missed':
        return darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };
  const getDifficultyColor = difficulty => {
    switch (difficulty) {
      case 'Easy':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Medium':
        return darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold">Assignments</h1>
        </motion.div>
      </div>
      {/* Filters */}
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center mr-4">
            <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select
                value={department}
                onChange={e => {
                  setDepartment(e.target.value);
                  setFilterStatusOverride('All');
                }}
                className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select
                value={status}
                onChange={e => {
                  setStatus(e.target.value);
                  setFilterStatusOverride('All');
                }}
                className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm"
              >
                {statuses.map(stat => (
                  <option key={stat} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>
              <input
                type="text"
                placeholder="Search assignments..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent py-2 px-3 outline-none w-full text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Assignments */}
        <motion.div
          onClick={() => setFilterStatusOverride('All')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`cursor-pointer p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
          title="Show all assignments"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Assignments</p>
              <h3 className="text-2xl font-bold mt-1">{totalAssignments}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <ClipboardListIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </motion.div>
        {/* Submitted */}
        <motion.div
          onClick={() => setFilterStatusOverride('Submitted')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`cursor-pointer p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
          title="Show submitted assignments"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Submitted</p>
              <h3 className="text-2xl font-bold mt-1">{submittedAssignments}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </motion.div>
        {/* Pending */}
        <motion.div
          onClick={() => setFilterStatusOverride('Pending')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className={`cursor-pointer p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
          title="Show pending assignments"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <h3 className="text-2xl font-bold mt-1">{pendingAssignments}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
              <ClockIcon className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </motion.div>
        {/* Late/Missed */}
        <motion.div
          onClick={() => setFilterStatusOverride('Late/Missed')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className={`cursor-pointer p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
          title="Show late and missed assignments"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Late/Missed</p>
              <h3 className="text-2xl font-bold mt-1">{lateAssignments + missedAssignments}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
              <XCircleIcon className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Assignment List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div
            className={`p-6 rounded-xl ${
              darkMode
                ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
                : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Assignment List</h2>
              <div
                className={`px-3 py-1 rounded-full text-sm ${
                  darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
                }`}
              >
                {filteredAssignments.length} assignments
              </div>
            </div>

            {filteredAssignments.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No assignments found matching your filters.</p>
              </div>
            ) : (
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredAssignments.map(assignment => (
                  <motion.div
                    key={assignment.id}
                    variants={item}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`p-4 rounded-xl ${
                      darkMode
                        ? 'bg-gray-700 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]'
                        : 'bg-gray-50 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="font-semibold">{assignment.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>
                            {assignment.status}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(assignment.difficulty)}`}>
                            {assignment.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{assignment.course}</p>
                      </div>
                      {assignment.grade && (
                        <div className={`mt-2 md:mt-0 px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-green-900/20 text-green-300' : 'bg-green-50 text-green-800'}`}>
                          Grade: {assignment.grade}
                        </div>
                      )}
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-sm">
                        <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpenIcon className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{assignment.department}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{assignment.description}</p>
                    <div className="mt-4 flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center text-sm font-medium ${
                          darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'
                        } text-white px-3 py-1.5 rounded-lg`}
                        onClick={() => setExpandedAssignmentId(expandedAssignmentId === assignment.id ? null : assignment.id)}
                      >
                        {expandedAssignmentId === assignment.id ? 'Hide Details' : assignment.status === 'Pending' ? 'Submit' : 'View Details'}{' '}
                        <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                      </motion.button>
                    </div>
                    {/* expanded details here */}
                    {expandedAssignmentId === assignment.id && (
                      <div className={`mt-3 p-4 rounded-md border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-300' : 'border-gray-300 bg-gray-50 text-gray-700'}`}>
                        <h4 className="font-semibold mb-2">Assignment Details:</h4>
                        <p>
                          <strong>Due Date:</strong> {assignment.dueDate}
                        </p>
                        <p>
                          <strong>Description:</strong> {assignment.description}
                        </p>
                        <p>
                          <strong>Difficulty:</strong> {assignment.difficulty}
                        </p>
                        {assignment.grade && (
                          <p>
                            <strong>Grade:</strong> {assignment.grade}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4">Assignment Status</h2>
            <div className="h-80">
              <AssignmentStatusPieChart
                darkMode={darkMode}
                submittedCount={submittedAssignments}
                pendingCount={pendingAssignments}
                lateCount={lateAssignments}
                missedCount={missedAssignments}
              />
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4">Difficulty Distribution</h2>
            <div className="h-72">
              <AssignmentDifficultyChart darkMode={darkMode} assignments={filteredAssignments} />
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4">Submission Progress</h2>
            <div className="h-72">
              <SubmissionProgressChart darkMode={darkMode} department={department} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Assignments;
