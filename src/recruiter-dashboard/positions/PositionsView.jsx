import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, PlusIcon, FilterIcon } from 'lucide-react';
import PositionCard  from './PositionCard';
import BarChart  from '../dashboard/chart/BarChart';
import LineChart  from '../dashboard/chart/LineChart';
import  {useData}  from '../context/DataContext';
import  {useTheme}  from '../context/ThemeContext';
import  {useModal}  from '../context/ModalContext';
import AddPositionModal  from './AddPositionModal';
 
const PositionsView = () => {
  const { data } = useData();
  const { theme } = useTheme();
  const { isAddPositionOpen, openAddPosition, closeAddPosition } = useModal();
  const isDarkMode = theme === 'dark';
 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
 
  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Mechanical', label: 'Mechanical' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Computer Science', label: 'Computer Science' }
  ];
 
  const courses = [
    { value: 'all', label: 'All Courses' },
    { value: 'CSE', label: 'CSE' },
    { value: 'ECE', label: 'ECE' },
    { value: 'IT', label: 'IT' },
    { value: 'Business', label: 'Business' }
  ];
 
  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'Open', label: 'Open' },
    { value: 'Closed', label: 'Closed' }
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };
 
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
 
  // Filter positions based on search and filters
  const filteredPositions = data.positions.filter(position => {
    const matchesSearch = searchQuery === '' || position.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || position.dept === selectedDepartment;
    const matchesCourse = selectedCourse === 'all' || position.course === selectedCourse;
    const matchesStatus = selectedStatus === 'all' || position.status === selectedStatus;
    return matchesSearch && matchesDepartment && matchesCourse && matchesStatus;
  });
 
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.h2 variants={itemVariants} className="text-2xl font-bold">
          Positions
        </motion.h2>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={openAddPosition}
          className="
            flex items-center gap-2 px-4 py-2 rounded-lg
            bg-gradient-to-r from-violet-500 to-purple-500 text-white
            shadow-[3px_3px_6px_rgba(0,0,0,0.1)]
            transition-transform
          "
        >
          <PlusIcon size={18} />
          <span>Add Position</span>
        </motion.button>
      </div>
 
      {/* Search and Filters */}
      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className={`
            relative flex items-center flex-1
            ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}
            backdrop-blur-md rounded-lg px-4 py-2
          `}>
            <SearchIcon size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search positions..."
              className={`
                w-full bg-transparent border-none outline-none px-3
                ${isDarkMode ? 'placeholder:text-gray-500 text-white' : 'placeholder:text-gray-400 text-gray-800'}
              `}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
              transition-colors
            `}
          >
            <FilterIcon size={18} />
            <span>Filters</span>
          </motion.button>
        </div>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <select
              value={selectedDepartment}
              onChange={e => setSelectedDepartment(e.target.value)}
              className={`
                rounded-lg px-3 py-2 text-sm
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                border shadow-sm backdrop-blur-md
              `}
            >
              {departments.map(dept => (
                <option key={dept.value} value={dept.value}>
                  {dept.label}
                </option>
              ))}
            </select>
            <select
              value={selectedCourse}
              onChange={e => setSelectedCourse(e.target.value)}
              className={`
                rounded-lg px-3 py-2 text-sm
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                border shadow-sm backdrop-blur-md
              `}
            >
              {courses.map(course => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className={`
                rounded-lg px-3 py-2 text-sm
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                border shadow-sm backdrop-blur-md
              `}
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </motion.div>
        )}
      </motion.div>
 
      {/* Positions Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPositions.map(position => (
          <PositionCard key={position.id} position={position} />
        ))}
        {filteredPositions.length === 0 && (
          <div
            className={`
              col-span-full flex items-center justify-center p-8 rounded-xl
              ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}
              shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]
            `}
          >
            No positions found matching your criteria
          </div>
        )}
      </motion.div>
 
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className={`
            rounded-xl overflow-hidden
            ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
            p-5
          `}
        >
          <h3 className="font-medium mb-4">Applications per Position</h3>
          <div className="h-80">
            <BarChart
              labels={Object.keys(data.positionApplications)}
              datasets={[
                {
                  label: 'Applications',
                  data: Object.values(data.positionApplications),
                  backgroundColor: isDarkMode
                    ? [
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(139, 92, 246, 0.7)',
                        'rgba(139, 92, 246, 0.6)',
                        'rgba(139, 92, 246, 0.5)',
                        'rgba(139, 92, 246, 0.4)',
                        'rgba(139, 92, 246, 0.3)',
                        'rgba(139, 92, 246, 0.2)'
                      ]
                    : [
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(124, 58, 237, 0.7)',
                        'rgba(124, 58, 237, 0.6)',
                        'rgba(124, 58, 237, 0.5)',
                        'rgba(124, 58, 237, 0.4)',
                        'rgba(124, 58, 237, 0.3)',
                        'rgba(124, 58, 237, 0.2)'
                      ]
                }
              ]}
            />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`
            rounded-xl overflow-hidden
            ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
            p-5
          `}
        >
          <h3 className="font-medium mb-4">Fill Rate Over Time (2020-2025)</h3>
          <div className="h-80">
            <LineChart
              labels={data.fillRateOverTime.labels}
              datasets={[
                {
                  label: 'Fill Rate',
                  data:
                    data.fillRateOverTime.datasets[
                      selectedDepartment === 'all'
                        ? 'Engineering (CSE)'
                        : `${selectedDepartment}${selectedCourse !== 'all' ? ` (${selectedCourse})` : ''}`
                    ] || data.fillRateOverTime.datasets['Engineering (CSE)'],
                  borderColor: isDarkMode ? '#a855f7' : '#7c3aed',
                  backgroundColor: isDarkMode ? 'rgba(168, 85, 247, 0.1)' : 'rgba(124, 58, 237, 0.1)'
                }
              ]}
            />
          </div>
        </motion.div>
      </div>
 
      {/* Add Position Modal */}
      <AddPositionModal isOpen={isAddPositionOpen} onClose={closeAddPosition} />
    </motion.div>
  );
};
 
export default PositionsView;
 
 
