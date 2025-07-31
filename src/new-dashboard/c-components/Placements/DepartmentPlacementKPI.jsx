import React from 'react';
import { motion } from 'framer-motion';
import { FilterIcon } from 'lucide-react';

const DepartmentPlacementKPI = ({
  darkMode
}) => {
  // Sample data for department-wise placement KPIs for different years
  const yearlyData = {
    '2024-2025': [{
      name: 'Computer Science',
      placementPercentage: 92,
      averageSalary: 12.0,
      highestSalary: 38.0,
      totalStudents: 350,
      placedStudents: 322,
      color: 'from-blue-500 to-indigo-600'
    }, {
      name: 'Mechanical',
      placementPercentage: 78,
      averageSalary: 7.0,
      highestSalary: 22.0,
      totalStudents: 230,
      placedStudents: 179,
      color: 'from-orange-500 to-red-600'
    }, {
      name: 'Electrical',
      placementPercentage: 82,
      averageSalary: 8.0,
      highestSalary: 25.0,
      totalStudents: 180,
      placedStudents: 148,
      color: 'from-yellow-500 to-amber-600'
    }, {
      name: 'Engineering',
      placementPercentage: 84,
      averageSalary: 7.5,
      highestSalary: 28.0,
      totalStudents: 240,
      placedStudents: 202,
      color: 'from-teal-500 to-emerald-600'
    }],
    '2023-2024': [{
      name: 'Computer Science',
      placementPercentage: 88,
      averageSalary: 11.0,
      highestSalary: 35.0,
      totalStudents: 340,
      placedStudents: 300,
      color: 'from-blue-500 to-indigo-600'
    }, {
      name: 'Mechanical',
      placementPercentage: 75,
      averageSalary: 6.5,
      highestSalary: 20.0,
      totalStudents: 220,
      placedStudents: 165,
      color: 'from-orange-500 to-red-600'
    }, {
      name: 'Electrical',
      placementPercentage: 80,
      averageSalary: 7.5,
      highestSalary: 23.0,
      totalStudents: 175,
      placedStudents: 140,
      color: 'from-yellow-500 to-amber-600'
    }, {
      name: 'Engineering',
      placementPercentage: 82,
      averageSalary: 7.0,
      highestSalary: 25.0,
      totalStudents: 230,
      placedStudents: 189,
      color: 'from-teal-500 to-emerald-600'
    }],
    '2022-2023': [{
      name: 'Computer Science',
      placementPercentage: 85,
      averageSalary: 10.0,
      highestSalary: 32.0,
      totalStudents: 330,
      placedStudents: 280,
      color: 'from-blue-500 to-indigo-600'
    }, {
      name: 'Mechanical',
      placementPercentage: 72,
      averageSalary: 6.0,
      highestSalary: 18.0,
      totalStudents: 210,
      placedStudents: 151,
      color: 'from-orange-500 to-red-600'
    }, {
      name: 'Electrical',
      placementPercentage: 78,
      averageSalary: 7.0,
      highestSalary: 21.0,
      totalStudents: 170,
      placedStudents: 133,
      color: 'from-yellow-500 to-amber-600'
    }, {
      name: 'Engineering',
      placementPercentage: 80,
      averageSalary: 6.5,
      highestSalary: 22.0,
      totalStudents: 220,
      placedStudents: 176,
      color: 'from-teal-500 to-emerald-600'
    }]
  };

  const [selectedYear, setSelectedYear] = React.useState('2024-2025');
  const departmentData = yearlyData[selectedYear];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Department-wise Placement Performance</h2>
        <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <div className="flex items-center px-3 py-2">
            <FilterIcon className="h-4 w-4 text-gray-500 mr-2" />
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)} 
              className="appearance-none bg-transparent outline-none text-sm"
            >
              {Object.keys(yearlyData).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departmentData.map((dept, index) => (
          <motion.div 
            key={dept.name} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <div className="text-center mb-4">
              <h3 className="font-semibold">{dept.name}</h3>
              <p className="text-sm text-gray-500">
                {dept.placedStudents} out of {dept.totalStudents} students
              </p>
            </div>
            <div className="relative pt-1 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-500">
                    Placement Rate
                  </span>
                </div>
                <div>
                  <span className={`text-xs font-semibold inline-block ${dept.placementPercentage >= 85 ? darkMode ? 'text-green-400' : 'text-green-600' : dept.placementPercentage >= 75 ? darkMode ? 'text-yellow-400' : 'text-yellow-600' : darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {dept.placementPercentage}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-300">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${dept.placementPercentage}%` }}
                  transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${dept.color}`}
                ></motion.div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className={`p-2 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className="text-xs text-gray-500">Avg. Salary</p>
                <p className="font-semibold">₹{dept.averageSalary} LPA</p>
              </div>
              <div className={`p-2 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className="text-xs text-gray-500">Highest</p>
                <p className="font-semibold">₹{dept.highestSalary} LPA</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Placement Target</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  85%
                </span>
              </div>
              <div className="mt-1 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${dept.placementPercentage >= 85 ? 'bg-green-500' : 'bg-yellow-500'}`} 
                  style={{
                    width: `${dept.placementPercentage / 85 * 100 > 100 ? 100 : dept.placementPercentage / 85 * 100}%`
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPlacementKPI;