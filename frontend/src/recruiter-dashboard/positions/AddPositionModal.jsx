import React, { useState } from 'react';
import { motion } from 'framer-motion';
import  Modal  from '../ui/Modal';
import  {useTheme } from '../context/ThemeContext';
import { BriefcaseIcon, BuildingIcon, GraduationCapIcon, UsersIcon } from 'lucide-react';
 
const AddPositionModal = ({ isOpen, onClose ,onAdd}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [formData, setFormData] = useState({
    position: '',
    department: '',
    course: '',
    openings: '',
    description: '',
    requirements: '',
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const newPosition = {
    id: Date.now(), // unique ID
    position: formData.position,   // job title
    dept: formData.department,     // 🔹 map to dept (your PositionsView expects this)
    course: formData.course,
    openings: formData.openings,
    description: formData.description,
    requirements: formData.requirements,
    deadline: formData.deadline,
    status: 'Open', // default
  };

  console.log('Add position:', newPosition);

  if (onAdd) {
    onAdd(newPosition);
  }

  onClose();
};


  const departments = [
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Mechanical', label: 'Mechanical' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Computer Science', label: 'Computer Science' }
  ];

  const courses = {
    Engineering: ['CSE', 'ECE', 'IT'],
    'Computer Science': ['Business'],
    Mechanical: [],
    Electrical: []
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Position" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="position">
              Position Title
            </label>
            <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <BriefcaseIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                placeholder="e.g. Software Engineer Intern"
                className={`
                  w-full pl-10 pr-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="department">
                Department
              </label>
              <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <BuildingIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className={`
                    w-full pl-10 pr-4 py-2 rounded-lg appearance-none
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    border focus:outline-none focus:ring-2 focus:ring-teal-500
                  `}
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="course">
                Course
              </label>
              <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <GraduationCapIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  disabled={!formData.department || courses[formData.department]?.length === 0}
                  className={`
                    w-full pl-10 pr-4 py-2 rounded-lg appearance-none
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    ${(!formData.department || courses[formData.department]?.length === 0) ? 'opacity-60 cursor-not-allowed' : ''}
                    border focus:outline-none focus:ring-2 focus:ring-teal-500
                  `}
                >
                  <option value="">Select course</option>
                  {formData.department &&
                    courses[formData.department]?.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="openings">
                Number of Openings
              </label>
              <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <UsersIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="number"
                  id="openings"
                  name="openings"
                  value={formData.openings}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="e.g. 5"
                  className={`
                    w-full pl-10 pr-4 py-2 rounded-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    border focus:outline-none focus:ring-2 focus:ring-teal-500
                  `}
                />
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="deadline">
                Application Deadline
              </label>
              <div className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                  className={`
                    w-full px-4 py-2 rounded-lg
                    ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    border focus:outline-none focus:ring-2 focus:ring-teal-500
                  `}
                />
              </div>
            </div>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="description">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              required
              className={`
                w-full px-4 py-2 rounded-lg
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                border focus:outline-none focus:ring-2 focus:ring-teal-500
              `}
              placeholder="Describe the role, responsibilities, and expectations..."
            ></textarea>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="requirements">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={3}
              required
              className={`
                w-full px-4 py-2 rounded-lg
                ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                border focus:outline-none focus:ring-2 focus:ring-teal-500
              `}
              placeholder="List skills, qualifications, and experience required..."
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
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md"
          >
            Add Position
          </motion.button>
        </div>
      </form>
    </Modal>
  );
};

export default AddPositionModal;