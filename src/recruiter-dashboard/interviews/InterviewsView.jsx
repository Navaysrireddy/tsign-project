import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, FilterIcon, PlusIcon, CalendarIcon } from 'lucide-react';
import  InterviewList  from './InterviewList';
import  LineChart  from '../dashboard/chart/LineChart';
import  PieChart  from '../dashboard/chart/PieChart';
import { useData}  from '../context/DataContext';
import  {useTheme } from '../context/ThemeContext';
import  {useModal } from '../context/ModalContext';
import  ScheduleInterviewModal  from './ScheduleInterviewModal';
 
const InterviewsView = () => {
  const { data } = useData();
  const { theme } = useTheme();
  const { isScheduleInterviewOpen, openScheduleInterview, closeScheduleInterview } = useModal();
  const isDarkMode = theme === 'dark';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // New state for chart filters
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
   
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
    { value: 'Scheduled', label: 'Scheduled' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Completed', label: 'Completed' },
    { value: 'No Show', label: 'No Show' }
  ];

  // Generate years (from 2020 to current year + 1)
  const years = Array.from({ length: new Date().getFullYear() - 2019 + 1 }, 
    (_, i) => 2020 + i
  );

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Filter interviews based on search and filters
  const filteredInterviews = data.interviews.filter(interview => {
    const matchesSearch =
      searchQuery === '' ||
      interview.candidate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interview.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || interview.dept === selectedDepartment;
    const matchesCourse = selectedCourse === 'all' || interview.course === selectedCourse;
    const matchesStatus = selectedStatus === 'all' || interview.status === selectedStatus;
    return matchesSearch && matchesDepartment && matchesCourse && matchesStatus;
  });

  // Process data for the line chart based on selected filters
  const lineChartData = useMemo(() => {
    // This is a placeholder - you'll need to adjust based on your actual data structure
    // Filter interviews by selected year and month
    const filteredByDate = data.interviews.filter(interview => {
      const interviewDate = new Date(interview.date);
      return interviewDate.getFullYear() === selectedYear && 
             interviewDate.getMonth() + 1 === selectedMonth;
    });
    
    // Group by week or day based on your preference
    // This example groups by week
    const weeks = {};
    filteredByDate.forEach(interview => {
      const interviewDate = new Date(interview.date);
      const weekNumber = Math.ceil(interviewDate.getDate() / 7);
      weeks[weekNumber] = (weeks[weekNumber] || 0) + 1;
    });
    
    // Format for the chart
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const chartData = [weeks[1] || 0, weeks[2] || 0, weeks[3] || 0, weeks[4] || 0];
    
    return {
      labels,
      datasets: [
        {
          label: 'Interviews',
          data: chartData,
          borderColor: isDarkMode ? 'rgba(45, 212, 191, 0.8)' : 'rgba(20, 184, 166, 0.8)',
          backgroundColor: isDarkMode 
            ? 'rgba(45, 212, 191, 0.2)' 
            : 'rgba(20, 184, 166, 0.2)',
          tension: 0.4,
          fill: true
        }
      ]
    };
  }, [data.interviews, selectedYear, selectedMonth, isDarkMode]);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.h2 variants={itemVariants} className="text-2xl font-bold">
          Interviews
        </motion.h2>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={openScheduleInterview}
          className="
            flex items-center gap-2 px-4 py-2 rounded-lg
            bg-gradient-to-r from-teal-500 to-emerald-500 text-white
            shadow-[3px_3px_6px_rgba(0,0,0,0.1)]
            transition-transform
          "
        >
          <PlusIcon size={18} />
          <span>Schedule Interview</span>
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
          <div
            className={`
              relative flex items-center flex-1
              ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'}
              backdrop-blur-md rounded-lg px-4 py-2
            `}
          >
            <SearchIcon size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search by candidate or position..."
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

      {/* Interviews List */}
      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
        `}
      >
        <InterviewList interviews={filteredInterviews} />
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Interview Trends</h3>
            <div className="flex items-center gap-2">
              <CalendarIcon size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(parseInt(e.target.value))}
                className={`
                  rounded-lg px-2 py-1 text-sm
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border shadow-sm
                `}
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                value={selectedMonth}
                onChange={e => setSelectedMonth(parseInt(e.target.value))}
                className={`
                  rounded-lg px-2 py-1 text-sm
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border shadow-sm
                `}
              >
                {months.map(month => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="h-80">
            <LineChart
              labels={lineChartData.labels}
              datasets={lineChartData.datasets}
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
          <h3 className="font-medium mb-4">Interview Outcomes</h3>
          <div className="h-80">
            <PieChart
              labels={data.interviewOutcomes.labels}
              datasets={[
                {
                  data:
                    data.interviewOutcomes.datasets[
                      selectedDepartment === 'all'
                        ? 'Engineering (CSE)'
                        : `${selectedDepartment}${selectedCourse !== 'all' ? ` (${selectedCourse})` : ''}`
                    ] || data.interviewOutcomes.datasets['Engineering (CSE)'],
                  backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(234, 179, 8, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(239, 68, 68, 0.8)' // No Show - Red
                  ]
                }
              ]}
            />
          </div>
        </motion.div>
      </div>

      {/* Schedule Interview Modal */}
      <ScheduleInterviewModal isOpen={isScheduleInterviewOpen} onClose={closeScheduleInterview} />
    </motion.div>
  );
};
export default InterviewsView;