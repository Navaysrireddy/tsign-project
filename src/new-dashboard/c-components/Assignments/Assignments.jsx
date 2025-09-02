import React, { useState, useEffect } from 'react';
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
  PlusIcon,
  Trash2Icon
} from 'lucide-react';
import SubmissionProgressChart from './SubmissionProgressChart';
import AssignmentStatusPieChart from './AssignmentStatusPieChart';
import AssignmentDifficultyChart from './AssignmentDifficultyChart';

const BASE_ASSIGNMENTS = [
  // Computer Science assignments
  {
    id: 1,
    title: 'Data Structures Lab 1',
    course: 'CS201 - Data Structures',
    department: 'Computer Science',
    dueDate: '2025-01-25',
    status: 'Submitted',
    grade: '92/100',
    description: 'Implement a linked list and perform basic operations.',
    difficulty: 'Medium'
  },
  {
    id: 2,
    title: 'Programming Assignment 2',
    course: 'CS101 - Introduction to Programming',
    department: 'Computer Science',
    dueDate: '2025-01-30',
    status: 'Pending',
    description: 'Write a program to solve the Tower of Hanoi problem.',
    difficulty: 'Easy'
  },
  {
    id: 3,
    title: 'AI Project Proposal',
    course: 'CS401 - Artificial Intelligence',
    department: 'Computer Science',
    dueDate: '2025-02-10',
    status: 'Pending',
    description: 'Submit a proposal for your AI project, including problem statement and methodology.',
    difficulty: 'Hard'
  },
  {
    id: 4,
    title: 'Database Design Project',
    course: 'CS301 - Database Systems',
    department: 'Computer Science',
    dueDate: '2025-01-15',
    status: 'Graded',
    grade: '88/100',
    description: 'Design and implement a database for a hospital management system.',
    difficulty: 'Hard'
  },
  // Mechanical Engineering assignments
  {
    id: 5,
    title: 'Thermodynamics Problem Set',
    course: 'ME201 - Thermodynamics',
    department: 'Mechanical',
    dueDate: '2025-01-22',
    status: 'Submitted',
    description: 'Solve problems related to the first and second laws of thermodynamics.',
    difficulty: 'Medium'
  },
  {
    id: 6,
    title: 'Machine Design Analysis',
    course: 'ME401 - Machine Design',
    department: 'Mechanical',
    dueDate: '2025-02-05',
    status: 'Pending',
    description: 'Analyze the design of a given machine component and suggest improvements.',
    difficulty: 'Hard'
  },
  {
    id: 7,
    title: 'Fluid Mechanics Lab Report',
    course: 'ME301 - Fluid Mechanics',
    department: 'Mechanical',
    dueDate: '2025-01-10',
    status: 'Graded',
    grade: '95/100',
    description: 'Write a report on the fluid flow experiment conducted in the lab.',
    difficulty: 'Medium'
  },
  // Electrical Engineering assignments
  {
    id: 8,
    title: 'Circuit Analysis',
    course: 'EE101 - Electric Circuits',
    department: 'Electrical',
    dueDate: '2025-01-28',
    status: 'Pending',
    description: 'Analyze the given circuits using mesh and nodal analysis methods.',
    difficulty: 'Medium'
  },
  {
    id: 9,
    title: 'Digital Logic Design',
    course: 'EE201 - Digital Electronics',
    department: 'Electrical',
    dueDate: '2025-01-12',
    status: 'Late',
    grade: '75/100',
    description: 'Design a sequential circuit for a traffic light controller.',
    difficulty: 'Hard'
  },
  {
    id: 10,
    title: 'Power Systems Simulation',
    course: 'EE401 - Power Systems',
    department: 'Electrical',
    dueDate: '2025-02-08',
    status: 'Pending',
    description: 'Simulate a power distribution network and analyze its performance.',
    difficulty: 'Hard'
  },
  // General Engineering assignments
  {
    id: 11,
    title: 'Engineering Drawing Project',
    course: 'GE101 - Engineering Drawing',
    department: 'Engineering',
    dueDate: '2025-01-20',
    status: 'Pending',
    description: 'Create detailed engineering drawings for the assigned mechanical part.',
    difficulty: 'Medium'
  },
  {
    id: 12,
    title: 'Engineering Mathematics',
    course: 'GE201 - Engineering Mathematics',
    department: 'Engineering',
    dueDate: '2025-01-05',
    status: 'Missed',
    description: 'Solve problems on differential equations and their applications.',
    difficulty: 'Hard'
  },
  {
    id: 13,
    title: 'Project Management Plan',
    course: 'GE401 - Project Management',
    department: 'Engineering',
    dueDate: '2025-02-15',
    status: 'Pending',
    description: 'Develop a project management plan for a construction project.',
    difficulty: 'Medium'
  }
];

const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
const statuses = ['All', 'Pending', 'Submitted', 'Graded', 'Late', 'Missed'];

const Assignments = ({ darkMode }) => {
  const [allAssignments, setAllAssignments] = useState(() => {
    const stored = localStorage.getItem('allAssignments');
    return stored ? JSON.parse(stored) : BASE_ASSIGNMENTS;
  });
  useEffect(() => {
    localStorage.setItem('allAssignments', JSON.stringify(allAssignments));
  }, [allAssignments]);

  const [department, setDepartment] = useState('All');
  const [status, setStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAssignmentId, setExpandedAssignmentId] = useState(null);

  const [isAdding, setIsAdding] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    course: '',
    department: 'Computer Science',
    difficulty: 'Medium',
    dueDate: '',
    status: 'Pending',
    description: '',
    grade: ''
  });

  const filteredAssignments = allAssignments.filter(assignment => {
    const departmentMatch = department === 'All' || assignment.department === department;
    const statusMatch = status === 'All' || assignment.status === status;
    const searchMatch =
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchQuery.toLowerCase());
    return departmentMatch && statusMatch && searchMatch;
  });

  const totalAssignments = filteredAssignments.length;
  const submittedAssignments = filteredAssignments.filter(a => a.status === 'Submitted' || a.status === 'Graded').length;
  const pendingAssignments = filteredAssignments.filter(a => a.status === 'Pending').length;
  const lateAssignments = filteredAssignments.filter(a => a.status === 'Late').length;
  const missedAssignments = filteredAssignments.filter(a => a.status === 'Missed').length;

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted': return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Graded': return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Pending': return darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      case 'Late': return darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800';
      case 'Missed': return darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800';
      default: return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Medium': return darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      case 'Hard': return darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800';
      default: return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  const deleteAssignment = (id) => {
    setAllAssignments(allAssignments.filter(a => a.id !== id));
    if (expandedAssignmentId === id) setExpandedAssignmentId(null);
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    const newId = (allAssignments[allAssignments.length - 1]?.id || 0) + 1;
    setAllAssignments([...allAssignments, { ...newAssignment, id: newId }]);
    setNewAssignment({
      title: '',
      course: '',
      department: 'Computer Science',
      difficulty: 'Medium',
      dueDate: '',
      status: 'Pending',
      description: '',
      grade: ''
    });
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold">Assignments </h1>
        </motion.div>
        <motion.button onClick={() => setIsAdding(true)}
          className="mt-4 md:mt-0 flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md"
          whileHover={{ scale: 1.05 }}>
          <PlusIcon className="w-4 h-4 mr-2 " /> Add Assignment
        </motion.button>
      </div>

      <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center mr-4">
            <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={department} onChange={e => setDepartment(e.target.value)} className={`
    appearance-none bg-transparent py-2 pl-3 pr-10 outline-none
    ${darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'}
  `}>
                {departments.map(dept => <option key={dept} value={dept}
               className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} >{dept}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={status} onChange={e => setStatus(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {statuses.map(stat => <option key={stat} value={stat} className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>{stat}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>
              <input type="text" placeholder="Search assignments..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-transparent py-2 px-3 outline-none w-full text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'}`}>
            <ClipboardListIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">Total Assignments</p>
            <h3 className="text-2xl font-bold pl-6">{totalAssignments}</h3>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/20' : 'bg-green-100'}`}>
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">Submitted</p>
            <h3 className="text-2xl font-bold pl-6">{submittedAssignments}</h3>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-100'}`}>
            <ClockIcon className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">Pending</p>
            <h3 className="text-2xl font-bold pl-6">{pendingAssignments}</h3>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-red-900/20' : 'bg-red-100'}`}>
            <XCircleIcon className="h-6 w-6 text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">Late/Missed</p>
            <h3 className="text-2xl font-bold pl-6">{lateAssignments + missedAssignments}</h3>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-2">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold 
text-gray-800 dark:text-white">Assignment List</h2>
              <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>{filteredAssignments.length} assignments</div>
            </div>
            {filteredAssignments.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No assignments found matching your filters.</p>
              </div>
            ) : (
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredAssignments.map(assignment => (
                  <motion.div key={assignment.id} variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-gray-50 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="font-semibold">{assignment.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>{assignment.status}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(assignment.difficulty)}`}>{assignment.difficulty}</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{assignment.course}</p>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button onClick={() => deleteAssignment(assignment.id)} className="px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 flex items-center">
                          <Trash2Icon className="w-4 h-4 mr-1" /> Delete
                        </button>
                      </div>
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
                    <p className="mt-1 text-sm text-gray-400">{assignment.description}</p>
                    <div className="mt-4 flex justify-end">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex items-center text-sm font-medium ${darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'} text-white px-3 py-1.5 rounded-lg`} onClick={() => setExpandedAssignmentId(expandedAssignmentId === assignment.id ? null : assignment.id)}>
                        {expandedAssignmentId === assignment.id ? 'Hide Details' : 'View Details'} <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                      </motion.button>
                    </div>
                    {expandedAssignmentId === assignment.id && (
                      <div className={`mt-3 p-4 rounded-md border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-300' : 'border-gray-300 bg-gray-50 text-gray-700'}`}>
                        <h4 className="font-semibold mb-2">Assignment Details:</h4>
                        <p><strong>Due Date:</strong> {assignment.dueDate}</p>
                        <p><strong>Description:</strong> {assignment.description}</p>
                        <p><strong>Difficulty:</strong> {assignment.difficulty}</p>
                        {assignment.grade && <p><strong>Grade:</strong> {assignment.grade}</p>}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4 
text-gray-800 dark:text-white">Assignment Status</h2>
            <div className="h-80">
              <AssignmentStatusPieChart darkMode={darkMode} submittedCount={submittedAssignments} pendingCount={pendingAssignments} lateCount={lateAssignments} missedCount={missedAssignments} />
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4 
text-gray-800 dark:text-white">Difficulty Distribution</h2>
            <div className="h-72">
              <AssignmentDifficultyChart darkMode={darkMode} assignments={filteredAssignments} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className={`p-6 rounded-xl mt-6 ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`} style={{ width: '100%', maxWidth: '100%' }}>
        <h2 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Submission Progress</h2>
        <div style={{ height: '300px', width: '100%' }}>
          <SubmissionProgressChart darkMode={darkMode} department={department} />
        </div>
      </div>

      {isAdding && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className={`p-6 rounded-xl w-full max-w-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Add Assignment</h2>
              <button onClick={() => setIsAdding(false)}>
                <XCircleIcon className="w-5 h-5" />
              </button>
            </div>
           <form onSubmit={handleAddAssignment} className="space-y-4">
  <input
    type="text"
    placeholder="Title"
    value={newAssignment.title}
    onChange={e => setNewAssignment({ ...newAssignment, title: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />

  <input
    type="text"
    placeholder="Course"
    value={newAssignment.course}
    onChange={e => setNewAssignment({ ...newAssignment, course: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />

  <select
    value={newAssignment.department}
    onChange={e => setNewAssignment({ ...newAssignment, department: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    {departments.slice(1).map(dept => (
      <option key={dept}>{dept}</option>
    ))}
  </select>

  <input
    type="date"
    placeholder="Due Date"
    value={newAssignment.dueDate}
    onChange={e => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />

  <select
    value={newAssignment.difficulty}
    onChange={e => setNewAssignment({ ...newAssignment, difficulty: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    <option>Easy</option>
    <option>Medium</option>
    <option>Hard</option>
  </select>

  <textarea
    placeholder="Description"
    value={newAssignment.description}
    onChange={e => setNewAssignment({ ...newAssignment, description: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 
               hover:bg-blue-700 
               dark:bg-blue-700 dark:hover:bg-blue-800"
  >
    Post Assignment
  </button>
</form>

          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
