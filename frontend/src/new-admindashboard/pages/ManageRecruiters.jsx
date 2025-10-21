import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SearchIcon, DownloadIcon } from 'lucide-react';
import jsPDF from 'jspdf';

// Simple theme context stub (replace with your actual ThemeContext if using)
import { useTheme } from '../context/ThemeContext';

// Mock data imports (replace with your actual data source)
import { recruiterManagementSummary } from '../utils/mockData';

// Recruiter dataset with career page URLs
const detailedRecruiterData = [
  {
    id: 1,
    name: "Capgemini India",
    email: "hr@capgemini.com",
    location: "Bangalore",
    careersUrl: "https://www.capgemini.com/in-en/careers/"
  },
  {
    id: 2,
    name: "TCS",
    email: "careers@tcs.com",
    location: "Hyderabad",
    careersUrl: "https://www.tcs.com/careers"
  },
  {
    id: 3,
    name: "Infosys",
    email: "jobs@infosys.com",
    location: "Pune",
    careersUrl: "https://www.infosys.com/careers"
  },
  {
    id: 4,
    name: "Wipro",
    email: "hr@wipro.com",
    location: "Chennai",
    careersUrl: "https://careers.wipro.com"
  },
  {
    id: 5,
    name: "HCL Technologies",
    email: "jobs@hcl.com",
    location: "Noida",
    careersUrl: "https://www.hcltech.com/careers"
  },
  {
    id: 6,
    name: "Tech Mahindra",
    email: "careers@techmahindra.com",
    location: "Pune",
    careersUrl: "https://careers.techmahindra.com"
  },
  {
    id: 7,
    name: "IBM India",
    email: "jobs@ibm.com",
    location: "Bangalore",
    careersUrl: "https://www.ibm.com/careers/in-en"
  },
  {
    id: 8,
    name: "Accenture India",
    email: "careers@accenture.com",
    location: "Gurgaon",
    careersUrl: "https://www.accenture.com/in-en/careers"
  },
  {
    id: 9,
    name: "Deloitte India",
    email: "jobs@deloitte.com",
    location: "Hyderabad",
    careersUrl: "https://jobs.deloitte.com/"
  },
  {
    id: 10,
    name: "EY India",
    email: "careers@ey.com",
    location: "Mumbai",
    careersUrl: "https://www.ey.com/en_in/careers"
  },
  {
    id: 11,
    name: "KPMG India",
    email: "jobs@kpmg.com",
    location: "Gurgaon",
    careersUrl: "https://home.kpmg/in/en/home/careers.html"
  },
  {
    id: 12,
    name: "Oracle India",
    email: "oracle@oracle.com",
    location: "Bangalore",
    careersUrl: "https://careers.oracle.com"
  },
  {
    id: 13,
    name: "Microsoft India",
    email: "jobs@microsoft.com",
    location: "Hyderabad",
    careersUrl: "https://careers.microsoft.com"
  },
  {
    id: 14,
    name: "Google India",
    email: "careers@google.com",
    location: "Bangalore",
    careersUrl: "https://careers.google.com"
  },
  {
    id: 15,
    name: "Amazon India",
    email: "jobs@amazon.com",
    location: "Hyderabad",
    careersUrl: "https://www.amazon.jobs/en/locations/india"
  }
];

// Utility to export filtered recruiters to CSV
const recruitersToCSV = (recruiters) => {
  const headers = ['ID', 'Name', 'Email', 'Location', 'Careers URL'];
  const rows = recruiters.map(recruiter =>
    [
      recruiter.id,
      `"${recruiter.name}"`,
      `"${recruiter.email}"`,
      `"${recruiter.location || ''}"`,
      `"${recruiter.careersUrl || ''}"`,
    ].join(',')
  );
  return [headers.join(','), ...rows].join('\n');
};

const ManageRecruiters = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search term
  const filteredData = detailedRecruiterData.filter(recruiter => {
    const matchesSearch =
      recruiter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recruiter.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (recruiter.location && recruiter.location.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const handleExportCSV = () => {
    const csvString = recruitersToCSV(filteredData);
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'recruiters_list.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to PDF
  const handleExportPDF = async () => {
    const autoTable = (await import('jspdf-autotable')).default;
    const doc = new jsPDF();

    const columns = ['ID', 'Name', 'Email', 'Location', 'Careers URL'];

    const rows = filteredData.map(recruiter => [
      recruiter.id,
      recruiter.name,
      recruiter.email,
      recruiter.location || '',
      recruiter.careersUrl || '',
    ]);

    doc.text('Recruiters List', 14, 15);
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 20,
    });

    doc.save('recruiters_list.pdf');
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
        <h1 className="text-2xl font-bold">Manage Recruiters</h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">Total Recruiters</h3>
          <p className="text-2xl font-semibold mt-1">{recruiterManagementSummary.total}</p>
        </div>
        <div
          className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">Active</h3>
          <p className="text-2xl font-semibold mt-1">{recruiterManagementSummary.active}</p>
        </div>
        <div
          className={`p-4 rounded-lg border ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className="text-sm font-medium text-gray-500">New</h3>
          <p className="text-2xl font-semibold mt-1">{recruiterManagementSummary.new}</p>
        </div>
      </div>

      {/* Search and export */}
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
            placeholder="Search by name, email or location..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
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

      {/* Recruiters Table */}
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
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                theme === 'dark' ? 'divide-gray-800 bg-[#1E1E1E]' : 'divide-gray-200 bg-white'
              }`}
            >
              {filteredData.length > 0 ? (
                filteredData.map(recruiter => (
                  <tr
                    key={recruiter.id}
                    className={`${
                      theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
                    } transition-colors`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{recruiter.id}</td>

                    {/* Name column → external company careers page */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {recruiter.careersUrl ? (
                        <a
                          href={recruiter.careersUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {recruiter.name}
                        </a>
                      ) : (
                        recruiter.name
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm">{recruiter.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{recruiter.location || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                    No recruiters found
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

export default ManageRecruiters;
