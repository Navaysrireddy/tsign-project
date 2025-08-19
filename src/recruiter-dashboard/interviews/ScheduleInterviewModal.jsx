import React, { useState } from 'react';
import { motion } from 'framer-motion';
import  Modal from '../ui/Modal';
import  {useTheme}  from '../context/ThemeContext';
import  {useData } from '../context/DataContext';
import { CalendarIcon, ClockIcon, UserIcon, BriefcaseIcon } from 'lucide-react';
 
const ScheduleInterviewModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { data } = useData();
  const isDarkMode = theme === 'dark';
 
  const [formData, setFormData] = useState({
    candidateId: '',
    positionId: '',
    date: '',
    time: '',
    mode: 'video',
    notes: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Schedule interview:', formData);
    // Here you would typically save the interview
    onClose();
  };
 
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Interview" size="md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="candidateId">
              Candidate
            </label>
            <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <UserIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                id="candidateId"
                name="candidateId"
                value={formData.candidateId}
                onChange={handleChange}
                required
                className={`
                  w-full pl-10 pr-4 py-2 rounded-lg appearance-none
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              >
                <option value="">Select candidate</option>
                {data.candidates.map(candidate => (
                  <option key={candidate.id} value={candidate.id}>
                    {candidate.name} - {candidate.dept} {candidate.course && `(${candidate.course})`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="positionId">
              Position
            </label>
            <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <BriefcaseIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                id="positionId"
                name="positionId"
                value={formData.positionId}
                onChange={handleChange}
                required
                className={`
                  w-full pl-10 pr-4 py-2 rounded-lg appearance-none
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              >
                <option value="">Select position</option>
                {data.positions
                  .filter(p => p.status === 'Open')
                  .map(position => (
                    <option key={position.id} value={position.id}>
                      {position.position} - {position.dept} {position.course && `(${position.course})`}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="date">
                Date
              </label>
              <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <CalendarIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className={`
                    w-full pl-10 pr-4 py-2 rounded-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    border focus:outline-none focus:ring-2 focus:ring-teal-500
                  `}
                />
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="time">
                Time
              </label>
              <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <ClockIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={`
                    w-full pl-10 pr-4 py-2 rounded-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    border focus:outline-none focus:ring-2 focus:ring-teal-500
                  `}
                />
              </div>
            </div>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="mode">
              Interview Mode
            </label>
            <div className="flex space-x-4">
              {['video', 'inperson', 'phone'].map(modeValue => (
                <label
                  key={modeValue}
                  className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <input
                    type="radio"
                    name="mode"
                    value={modeValue}
                    checked={formData.mode === modeValue}
                    onChange={handleChange}
                    className="mr-2 text-teal-500 focus:ring-teal-500"
                  />
                  {modeValue === 'video'
                    ? 'Video Call'
                    : modeValue === 'inperson'
                    ? 'In Person'
                    : 'Phone'}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className={`
                w-full px-4 py-2 rounded-lg
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                border focus:outline-none focus:ring-2 focus:ring-teal-500
              `}
              placeholder="Add any notes or instructions for the interview..."
            ></textarea>
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
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md"
          >
            Schedule Interview
          </motion.button>
        </div>
      </form>
    </Modal>
  );
};
 
export default ScheduleInterviewModal;
 
 