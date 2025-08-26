// import React, { useEffect, useState } from 'react'
// import {
//   UsersIcon,PauseCircleIcon,XCircleIcon,CheckCircleIcon,MoreHorizontalIcon,GraduationCapIcon,
// } from 'lucide-react'


// import  StatCard  from '../ad-components/ui/StatCard'
// import  FilterDropdown  from '../ad-components/ui/FilterDropdown'
// import { AreaChart } from '../ad-components/charts/AreaChart'
// import  PieChart  from '../ad-components/charts/PieChart'
// import  DataTable  from '../ad-components/ui/DataTable'
// import  Modal  from '../ad-components/ui/Modal'
// import { useTheme } from '../context/ThemeContext'
// import {
//   studentKPIs,
//   registrationData,
//   studentStatusData,
//   studentTableData,
// } from '../utils/mockData'

// export const Students = () => {
//   const { theme } = useTheme()
//   const [selectedMonth, setSelectedMonth] = useState('All 2023')
//   const [filteredKPIs, setFilteredKPIs] = useState(studentKPIs)
//   const [filteredRegistrationData, setFilteredRegistrationData] = useState(registrationData)
//   const [filteredStatusData, setFilteredStatusData] = useState(studentStatusData)
//   const [filteredTableData, setFilteredTableData] = useState(studentTableData)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [modalData, setModalData] = useState({
//     title: '',
//     content: null,
//   })

//   const months = [
//     'All 2023',
//     'Jan 2023',
//     'Feb 2023',
//     'Mar 2023',
//     'Apr 2023',
//     'May 2023',
//     'Jun 2023',
//     'Jul 2023',
//     'Aug 2023',
//     'Sep 2023',
//     'Oct 2023',
//     'Nov 2023',
//     'Dec 2023',
//   ]

//   useEffect(() => {
//     if (selectedMonth === 'All 2023') {
//       setFilteredKPIs(studentKPIs)
//       setFilteredRegistrationData(registrationData)
//       setFilteredStatusData(studentStatusData)
//       setFilteredTableData(studentTableData)
//     } else {
//       const monthName = selectedMonth.split(' ')[0]
//       const filteredRegData = registrationData.filter(
//         (item) => item.month === monthName,
//       )
//       setFilteredRegistrationData(filteredRegData)
//       const monthIndex = months.findIndex((m) => m === selectedMonth) - 1
//       if (monthIndex >= 0 && monthIndex < 12) {
//         const monthlyMultiplier = (monthIndex + 1) / 12
//         const monthlyKPIs = {
//           totalRegistered: Math.round(studentKPIs.totalRegistered * monthlyMultiplier),
//           onHold: Math.round(studentKPIs.onHold * monthlyMultiplier),
//           rejected: Math.round(studentKPIs.rejected * monthlyMultiplier),
//           approved: Math.round(studentKPIs.approved * monthlyMultiplier),
//         }
//         setFilteredKPIs(monthlyKPIs)
//         const monthlyStatusData = [
//           {
//             name: 'Approved',
//             value: monthlyKPIs.approved,
//           },
//           {
//             name: 'On Hold',
//             value: monthlyKPIs.onHold,
//           },
//           {
//             name: 'Rejected',
//             value: monthlyKPIs.rejected,
//           },
//         ]
//         setFilteredStatusData(monthlyStatusData)
//         const monthlyTableData = studentTableData.filter(
//           (_, index) => index % 12 === monthIndex || index < 3,
//         )
//         setFilteredTableData(monthlyTableData)
//       }
//     }// eslint-disable-next-line
//   }, [selectedMonth])

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return theme === 'dark' ? 'text-green-400' : 'text-green-600'
//       case 'On Hold':
//         return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
//       case 'Rejected':
//         return theme === 'dark' ? 'text-red-400' : 'text-red-600'
//       default:
//         return ''
//     }
//   }

//   const getStatusBg = (status) => {
//     switch (status) {
//       case 'Approved':
//         return theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'
//       case 'On Hold':
//         return theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'
//       case 'Rejected':
//         return theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'
//       default:
//         return ''
//     }
//   }

//   const columns = [
//     {
//       header: 'Name',
//       accessor: 'name',
//       sortable: true,
//     },
//     {
//       header: 'Email',
//       accessor: 'email',
//       sortable: true,
//     },
//     {
//       header: 'Status',
//       accessor: 'status',
//       sortable: true,
//       cell: (value) => (
//         <span
//           className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(value)} ${getStatusColor(value)}`}
//         >
//           {value}
//         </span>
//       ),
//     },
//     {
//       header: 'Registration Date',
//       accessor: 'registrationDate',
//       sortable: true,
//       cell: (value) => new Date(value).toLocaleDateString(),
//     },
//   ]

//   const renderActions = (row) => (
//     <div className="flex space-x-2 justify-end">
//       <button
//         className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
//         aria-label="Approve"
//       >
//         <CheckCircleIcon size={18} className="text-green-500" />
//       </button>
//       <button
//         className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
//         aria-label="Hold"
//       >
//         <PauseCircleIcon size={18} className="text-yellow-500" />
//       </button>
//       <button
//         className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
//         aria-label="Reject"
//       >
//         <XCircleIcon size={18} className="text-red-500" />
//       </button>
//       <button
//         className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
//         aria-label="More options"
//       >
//         <MoreHorizontalIcon size={18} />
//       </button>
//     </div>
//   )

//   const handleTotalRegisteredClick = () => {
//     setModalData({
//       title: 'Total Registered Students',
//       content: (
//         <div className="space-y-4">
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-medium">Registration Overview</h3>
//               <GraduationCapIcon
//                 size={20}
//                 className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
//               />
//             </div>
//             <p className="text-sm">
//               A total of {filteredKPIs.totalRegistered.toLocaleString()}{' '}
//               students have registered on the platform.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 gap-3">
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">Engineering</h4>
//               <p className="text-lg font-semibold">
//                 {Math.round(filteredKPIs.totalRegistered * 0.45).toLocaleString()}
//               </p>
//             </div>
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">Commerce</h4>
//               <p className="text-lg font-semibold">
//                 {Math.round(filteredKPIs.totalRegistered * 0.25).toLocaleString()}
//               </p>
//             </div>
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">Arts</h4>
//               <p className="text-lg font-semibold">
//                 {Math.round(filteredKPIs.totalRegistered * 0.18).toLocaleString()}
//               </p>
//             </div>
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">Other</h4>
//               <p className="text-lg font-semibold">
//                 {Math.round(filteredKPIs.totalRegistered * 0.12).toLocaleString()}
//               </p>
//             </div>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <h3 className="font-medium mb-2">Top 5 Colleges</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Delhi Technical University</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.totalRegistered * 0.08).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Mumbai Institute of Technology</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.totalRegistered * 0.07).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">
//                   Bangalore College of Engineering
//                 </span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.totalRegistered * 0.06).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">
//                   Chennai Arts and Science College
//                 </span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.totalRegistered * 0.05).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Kolkata Medical Institute</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.totalRegistered * 0.04).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     })
//     setIsModalOpen(true)
//   }

//   const handleOnHoldClick = () => {
//     setModalData({
//       title: 'Students On Hold',
//       content: (
//         <div className="space-y-4">
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-medium">On Hold Details</h3>
//               <PauseCircleIcon
//                 size={20}
//                 className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}
//               />
//             </div>
//             <p className="text-sm">
//               There are currently {filteredKPIs.onHold.toLocaleString()}{' '}
//               students on hold pending verification or additional information.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 gap-3">
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">
//                 Reasons for Hold
//               </h4>
//               <div className="mt-2 space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Incomplete profile</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.onHold * 0.42).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Document verification</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.onHold * 0.35).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">College verification</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.onHold * 0.15).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Other reasons</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.onHold * 0.08).toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <h3 className="font-medium mb-2">On Hold Duration</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Less than 3 days</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.onHold * 0.54).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">3-7 days</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.onHold * 0.28).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">1-2 weeks</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.onHold * 0.12).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">More than 2 weeks</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.onHold * 0.06).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     })
//     setIsModalOpen(true)
//   }

//   const handleRejectedClick = () => {
//     setModalData({
//       title: 'Rejected Students',
//       content: (
//         <div className="space-y-4">
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-medium">Rejection Analysis</h3>
//               <XCircleIcon
//                 size={20}
//                 className={theme === 'dark' ? 'text-red-400' : 'text-red-600'}
//               />
//             </div>
//             <p className="text-sm">
//               {filteredKPIs.rejected.toLocaleString()} student registrations
//               have been rejected. Common reasons include duplicate accounts and
//               invalid credentials.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 gap-3">
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">
//                 Rejection Reasons
//               </h4>
//               <div className="mt-2 space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Duplicate account</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.rejected * 0.38).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Invalid credentials</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.rejected * 0.25).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Suspicious activity</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.rejected * 0.18).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Incomplete information</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.rejected * 0.12).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm">Other</span>
//                   <span className="text-sm font-medium">
//                     {Math.round(filteredKPIs.rejected * 0.07).toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <h3 className="font-medium mb-2">Appeals Status</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">No appeal filed</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.rejected * 0.82).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Appeal pending</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.rejected * 0.12).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Appeal approved</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.rejected * 0.04).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Appeal rejected</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.rejected * 0.02).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     })
//     setIsModalOpen(true)
//   }

//   const handleApprovedClick = () => {
//     setModalData({
//       title: 'Approved Students',
//       content: (
//         <div className="space-y-4">
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-medium">Approved Student Analysis</h3>
//               <CheckCircleIcon
//                 size={20}
//                 className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}
//               />
//             </div>
//             <p className="text-sm">
//               {filteredKPIs.approved.toLocaleString()} students have been
//               approved and can fully access the platform.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 gap-3">
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">
//                 Profile Completion
//               </h4>
//               <p className="text-lg font-semibold">
//                 {Math.round(filteredKPIs.approved * 0.78).toLocaleString()}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 78% have completed profiles
//               </p>
//             </div>
//             <div
//               className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//             >
//               <h4 className="text-xs font-medium text-gray-500">Applied to Jobs</h4>
//               <p className="text-lg font-semibold">
//                 {Math.round(filteredKPIs.approved * 0.65).toLocaleString()}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 65% have applied to jobs
//               </p>
//             </div>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <h3 className="font-medium mb-2">Education Level</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Undergraduate</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.58).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Postgraduate</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.32).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">PhD</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.06).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Other</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.04).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//           >
//             <h3 className="font-medium mb-2">Activity Level</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Active (last 7 days)</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.42).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Active (last 30 days)</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.28).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Inactive (1-3 months)</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.18).toLocaleString()}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm">Inactive (&gt;3 months)</span>
//                 <span className="text-sm font-medium">
//                   {Math.round(filteredKPIs.approved * 0.12).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     })
//     setIsModalOpen(true)
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h1 className="text-2xl font-bold">Students Management</h1>
//         <FilterDropdown
//           label="Period"
//           options={months}
//           value={selectedMonth}
//           onChange={setSelectedMonth}
//         />
//       </div>
//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           title="Total Registered Students"
//           value={filteredKPIs.totalRegistered}
//           icon={
//             <UsersIcon
//               size={24}
//               className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
//             />
//           }
//           onClick={handleTotalRegisteredClick}
//         />
//         <StatCard
//           title="On Hold"
//           value={filteredKPIs.onHold}
//           icon={
//             <PauseCircleIcon
//               size={24}
//               className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}
//             />
//           }
//           onClick={handleOnHoldClick}
//         />
//         <StatCard
//           title="Rejected"
//           value={filteredKPIs.rejected}
//           icon={
//             <XCircleIcon
//               size={24}
//               className={theme === 'dark' ? 'text-red-400' : 'text-red-600'}
//             />
//           }
//           onClick={handleRejectedClick}
//         />
//         <StatCard
//           title="Approved"
//           value={filteredKPIs.approved}
//           icon={
//             <CheckCircleIcon
//               size={24}
//               className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}
//             />
//           }
//           onClick={handleApprovedClick}
//         />
//       </div>
//       {/* Insights Section */}
     
//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <AreaChart
//           title="Monthly Students Registration"
//           data={filteredRegistrationData}
//           xKey="month"
//           yKeys={[
//             {
//               key: 'students',
//               color: '#3B82F6',
//               name: 'Students',
//             },
//           ]}
//         />
//         <PieChart
//           title="Student Status Distribution"
//           data={filteredStatusData}
//           colors={['#10B981', '#FBBF24', '#EF4444']}
//           donut
//         />
//       </div>
//       {/* Students Table */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Students</h2>
//         <DataTable columns={columns} data={filteredTableData} actions={renderActions} />
//       </div>
//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalData.title}>
//         {modalData.content}
//       </Modal>
//     </div>
//   )
// }











import React, { useState, useCallback } from 'react'
import {
  UsersIcon,
  PauseCircleIcon,
  XCircleIcon,
  MoreHorizontalIcon,
  GraduationCapIcon,
  XCircleIcon as CloseIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from 'lucide-react'

import { AreaChart } from '../ad-components/charts/AreaChart'
import PieChart from '../ad-components/charts/PieChart'
import DataTable from '../ad-components/ui/DataTable'
import Modal from '../ad-components/ui/Modal'
import { useTheme } from '../context/ThemeContext'
import {
  studentKPIs,
  registrationData,
  studentStatusData,
  studentTableData,
} from '../utils/mockData'

// Stat Card
const CustomStatCard = ({ title, value, change, icon, onClick }) => {
  const { theme } = useTheme()
  const formattedValue = React.useMemo(() => (typeof value === 'number' ? value.toLocaleString() : value), [value])

  const handleKeyDown = useCallback(
    e => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        onClick()
      }
    },
    [onClick]
  )

  const renderChange = () => {
    if (change === undefined || change === 0) return null
    if (change > 0)
      return (
        <>
          <ArrowUpIcon className="text-green-500" size={16} />
          <span className="text-xs ml-1 text-green-500">{change}% from last month</span>
        </>
      )
    if (change < 0)
      return (
        <>
          <ArrowDownIcon className="text-red-500" size={16} />
          <span className="text-xs ml-1 text-red-500">{Math.abs(change)}% from last month</span>
        </>
      )
    return null
  }

  return (
    <div
      className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white'} border shadow-sm transition-all hover:shadow-md ${
        onClick ? 'cursor-pointer hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-600' : ''
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={onClick ? false : undefined}
      aria-label={onClick ? `View details for ${title}` : undefined}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{formattedValue}</p>
          {renderChange()}
        </div>
        {icon && <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>{icon}</div>}
      </div>
    </div>
  )
}

// Modal
// eslint-disable-next-line
const StatusModal = ({
  isOpen,
  onClose,
  title,
  icon,
  overview,
  stats,
  topListLabel,
  topList,
}) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-md p-6 shadow-xl border border-gray-700 relative">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon size={24} />
        </button>
        <div className="flex items-center text-xl font-bold mb-4 gap-2">
          {icon}
          {title}
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 mb-4">
          <h3 className="font-medium mb-1">{overview.heading}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{overview.text}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white dark:bg-gray-900 rounded-md shadow-sm p-3 text-center">
              <div className="text-xs text-gray-500">{s.label}</div>
              <div className="text-2xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4">
          <h3 className="font-medium mb-2">{topListLabel}</h3>
          <ul className="text-sm">
            {topList.map((item, idx) => (
              <li key={item.name} className="flex justify-between py-1 border-b border-gray-300 dark:border-gray-700 last:border-0">
                <span>{idx + 1}. {item.name}</span>
                <span>{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const Students = () => {
  const { theme } = useTheme()

  const [filteredKPIs] = useState({ ...studentKPIs, pending: 4308 }) // Set 'pending' to 4308
  // const [filteredRegistrationData] = useState(registrationData)
  // const [filteredStatusData] = useState(studentStatusData)
  const [filteredTableData] = useState(studentTableData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProps, setModalProps] = useState({})

  const columns = [
    { header: 'Name', accessor: 'name', sortable: true },
    { header: 'Email', accessor: 'email', sortable: true },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: value => {
        const bgClass =
          value === 'Approved' ? (theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100') :
          value === 'On Hold' ? (theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100') :
          value === 'Rejected' ? (theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100') :
          value === 'Pending' ? (theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-100') : ''
        const textClass =
          value === 'Approved' ? (theme === 'dark' ? 'text-green-400' : 'text-green-600') :
          value === 'On Hold' ? (theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600') :
          value === 'Rejected' ? (theme === 'dark' ? 'text-red-400' : 'text-red-600') :
          value === 'Pending' ? (theme === 'dark' ? 'text-gray-400' : 'text-gray-600') : ''

        return <span className={`${bgClass} ${textClass} px-2 py-1 rounded-full text-xs font-medium`}>{value}</span>
      }
    },
    { header: 'Registration Date', accessor: 'registrationDate', sortable: true, cell: v => new Date(v).toLocaleDateString() }
  ]

  const openModal = (type) => {
    let props = {}
    switch(type) {
      case 'total':
        props = {
          title: 'Total Registered Students',
          icon: <GraduationCapIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />,
          overview: {
            heading: 'Registration Overview',
            text: `A total of ${filteredKPIs.totalRegistered.toLocaleString()} students have registered on the platform.`,
          },
          stats: [
            { label: 'Engineering', value: Math.round(filteredKPIs.totalRegistered * 0.45).toLocaleString() },
            { label: 'Commerce', value: Math.round(filteredKPIs.totalRegistered * 0.25).toLocaleString() },
            { label: 'Arts', value: Math.round(filteredKPIs.totalRegistered * 0.18).toLocaleString() },
            { label: 'Other', value: Math.round(filteredKPIs.totalRegistered * 0.12).toLocaleString() }
          ],
          topListLabel: 'Top 5 Colleges',
          topList: [
            { name: 'Delhi Technical University', count: Math.round(filteredKPIs.totalRegistered * 0.08).toLocaleString() },
            { name: 'Mumbai Institute of Technology', count: Math.round(filteredKPIs.totalRegistered * 0.07).toLocaleString() },
            { name: 'Bangalore College of Engineering', count: Math.round(filteredKPIs.totalRegistered * 0.06).toLocaleString() },
            { name: 'Chennai Arts and Science College', count: Math.round(filteredKPIs.totalRegistered * 0.05).toLocaleString() },
            { name: 'Kolkata Medical Institute', count: Math.round(filteredKPIs.totalRegistered * 0.04).toLocaleString() }
          ]
        }
        break
      case 'onHold':
        props = {
          title: 'Students On Hold',
          icon: <PauseCircleIcon className="text-yellow-500" size={24} />,
          overview: {
            heading: 'Status Overview',
            text: `A total of ${filteredKPIs.onHold.toLocaleString()} students are currently on hold.`,
          },
          stats: [
            { label: 'Incomplete Docs', value: Math.round(filteredKPIs.onHold * 0.4).toLocaleString() },
            { label: 'Profile Issues', value: Math.round(filteredKPIs.onHold * 0.3).toLocaleString() },
            { label: 'Payment Pending', value: Math.round(filteredKPIs.onHold * 0.2).toLocaleString() },
            { label: 'Other', value: Math.round(filteredKPIs.onHold * 0.1).toLocaleString() },
          ],
          topListLabel: 'Top 5 Colleges',
          topList: [
            { name: 'Delhi Technical University', count: 62 },
            { name: 'Mumbai Institute of Technology', count: 56 },
            { name: 'Bangalore College of Engineering', count: 53 },
            { name: 'Chennai Arts and Science College', count: 50 },
            { name: 'Kolkata Medical Institute', count: 44 }
          ]
        }
        break
      case 'rejected':
        props = {
          title: 'Rejected Students',
          icon: <XCircleIcon className="text-red-500" size={24} />,
          overview: {
            heading: 'Status Overview',
            text: `A total of ${filteredKPIs.rejected.toLocaleString()} students are currently rejected.`,
          },
          stats: [
            { label: 'Duplicate', value: Math.round(filteredKPIs.rejected * 0.38).toLocaleString() },
            { label: 'Invalid Docs', value: Math.round(filteredKPIs.rejected * 0.25).toLocaleString() },
            { label: 'Fraud', value: Math.round(filteredKPIs.rejected * 0.18).toLocaleString() },
            { label: 'Other', value: Math.round(filteredKPIs.rejected * 0.19).toLocaleString() }
          ],
          topListLabel: 'Top 5 Colleges',
          topList: [
            { name: 'Delhi Technical University', count: 37 },
            { name: 'Mumbai Institute of Technology', count: 31 },
            { name: 'Bangalore College of Engineering', count: 29 },
            { name: 'Chennai Arts and Science College', count: 24 },
            { name: 'Kolkata Medical Institute', count: 20 }
          ]
        }
        break
      case 'pending':
        props = {
          title: 'Pending Students',
          icon: <MoreHorizontalIcon className="text-gray-600" size={24} />,
          overview: {
            heading: 'Status Overview',
            text: `There are currently ${filteredKPIs.pending || 4308} students pending processing.`,
          },
          stats: [
            { label: 'Awaiting Admin', value: Math.round((filteredKPIs.pending || 4308) * 0.4).toLocaleString() },
            { label: 'Email Verify', value: Math.round((filteredKPIs.pending || 4308) * 0.3).toLocaleString() },
            { label: 'Docs Upload', value: Math.round((filteredKPIs.pending || 4308) * 0.2).toLocaleString() },
            { label: 'Other', value: Math.round((filteredKPIs.pending || 4308) * 0.1).toLocaleString() }
          ],
          topListLabel: 'Top 5 Colleges',
          topList: [
            { name: 'Delhi Technical University', count: 19 },
            { name: 'Mumbai Institute of Technology', count: 18 },
            { name: 'Bangalore College of Engineering', count: 15 },
            { name: 'Chennai Arts and Science College', count: 12 },
            { name: 'Kolkata Medical Institute', count: 10 }
          ]
        }
        break
      default:
        return
    }
    setModalProps(props)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">Students Management</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <CustomStatCard
          title="Total Registered Students"
          value={filteredKPIs.totalRegistered}
          icon={<UsersIcon className={`text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`} size={24} />}
          onClick={() => openModal('total')}
        />
        <CustomStatCard
          title="On Hold"
          value={filteredKPIs.onHold}
          icon={<PauseCircleIcon className={`text-${theme === 'dark' ? 'yellow-400' : 'yellow-600'}`} size={24} />}
          onClick={() => openModal('onHold')}
        />
        <CustomStatCard
          title="Rejected"
          value={filteredKPIs.rejected}
          icon={<XCircleIcon className={`text-${theme === 'dark' ? 'red-400' : 'red-600'}`} size={24} />}
          onClick={() => openModal('rejected')}
        />
        <CustomStatCard
          title="Pending"
          value={filteredKPIs.pending || 4308}
          icon={<MoreHorizontalIcon className={`text-${theme === 'dark' ? 'gray-600' : 'gray-600'}`} size={24} />}
          onClick={() => openModal('pending')}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <AreaChart
          title="Monthly Student Registration"
          data={registrationData}
          xKey="month"
          yKeys={[{ key: 'students', color: '#3B82F6', name: 'Students' }]}
        />
        <PieChart
          title="Student Status Distribution"
          data={studentStatusData}
          colors={['#10B981', '#FBBF24', '#EF4444']}
          donut
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        {/* Action icons REMOVED: */}
        <DataTable columns={columns} data={filteredTableData} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalProps.title}>
        <>
          <div className="mb-4 flex items-center gap-2">{modalProps.icon}{modalProps.title}</div>
          <div>
            <div className="mb-4">
              <h3 className="font-medium mb-1">{modalProps.overview?.heading}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{modalProps.overview?.text}</p>
            </div>
            {modalProps.stats && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {modalProps.stats.map(({ label, value }) => (
                  <div key={label} className="bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm p-3 text-center">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-2xl font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            )}
            {modalProps.topList && (
              <div>
                <h3 className="font-medium mb-2">{modalProps.topListLabel}</h3>
                <ul className="text-sm">
                  {modalProps.topList.map(({ name, count }, idx) => (
                    <li key={name} className="flex justify-between py-1 border-b border-gray-300 dark:border-gray-700 last:border-0">
                      <span>{idx + 1}. {name}</span>
                      <span>{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      </Modal>
    </>
  )
}
