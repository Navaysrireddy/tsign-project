import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatusCards from './StatusCards';
import AcademicProgressChart from './AcademicProgressChart';
import EventUpdates from './EventUpdates';
import PlacementsChart from './PlacementsChart';
import DepartmentPerformance from './DepartmentPerformance';
import { FilterIcon } from 'lucide-react';

const Dashboard = ({
  darkMode
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Computer Science', 'Mechanical', 'Electrical'];
  
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <FilterIcon className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-400">Department:</span>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select
  value={selectedDepartment}
  onChange={e => setSelectedDepartment(e.target.value)}
  className={`
    appearance-none bg-transparent py-2 pl-3 pr-10 outline-none
    ${darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'}
  `}
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
      {/* <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <p className="text-sm">
          {selectedDepartment === 'All' ? 'Showing data for all departments' : `Showing data for ${selectedDepartment} department`}
        </p>
      </div> */}
     
      <StatusCards darkMode={darkMode} department={selectedDepartment} />
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <h2 className="text-xl font-semibold mb-4
text-gray-800 dark:text-white">Event Updates</h2>
        <EventUpdates darkMode={darkMode} department={selectedDepartment} />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Academic Progress</h2>
          <AcademicProgressChart darkMode={darkMode} department={selectedDepartment} />
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
                  <h2 className="text-xl font-semibold mb-4
text-gray-800 dark:text-white">Placement Statistics</h2>
          <PlacementsChart darkMode={darkMode} department={selectedDepartment} />
        </motion.div>
      </div>
     
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.5
    }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Department Performance</h2>
        </div>
        <DepartmentPerformance darkMode={darkMode} department={selectedDepartment} />
      </motion.div>
    </div>;
};
export default Dashboard;
 