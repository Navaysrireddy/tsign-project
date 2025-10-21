import React, { useState, useEffect } from 'react';
import  {motion}  from 'framer-motion';
import StatusCards from './StatusCards';
import AcademicProgressChart from './AcademicProgressChart';
import EventUpdates from './EventUpdates';
import PlacementsChart from './PlacementsChart';
import DepartmentPerformance from './DepartmentPerformance';
import { FilterIcon } from 'lucide-react';

const Dashboard = ({
  darkMode,
  collegeId // Pass collegeId prop for approval filter
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [pendingStudents, setPendingStudents] = useState([]);

  useEffect(() => {
    // Fetch pending students for this college
    if (!collegeId) return;
    fetch(`http://localhost:5000/api/student/pending/${collegeId}`)
      .then(res => res.json())
      .then(setPendingStudents)
      .catch(() => setPendingStudents([]));
  }, [collegeId]);

  const handleApprove = async (studentId) => {
    await fetch(`http://localhost:5000/api/student/approve/${studentId}`, {
      method: 'POST'
    });
    setPendingStudents(prev => prev.filter(s => s._id !== studentId));
    alert('Student approved!');
  };

  const departments = ['All', 'Engineering', 'Computer Science', 'Mechanical', 'Electrical'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 md:mt-0"
        >
          <div className="flex items-center space-x-2">
            <FilterIcon className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-400">Department:</span>
            <div
              className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <select
                value={selectedDepartment}
                onChange={e => setSelectedDepartment(e.target.value)}
                className={`appearance-none bg-transparent py-2 pl-3 pr-10 outline-none ${
                  darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'
                }`}
              >
                {departments.map(dept => (
                  <option
                    key={dept}
                    value={dept}
                    className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}
                  >
                    {dept}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pending Student Approvals Section */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Pending Student Approvals</h2>
        {pendingStudents.length === 0 ? (
          <div className="text-gray-600 dark:text-gray-400">No students pending approval.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Mobile</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Approve</th>
              </tr>
            </thead>
            <tbody>
              {pendingStudents.map(student => (
                <tr key={student._id} className="border-t">
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4">{student.mobile}</td>
                  <td className="py-2 px-4">{student.email}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      onClick={() => handleApprove(student._id)}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <StatusCards darkMode={darkMode} department={selectedDepartment} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Event Updates</h2>
        <EventUpdates darkMode={darkMode} department={selectedDepartment} />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Academic Progress</h2>
          <AcademicProgressChart darkMode={darkMode} department={selectedDepartment} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Placement Statistics</h2>
          <PlacementsChart darkMode={darkMode} department={selectedDepartment} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Department Performance</h2>
        </div>
        <DepartmentPerformance darkMode={darkMode} department={selectedDepartment} />
      </motion.div>
    </div>
  );
};

export default Dashboard;
