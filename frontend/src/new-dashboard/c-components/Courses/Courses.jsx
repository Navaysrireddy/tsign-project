import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, UsersIcon, ClockIcon, ArrowRightIcon, FilterIcon, PlusIcon, XIcon } from 'lucide-react';
import EnrollmentTrendsChart from './EnrollmentTrendsChart';
import DepartmentSubjectsChart from './DepartmentSubjectsChart';
// --- All initial courses below (as previously) --- //
const BASE_COURSES = [
  // Computer Science courses
  {
    id: 1,
    code: 'CS101',
    name: 'C Programming',
    instructor: 'Dr. Jane Smith',
    credits: 3,
    department: 'Computer Science',
    semester: 'SEM1',
    year: '2024',
    enrolled: 120,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Programming basics',
      'Variables and types',
      'Control flow statements',
      'Basic functions',
    ],
  },
  {
    id: 2,
    code: 'CS201',
    name: 'Data Structures',
    instructor: 'Dr. John Doe',
    credits: 4,
    department: 'Computer Science',
    semester: 'SEM2',
    year: '2024',
    enrolled: 95,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Arrays and linked lists',
      'Stacks and queues',
      'Trees and graphs',
      'Hashing techniques',
    ],
  },
  {
    id: 3,
    code: 'CS301',
    name: 'Algorithms',
    instructor: 'Dr. Alan Turing',
    credits: 4,
    department: 'Computer Science',
    semester: 'SEM2',
    year: '2024',
    enrolled: 85,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Sorting algorithms',
      'Greedy algorithms',
      'Divide and conquer',
      'Dynamic programming',
    ],
  },
  {
    id: 8,
    code: 'CS401',
    name: 'ArtificialIntelligence',
    instructor: 'Dr. James Wilson',
    credits: 4,
    department: 'Computer Science',
    semester: 'SEM3',
    year: '2025',
    enrolled: 75,
    category: 'Elective',
    degree: 'B.Tech',
    content: [
      'Search algorithms',
      'Knowledge representation',
      'Machine learning basics',
      'Natural language processing',
    ],
  },
  {
    id: 9,
    code: 'CS501',
    name: 'Machine Learning',
    instructor: 'Dr. Emily Chen',
    credits: 4,
    department: 'Computer Science',
    semester: 'SEM1',
    year: '2025',
    enrolled: 65,
    category: 'Elective',
    degree: 'M.Tech',
    content: [
      'Supervised learning',
      'Unsupervised learning',
      'Neural networks',
      'Model evaluation',
    ],
  },
  {
    id: 10,
    code: 'CS601',
    name: 'Deep Learning',
    instructor: 'Dr. Robert Brown',
    credits: 4,
    department: 'Computer Science',
    semester: 'SEM2',
    year: '2025',
    enrolled: 55,
    category: 'Elective',
    degree: 'M.Tech',
    content: [
      'Deep neural networks',
      'CNNs and RNNs',
      'Training and optimization',
      'Applications in vision and speech',
    ],
  },
  // Mechanical Engineering courses
  {
    id: 4,
    code: 'ME101',
    name: 'Eng Mechanics',
    instructor: 'Dr. Robert Brown',
    credits: 3,
    department: 'Mechanical',
    semester: 'SEM1',
    year: '2024',
    enrolled: 110,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Statics',
      'Dynamics',
      'Forces and moments',
      'Equilibrium analysis',
    ],
  },
  {
    id: 5,
    code: 'ME201',
    name: 'Thermodynamics',
    instructor: 'Dr. Lisa Green',
    credits: 4,
    department: 'Mechanical',
    semester: 'SEM2',
    year: '2024',
    enrolled: 90,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Laws of thermodynamics',
      'Energy systems',
      'Heat transfer',
      'Thermodynamic cycles',
    ],
  },
  {
    id: 11,
    code: 'ME301',
    name: 'Fluid Mechanics',
    instructor: 'Dr. Thomas White',
    credits: 4,
    department: 'Mechanical',
    semester: 'SEM1',
    year: '2025',
    enrolled: 85,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Fluid properties',
      'Fluid statics',
      'Fluid dynamics',
      'Flow measurement',
    ],
  },
  {
    id: 12,
    code: 'ME401',
    name: 'Machine Design',
    instructor: 'Dr. Maria Garcia',
    credits: 4,
    department: 'Mechanical',
    semester: 'SEM2',
    year: '2025',
    enrolled: 80,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Design fundamentals',
      'Stress analysis',
      'Mechanical components',
      'Failure theories',
    ],
  },
  {
    id: 13,
    code: 'ME501',
    name: 'Ad Manufacturing',
    instructor: 'Dr. David Lee',
    credits: 3,
    department: 'Mechanical',
    semester: 'SEM3',
    year: '2025',
    enrolled: 50,
    category: 'Elective',
    degree: 'M.Tech',
    content: [
      'Advanced fabrication processes',
      'Automation',
      'Quality control',
      'CNC machining',
    ],
  },
  // Electrical Engineering courses
  {
    id: 6,
    code: 'EE101',
    name: 'Electric Circuits',
    instructor: 'Dr. Michael Chen',
    credits: 3,
    department: 'Electrical',
    semester: 'SEM1',
    year: '2024',
    enrolled: 100,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Circuit elements',
      'KCL and KVL',
      'Network theorems',
      'Transient analysis',
    ],
  },
  {
    id: 7,
    code: 'EE201',
    name: 'Digital Electronics',
    instructor: 'Dr. Sarah Johnson',
    credits: 4,
    department: 'Electrical',
    semester: 'SEM2',
    year: '2024',
    enrolled: 85,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Logic gates',
      'Combinational circuits',
      'Sequential circuits',
      'Microprocessors basics',
    ],
  },
  {
    id: 14,
    code: 'EE301',
    name: 'Control Systems',
    instructor: 'Dr. Kevin Zhang',
    credits: 4,
    department: 'Electrical',
    semester: 'SEM1',
    year: '2025',
    enrolled: 80,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Feedback principles',
      'System modeling',
      'Stability analysis',
      'Control design',
    ],
  },
  {
    id: 15,
    code: 'EE401',
    name: 'Power Systems',
    instructor: 'Dr. Anna Williams',
    credits: 4,
    department: 'Electrical',
    semester: 'SEM2',
    year: '2025',
    enrolled: 75,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Power generation',
      'Transmission lines',
      'Distribution systems',
      'Protection systems',
    ],
  },
  {
    id: 16,
    code: 'EE501',
    name: 'VLSI Design',
    instructor: 'Dr. Jason Kim',
    credits: 3,
    department: 'Electrical',
    semester: 'SEM3',
    year: '2025',
    enrolled: 45,
    category: 'Elective',
    degree: 'M.Tech',
    content: [
      'CMOS technology',
      'Logic design',
      'Chip layout',
      'Testing methodologies',
    ],
  },
  // General Engineering courses
  {
    id: 17,
    code: 'GE101',
    name: 'Eng Drawing',
    instructor: 'Dr. Laura Martinez',
    credits: 3,
    department: 'Engineering',
    semester: 'SEM1',
    year: '2024',
    enrolled: 150,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Orthographic projection',
      'Isometric drawing',
      'Sectional views',
      'Dimensioning and tolerances',
    ],
  },
  {
    id: 18,
    code: 'GE201',
    name: 'Eng Mathematics',
    instructor: 'Dr. Paul Robinson',
    credits: 4,
    department: 'Engineering',
    semester: 'SEM2',
    year: '2024',
    enrolled: 140,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Linear algebra',
      'Calculus',
      'Differential equations',
      'Probability and statistics',
    ],
  },
  {
    id: 19,
    code: 'GE301',
    name: 'Eng Economics',
    instructor: 'Dr. Susan Taylor',
    credits: 3,
    department: 'Engineering',
    semester: 'SEM1',
    year: '2024',
    enrolled: 130,
    category: 'Core',
    degree: 'B.Tech',
    content: [
      'Cost analysis',
      'Economic evaluation',
      'Project appraisal',
      'Financial management',
    ],
  },
  {
    id: 20,
    code: 'GE401',
    name: 'ProjectManagement',
    instructor: 'Dr. Richard Davis',
    credits: 3,
    department: 'Engineering',
    semester: 'SEM2',
    year: '2024',
    enrolled: 120,
    category: 'Elective',
    degree: 'B.Tech',
    content: [
      'Project planning',
      'Scheduling',
      'Risk management',
      'Quality management',
    ],
  },
];
const Courses = ({ darkMode }) => {
  const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
  const semesters = ['All', 'SEM1', 'SEM2', 'SEM3'];
  // Extract years from courses
  const courseYears = Array.from(new Set(BASE_COURSES.map(c => c.year))).sort();
  const years = ['All', ...courseYears];

  const [department, setDepartment] = useState('All');
  const [semester, setSemester] = useState('All');
  const [year, setYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedView, setSelectedView] = useState('courses');
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [allCourses, setAllCourses] = useState(BASE_COURSES);
  // Persist data with localStorage (on change/load)
  useEffect(() => {
    const stored = localStorage.getItem('allCourses');
    if (stored) setAllCourses(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem('allCourses', JSON.stringify(allCourses));
  }, [allCourses]);
  // Add Course Modal state
  const [isAdding, setIsAdding] = useState(false);
  const [newCourse, setNewCourse] = useState({
    code: '',
    name: '',
    instructor: '',
    credits: 3,
    department: 'Computer Science',
    semester: 'SEM1',
    year: courseYears[0] || '2024',
    enrolled: 0,
    category: 'Core',
    degree: 'B.Tech',
    content: [],
  });
  // Filtering logic
  const filteredCourses = allCourses.filter(course => {
    const departmentMatch = department === 'All' || course.department === department;
    const semesterMatch = semester === 'All' || course.semester === semester;
    const yearMatch = year === 'All' || course.year === year;
    const searchMatch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return departmentMatch && semesterMatch && yearMatch && searchMatch;
  });
  const enrolledCourses = allCourses.filter(course => department === 'All' || course.department === department);
  const totalCredits = enrolledCourses.reduce((sum, course) => sum + course.credits, 0);
  const degreeDistribution = enrolledCourses.reduce((acc, course) => {
    acc[course.degree] = (acc[course.degree] || 0) + 1; return acc;
  }, {});
  const categoryDistribution = enrolledCourses.reduce((acc, course) => {
    acc[course.category] = (acc[course.category] || 0) + 1; return acc;
  }, {});
  // Sample GPA and progress
  const averageGPA = 3.7;
  const completedCourses = 4;
  const totalCourses = 6;
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  // Add Course handler
  const handleAddCourse = (e) => {
    e.preventDefault();
    const newId = (allCourses[allCourses.length - 1]?.id || 0) + 1;
    setAllCourses([...allCourses, { ...newCourse, id: newId }]);
    setNewCourse({
      code: '',
      name: '',
      instructor: '',
      credits: 3,
      department: 'Computer Science',
      semester: 'SEM1',
      year: courseYears[0] || '2024',
      enrolled: 0,
      category: 'Core',
      degree: 'B.Tech',
      content: [],
    });
    setIsAdding(false);
  };
  // Related courses logic: same department or same semester, but not self
  const relatedCourses = (course) =>
    allCourses.filter(
      c =>
        c.id !== course.id &&
        (c.department === course.department || c.semester === course.semester)
    );
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Courses</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 md:mt-0 flex space-x-4"
        >
          <div className={`inline-flex rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <button
              className={`px-4 py-2 text-sm ${selectedView === 'courses' ? `${darkMode ? 'bg-gray-600' : 'bg-white'} font-medium` : ''}`}
              onClick={() => setSelectedView('courses')}
            >
              Courses
            </button>
            <button
              className={`px-4 py-2 text-sm ${selectedView === 'analytics' ? `${darkMode ? 'bg-gray-600' : 'bg-white'} font-medium` : ''}`}
              onClick={() => setSelectedView('analytics')}
            >
              Analytics
            </button>
          </div>
          {selectedView === 'courses' && (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Course
            </button>
          )}
        </motion.div>
      </div>
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center mr-4">
            <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div
              className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <select
                value={department}
                onChange={e => setDepartment(e.target.value)}
                 className={`
    appearance-none bg-transparent py-2 pl-3 pr-10 outline-none
    ${darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'}
  `}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}
                      className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>
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
            <div
              className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <select
                value={semester}
                onChange={e => setSemester(e.target.value)}
                className={`
    appearance-none bg-transparent py-2 pl-3 pr-10 outline-none
    ${darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'}
  `}
              >
                {semesters.map(sem => (
                  <option key={sem} value={sem}
                      className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>
                    {sem}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div
              className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <select
                value={year}
                onChange={e => setYear(e.target.value)}
                className={`
    appearance-none bg-transparent py-2 pl-3 pr-10 outline-none
    ${darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'}
  `}
              >
                {years.map(yr => (
                  <option key={yr} value={yr}
                      className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>
                    {yr}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div
              className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}
            >
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent py-2 px-3 outline-none w-full text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      {selectedView === 'courses' ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className={`p-6 rounded-xl ${
                darkMode
                  ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
                  : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Course List</h2>
                <div
                  className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {filteredCourses.length} courses
                </div>
              </div>
              {filteredCourses.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">No courses found matching your filters.</p>
                </div>
              ) : (
                <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredCourses.map(course => (
                    <motion.div
                      key={course.id}
                      variants={item}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className={`p-4 rounded-xl ${
                        darkMode
                          ? 'bg-gray-700 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]'
                          : 'bg-gray-50 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
                      }`}
                    >
                      {/* Course Summary */}
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold">{course.name}</h3>
                          <p className="text-sm text-gray-400">{course.code}</p>
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode ? 'bg-teal-900/30 text-teal-300' : 'bg-teal-100 text-teal-800'
                          }`}
                        >
                          {course.credits} Credits
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center text-sm">
                          <BookOpenIcon className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{course.department}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <UsersIcon className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{course.semester} - {course.year}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {course.category}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {course.degree}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center text-sm font-medium ${
                            darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'
                          } text-white px-3 py-1.5 rounded-lg`}
                          onClick={() => setExpandedCourseId(expandedCourseId === course.id ? null : course.id)}
                        >
                          {expandedCourseId === course.id ? 'Hide Details' : 'View Details'}{' '}
                          <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                        </motion.button>
                      </div>
                      {/* Detailed Content Section and Related Courses */}
                      {expandedCourseId === course.id && (
                        <div
                          className={`mt-4 p-4 border-t ${
                            darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-200 text-gray-700'
                          }`}
                        >
                          <h4 className="font-semibold mb-2">Course Content:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {course.content && course.content.length > 0 ? (
                              course.content.map((topic, idx) => <li key={idx}>{topic}</li>)
                            ) : (
                              <li>No detailed content available.</li>
                            )}
                          </ul>
                          {/* Related Data */}
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2">Related Courses:</h4>
                            <ul className="list-disc list-inside ml-4 text-sm">
                              {relatedCourses(course).length === 0 ? (
                                <li>No related courses found.</li>
                              ) : (
                                relatedCourses(course).map(rc => (
                                  <li key={rc.id}>
                                    <b>{rc.name}</b> ({rc.code}) – {rc.department}, {rc.semester}
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
          {/* --- The rest of summary/analytics/views/modal unchanged from your current implementation --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-xl ${darkMode
                ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
                : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
              }`}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Course Load Summary</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Total Enrolled Credits</p>
                  <p className="text-2xl font-bold">{totalCredits}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Average GPA</p>
                  <p className="text-2xl font-bold">{averageGPA.toFixed(1)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Course Progress</p>
                  <p className="text-2xl font-bold">
                    {completedCourses}/{totalCourses} Completed
                  </p>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(completedCourses / totalCourses) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-teal-400 to-blue-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-xl ${darkMode
                ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
                : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
              }`}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Enrollment Trends</h2>
              <div className="h-64">
                <EnrollmentTrendsChart darkMode={darkMode} department={department} />
              </div>
            </motion.div>
          </div>
          {isAdding && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
              <div className={`p-6 rounded-xl w-full max-w-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-white text-gray-800'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Add New Course</h2>  
              <button
  type="button"
  className="p-2 rounded"   // Just basic padding and shape, no hover
  onClick={() => setIsAdding(false)}
  aria-label="Close"
>
  <XIcon className="w-6 h-6 text-black" />  {/* Always black icon */}
</button>
                </div>
                <form onSubmit={handleAddCourse} className="space-y-4">
  <input
    type="text"
    placeholder="Course Code"
    value={newCourse.code}
    onChange={e => setNewCourse({ ...newCourse, code: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />
  <input
    type="text"
    placeholder="Course Name"
    value={newCourse.name}
    onChange={e => setNewCourse({ ...newCourse, name: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />
  <input
    type="text"
    placeholder="Instructor"
    value={newCourse.instructor}
    onChange={e => setNewCourse({ ...newCourse, instructor: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  />
  <input
    type="number"
    min="1"
    max="5"
    placeholder="Credits"
    value={newCourse.credits}
    onChange={e =>
      setNewCourse({ ...newCourse, credits: parseInt(e.target.value) })
    }
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
    required
  />
  <select
    value={newCourse.department}
    onChange={e => setNewCourse({ ...newCourse, department: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    <option>Computer Science</option>
    <option>Mechanical</option>
    <option>Electrical</option>
    <option>Engineering</option>
  </select>
  <select
    value={newCourse.semester}
    onChange={e => setNewCourse({ ...newCourse, semester: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    <option>SEM1</option>
    <option>SEM2</option>
    <option>SEM3</option>
  </select>
  <select
    value={newCourse.year}
    onChange={e => setNewCourse({ ...newCourse, year: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    {years.filter(y => y !== 'All').map(y => (
      <option key={y}>{y}</option>
    ))}
  </select>
  <select
    value={newCourse.category}
    onChange={e => setNewCourse({ ...newCourse, category: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    <option>Core</option>
    <option>Elective</option>
  </select>
  <select
    value={newCourse.degree}
    onChange={e => setNewCourse({ ...newCourse, degree: e.target.value })}
    className="w-full px-3 py-2 border rounded 
               bg-white text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  >
    <option>B.Tech</option>
    <option>M.Tech</option>
  </select>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 
               hover:bg-blue-700 
               dark:bg-blue-700 dark:hover:bg-blue-800"
  >
    Save Course
  </button>
</form>
              </div>
            </div>
          )}
        </>
      ) : (
        // Analytics View (unchanged)
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-6 rounded-xl ${darkMode
              ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
              : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Department Subjects Distribution</h2>
            <div className="h-80">
              <DepartmentSubjectsChart darkMode={darkMode} department={department} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-6 rounded-xl ${darkMode
              ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
              : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Course Distribution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">By Degree</h3>
                <div className="space-y-4">
                  {Object.entries(degreeDistribution).map(([degree, count]) => (
                    <div key={degree}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{degree}</span>
                        <span>{count} courses</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(count / enrolledCourses.length) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${degree === 'B.Tech' ? 'bg-blue-500' : 'bg-purple-500'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">By Category</h3>
                <div className="space-y-4">
                  {Object.entries(categoryDistribution).map(([category, count]) => (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{category}</span>
                        <span>{count} courses</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(count / enrolledCourses.length) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${category === 'Core' ? 'bg-teal-500' : 'bg-orange-500'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`p-6 rounded-xl ${darkMode
              ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]'
              : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'} lg:col-span-2`
            }
          >
            <h2 className="text-xl font-semibold mb-6">Department-wise Course Enrollment</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Department
                    </th>
                    <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Total Courses
                    </th>
                    <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Core Courses
                    </th>
                    <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Elective Courses
                    </th>
                    <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      B.Tech Courses
                    </th>
                    <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      M.Tech Courses
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {departments
                    .filter(dept => dept !== 'All')
                    .map(dept => {
                      const deptCourses = allCourses.filter(course => course.department === dept);
                      const coreCourses = deptCourses.filter(course => course.category === 'Core').length;
                      const electiveCourses = deptCourses.filter(course => course.category === 'Elective').length;
                      const btechCourses = deptCourses.filter(course => course.degree === 'B.Tech').length;
                      const mtechCourses = deptCourses.filter(course => course.degree === 'M.Tech').length;
                      return (
                        <tr key={dept} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                          <td className="px-4 py-3 text-sm">{dept}</td>
                          <td className="px-4 py-3 text-sm">{deptCourses.length}</td>
                          <td className="px-4 py-3 text-sm">{coreCourses}</td>
                          <td className="px-4 py-3 text-sm">{electiveCourses}</td>
                          <td className="px-4 py-3 text-sm">{btechCourses}</td>
                          <td className="px-4 py-3 text-sm">{mtechCourses}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Courses;
