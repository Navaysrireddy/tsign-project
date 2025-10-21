import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, ClockIcon, CheckIcon, XIcon, UserIcon,  FileTextIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// import { useData } from '../context/DataContext';
 
const CandidateTable = ({
  candidates,
  selectedCandidates,
  setSelectedCandidates,
  onViewDetails,
  
  
}) => {
  const { theme } = useTheme();
  // const { updateCandidateStatus } = useData();
  const isDarkMode = theme === 'dark';
 
  const toggleCandidateSelection = (id) => {
    setSelectedCandidates(prev =>
      prev.includes(id) ? prev.filter(candidateId => candidateId !== id) : [...prev, id]
    );
  };
 
  const toggleSelectAll = () => {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidates.map(c => c.id));
    }
  };
 
  const getStatusColor = (status) => {
    switch (status) {
      case 'Selected':
        return isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600';
      case 'Rejected':
        return isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600';
      case 'Interviewed':
        return isDarkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600';
      case 'In Review':
        return isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600';
      default:
        return isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
    }
  };
 
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Selected':
        return <CheckIcon size={14} />;
      case 'Rejected':
        return <XIcon size={14} />;
      case 'Interviewed':
        return <UserIcon size={14} />;
      case 'In Review':
        return <ClockIcon size={14} />;
      default:
        return null;
    }
  };
 
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <tr>
            <th className="p-4 text-left">
              <input
                type="checkbox"
                checked={selectedCandidates.length === candidates.length && candidates.length > 0}
                onChange={toggleSelectAll}
                className="rounded text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
              />
            </th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Name</th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email</th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Department</th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CGPA</th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Resume</th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status</th>
            <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <motion.tr
                key={candidate.id}
                // whileHover={{ scale: 1.01 }}
                className={`
                  border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/30' : 'border-gray-200 hover:bg-gray-50'}
                  transition-colors
                `}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.includes(candidate.id)}
                    onChange={() => toggleCandidateSelection(candidate.id)}
                    className="rounded text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
                  />
                </td>
                <td className="p-4 font-medium">{candidate.name}</td>
                <td className="p-4">{candidate.email}</td>
                <td className="p-4">
                  {candidate.dept}
                  {candidate.course ? ` (${candidate.course})` : ''}
                </td>
                <td className="p-4">{candidate.cgpa}</td>
                <td className="p-4">
                  <a
                    href={candidate.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'}`}
                  >
                    View <ExternalLinkIcon size={14} />
                  </a>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(candidate.status)}`}>
                    {getStatusIcon(candidate.status)}
                    {candidate.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onViewDetails(candidate.id)}
                      className={`
                        p-1.5 rounded-lg text-sm
                        ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                        transition-colors
                      `}
                      title="View Details"
                    >
                      <FileTextIcon size={16} />
                    </motion.button>
                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onViewAnalysis(candidate.id)}
                      className={`
                        p-1.5 rounded-lg text-sm
                        ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                        transition-colors
                      `}
                      title="View Analysis"
                    >
                      <BarChart2Icon size={16} />
                    </motion.button> */}
                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onEmailCandidate(candidate.id)}
                      className={`
                        p-1.5 rounded-lg text-sm
                        ${isDarkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}
                        transition-colors
                      `}
                      title="Email Candidate"
                    >
                      <MailIcon size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onShortlistCandidate(candidate.id)}
                      className={`
                        p-1.5 rounded-lg text-sm
                        ${isDarkMode ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50' : 'bg-green-100 text-green-600 hover:bg-green-200'}
                        transition-colors
                      `}
                      title="Shortlist Candidate"
                    >
                      <CheckIcon size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onRejectCandidate(candidate.id)}
                      className={`
                        p-1.5 rounded-lg text-sm
                        ${isDarkMode ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50' : 'bg-red-100 text-red-600 hover:bg-red-200'}
                        transition-colors
                      `}
                      title="Reject Candidate"
                    >
                      <XIcon size={16} />
                    </motion.button> */}
                  </div>
                </td>
              </motion.tr>
            ))
          ) : (
            <tr className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <td colSpan={8} className="p-4 text-center">
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
 
export default CandidateTable;
 
 