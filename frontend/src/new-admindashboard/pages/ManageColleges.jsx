import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SearchIcon, DownloadIcon } from 'lucide-react';
import jsPDF from 'jspdf';

// Simple theme context stub (replace with your actual ThemeContext if using)
const ThemeContext = React.createContext({ theme: 'light' });
const useTheme = () => React.useContext(ThemeContext);

// Mock summary data (update for total accordingly)
const collegeManagementSummary = {
  total: 10,
  active: 6,
  new: 3,
};

// Expanded mock college data without status field
const detailedCollegeData = [
  {
    id: 1,
    name: 'ABC College',
    email: 'contact@abccollege.edu',
    location: 'Hyderabad',
    district: 'Ranga Reddy',
    tSignNumber: 'T123456',
  },
  {
    id: 2,
    name: 'XYZ Institute',
    email: 'info@xyzinstitute.edu',
    location: 'Warangal',
    district: 'Warangal Urban',
    tSignNumber: 'T654321',
  },
  {
    id: 3,
    name: 'St. Joseph College',
    email: 'admin@stjoseph.edu',
    location: 'Secunderabad',
    district: 'Hyderabad',
    tSignNumber: 'T112233',
  },
  {
    id: 4,
    name: 'Green Valley College',
    email: 'contact@greenvalley.edu',
    location: 'Karimnagar',
    district: 'Karimnagar',
    tSignNumber: 'T223344',
  },
  {
    id: 5,
    name: 'Brilliant Group',
    email: 'office@brilliantgroup.edu',
    location: 'Nalgonda',
    district: 'Nalgonda',
    tSignNumber: 'T334455',
  },
  {
    id: 6,
    name: 'Vision Degree College',
    email: 'info@visiondegree.edu',
    location: 'Adilabad',
    district: 'Adilabad',
    tSignNumber: 'T445566',
  },
  {
    id: 7,
    name: 'Genius Institute',
    email: 'genius@genius.edu',
    location: 'Mahbubnagar',
    district: 'Mahbubnagar',
    tSignNumber: 'T556677',
  },
  {
    id: 8,
    name: 'Telangana College',
    email: 'contact@telanganacollege.edu',
    location: 'Khammam',
    district: 'Khammam',
    tSignNumber: 'T667788',
  },
  {
    id: 9,
    name: 'Sri Chaitanya',
    email: 'info@srichaithanya.edu',
    location: 'Suryapet',
    district: 'Suryapet',
    tSignNumber: 'T778899',
  },
  {
    id: 10,
    name: 'Vardhaman College of Engineering',
    email: 'contact@vardhaman.edu',
    location: 'Shamshabad',
    district: 'Ranga Reddy',
    tSignNumber: 'T889900',
  },
];

// Utility function for exporting filtered colleges to CSV (without status)
const collegesToCSV = (colleges) => {
  const headers = [
    'ID',
    'Name',
    'Email',
    'Location',
    'District',
    'T-Sign Number',
  ];
  const rows = colleges.map((college) =>
    [
      college.id,
      `"${college.name}"`,
      `"${college.email}"`,
      `"${college.location}"`,
      `"${college.district}"`,
      `"${college.tSignNumber}"`,
    ].join(',')
  );
  return [headers.join(','), ...rows].join('\n');
};

const ManageColleges = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  // const [statusFilter] = useState('All'); // Dummy to preserve layout if needed

  // Filter data based on search (no status here)
  const filteredData = detailedCollegeData.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (college.location &&
        college.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (college.district &&
        college.district.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (college.tSignNumber &&
        college.tSignNumber.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const handleExportCSV = () => {
    const csvString = collegesToCSV(filteredData);
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'colleges_list.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Dynamically import jspdf-autotable inside the function to avoid plugin attach issues
  const handleExportPDF = async () => {
    const autoTable = (await import('jspdf-autotable')).default;
    const doc = new jsPDF();

    const columns = [
      'ID',
      'Name',
      'Email',
      'Location',
      'District',
      'T-Sign Number',
    ];

    const rows = filteredData.map((college) => [
      college.id,
      college.name,
      college.email,
      college.location,
      college.district,
      college.tSignNumber,
    ]);

    doc.text('Colleges List', 14, 15);
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 20,
    });

    doc.save('colleges_list.pdf');
  };

  return (
    <div className="space-y-6 w-full">
      {/* Header with back button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className={`p-2 rounded-full ${
            theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          } transition-colors`}
          aria-label="Go back"
        >
          <ArrowLeftIcon size={20} />
        </button>
        <h1 className="text-2xl font-bold">Manage Colleges</h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">Total Colleges</h3>
          <p className="text-2xl font-semibold mt-1">{collegeManagementSummary.total}</p>
        </div>
        <div
          className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">Active</h3>
          <p className="text-2xl font-semibold mt-1">{collegeManagementSummary.active}</p>
        </div>
        <div
          className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">New</h3>
          <p className="text-2xl font-semibold mt-1">{collegeManagementSummary.new}</p>
        </div>
      </div>

      {/* Search and export buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div
          className={`relative flex-1 max-w-md rounded-lg overflow-hidden border ${
            theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon size={16} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by name, email, location, district or T-Sign..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full py-2 pl-10 pr-4 focus:outline-none ${
              theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
            }`}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleExportCSV}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700 hover:bg-gray-800'
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            <DownloadIcon size={16} />
            <span className="hidden sm:inline">Export CSV</span>
          </button>

          <button
            onClick={handleExportPDF}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700 hover:bg-gray-800'
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            <DownloadIcon size={16} />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
      </div>

      {/* Colleges Table */}
      <div
        className={`rounded-lg border overflow-hidden ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">District</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">T-Sign</th>
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                theme === 'dark' ? 'divide-gray-800 bg-[#1E1E1E]' : 'divide-gray-200 bg-white'
              }`}
            >
              {filteredData.length > 0 ? (
                filteredData.map((college) => (
                  <tr
                    key={college.id}
                    className={`${
                      theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
                    } transition-colors`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{college.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{college.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{college.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{college.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{college.district}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{college.tSignNumber}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No colleges found
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

export default ManageColleges;
