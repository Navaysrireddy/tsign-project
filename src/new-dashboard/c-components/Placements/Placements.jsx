// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { BriefcaseIcon, BuildingIcon, TrendingUpIcon,    IndianRupeeIcon, FilterIcon, CheckCircleIcon,  ArrowRightIcon } from 'lucide-react';
// // import CompanyWisePlacementsChart from './CompanyWisePlacementsChart';
// // import SalaryDistributionChart from './SalaryDistributionChart';
// // import DepartmentPlacementKPI from './DepartmentPlacementKPI';
// // import PlacementTrendsChart from './PlacementTrendsChart';

// // const Placements = ({
// //   darkMode
// // }) => {
// //   // const [selectedYear, setSelectedYear] = useState('2025');
// //   const [selectedDepartment, setSelectedDepartment] = useState('All');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   // const years = ['2025', '2024', '2023', '2022', '2021'];
// //   const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
// //   // Sample placement data
// //   const placementData = {
// //     totalPlacements: selectedDepartment === 'All' ? 750 : selectedDepartment === 'Computer Science' ? 320 : selectedDepartment === 'Mechanical' ? 180 : selectedDepartment === 'Electrical' ? 150 : 200,
// //     placementPercentage: selectedDepartment === 'All' ? 86 : selectedDepartment === 'Computer Science' ? 92 : selectedDepartment === 'Mechanical' ? 78 : selectedDepartment === 'Electrical' ? 82 : 84,
// //     averageSalary: selectedDepartment === 'All' ? 850000 : selectedDepartment === 'Computer Science' ? 1200000 : selectedDepartment === 'Mechanical' ? 700000 : selectedDepartment === 'Electrical' ? 800000 : 750000,
// //     highestSalary: selectedDepartment === 'All' ? 3800000 : selectedDepartment === 'Computer Science' ? 3800000 : selectedDepartment === 'Mechanical' ? 2200000 : selectedDepartment === 'Electrical' ? 2500000 : 2800000,
// //     topCompanies: [{
// //       name: 'Google',
// //       placements: 42,
// //       departments: ['Computer Science', 'Electrical']
// //     }, {
// //       name: 'Microsoft',
// //       placements: 38,
// //       departments: ['Computer Science', 'Engineering']
// //     }, {
// //       name: 'Amazon',
// //       placements: 35,
// //       departments: ['Computer Science', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'TCS',
// //       placements: 65,
// //       departments: ['Computer Science', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'Infosys',
// //       placements: 60,
// //       departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']
// //     }, {
// //       name: 'Wipro',
// //       placements: 55,
// //       departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']
// //     }, {
// //       name: 'Accenture',
// //       placements: 50,
// //       departments: ['Computer Science', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'IBM',
// //       placements: 45,
// //       departments: ['Computer Science', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'Cognizant',
// //       placements: 40,
// //       departments: ['Computer Science', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'Capgemini',
// //       placements: 35,
// //       departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']
// //     }, {
// //       name: 'Tata Motors',
// //       placements: 25,
// //       departments: ['Mechanical', 'Engineering']
// //     }, {
// //       name: 'L&T',
// //       placements: 30,
// //       departments: ['Mechanical', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'Reliance',
// //       placements: 20,
// //       departments: ['Mechanical', 'Electrical', 'Engineering']
// //     }, {
// //       name: 'BHEL',
// //       placements: 15,
// //       departments: ['Mechanical', 'Electrical']
// //     }, {
// //       name: 'Siemens',
// //       placements: 18,
// //       departments: ['Electrical', 'Engineering']
// //     }]
// //   };
// //   // Filter top companies based on selected department
// //   const filteredCompanies = placementData.topCompanies.filter(company => {
// //     const departmentMatch = selectedDepartment === 'All' || company.departments.includes(selectedDepartment);
// //     const searchMatch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
// //     return departmentMatch && searchMatch;
// //   }).sort((a, b) => b.placements - a.placements);
// //   // Format currency
// //   const formatCurrency = (amount) => {
// //     if (amount >= 1000000) {
// //       return `₹${(amount / 1000000).toFixed(2)} LPA`;
// //     } else {
// //       return `₹${(amount / 100000).toFixed(2)} LPA`;
// //     }
// //   };
// //   // const container = {
// //   //   hidden: {
// //   //     opacity: 0
// //   //   },
// //   //   show: {
// //   //     opacity: 1,
// //   //     transition: {
// //   //       staggerChildren: 0.1
// //   //     }
// //   //   }
// //   // };
// //   // const item = {
// //   //   hidden: {
// //   //     opacity: 0,
// //   //     y: 20
// //   //   },
// //   //   show: {
// //   //     opacity: 1,
// //   //     y: 0
// //   //   }
// //   // };
// //   return <div className="space-y-6">
// //       <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.5
// //       }}>
// //           <h1 className="text-2xl font-bold">Placements</h1>
// //         </motion.div>
// //       </div>

// //       <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
// //         <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
// //           <div className="flex items-center mr-4">
// //             <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
// //             <span className="text-sm text-gray-500">Filters:</span>
// //           </div>
// //           <div className="flex flex-wrap gap-2">
// //             <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
// //               {/* <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
// //                 {years.map(year => <option key={year} value={year}>
// //                     {year}
// //                   </option>)}
// //               </select> */}
// //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
// //                 <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
// //                   <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
// //                 </svg>
// //               </div>
// //             </div>
// //             <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
// //               <select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
// //                 {departments.map(dept => <option key={dept} value={dept}>
// //                     {dept}
// //                   </option>)}
// //               </select>
// //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
// //                 <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
// //                   <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
// //                 </svg>
// //               </div>
// //             </div>
// //             <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>
// //               <input type="text" placeholder="Search companies..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-transparent py-2 px-3 outline-none w-full text-sm" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.3,
// //         delay: 0.1
// //       }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
// //           <div className="flex justify-between items-start">
// //             <div>
// //               <p className="text-sm text-gray-500">Total Placements</p>
// //               <h3 className="text-2xl font-bold mt-1">
// //                 {placementData.totalPlacements}
// //               </h3>
// //             </div>
// //             <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
// //               <BriefcaseIcon className="h-6 w-6 text-blue-500" />
// //             </div>
// //           </div>
// //         </motion.div>
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.3,
// //         delay: 0.2
// //       }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
// //           <div className="flex justify-between items-start">
// //             <div>
// //               <p className="text-sm text-gray-500">Placement %</p>
// //               <h3 className="text-2xl font-bold mt-1">
// //                 {placementData.placementPercentage}%
// //               </h3>
// //             </div>
// //             <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
// //               <CheckCircleIcon className="h-6 w-6 text-green-500" />
// //             </div>
// //           </div>
// //         </motion.div>
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.3,
// //         delay: 0.3
// //       }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
// //           <div className="flex justify-between items-start">
// //             <div>
// //               <p className="text-sm text-gray-500">Average Salary</p>
// //               <h3 className="text-2xl font-bold mt-1">
// //                 {formatCurrency(placementData.averageSalary)}
// //               </h3>
// //             </div>
// //             <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
// //               <  IndianRupeeIcon className="h-6 w-6 text-yellow-500" />
// //             </div>
// //           </div>
// //         </motion.div>
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.3,
// //         delay: 0.4
// //       }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
// //           <div className="flex justify-between items-start">
// //             <div>
// //               <p className="text-sm text-gray-500">Highest Package</p>
// //               <h3 className="text-2xl font-bold mt-1">
// //                 {formatCurrency(placementData.highestSalary)}
// //               </h3>
// //             </div>
// //             <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
// //               <TrendingUpIcon className="h-6 w-6 text-purple-500" />
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.5,
// //         delay: 0.1
// //       }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
// //           <h2 className="text-xl font-semibold mb-6">
// //             Company-wise Placements
// //           </h2>
// //           <div className="h-96">
// //             <CompanyWisePlacementsChart darkMode={darkMode} companies={filteredCompanies.slice(0, 8)} />
// //           </div>
// //         </motion.div>
// //         <motion.div initial={{
// //         opacity: 0,
// //         y: 20
// //       }} animate={{
// //         opacity: 1,
// //         y: 0
// //       }} transition={{
// //         duration: 0.5,
// //         delay: 0.2
// //       }} className="space-y-6">
// //           <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
// //             <h2 className="text-xl font-semibold mb-4">Salary Distribution</h2>
// //             <div className="h-80">
// //               <SalaryDistributionChart darkMode={darkMode} department={selectedDepartment} />
// //             </div>
// //           </div>
// //           <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
// //             <h2 className="text-xl font-semibold mb-4">Placement Trends</h2>
// //             <div className="h-72">
// //               <PlacementTrendsChart darkMode={darkMode} department={selectedDepartment} />
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       <motion.div initial={{
// //       opacity: 0,
// //       y: 20
// //     }} animate={{
// //       opacity: 1,
// //       y: 0
// //     }} transition={{
// //       duration: 0.5,
// //       delay: 0.3
// //     }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
// //         <h2 className="text-xl font-semibold mb-6">
// //           {/* Department-wise Placement Performance */}
// //         </h2>
// //         <div className="h-72">
// //           <DepartmentPlacementKPI darkMode={darkMode} />
// //         </div>
// //       </motion.div>

// //       <motion.div initial={{
// //       opacity: 0,
// //       y: 20
// //     }} animate={{
// //       opacity: 1,
// //       y: 0
// //     }} transition={{
// //       duration: 0.5,
// //       delay: 0.4
// //     }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
// //         <div className="flex justify-between items-center mb-6">
// //           <h2 className="text-xl font-semibold">Top Recruiting Companies</h2>
// //           <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
// //             {filteredCompanies.length} companies
// //           </div>
// //         </div>
// //         {filteredCompanies.length === 0 ? <div className="text-center py-10">
// //             <p className="text-gray-500">
// //               No companies found matching your filters.
// //             </p>
// //           </div> : <div className="overflow-x-auto">
// //             <table className="min-w-full">
// //               <thead>
// //                 <tr>
// //                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
// //                     Company
// //                   </th>
// //                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
// //                     Placements
// //                   </th>
// //                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
// //                     Departments
// //                   </th>
// //                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-200">
// //                 {filteredCompanies.map((company, index) => <tr key={company.name} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
// //                     <td className="px-4 py-3">
// //                       <div className="flex items-center">
// //                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-3`}>
// //                           <BuildingIcon className="h-4 w-4 text-blue-500" />
// //                         </div>
// //                         <span className="font-medium">{company.name}</span>
// //                       </div>
// //                     </td>
// //                     <td className="px-4 py-3 text-sm">
// //                       <div className={`px-2 py-1 rounded-full text-xs inline-block ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'}`}>
// //                         {company.placements} students
// //                       </div>
// //                     </td>
// //                     <td className="px-4 py-3 text-sm">
// //                       <div className="flex flex-wrap gap-1">
// //                         {company.departments.map(dept => <span key={dept} className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
// //                             {dept}
// //                           </span>)}
// //                       </div>
// //                     </td>
// //                     <td className="px-4 py-3 text-sm">
// //                       <motion.button whileHover={{
// //                   scale: 1.05
// //                 }} whileTap={{
// //                   scale: 0.95
// //                 }} className={`flex items-center text-xs font-medium ${darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'} text-white px-2 py-1 rounded-lg`}>
// //                         View Details <ArrowRightIcon className="h-3 w-3 ml-1" />
// //                       </motion.button>
// //                     </td>
// //                   </tr>)}
// //               </tbody>
// //             </table>
// //           </div>}
// //       </motion.div>
// //     </div>;
// // };
// // export default Placements;


















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BriefcaseIcon,
//   BuildingIcon,
//   TrendingUpIcon,
//   IndianRupeeIcon,
//   FilterIcon,
//   CheckCircleIcon,
//   ArrowRightIcon
// } from 'lucide-react';
// import CompanyWisePlacementsChart from './CompanyWisePlacementsChart';
// import SalaryDistributionChart from './SalaryDistributionChart';
// import DepartmentPlacementKPI from './DepartmentPlacementKPI';
// import PlacementTrendsChart from './PlacementTrendsChart';

// const Placements = ({ darkMode }) => {
//   // const [selectedYear, setSelectedYear] = useState('2025');
//   const [selectedDepartment, setSelectedDepartment] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [expandedCompanies, setExpandedCompanies] = useState(new Set());

//   // Sample student data keyed by company name (replace with your actual data)
//   const studentsByCompany = {
//     Google: [
//       { id: 1, name: "Alice Johnson", department: "Computer Science", package: 1250000 },
//       { id: 2, name: "Bob Smith", department: "Electrical", package: 1100000 },
//     ],
//     Microsoft: [
//       { id: 3, name: "Charlie Davis", department: "Computer Science", package: 1300000 },
//       { id: 4, name: "Dana Lee", department: "Engineering", package: 1150000 },
//     ],
//     Amazon: [
//       { id: 5, name: "Eve Carter", department: "Electrical", package: 1200000 },
//     ],
//     TCS: [],
//     Infosys: [],
//     Wipro: [],
//     Accenture: [],
//     IBM: [],
//     Cognizant: [],
//     Capgemini: [],
//     "Tata Motors": [],
//     "L&T": [],
//     Reliance: [],
//     BHEL: [],
//     Siemens: [],
//   };

//   const toggleExpand = (companyName) => {
//     setExpandedCompanies(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(companyName)) {
//         newSet.delete(companyName);
//       } else {
//         newSet.add(companyName);
//       }
//       return newSet;
//     });
//   };

//   const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
//   // Sample placement data
//   const placementData = {
//     totalPlacements:
//       selectedDepartment === 'All'
//         ? 750
//         : selectedDepartment === 'Computer Science'
//         ? 320
//         : selectedDepartment === 'Mechanical'
//         ? 180
//         : selectedDepartment === 'Electrical'
//         ? 150
//         : 200,
//     placementPercentage:
//       selectedDepartment === 'All'
//         ? 86
//         : selectedDepartment === 'Computer Science'
//         ? 92
//         : selectedDepartment === 'Mechanical'
//         ? 78
//         : selectedDepartment === 'Electrical'
//         ? 82
//         : 84,
//     averageSalary:
//       selectedDepartment === 'All'
//         ? 850000
//         : selectedDepartment === 'Computer Science'
//         ? 1200000
//         : selectedDepartment === 'Mechanical'
//         ? 700000
//         : selectedDepartment === 'Electrical'
//         ? 800000
//         : 750000,
//     highestSalary:
//       selectedDepartment === 'All'
//         ? 3800000
//         : selectedDepartment === 'Computer Science'
//         ? 3800000
//         : selectedDepartment === 'Mechanical'
//         ? 2200000
//         : selectedDepartment === 'Electrical'
//         ? 2500000
//         : 2800000,
//     topCompanies: [
//       {
//         name: 'Google',
//         placements: 42,
//         departments: ['Computer Science', 'Electrical']
//       },
//       {
//         name: 'Microsoft',
//         placements: 38,
//         departments: ['Computer Science', 'Engineering']
//       },
//       {
//         name: 'Amazon',
//         placements: 35,
//         departments: ['Computer Science', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'TCS',
//         placements: 65,
//         departments: ['Computer Science', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'Infosys',
//         placements: 60,
//         departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']
//       },
//       {
//         name: 'Wipro',
//         placements: 55,
//         departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']
//       },
//       {
//         name: 'Accenture',
//         placements: 50,
//         departments: ['Computer Science', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'IBM',
//         placements: 45,
//         departments: ['Computer Science', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'Cognizant',
//         placements: 40,
//         departments: ['Computer Science', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'Capgemini',
//         placements: 35,
//         departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']
//       },
//       {
//         name: 'Tata Motors',
//         placements: 25,
//         departments: ['Mechanical', 'Engineering']
//       },
//       {
//         name: 'L&T',
//         placements: 30,
//         departments: ['Mechanical', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'Reliance',
//         placements: 20,
//         departments: ['Mechanical', 'Electrical', 'Engineering']
//       },
//       {
//         name: 'BHEL',
//         placements: 15,
//         departments: ['Mechanical', 'Electrical']
//       },
//       {
//         name: 'Siemens',
//         placements: 18,
//         departments: ['Electrical', 'Engineering']
//       }
//     ]
//   };

//   // Filter companies based on selected department and search query
//   const filteredCompanies = placementData.topCompanies
//     .filter(company => {
//       const departmentMatch = selectedDepartment === 'All' || company.departments.includes(selectedDepartment);
//       const searchMatch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
//       return departmentMatch && searchMatch;
//     })
//     .sort((a, b) => b.placements - a.placements);

//   // Format currency helper
//   const formatCurrency = (amount) => {
//     if (amount >= 1000000) {
//       return `₹${(amount / 1000000).toFixed(2)} LPA`;
//     } else {
//       return `₹${(amount / 100000).toFixed(2)} LPA`;
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-2xl font-bold">Placements</h1>
//         </motion.div>
//       </div>

//       <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
//         <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
//           <div className="flex items-center mr-4">
//             <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
//             <span className="text-sm text-gray-500">Filters:</span>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
//               {/* Year selector commented out */}
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
//                 <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//                 </svg>
//               </div>
//             </div>
//             <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
//               <select
//                 value={selectedDepartment}
//                 onChange={e => setSelectedDepartment(e.target.value)}
//                 className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm"
//               >
//                 {departments.map(dept => (
//                   <option key={dept} value={dept}>{dept}</option>
//                 ))}
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
//                 <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//                 </svg>
//               </div>
//             </div>
//             <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>
//               <input
//                 type="text"
//                 placeholder="Search companies..."
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 className="bg-transparent py-2 px-3 outline-none w-full text-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {/* Total Placements Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className={`p-4 rounded-xl ${darkMode
//             ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]'
//             : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm text-gray-500">Total Placements</p>
//               <h3 className="text-2xl font-bold mt-1">{placementData.totalPlacements}</h3>
//             </div>
//             <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
//               <BriefcaseIcon className="h-6 w-6 text-blue-500" />
//             </div>
//           </div>
//         </motion.div>
//         {/* Placement % Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className={`p-4 rounded-xl ${darkMode
//             ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]'
//             : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm text-gray-500">Placement %</p>
//               <h3 className="text-2xl font-bold mt-1">{placementData.placementPercentage}%</h3>
//             </div>
//             <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
//               <CheckCircleIcon className="h-6 w-6 text-green-500" />
//             </div>
//           </div>
//         </motion.div>
//         {/* Average Salary Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//           className={`p-4 rounded-xl ${darkMode
//             ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]'
//             : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm text-gray-500">Average Salary</p>
//               <h3 className="text-2xl font-bold mt-1">{formatCurrency(placementData.averageSalary)}</h3>
//             </div>
//             <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
//               <IndianRupeeIcon className="h-6 w-6 text-yellow-500" />
//             </div>
//           </div>
//         </motion.div>
//         {/* Highest Package Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.4 }}
//           className={`p-4 rounded-xl ${darkMode
//             ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]'
//             : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
//         >
//           <div className="flex justify-between items-start">
//             <div>
//               <p className="text-sm text-gray-500">Highest Package</p>
//               <h3 className="text-2xl font-bold mt-1">{formatCurrency(placementData.highestSalary)}</h3>
//             </div>
//             <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
//               <TrendingUpIcon className="h-6 w-6 text-purple-500" />
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
//         >
//           <h2 className="text-xl font-semibold mb-6">Company-wise Placements</h2>
//           <div className="h-96">
//             <CompanyWisePlacementsChart darkMode={darkMode} companies={filteredCompanies.slice(0, 8)} />
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="space-y-6"
//         >
//           <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
//             <h2 className="text-xl font-semibold mb-4">Salary Distribution</h2>
//             <div className="h-80">
//               <SalaryDistributionChart darkMode={darkMode} department={selectedDepartment} />
//             </div>
//           </div>
//           <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
//             <h2 className="text-xl font-semibold mb-4">Placement Trends</h2>
//             <div className="h-72">
//               <PlacementTrendsChart darkMode={darkMode} department={selectedDepartment} />
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
//       >
//         <h2 className="text-xl font-semibold mb-6">{/* Department-wise Placement Performance */}</h2>
//         <div className="h-72">
//           <DepartmentPlacementKPI darkMode={darkMode} />
//         </div>
//       </motion.div>

//       {/* Top Recruiting Companies with expanded student details */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold">Top Recruiting Companies</h2>
//           <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
//             {filteredCompanies.length} companies
//           </div>
//         </div>

//         {filteredCompanies.length === 0 ? (
//           <div className="text-center py-10">
//             <p className="text-gray-500">No companies found matching your filters.</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               <thead>
//                 <tr>
//                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Company</th>
//                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Placements</th>
//                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Departments</th>
//                   <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredCompanies.map((company) => (
//                   <React.Fragment key={company.name}>
//                     <tr className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-3`}>
//                             <BuildingIcon className="h-4 w-4 text-blue-500" />
//                           </div>
//                           <span className="font-medium">{company.name}</span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <div className={`px-2 py-1 rounded-full text-xs inline-block ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'}`}>
//                           {company.placements} students
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <div className="flex flex-wrap gap-1">
//                           {company.departments.map(dept => (
//                             <span key={dept} className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
//                               {dept}
//                             </span>
//                           ))}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => toggleExpand(company.name)}
//                           className={`flex items-center text-xs font-medium ${darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'} text-white px-2 py-1 rounded-lg`}
//                         >
//                           {expandedCompanies.has(company.name) ? 'Hide Details' : 'View Details'}
//                           <ArrowRightIcon className="h-3 w-3 ml-1" />
//                         </motion.button>
//                       </td>
//                     </tr>

//                     {/* Expanded row with student details */}
//                     {expandedCompanies.has(company.name) && (
//                       <tr className={darkMode ? 'bg-gray-900' : 'bg-gray-50'}>
//                         <td colSpan={4} className="px-4 py-2">
//                           <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded">
//                             <thead>
//                               <tr className={darkMode ? 'bg-gray-800' : 'bg-gray-200'}>
//                                 <th className="px-2 py-1 text-left text-xs font-semibold">Student ID</th>
//                                 <th className="px-2 py-1 text-left text-xs font-semibold">Name</th>
//                                 <th className="px-2 py-1 text-left text-xs font-semibold">Department</th>
//                                 <th className="px-2 py-1 text-left text-xs font-semibold">Package</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {(studentsByCompany[company.name] || []).length === 0 ? (
//                                 <tr>
//                                   <td colSpan={4} className="px-2 py-1 text-sm text-center text-gray-500">
//                                     No student data available.
//                                   </td>
//                                 </tr>
//                               ) : (
//                                 studentsByCompany[company.name].map(student => (
//                                   <tr key={student.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}>
//                                     <td className="px-2 py-0.5 text-xs">{student.id}</td>
//                                     <td className="px-2 py-0.5 text-xs">{student.name}</td>
//                                     <td className="px-2 py-0.5 text-xs">{student.department}</td>
//                                     <td className="px-2 py-0.5 text-xs">₹{(student.package / 100000).toFixed(2)} LPA</td>
//                                   </tr>
//                                 ))
//                               )}
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Placements;






import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { BriefcaseIcon, BuildingIcon, TrendingUpIcon,    IndianRupeeIcon, FilterIcon, CheckCircleIcon,  ArrowRightIcon } from 'lucide-react';

import CompanyWisePlacementsChart from './CompanyWisePlacementsChart';

import SalaryDistributionChart from './SalaryDistributionChart';

import DepartmentPlacementKPI from './DepartmentPlacementKPI';

// import PlacementTrendsChart from './PlacementTrendsChart';

 

const Placements = ({

  darkMode

}) => {

  // const [selectedYear, setSelectedYear] = useState('2025');

  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const [searchQuery, setSearchQuery] = useState('');

  // const years = ['2025', '2024', '2023', '2022', '2021'];

  const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];

  // Sample placement data

  const placementData = {

    totalPlacements: selectedDepartment === 'All' ? 750 : selectedDepartment === 'Computer Science' ? 320 : selectedDepartment === 'Mechanical' ? 180 : selectedDepartment === 'Electrical' ? 150 : 200,

    placementPercentage: selectedDepartment === 'All' ? 86 : selectedDepartment === 'Computer Science' ? 92 : selectedDepartment === 'Mechanical' ? 78 : selectedDepartment === 'Electrical' ? 82 : 84,

    averageSalary: selectedDepartment === 'All' ? 850000 : selectedDepartment === 'Computer Science' ? 1200000 : selectedDepartment === 'Mechanical' ? 700000 : selectedDepartment === 'Electrical' ? 800000 : 750000,

    highestSalary: selectedDepartment === 'All' ? 3800000 : selectedDepartment === 'Computer Science' ? 3800000 : selectedDepartment === 'Mechanical' ? 2200000 : selectedDepartment === 'Electrical' ? 2500000 : 2800000,

    topCompanies: [{

      name: 'Google',

      placements: 42,

      departments: ['Computer Science', 'Electrical']

    }, {

      name: 'Microsoft',

      placements: 38,

      departments: ['Computer Science', 'Engineering']

    }, {

      name: 'Amazon',

      placements: 35,

      departments: ['Computer Science', 'Electrical', 'Engineering']

    }, {

      name: 'TCS',

      placements: 65,

      departments: ['Computer Science', 'Electrical', 'Engineering']

    }, {

      name: 'Infosys',

      placements: 60,

      departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']

    }, {

      name: 'Wipro',

      placements: 55,

      departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']

    }, {

      name: 'Accenture',

      placements: 50,

      departments: ['Computer Science', 'Electrical', 'Engineering']

    }, {

      name: 'IBM',

      placements: 45,

      departments: ['Computer Science', 'Electrical', 'Engineering']

    }, {

      name: 'Cognizant',

      placements: 40,

      departments: ['Computer Science', 'Electrical', 'Engineering']

    }, {

      name: 'Capgemini',

      placements: 35,

      departments: ['Computer Science', 'Electrical', 'Engineering', 'Mechanical']

    }, {

      name: 'Tata Motors',

      placements: 25,

      departments: ['Mechanical', 'Engineering']

    }, {

      name: 'L&T',

      placements: 30,

      departments: ['Mechanical', 'Electrical', 'Engineering']

    }, {

      name: 'Reliance',

      placements: 20,

      departments: ['Mechanical', 'Electrical', 'Engineering']

    }, {

      name: 'BHEL',

      placements: 15,

      departments: ['Mechanical', 'Electrical']

    }, {

      name: 'Siemens',

      placements: 18,

      departments: ['Electrical', 'Engineering']

    }]

  };

  // Filter top companies based on selected department

  const filteredCompanies = placementData.topCompanies.filter(company => {

    const departmentMatch = selectedDepartment === 'All' || company.departments.includes(selectedDepartment);

    const searchMatch = company.name.toLowerCase().includes(searchQuery.toLowerCase());

    return departmentMatch && searchMatch;

  }).sort((a, b) => b.placements - a.placements);

  // Format currency

  const formatCurrency = (amount) => {

    if (amount >= 1000000) {

      return `₹${(amount / 1000000).toFixed(2)} LPA`;

    } else {

      return `₹${(amount / 100000).toFixed(2)} LPA`;

    }

  };

  // const container = {

  //   hidden: {

  //     opacity: 0

  //   },

  //   show: {

  //     opacity: 1,

  //     transition: {

  //       staggerChildren: 0.1

  //     }

  //   }

  // };

  // const item = {

  //   hidden: {

  //     opacity: 0,

  //     y: 20

  //   },

  //   show: {

  //     opacity: 1,

  //     y: 0

  //   }

  // };

  return <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.5

      }}>

          <h1 className="text-2xl font-bold">Placements</h1>

        </motion.div>

      </div>

 

      <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>

        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">

          <div className="flex items-center mr-4">

            <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />

            <span className="text-sm text-gray-500">Filters:</span>

          </div>

          <div className="flex flex-wrap gap-2">

            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>

              {/* <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">

                {years.map(year => <option key={year} value={year}>

                    {year}

                  </option>)}

              </select> */}

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">

                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">

                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />

                </svg>

              </div>

            </div>

            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>

              <select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">

                {departments.map(dept => <option key={dept} value={dept}>

                    {dept}

                  </option>)}

              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">

                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">

                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />

                </svg>

              </div>

            </div>

            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>

              <input type="text" placeholder="Search companies..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-transparent py-2 px-3 outline-none w-full text-sm" />

            </div>

          </div>

        </div>

      </div>

 

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.3,

        delay: 0.1

      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-gray-500">Total Placements</p>

              <h3 className="text-2xl font-bold mt-1 pl-4">

                {placementData.totalPlacements}

              </h3>

            </div>

            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>

              <BriefcaseIcon className="h-6 w-6 text-blue-500" />

            </div>

          </div>

        </motion.div>

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.3,

        delay: 0.2

      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-gray-500">Placement %</p>

              <h3 className="text-2xl font-bold  pl-4">

                {placementData.placementPercentage}%

              </h3>

            </div>

            <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>

              <CheckCircleIcon className="h-6 w-6 text-green-500" />

            </div>

          </div>

        </motion.div>

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.3,

        delay: 0.3

      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-gray-500">Average Salary</p>

              <h3 className="text-2xl font-bold mt-1">

                {formatCurrency(placementData.averageSalary)}

              </h3>

            </div>

            <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>

              <  IndianRupeeIcon className="h-6 w-6 text-yellow-500" />

            </div>

          </div>

        </motion.div>

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.3,

        delay: 0.4

      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-gray-500">Highest Package</p>

              <h3 className="text-2xl font-bold mt-1">

                {formatCurrency(placementData.highestSalary)}

              </h3>

            </div>

            <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>

              <TrendingUpIcon className="h-6 w-6 text-purple-500" />

            </div>

          </div>

        </motion.div>

      </div>

 

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.5,

        delay: 0.1

      }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}  style={{ height: '410px' }}>

          <h2 className="text-xl font-semibold mb-6">

            Company-wise Placements

          </h2>

          <div className="h-96">

            <CompanyWisePlacementsChart darkMode={darkMode} companies={filteredCompanies.slice(0, 8)} />

          </div>

        </motion.div>

        <motion.div initial={{

        opacity: 0,

        y: 20

      }} animate={{

        opacity: 1,

        y: 0

      }} transition={{

        duration: 0.5,

        delay: 0.2

      }} className="space-y-6">

          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>

            <h2 className="text-xl font-semibold mb-4">Salary Distribution</h2>

            <div className="h-80">

              <SalaryDistributionChart darkMode={darkMode} department={selectedDepartment} />

            </div>

          </div>

          {/* <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>

            <h2 className="text-xl font-semibold mb-6">Placement Trends</h2>

            <div className="h-72">

              <PlacementTrendsChart darkMode={darkMode} department={selectedDepartment} />

            </div>

          </div> */}

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

      delay: 0.3

    }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>

        <h2 className="text-xl font-semibold mb-6">

          {/* Department-wise Placement Performance */}

        </h2>

        <div className="h-72">

          <DepartmentPlacementKPI darkMode={darkMode} />

        </div>

      </motion.div>

 

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

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-semibold">Top Recruiting Companies</h2>

          <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>

            {filteredCompanies.length} companies

          </div>

        </div>

        {filteredCompanies.length === 0 ? <div className="text-center py-10">

            <p className="text-gray-500">

              No companies found matching your filters.

            </p>

          </div> : <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead>

                <tr>

                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    Company

                  </th>

                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    Placements

                  </th>

                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    Departments

                  </th>

                  <th className={`px-4 py-2 text-left text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    Actions

                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-gray-200">

                {filteredCompanies.map((company, index) => <tr key={company.name} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>

                    <td className="px-4 py-3">

                      <div className="flex items-center">

                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-3`}>

                          <BuildingIcon className="h-4 w-4 text-blue-500" />

                        </div>

                        <span className="font-medium">{company.name}</span>

                      </div>

                    </td>

                    <td className="px-4 py-3 text-sm">

                      <div className={`px-2 py-1 rounded-full text-xs inline-block ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'}`}>

                        {company.placements} students

                      </div>

                    </td>

                    <td className="px-4 py-3 text-sm">

                      <div className="flex flex-wrap gap-1">

                        {company.departments.map(dept => <span key={dept} className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>

                            {dept}

                          </span>)}

                      </div>

                    </td>

                    <td className="px-4 py-3 text-sm">

                      <motion.button whileHover={{

                  scale: 1.05

                }} whileTap={{

                  scale: 0.95

                }} className={`flex items-center text-xs font-medium ${darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'} text-white px-2 py-1 rounded-lg`}>

                        View Details <ArrowRightIcon className="h-3 w-3 ml-1" />

                      </motion.button>

                    </td>

                  </tr>)}

              </tbody>

            </table>

          </div>}

      </motion.div>

    </div>;

};

export default Placements;