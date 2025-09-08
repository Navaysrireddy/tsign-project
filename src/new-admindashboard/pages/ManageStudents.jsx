import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SearchIcon, DownloadIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { detailedStudentData, studentManagementSummary } from '../utils/mockData';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ManageStudents = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Active');
  const [collegeFilter, setCollegeFilter] = useState('All');

  // Extract distinct colleges for the college filter dropdown
  const colleges = useMemo(() => {
    const uniqueColleges = new Set(
      detailedStudentData.map(student => student.college).filter(Boolean)
    );
    return ['All', ...Array.from(uniqueColleges)];
  }, []);

  // Filter data based on search term, status filter, and college filter
  const filteredData = detailedStudentData.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || student.status === statusFilter;

    const matchesCollege = collegeFilter === 'All' || student.college === collegeFilter;

    return matchesSearch && matchesStatus && matchesCollege;
  });

  // Function to download college-wise filtered data as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Students List', 14, 22);

    const headers = [
      ['ID', 'Name', 'Email', 'Status', 'College', 'Location', 'District'],
    ];

    const dataRows = filteredData.map(student => [
      student.id.toString(),
      student.name,
      student.email,
      student.status,
      student.college || '-',
      student.location || '-',
      student.district || '-',
    ]);

    autoTable(doc, {
      startY: 30,
      head: headers,
      body: dataRows,
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [22, 160, 133] },
      alternateRowStyles: { fillColor: [238, 238, 238] },
    });

    doc.save(`${collegeFilter === 'All' ? 'all_colleges' : collegeFilter}_students.pdf`);
  };

  return (
    <div className="space-y-6 w-full">
      {/* Header with back button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
          aria-label="Go back"
        >
          <ArrowLeftIcon size={20} />
        </button>
        <h1 className="text-2xl font-bold">Manage Students</h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-lg border ${
            isDarkMode ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
          <p className="text-2xl font-semibold mt-1">{studentManagementSummary.total}</p>
        </div>
        <div
          className={`p-4 rounded-lg border ${
            isDarkMode ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">Active</h3>
          <p className="text-2xl font-semibold mt-1">{studentManagementSummary.active}</p>
        </div>
        <div
          className={`p-4 rounded-lg border ${
            isDarkMode ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">New</h3>
          <p className="text-2xl font-semibold mt-1">{studentManagementSummary.new}</p>
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div
          className={`relative flex-1 max-w-md rounded-lg overflow-hidden border ${
            isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon size={16} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className={`w-full py-2 pl-10 pr-4 focus:outline-none ${
              isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
            }`}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className={`px-4 py-2 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none`}
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            value={collegeFilter}
            onChange={e => setCollegeFilter(e.target.value)}
            className={`px-4 py-2 rounded-lg border ${
              isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none`}
          >
            {colleges.map(college => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>

          <button
            onClick={downloadPDF}
            disabled={filteredData.length === 0}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
              filteredData.length === 0
                ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                : isDarkMode
                ? 'bg-gray-900 border-gray-700 hover:bg-gray-800 text-white'
                : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-900'
            }`}
          >
            <DownloadIcon size={16} />
            <span className="hidden sm:inline">Download  PDF</span>
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div
        className={`rounded-lg border overflow-hidden ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">College</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">District</th>
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                isDarkMode ? 'divide-gray-800 bg-[#1E1E1E]' : 'divide-gray-200 bg-white'
              }`}
            >
              {filteredData.length > 0 ? (
                filteredData.map(student => (
                  <tr
                    key={student.id}
                    className={`${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-50'} transition-colors`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          student.status === 'Active'
                            ? isDarkMode
                              ? 'bg-green-900/30 text-green-400'
                              : 'bg-green-100 text-green-600'
                            : isDarkMode
                            ? 'bg-gray-800 text-gray-400'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.college || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.location || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.district || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
