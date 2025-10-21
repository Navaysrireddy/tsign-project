import React, { useState } from 'react';
import { motion } from 'framer-motion';
import  Modal  from '../ui/Modal';
import  {useTheme } from '../context/ThemeContext';
import { FileIcon, FilterIcon, CheckIcon } from 'lucide-react';
 
const ExportModal = ({
  isOpen,
  onClose,
  selectedCandidates = []
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [formData, setFormData] = useState({
    format: 'xlsx',
    includeDetails: true,
    includeResumes: false,
    includeNotes: true,
    exportType: selectedCandidates.length > 0 ? 'selected' : 'all',
    filters: {
      department: 'all',
      status: 'all',
      cgpaMin: ''
    }
  });
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
 
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        [name]: value
      }
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Export data:', formData);
    onClose();
  };
 
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Export Candidates" size="md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Export Format
            </label>
            <div className="flex flex-wrap gap-3">
              {['xlsx', 'csv', 'pdf'].map(format => (
                <label
                  key={format}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer
                    ${formData.format === format ?
                      isDarkMode ? 'bg-teal-900/30 text-teal-400 border border-teal-500/50'
                      : 'bg-teal-100 text-teal-800 border border-teal-300'
                      : isDarkMode ? 'bg-gray-700 text-gray-300 border border-gray-600'
                      : 'bg-gray-100 text-gray-800 border border-gray-300'}
                  `}
                >
                  <input
                    type="radio"
                    name="format"
                    value={format}
                    checked={formData.format === format}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <FileIcon size={16} />
                  <span className="uppercase">{format}</span>
                </label>
              ))}
            </div>
          </div>
 
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              What to Export
            </label>
            <div className="flex flex-col gap-2">
              <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="radio"
                  name="exportType"
                  value="all"
                  checked={formData.exportType === 'all'}
                  onChange={handleChange}
                  className="mr-2 text-teal-500 focus:ring-teal-500"
                />
                All Candidates
              </label>
              <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} ${selectedCandidates.length === 0 ? 'opacity-50' : ''}`}>
                <input
                  type="radio"
                  name="exportType"
                  value="selected"
                  checked={formData.exportType === 'selected'}
                  onChange={handleChange}
                  disabled={selectedCandidates.length === 0}
                  className="mr-2 text-teal-500 focus:ring-teal-500"
                />
                Selected Candidates ({selectedCandidates.length})
              </label>
              <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="radio"
                  name="exportType"
                  value="filtered"
                  checked={formData.exportType === 'filtered'}
                  onChange={handleChange}
                  className="mr-2 text-teal-500 focus:ring-teal-500"
                />
                Apply Filters
              </label>
            </div>
          </div>
 
          {formData.exportType === 'filtered' && (
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
              <div className="flex items-center gap-2 mb-3">
                <FilterIcon size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Export Filters
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} htmlFor="department">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.filters.department}
                    onChange={handleFilterChange}
                    className={`
                      w-full px-3 py-1.5 rounded-lg text-sm
                      ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}
                      border focus:outline-none focus:ring-2 focus:ring-teal-500
                    `}
                  >
                    <option value="all">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.filters.status}
                    onChange={handleFilterChange}
                    className={`
                      w-full px-3 py-1.5 rounded-lg text-sm
                      ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}
                      border focus:outline-none focus:ring-2 focus:ring-teal-500
                    `}
                  >
                    <option value="all">All Statuses</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="In Review">In Review</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} htmlFor="cgpaMin">
                    Minimum CGPA
                  </label>
                  <input
                    type="number"
                    id="cgpaMin"
                    name="cgpaMin"
                    value={formData.filters.cgpaMin}
                    onChange={handleFilterChange}
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="e.g. 7.5"
                    className={`
                      w-full px-3 py-1.5 rounded-lg text-sm
                      ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}
                      border focus:outline-none focus:ring-2 focus:ring-teal-500
                    `}
                  />
                </div>
              </div>
            </div>
          )}
 
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Include in Export
            </label>
            <div className="space-y-2">
              <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  name="includeDetails"
                  checked={formData.includeDetails}
                  onChange={handleChange}
                  className="mr-2 rounded text-teal-500 focus:ring-teal-500"
                />
                Personal Details (Name, Email, Department)
              </label>
              <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  name="includeResumes"
                  checked={formData.includeResumes}
                  onChange={handleChange}
                  className="mr-2 rounded text-teal-500 focus:ring-teal-500"
                />
                Resume Links
              </label>
              <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  name="includeNotes"
                  checked={formData.includeNotes}
                  onChange={handleChange}
                  className="mr-2 rounded text-teal-500 focus:ring-teal-500"
                />
                Interview Notes & Feedback
              </label>
            </div>
          </div>
        </div>
 
        <div className="flex justify-end space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onClose}
            className={`
              px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
              transition-colors
            `}
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md flex items-center gap-2"
          >
            <CheckIcon size={16} />
            Export
          </motion.button>
        </div>
      </form>
    </Modal>
  );
};
 
export default ExportModal;
 