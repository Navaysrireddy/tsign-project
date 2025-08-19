import React, { useState } from 'react';
import { BookOpenIcon, FilterIcon, SortAscIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
 
const CourseCard = ({
  title,
  instructor,
  progress,
  credits,
  description,
  schedule,
  syllabus
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
            <BookOpenIcon className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {instructor}</p>
          </div>
        </div>
        {/* {grade && (
          <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium">
            Grade: {grade}
          </div>
        )} */}
      </div>
      <div className="mt-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="text-sm text-gray-500 dark:text-gray-400">Credits: {credits}</div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="px-3 py-1 text-sm font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
      </div>
 
      {/* Course Details */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          {description && (
            <div className="mb-4">
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Description</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          )}
          {schedule && (
            <div className="mb-4">
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Schedule</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{schedule}</p>
            </div>
          )}
          {syllabus && syllabus.length > 0 && (
            <div>
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Syllabus</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {syllabus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4 flex justify-end space-x-2">
            <button className="px-3 py-1 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
              Course Materials
            </button>
            <button className="px-3 py-1 text-sm font-medium rounded-md bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200">
              Discussion Forum
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
 
const Courses = () => {
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterActive, setFilterActive] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    withGrades: false,
    inProgress: false,
    completed: false,
    credits: 'all'
  });
 
  const courses = [
    {
      id: 'cs101',
      title: 'CS101: Introduction to Programming',
      instructor: 'Dr. Alan Turing',
      progress: 85,
      credits: 4,
      grade: 'A',
      description:
        'An introductory course to programming concepts using Python. Covers basic syntax, data structures, algorithms, and problem-solving techniques.',
      schedule: 'Mon, Wed, Fri 10:00 AM - 11:30 AM',
      syllabus: [
        'Introduction to Programming Concepts',
        'Variables and Data Types',
        'Control Structures',
        'Functions and Modules',
        'Object-Oriented Programming',
        'Data Structures',
        'File I/O',
        'Error Handling'
      ]
    },
    {
      id: 'cs201',
      title: 'CS201: Data Structures',
      instructor: 'Dr. Jane Smith',
      progress: 72,
      credits: 4,
      grade: 'B+',
      description:
        'A comprehensive study of data structures and their applications. Includes analysis of algorithms and implementation strategies.',
      schedule: 'Tue, Thu 1:00 PM - 3:00 PM',
      syllabus: [
        'Algorithm Analysis',
        'Arrays and Linked Lists',
        'Stacks and Queues',
        'Trees and Graphs',
        'Hashing',
        'Heaps',
        'Sorting Algorithms',
        'Advanced Data Structures'
      ]
    },
    {
      id: 'cs301',
      title: 'CS301: Algorithms',
      instructor: 'Prof. John Doe',
      progress: 60,
      credits: 4,
      description:
        'Advanced algorithms and their analysis. Covers algorithmic paradigms, complexity theory, and optimization techniques.',
      schedule: 'Mon, Wed 3:30 PM - 5:30 PM',
      syllabus: [
        'Algorithm Design Paradigms',
        'Divide and Conquer',
        'Greedy Algorithms',
        'Dynamic Programming',
        'Graph Algorithms',
        'NP-Completeness',
        'Approximation Algorithms',
        'Randomized Algorithms'
      ]
    },
    {
      id: 'cs401',
      title: 'CS401: Machine Learning',
      instructor: 'Dr. Ada Lovelace',
      progress: 45,
      credits: 3,
      description:
        'Introduction to machine learning concepts and algorithms. Covers supervised and unsupervised learning, neural networks, and practical applications.',
      schedule: 'Tue, Thu 9:00 AM - 11:00 AM',
      syllabus: [
        'Introduction to Machine Learning',
        'Supervised Learning',
        'Unsupervised Learning',
        'Neural Networks',
        'Deep Learning',
        'Reinforcement Learning',
        'Evaluation Metrics',
        'Practical Applications'
      ]
    },
    {
      id: 'math201',
      title: 'MATH201: Discrete Mathematics',
      instructor: 'Prof. Euclid',
      progress: 90,
      credits: 3,
      grade: 'A-',
      description:
        'Mathematical structures and techniques essential for computer science. Includes logic, set theory, combinatorics, and graph theory.',
      schedule: 'Mon, Wed, Fri 2:00 PM - 3:00 PM',
      syllabus: [
        'Logic and Proofs',
        'Set Theory',
        'Relations and Functions',
        'Combinatorics',
        'Graph Theory',
        'Number Theory',
        'Recurrence Relations',
        'Boolean Algebra'
      ]
    },
    {
      id: 'eng101',
      title: 'ENG101: Technical Writing',
      instructor: 'Dr. William Shakespeare',
      progress: 95,
      credits: 2,
      grade: 'A',
      description:
        'Effective communication techniques for technical contexts. Covers reports, documentation, presentations, and professional correspondence.',
      schedule: 'Fri 10:00 AM - 12:00 PM',
      syllabus: [
        'Principles of Technical Writing',
        'Document Structure',
        'Technical Reports',
        'User Documentation',
        'Technical Presentations',
        'Professional Correspondence',
        'Graphics and Visual Aids',
        'Ethical Considerations'
      ]
    }
  ];
 
  // Filter courses based on selected options
  const filteredCourses = courses.filter(course => {
    if (filterOptions.withGrades && !course.grade) return false;
    if (filterOptions.inProgress && course.progress >= 100) return false;
    if (filterOptions.completed && course.progress < 100) return false;
    if (filterOptions.credits !== 'all' && course.credits !== parseInt(filterOptions.credits)) return false;
    return true;
  });
 
  // Sort courses based on selected options
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'title') {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortBy === 'progress') {
      return sortOrder === 'asc' ? a.progress - b.progress : b.progress - a.progress;
    } else {
      return sortOrder === 'asc' ? a.credits - b.credits : b.credits - a.credits;
    }
  });
 
  const handleSort = (by) => {
    if (sortBy === by) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(by);
      setSortOrder('asc');
    }
    setShowSortOptions(false);
  };
 
  const handleFilterChange = (key, value) => {
    setFilterOptions(prev => ({
      ...prev,
      [key]: value
    }));
    setFilterActive(true);
  };
 
  const resetFilters = () => {
    setFilterOptions({
      withGrades: false,
      inProgress: false,
      completed: false,
      credits: 'all'
    });
    setFilterActive(false);
    setShowFilterOptions(false);
  };
 
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">My Courses</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <button
              onClick={() => {
                setShowFilterOptions(!showFilterOptions);
                setShowSortOptions(false);
              }}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium ${
                filterActive
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
              } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200`}
            >
              <FilterIcon className="w-4 h-4" />
              <span>Filter</span>
              {filterActive && <span className="ml-1 w-2 h-2 rounded-full bg-blue-500"></span>}
            </button>
            {showFilterOptions && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-medium text-gray-800 dark:text-white">Filters</h3>
                  <button onClick={resetFilters} className="text-xs text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                    Reset
                  </button>
                </div>
                <div className="p-3 space-y-3">
                  <div className="flex items-center">
                    <input
                      id="withGrades"
                      type="checkbox"
                      checked={filterOptions.withGrades}
                      onChange={() => handleFilterChange('withGrades', !filterOptions.withGrades)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="withGrades" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      With Grades
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="inProgress"
                      type="checkbox"
                      checked={filterOptions.inProgress}
                      onChange={() => handleFilterChange('inProgress', !filterOptions.inProgress)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="inProgress" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      In Progress
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="completed"
                      type="checkbox"
                      checked={filterOptions.completed}
                      onChange={() => handleFilterChange('completed', !filterOptions.completed)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="completed" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Completed
                    </label>
                  </div>
                  <div>
                    <label htmlFor="credits" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                      Credits
                    </label>
                    <select
                      id="credits"
                      value={filterOptions.credits}
                      onChange={e => handleFilterChange('credits', e.target.value)}
                      className="w-full p-2 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md"
                    >
                      <option value="all">All Credits</option>
                      <option value="2">2 Credits</option>
                      <option value="3">3 Credits</option>
                      <option value="4">4 Credits</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setShowFilterOptions(false)}
                    className="w-full py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                setShowSortOptions(!showSortOptions);
                setShowFilterOptions(false);
              }}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <SortAscIcon className="w-4 h-4" />
              <span>Sort</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            {showSortOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                <div className="p-2">
                  <button
                    onClick={() => handleSort('title')}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    <span>Course Title</span>
                    {sortBy === 'title' && <span className="text-blue-500">{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                  </button>
                  <button
                    onClick={() => handleSort('progress')}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    <span>Progress</span>
                    {sortBy === 'progress' && <span className="text-blue-500">{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                  </button>
                  <button
                    onClick={() => handleSort('credits')}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    <span>Credits</span>
                    {sortBy === 'credits' && <span className="text-blue-500">{sortOrder === 'asc' ? '↑' : '↓'}</span>}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {filterActive && (
        <div className="flex items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {filterOptions.withGrades && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                With Grades
                <button onClick={() => handleFilterChange('withGrades', false)} className="ml-1 focus:outline-none">
                  <XIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filterOptions.inProgress && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                In Progress
                <button onClick={() => handleFilterChange('inProgress', false)} className="ml-1 focus:outline-none">
                  <XIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filterOptions.completed && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                Completed
                <button onClick={() => handleFilterChange('completed', false)} className="ml-1 focus:outline-none">
                  <XIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filterOptions.credits !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {filterOptions.credits} Credits
                <button onClick={() => handleFilterChange('credits', 'all')} className="ml-1 focus:outline-none">
                  <XIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            <button onClick={resetFilters} className="text-xs text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
              Clear All
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCourses.map(course => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            instructor={course.instructor}
            progress={course.progress}
            credits={course.credits}
            grade={course.grade}
            description={course.description}
            schedule={course.schedule}
            syllabus={course.syllabus}
          />
        ))}
      </div>
      {sortedCourses.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No courses match your filters.</p>
          <button onClick={resetFilters} className="mt-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
 
export default Courses;