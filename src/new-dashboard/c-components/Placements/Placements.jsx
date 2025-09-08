import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  BuildingIcon,
  TrendingUpIcon,
  IndianRupeeIcon,
  FilterIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  XIcon,
} from 'lucide-react';
import CompanyWisePlacementsChart from './CompanyWisePlacementsChart';
import SalaryDistributionChart from './SalaryDistributionChart';
import DepartmentPlacementKPI from './DepartmentPlacementKPI';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Placements = ({ darkMode }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCompanies, setExpandedCompanies] = useState(new Set());
  const [shownStudents, setShownStudents] = useState({});
  const [studentStatusFilter, setStudentStatusFilter] = useState('All'); // New filter state
  const initialShownCount = 5;

  const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
  const studentStatusOptions = ['All', 'Placed', 'Shortlisted', 'Rejected'];

  const placementData = {
    totalPlacements:
      selectedDepartment === 'All'
        ? 750
        : selectedDepartment === 'Computer Science'
        ? 320
        : selectedDepartment === 'Mechanical'
        ? 180
        : selectedDepartment === 'Electrical'
        ? 150
        : 200,
    placementPercentage:
      selectedDepartment === 'All'
        ? 86
        : selectedDepartment === 'Computer Science'
        ? 92
        : selectedDepartment === 'Mechanical'
        ? 78
        : selectedDepartment === 'Electrical'
        ? 82
        : 84,
    averageSalary:
      selectedDepartment === 'All'
        ? 850000
        : selectedDepartment === 'Computer Science'
        ? 1200000
        : selectedDepartment === 'Mechanical'
        ? 700000
        : selectedDepartment === 'Electrical'
        ? 800000
        : 750000,
    highestSalary:
      selectedDepartment === 'All'
        ? 3800000
        : selectedDepartment === 'Computer Science'
        ? 3800000
        : selectedDepartment === 'Mechanical'
        ? 2200000
        : selectedDepartment === 'Electrical'
        ? 2500000
        : 2800000,
    topCompanies: [
      { name: 'Google', placements: 42, departments: ['Computer Science', 'Electrical'] },
      { name: 'Microsoft', placements: 38, departments: ['Computer Science', 'Engineering'] },
      { name: 'Amazon', placements: 35, departments: ['Computer Science', 'Electrical', 'Engineering'] },
      { name: 'TCS', placements: 65, departments: ['Computer Science', 'Electrical', 'Engineering'] },
      { name: 'Infosys', placements: 60, departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical'] },
      { name: 'Wipro', placements: 55, departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical'] },
      { name: 'Accenture', placements: 50, departments: ['Computer Science', 'Electrical', 'Engineering'] },
      { name: 'IBM', placements: 45, departments: ['Computer Science', 'Electrical', 'Engineering'] },
      { name: 'Cognizant', placements: 40, departments: ['Computer Science', 'Electrical', 'Engineering'] },
      { name: 'Capgemini', placements: 35, departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical'] },
      { name: 'Tata Motors', placements: 25, departments: ['Mechanical', 'Engineering'] },
      { name: 'L&T', placements: 30, departments: ['Mechanical', 'Electrical', 'Engineering'] },
      { name: 'Reliance', placements: 20, departments: ['Mechanical', 'Electrical', 'Engineering'] },
      { name: 'BHEL', placements: 15, departments: ['Mechanical', 'Electrical'] },
      { name: 'Siemens', placements: 18, departments: ['Electrical', 'Engineering'] },
    ],
  };

  const studentPlacementData = {
    Google: [
      { name: 'Alice', email: 'alice@example.com', tsign: 'TS1234', status: 'Placed' },
      { name: 'Bob', email: 'bob@example.com', tsign: 'TS2345', status: 'Shortlisted' },
      { name: 'Charlie', email: 'charlie@example.com', tsign: 'TS3456', status: 'Rejected' },
      { name: 'Diana', email: 'diana@example.com', tsign: 'TS4567', status: 'Placed' },
    ],
    Microsoft: [
      { name: 'David', email: 'david@example.com', tsign: 'TS5678', status: 'Placed' },
      { name: 'Eve', email: 'eve@example.com', tsign: 'TS6789', status: 'Placed' },
      { name: 'Frank', email: 'frank@example.com', tsign: 'TS7890', status: 'Rejected' },
    ],
    Amazon: [
      { name: 'Grace', email: 'grace@example.com', tsign: 'TS8901', status: 'Shortlisted' },
      { name: 'Heidi', email: 'heidi@example.com', tsign: 'TS9012', status: 'Placed' },
      { name: 'Ivan', email: 'ivan@example.com', tsign: 'TS0123', status: 'Rejected' },
      { name: 'Judy', email: 'judy@example.com', tsign: 'TS1235', status: 'Placed' },
    ],
    TCS: [
      { name: 'Kevin', email: 'kevin@example.com', tsign: 'TS2234', status: 'Placed' },
      { name: 'Laura', email: 'laura@example.com', tsign: 'TS3345', status: 'Placed' },
      { name: 'Mallory', email: 'mallory@example.com', tsign: 'TS4456', status: 'Shortlisted' },
      { name: 'John', email: 'john@example.com', tsign: 'TS5567', status: 'Placed' },
      { name: 'Jane', email: 'jane@example.com', tsign: 'TS6678', status: 'Placed' },
      { name: 'Doe', email: 'doe@example.com', tsign: 'TS7789', status: 'Rejected' },
      { name: 'Smith', email: 'smith@example.com', tsign: 'TS8890', status: 'Placed' },
    ],
    Infosys: [
      { name: 'Niaj', email: 'niaj@example.com', tsign: 'TS5567', status: 'Placed' },
      { name: 'Olivia', email: 'olivia@example.com', tsign: 'TS6678', status: 'Rejected' },
      { name: 'Peggy', email: 'peggy@example.com', tsign: 'TS7789', status: 'Placed' },
    ],
    Wipro: [
      { name: 'Aarav', email: 'aarav@example.com', tsign: 'TS9901', status: 'Placed' },
      { name: 'Meena', email: 'meena@example.com', tsign: 'TS9902', status: 'Shortlisted' },
      { name: 'Rahul', email: 'rahul@example.com', tsign: 'TS9903', status: 'Rejected' },
    ],
    Accenture: [
      { name: 'Sneha', email: 'sneha@example.com', tsign: 'TS9911', status: 'Placed' },
      { name: 'Kiran', email: 'kiran@example.com', tsign: 'TS9912', status: 'Placed' },
      { name: 'Abhay', email: 'abhay@example.com', tsign: 'TS9913', status: 'Shortlisted' },
    ],
    IBM: [
      { name: 'Rohit', email: 'rohit@example.com', tsign: 'TS9921', status: 'Placed' },
      { name: 'Priya', email: 'priya@example.com', tsign: 'TS9922', status: 'Rejected' },
      { name: 'Anil', email: 'anil@example.com', tsign: 'TS9923', status: 'Placed' },
    ],
    Cognizant: [
      { name: 'Varun', email: 'varun@example.com', tsign: 'TS9931', status: 'Placed' },
      { name: 'Simran', email: 'simran@example.com', tsign: 'TS9932', status: 'Rejected' },
      { name: 'Manoj', email: 'manoj@example.com', tsign: 'TS9933', status: 'Shortlisted' },
    ],
    Capgemini: [
      { name: 'Akash', email: 'akash@example.com', tsign: 'TS9941', status: 'Placed' },
      { name: 'Ritika', email: 'ritika@example.com', tsign: 'TS9942', status: 'Placed' },
      { name: 'Sandeep', email: 'sandeep@example.com', tsign: 'TS9943', status: 'Rejected' },
    ],
    'Tata Motors': [
      { name: 'Harsha', email: 'harsha@example.com', tsign: 'TS9951', status: 'Shortlisted' },
      { name: 'Deepak', email: 'deepak@example.com', tsign: 'TS9952', status: 'Placed' },
      { name: 'Neha', email: 'neha@example.com', tsign: 'TS9953', status: 'Rejected' },
    ],
    'L&T': [
      { name: 'Arjun', email: 'arjun@example.com', tsign: 'TS9961', status: 'Placed' },
      { name: 'Chitra', email: 'chitra@example.com', tsign: 'TS9962', status: 'Placed' },
      { name: 'Ramesh', email: 'ramesh@example.com', tsign: 'TS9963', status: 'Shortlisted' },
    ],
    Reliance: [
      { name: 'Pooja', email: 'pooja@example.com', tsign: 'TS9971', status: 'Rejected' },
      { name: 'Sahil', email: 'sahil@example.com', tsign: 'TS9972', status: 'Placed' },
      { name: 'Nisha', email: 'nisha@example.com', tsign: 'TS9973', status: 'Placed' },
    ],
    BHEL: [
      { name: 'Vikram', email: 'vikram@example.com', tsign: 'TS9981', status: 'Placed' },
      { name: 'Swati', email: 'swati@example.com', tsign: 'TS9982', status: 'Rejected' },
      { name: 'Amir', email: 'amir@example.com', tsign: 'TS9983', status: 'Shortlisted' },
    ],
  };

  const filteredCompanies = placementData.topCompanies
    .filter(
      company =>
        (selectedDepartment === 'All' || company.departments.includes(selectedDepartment)) &&
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.placements - a.placements);

  const StatusIcon = ({ status }) => {
    if (status === 'Placed') return <CheckIcon className="inline-block w-4 h-4 text-green-500 mr-1" />;
    if (status === 'Shortlisted') return <ClockIcon className="inline-block w-4 h-4 text-yellow-500 mr-1" />;
    if (status === 'Rejected') return <XIcon className="inline-block w-4 h-4 text-red-500 mr-1" />;
    return null;
  };

  const toggleCompanyExpanded = (companyName) => {
    setExpandedCompanies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(companyName)) {
        newSet.delete(companyName);
      } else {
        newSet.add(companyName);
        setShownStudents(prevCounts => ({
          ...prevCounts,
          [companyName]: initialShownCount,
        }));
      }
      return newSet;
    });
  };

  const showMoreStudents = (companyName) => {
    setShownStudents(prev => ({
      ...prev,
      [companyName]: (prev[companyName] || initialShownCount) + initialShownCount,
    }));
  };

  // Filter students by status filter before slicing for show more
  const getFilteredStudents = (companyName) => {
    const allStudents = studentPlacementData[companyName] || [];
    if (studentStatusFilter === 'All') return allStudents;
    return allStudents.filter(student => student.status === studentStatusFilter);
  };

  // Download PDF function using jsPDF and autoTable
  const downloadPDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Top Recruiting Companies', 14, 22);

  let cursorY = 30;
  const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

  filteredCompanies.forEach((company, index) => {
    const students = getFilteredStudents(company.name);
    const studentData = students.map((student, idx) => [
      idx + 1,
      student.name,
      student.email,
      student.tsign,
      student.status,
    ]);

    doc.setFontSize(14);
    if (cursorY + 10 > pageHeight - 20) {
      doc.addPage();
      cursorY = 20;
    }
    doc.text(`${company.name} (${company.placements} students)`, 14, cursorY);
    cursorY += 6;

    autoTable(doc, {
      startY: cursorY,
      head: [['#', 'Name', 'Email ID', 'T-Sign Number', 'Status']],
      body: studentData,
      theme: 'striped',
      styles: { fontSize: 8 },
      margin: { left: 14, right: 14 },
      didDrawPage: (data) => {
        cursorY = data.cursor.y + 10;
      },
    });
  });

  doc.save('top_recruiting_companies.pdf');
};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
          <h1 className="text-2xl font-bold">Placements</h1>
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
              <select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)}   className={`appearance-none py-2 pl-3 pr-10 outline-none text-sm 
    ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
>
                {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>
              <input type="text" placeholder="Search companies..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-transparent py-2 px-3 outline-none w-full text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Total Placements</p>
              <h3 className="text-2xl font-bold mt-1 pl-4">{placementData.totalPlacements}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <BriefcaseIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Placement %</p>
              <h3 className="text-2xl font-bold pl-4">{placementData.placementPercentage}%</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Average Salary</p>
              <h3 className="text-2xl font-bold mt-1">{`₹${(placementData.averageSalary / 100000).toFixed(2)} LPA`}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
              <IndianRupeeIcon className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Highest Package</p>
              <h3 className="text-2xl font-bold mt-1">{`₹${(placementData.highestSalary / 100000).toFixed(2)} LPA`}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
              <TrendingUpIcon className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </motion.div>
      </div>
<motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Top Recruiting Companies</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={downloadPDF}
              className={`text-sm px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition ${
                darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
              }`}
              title="Download PDF"
            >
              Download PDF
            </button>
            <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>{filteredCompanies.length} companies</div>
          </div>
        </div>

        {/* New student status filter UI */}
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium mr-2">Filter Students:</span>
          {studentStatusOptions.map(status => (
            <button
              key={status}
              onClick={() => setStudentStatusFilter(status)}
              className={`text-sm px-3 py-1 rounded-full cursor-pointer 
                ${studentStatusFilter === status
                  ? darkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
              `}
            >
              {status}
            </button>
          ))}
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No companies found matching your filters.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Company</th>
                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Placements</th>
                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Departments</th>
                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCompanies.map(company => {
                  const filteredStudents = getFilteredStudents(company.name);
                  const visibleCount = shownStudents[company.name] || initialShownCount;
                  const canShowMore = visibleCount < filteredStudents.length;

                  return (
                    <React.Fragment key={company.name}>
                      <tr className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-3`}>
                              <BuildingIcon className="h-4 w-4 text-blue-500" />
                            </div>
                            <span className="font-medium">{company.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <div className={`px-2 py-1 rounded-full text-xs inline-block ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'}`}>
                            {company.placements} students
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex flex-wrap gap-1">
                            {(company.departments || []).map(dept => (
                              <span
                                key={dept}
                                className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}
                              >
                                {dept}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <motion.button
                            onClick={() => toggleCompanyExpanded(company.name)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center text-xs font-medium ${
                              darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'
                            } text-white px-2 py-1 rounded-lg`}
                          >
                            {expandedCompanies.has(company.name) ? 'Hide Details' : 'View Details'} <ArrowRightIcon className="h-3 w-3 ml-1" />
                          </motion.button>
                        </td>
                      </tr>

                      {expandedCompanies.has(company.name) && filteredStudents.length > 0 && (
                        <tr>
                          <td colSpan="4" className={`px-6 py-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <div className="max-h-64 overflow-y-auto rounded-md border border-gray-300">
                              <table className="min-w-full text-sm">
                                <thead className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                                  <tr>
                                    <th className="text-left px-4 py-2 border-b border-gray-300">Name</th>
                                    <th className="text-left px-4 py-2 border-b border-gray-300">Email ID</th>
                                    <th className="text-left px-4 py-2 border-b border-gray-300">T-Sign Number</th>
                                    <th className="text-left px-4 py-2 border-b border-gray-300">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {filteredStudents.slice(0, visibleCount).map((student, idx) => (
                                    <tr
                                      key={idx}
                                      className={
                                        idx % 2 === 0
                                          ? darkMode
                                            ? 'bg-gray-800'
                                            : 'bg-white'
                                          : darkMode
                                          ? 'bg-gray-700'
                                          : 'bg-gray-50'
                                      }
                                    >
                                      <td className="px-4 py-2 border-b border-gray-300">{student.name}</td>
                                      <td className="px-4 py-2 border-b border-gray-300">{student.email}</td>
                                      <td className="px-4 py-2 border-b border-gray-300">{student.tsign}</td>
                                      <td className="px-4 py-2 border-b border-gray-300 flex items-center">
                                        <StatusIcon status={student.status} />
                                        {student.status}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            {canShowMore && (
                              <div className="mt-2 text-right">
                                <span
                                  style={{ cursor: 'pointer' }}
                                  className="text-blue-500 underline text-sm"
                                  onClick={() => showMoreStudents(company.name)}
                                >
                                  Show More
                                </span>
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
      {/* Company-wise placements and salary distribution charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
          style={{ height: '410px' }}
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Company-wise Placements</h2>
          <div className="h-96">
            <CompanyWisePlacementsChart darkMode={darkMode} companies={filteredCompanies.slice(0, 8)} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Salary Distribution</h2>
            <div className="h-80">
              <SalaryDistributionChart darkMode={darkMode} department={selectedDepartment} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Department Placement KPI section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
      >
        <h2 className="text-xl font-semibold mb-6 
text-gray-800 dark:text-white">{/* Department-wise Placement Performance */}</h2>
        <div className="h-72">
          <DepartmentPlacementKPI darkMode={darkMode} />
        </div>
      </motion.div>

      {/* Top recruiting companies with expandable student list, Show More, Student Status Filter, and Download PDF */}
      
    </div>
  );
};

export default Placements;
