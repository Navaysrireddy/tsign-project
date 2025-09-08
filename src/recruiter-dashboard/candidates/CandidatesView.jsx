import React, { useState, useMemo } from 'react';

import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import { SearchIcon, FilterIcon, DownloadIcon, MailIcon, CheckIcon, XIcon } from 'lucide-react';

import CandidateTable from './CandidateTable';

import { useData } from '../context/DataContext';

import { useTheme } from '../context/ThemeContext';

import { useModal } from '../context/ModalContext';

import ExportModal from './ExportModel';

import CandidateActionModal from './CandidateActionModal';

const CandidatesView = () => {
  const navigate = useNavigate();

  const { data } = useData();

  const { theme } = useTheme();

  const {
    isExportOpen,
    openExport,
    closeExport,
    isCandidateActionOpen,
    selectedCandidate,
    selectedAction,
    openCandidateAction,
    closeCandidateAction,
  } = useModal();

  const isDarkMode = theme === 'dark';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedCollege, setSelectedCollege] = useState('all'); // Added college filter state
  const [selectedCGPA, setSelectedCGPA] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Mechanical', label: 'Mechanical' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Computer Science', label: 'Computer Science' },
  ];

  const courses = [
    { value: 'all', label: 'All Courses' },
    { value: 'CSE', label: 'CSE' },
    { value: 'ECE', label: 'ECE' },
    { value: 'IT', label: 'IT' },
    { value: 'Business', label: 'Business' },
  ];

  const cgpaRanges = [
    { value: 'all', label: 'All CGPA' },
    { value: '<6', label: 'Below 6' },
    { value: '6-7', label: '6 - 7' },
    { value: '7-8', label: '7 - 8' },
    { value: '8+', label: 'Above 8' },
  ];

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'Selected', label: 'Selected' },
    { value: 'Rejected', label: 'Rejected' },
    { value: 'Interviewed', label: 'Interviewed' },
    { value: 'In Review', label: 'In Review' },
  ];

  // Extract distinct colleges from candidates for the dropdown
  const colleges = useMemo(() => {
    const collegeSet = new Set(data.candidates.map(c => c.college).filter(Boolean));
    return [{ value: 'all', label: 'All Colleges' }, ...Array.from(collegeSet).map(c => ({ value: c, label: c }))];
  }, [data.candidates]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Filter candidates based on search and filters including college filter
  const filteredCandidates = data.candidates.filter(candidate => {
    const matchesSearch =
      searchQuery === '' ||
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment = selectedDepartment === 'all' || candidate.dept === selectedDepartment;

    const matchesCourse = selectedCourse === 'all' || candidate.course === selectedCourse;

    const matchesCollege = selectedCollege === 'all' || candidate.college === selectedCollege;

    let matchesCGPA = true;
    if (selectedCGPA !== 'all') {
      if (selectedCGPA === '<6') matchesCGPA = candidate.cgpa < 6;
      else if (selectedCGPA === '6-7') matchesCGPA = candidate.cgpa >= 6 && candidate.cgpa < 7;
      else if (selectedCGPA === '7-8') matchesCGPA = candidate.cgpa >= 7 && candidate.cgpa < 8;
      else if (selectedCGPA === '8+') matchesCGPA = candidate.cgpa >= 8;
    }

    const matchesStatus = selectedStatus === 'all' || candidate.status === selectedStatus;

    return matchesSearch && matchesDepartment && matchesCourse && matchesCollege && matchesCGPA && matchesStatus;
  });

  const handleEmailSelected = () => {
    if (selectedCandidates.length === 0) return;
    if (selectedCandidates.length === 1) {
      openCandidateAction(selectedCandidates[0], 'email');
    } else {
      console.log('Bulk email for', selectedCandidates);
    }
  };

  const handleShortlistSelected = () => {
    if (selectedCandidates.length === 0) return;
    if (selectedCandidates.length === 1) {
      openCandidateAction(selectedCandidates[0], 'shortlist');
    } else {
      console.log('Bulk shortlist for', selectedCandidates);
    }
  };

  const handleRejectSelected = () => {
    if (selectedCandidates.length === 0) return;
    if (selectedCandidates.length === 1) {
      openCandidateAction(selectedCandidates[0], 'reject');
    } else {
      console.log('Bulk reject for', selectedCandidates);
    }
  };

  const handleViewDetails = candidateId => {
    navigate(`/recruiter/candidates/${candidateId}/details`);
  };

  const handleViewAnalysis = candidateId => {
    navigate(`/recruiter/candidates/${candidateId}/analysis`);
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <motion.h2 variants={itemVariants} className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Candidates
        </motion.h2>
      </div>

      {/* Search and Filters */}
      <motion.div
        variants={itemVariants}
        className={`rounded-xl overflow-hidden ${
          isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'
        } p-5`}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div
            className={`relative flex items-center flex-1 ${
              isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
            } backdrop-blur-md rounded-lg px-4 py-2`}
          >
            <SearchIcon size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search by name, email or roll no..."
              className={`w-full bg-transparent border-none outline-none px-3 ${
                isDarkMode ? 'placeholder:text-gray-500 text-white' : 'placeholder:text-gray-400 text-gray-800'
              }`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors`}
          >
            <FilterIcon size={18} />
            <span>Filters</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={openExport}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors`}
          >
            <DownloadIcon size={18} />
            <span>Export</span>
          </motion.button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" // increased to 5 columns for new filter
          >
            <select
              value={selectedDepartment}
              onChange={e => setSelectedDepartment(e.target.value)}
              className={`rounded-lg px-3 py-2 text-sm ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              } border shadow-sm backdrop-blur-md`}
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
              className={`rounded-lg px-3 py-2 text-sm ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              } border shadow-sm backdrop-blur-md`}
            >
              {courses.map(course => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>

            {/* College filter dropdown */}
            <select
              value={selectedCollege}
              onChange={e => setSelectedCollege(e.target.value)}
              className={`rounded-lg px-3 py-2 text-sm ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              } border shadow-sm backdrop-blur-md`}
            >
              {colleges.map(college => (
                <option key={college.value} value={college.value}>
                  {college.label}
                </option>
              ))}
            </select>

            <select
              value={selectedCGPA}
              onChange={e => setSelectedCGPA(e.target.value)}
              className={`rounded-lg px-3 py-2 text-sm ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              } border shadow-sm backdrop-blur-md`}
            >
              {cgpaRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className={`rounded-lg px-3 py-2 text-sm ${
                isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              } border shadow-sm backdrop-blur-md`}
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

      {/* Bulk Actions */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleEmailSelected}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            selectedCandidates.length === 0
              ? 'bg-gradient-to-r from-blue-400 to-indigo-400 text-white opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg'
          } shadow-[3px_3px_6px_rgba(0,0,0,0.1)] transition-all`}
          disabled={selectedCandidates.length === 0}
        >
          <MailIcon size={18} />
          <span>Email Selected</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleShortlistSelected}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            selectedCandidates.length === 0
              ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg'
          } shadow-[3px_3px_6px_rgba(0,0,0,0.1)] transition-all`}
          disabled={selectedCandidates.length === 0}
        >
          <CheckIcon size={18} />
          <span>Shortlist Selected</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleRejectSelected}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            selectedCandidates.length === 0
              ? 'bg-gradient-to-r from-red-400 to-rose-400 text-white opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:shadow-lg'
          } shadow-[3px_3px_6px_rgba(0,0,0,0.1)] transition-all`}
          disabled={selectedCandidates.length === 0}
        >
          <XIcon size={18} />
          <span>Reject Selected</span>
        </motion.button>
      </motion.div>

      {/* Candidates Table */}
      <motion.div
        variants={itemVariants}
        className={`rounded-xl overflow-hidden ${
          isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'
        }`}
      >
        <CandidateTable
          candidates={filteredCandidates}
          selectedCandidates={selectedCandidates}
          setSelectedCandidates={setSelectedCandidates}
          onViewDetails={handleViewDetails}
          onViewAnalysis={handleViewAnalysis}
        />
      </motion.div>

      {/* Modals */}
      <ExportModal isOpen={isExportOpen} onClose={closeExport} selectedCandidates={selectedCandidates} />
      <CandidateActionModal
        isOpen={isCandidateActionOpen}
        onClose={closeCandidateAction}
        candidateId={selectedCandidate}
        action={selectedAction}
      />
    </motion.div>
  );
};

export default CandidatesView;
