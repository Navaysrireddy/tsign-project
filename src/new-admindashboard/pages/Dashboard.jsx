// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   UsersIcon,
//   BriefcaseIcon,
//   FileTextIcon,
//   ClockIcon,
//   InfoIcon,
//   TrendingUpIcon,
//   BarChart2Icon,
//   PieChartIcon,
// } from 'lucide-react';

// // ✅ FIXED imports (all are default exports, not named)
// import StatCard from '../ad-components/ui/StatCard';
// import FilterDropdown from '../ad-components/ui/FilterDropdown';
// import LineChart from '../ad-components/charts/LineChart';
// import BarChart from '../ad-components/charts/BarChart';
// import Modal from '../ad-components/ui/Modal';

// import { useTheme } from '../context/ThemeContext';
// import {
//   dashboardKPIs,
//   registrationData,
//   userComparisonData,
// } from '../utils/mockData';

// const Dashboard = () => {
//   const { theme } = useTheme();
//   const navigate = useNavigate();
//   const [selectedMonth, setSelectedMonth] = useState('All 2023');
//   const [filteredKPIs, setFilteredKPIs] = useState(dashboardKPIs);
//   const [filteredRegistrationData, setFilteredRegistrationData] =
//     useState(registrationData);
//   const [filteredUserComparisonData, setFilteredUserComparisonData] =
//     useState(userComparisonData);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({ title: '', content: null });

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
//   ];

//   useEffect(() => {
//     if (selectedMonth === 'All 2023') {
//       setFilteredKPIs(dashboardKPIs);
//       setFilteredRegistrationData(registrationData);
//       setFilteredUserComparisonData(userComparisonData);
//     } else {
//       const monthName = selectedMonth.split(' ')[0];
//       const filteredRegData = registrationData.filter(
//         (item) => item.month === monthName
//       );
//       setFilteredRegistrationData(filteredRegData);
//       const filteredUserData = userComparisonData.filter(
//         (item) => item.month === monthName
//       );
//       setFilteredUserComparisonData(filteredUserData);

//       const monthIndex = months.findIndex((m) => m === selectedMonth) - 1;
//       if (monthIndex >= 0 && monthIndex < 12) {
//         const monthlyMultiplier = (monthIndex + 1) / 12;
//         setFilteredKPIs({
//           totalUsers: Math.round(
//             dashboardKPIs.totalUsers * monthlyMultiplier
//           ),
//           activeJobs: Math.round(
//             dashboardKPIs.activeJobs * monthlyMultiplier
//           ),
//           applicationsSubmitted: Math.round(
//             dashboardKPIs.applicationsSubmitted * monthlyMultiplier
//           ),
//           pendingApprovals: Math.round(
//             dashboardKPIs.pendingApprovals * monthlyMultiplier
//           ),
//           monthlyChange: {
//             totalUsers: Math.round(
//               dashboardKPIs.monthlyChange.totalUsers *
//                 (monthIndex > 0 ? 1 : 0.8)
//             ),
//             activeJobs: Math.round(
//               dashboardKPIs.monthlyChange.activeJobs *
//                 (monthIndex > 0 ? 1 : 0.9)
//             ),
//             applicationsSubmitted: Math.round(
//               dashboardKPIs.monthlyChange.applicationsSubmitted *
//                 (monthIndex > 0 ? 1 : 1.2)
//             ),
//             pendingApprovals: Math.round(
//               dashboardKPIs.monthlyChange.pendingApprovals *
//                 (monthIndex > 0 ? 1 : 0.7)
//             ),
//           },
//         });
//       }
//     }
//   }, [selectedMonth]);

//   const handleManageStudents = () => navigate('/manage-students');
//   const handleManageColleges = () => navigate('/manage-colleges');
//   const handleManageRecruiters = () => navigate('/manage-recruiters');

//   // (all your modal handlers stay unchanged)

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h1 className="text-2xl font-bold">Dashboard Overview</h1>
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
//           title="Total Users"
//           value={filteredKPIs.totalUsers}
//           change={filteredKPIs.monthlyChange.totalUsers}
//           icon={
//             <UsersIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//         <StatCard
//           title="Active Jobs"
//           value={filteredKPIs.activeJobs}
//           change={filteredKPIs.monthlyChange.activeJobs}
//           icon={
//             <BriefcaseIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-green-400' : 'text-green-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//         <StatCard
//           title="Applications Submitted"
//           value={filteredKPIs.applicationsSubmitted}
//           change={filteredKPIs.monthlyChange.applicationsSubmitted}
//           icon={
//             <FileTextIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//         <StatCard
//           title="Pending Approvals"
//           value={filteredKPIs.pendingApprovals}
//           change={filteredKPIs.monthlyChange.pendingApprovals}
//           icon={
//             <ClockIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <LineChart
//           title="Registration Trends"
//           data={filteredRegistrationData}
//           xKey="month"
//           yKeys={[
//             { key: 'students', color: '#3B82F6', name: 'Students' },
//             { key: 'colleges', color: '#10B981', name: 'Colleges' },
//             { key: 'recruiters', color: '#8B5CF6', name: 'Recruiters' },
//           ]}
//         />
//         <BarChart
//           title="Total vs Active Users"
//           data={filteredUserComparisonData}
//           xKey="month"
//           yKeys={[
//             { key: 'total', color: '#3B82F6', name: 'Total Users' },
//             { key: 'active', color: '#10B981', name: 'Active Users' },
//           ]}
//         />
//       </div>

//       {/* T-Sign Section */}
//       <div
//         className={`rounded-xl p-6 border ${
//           theme === 'dark'
//             ? 'bg-[#1E1E1E] border-gray-800'
//             : 'bg-white border-gray-100'
//         } shadow-sm`}
//       >
//         <h2 className="text-xl font-semibold mb-4">
//           Manage Registrations in T-Sign
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             className={`p-4 rounded-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
//             }`}
//           >
//             <h3 className="font-medium">Total Registered Students</h3>
//             <p className="text-2xl font-semibold mt-2">
//               {Math.round(filteredKPIs.totalUsers * 0.52).toLocaleString()}
//             </p>
//             <button
//               onClick={handleManageStudents}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm ${
//                 theme === 'dark'
//                   ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                   : 'bg-blue-500 hover:bg-blue-600 text-white'
//               } transition-colors`}
//             >
//               Manage Students
//             </button>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
//             }`}
//           >
//             <h3 className="font-medium">Total Registered Colleges</h3>
//             <p className="text-2xl font-semibold mt-2">
//               {Math.round(filteredKPIs.totalUsers * 0.04).toLocaleString()}
//             </p>
//             <button
//               onClick={handleManageColleges}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm ${
//                 theme === 'dark'
//                   ? 'bg-green-600 hover:bg-green-700 text-white'
//                   : 'bg-green-500 hover:bg-green-600 text-white'
//               } transition-colors`}
//             >
//               Manage Colleges
//             </button>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
//             }`}
//           >
//             <h3 className="font-medium">Total Registered Recruiters</h3>
//             <p className="text-2xl font-semibold mt-2">
//               {Math.round(filteredKPIs.totalUsers * 0.44).toLocaleString()}
//             </p>
//             <button
//               onClick={handleManageRecruiters}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm ${
//                 theme === 'dark'
//                   ? 'bg-purple-600 hover:bg-purple-700 text-white'
//                   : 'bg-purple-500 hover:bg-purple-600 text-white'
//               } transition-colors`}
//             >
//               Manage Recruiters
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title={modalData.title}
//       >
//         {modalData.content}
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;




















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   UsersIcon,
//   BriefcaseIcon,
//   FileTextIcon,
//   ClockIcon,
// } from 'lucide-react';

// // ✅ FIXED imports (all are default exports, not named)
// import StatCard from '../ad-components/ui/StatCard';
// import FilterDropdown from '../ad-components/ui/FilterDropdown';
// import LineChart from '../ad-components/charts/LineChart';
// import BarChart from '../ad-components/charts/BarChart';
// import Modal from '../ad-components/ui/Modal';

// import { useTheme } from '../context/ThemeContext';
// import {
//   dashboardKPIs,
//   registrationData,
//   userComparisonData,
// } from '../utils/mockData';

// const Dashboard = () => {
//   const { theme } = useTheme();
//   const navigate = useNavigate();
//   const [selectedMonth, setSelectedMonth] = useState('All 2023');
//   const [filteredKPIs, setFilteredKPIs] = useState(dashboardKPIs);
//   const [filteredRegistrationData, setFilteredRegistrationData] =
//     useState(registrationData);
//   const [filteredUserComparisonData, setFilteredUserComparisonData] =
//     useState(userComparisonData);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({ title: '', content: null });

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
//   ];

//   useEffect(() => {
//     if (selectedMonth === 'All 2023') {
//       setFilteredKPIs(dashboardKPIs);
//       setFilteredRegistrationData(registrationData);
//       setFilteredUserComparisonData(userComparisonData);
//     } else {
//       const monthName = selectedMonth.split(' ')[0];
//       const filteredRegData = registrationData.filter(
//         (item) => item.month === monthName
//       );
//       setFilteredRegistrationData(filteredRegData);
//       const filteredUserData = userComparisonData.filter(
//         (item) => item.month === monthName
//       );
//       setFilteredUserComparisonData(filteredUserData);

//       const monthIndex = months.findIndex((m) => m === selectedMonth) - 1;
//       if (monthIndex >= 0 && monthIndex < 12) {
//         const monthlyMultiplier = (monthIndex + 1) / 12;
//         setFilteredKPIs({
//           totalUsers: Math.round(
//             dashboardKPIs.totalUsers * monthlyMultiplier
//           ),
//           activeJobs: Math.round(
//             dashboardKPIs.activeJobs * monthlyMultiplier
//           ),
//           applicationsSubmitted: Math.round(
//             dashboardKPIs.applicationsSubmitted * monthlyMultiplier
//           ),
//           pendingApprovals: Math.round(
//             dashboardKPIs.pendingApprovals * monthlyMultiplier
//           ),
//           monthlyChange: {
//             totalUsers: Math.round(
//               dashboardKPIs.monthlyChange.totalUsers *
//                 (monthIndex > 0 ? 1 : 0.8)
//             ),
//             activeJobs: Math.round(
//               dashboardKPIs.monthlyChange.activeJobs *
//                 (monthIndex > 0 ? 1 : 0.9)
//             ),
//             applicationsSubmitted: Math.round(
//               dashboardKPIs.monthlyChange.applicationsSubmitted *
//                 (monthIndex > 0 ? 1 : 1.2)
//             ),
//             pendingApprovals: Math.round(
//               dashboardKPIs.monthlyChange.pendingApprovals *
//                 (monthIndex > 0 ? 1 : 0.7)
//             ),
//           },
//         });
//       }
//     }
//   }, [selectedMonth]);

//   // ✅ Fixed navigation paths
//   const handleManageStudents = () =>
//     navigate('/new-admindashboard/manage-students');
//   const handleManageColleges = () =>
//     navigate('/new-admindashboard/manage-colleges');
//   const handleManageRecruiters = () =>
//     navigate('/new-admindashboard/manage-recruiters');

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h1 className="text-2xl font-bold">Dashboard Overview</h1>
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
//           title="Total Users"
//           value={filteredKPIs.totalUsers}
//           change={filteredKPIs.monthlyChange.totalUsers}
//           icon={
//             <UsersIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//         <StatCard
//           title="Active Jobs"
//           value={filteredKPIs.activeJobs}
//           change={filteredKPIs.monthlyChange.activeJobs}
//           icon={
//             <BriefcaseIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-green-400' : 'text-green-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//         <StatCard
//           title="Applications Submitted"
//           value={filteredKPIs.applicationsSubmitted}
//           change={filteredKPIs.monthlyChange.applicationsSubmitted}
//           icon={
//             <FileTextIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//         <StatCard
//           title="Pending Approvals"
//           value={filteredKPIs.pendingApprovals}
//           change={filteredKPIs.monthlyChange.pendingApprovals}
//           icon={
//             <ClockIcon
//               size={24}
//               className={
//                 theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
//               }
//             />
//           }
//           onClick={() => setIsModalOpen(true)}
//         />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <LineChart
//           title="Registration Trends"
//           data={filteredRegistrationData}
//           xKey="month"
//           yKeys={[
//             { key: 'students', color: '#3B82F6', name: 'Students' },
//             { key: 'colleges', color: '#10B981', name: 'Colleges' },
//             { key: 'recruiters', color: '#8B5CF6', name: 'Recruiters' },
//           ]}
//         />
//         <BarChart
//           title="Total vs Active Users"
//           data={filteredUserComparisonData}
//           xKey="month"
//           yKeys={[
//             { key: 'total', color: '#3B82F6', name: 'Total Users' },
//             { key: 'active', color: '#10B981', name: 'Active Users' },
//           ]}
//         />
//       </div>

//       {/* T-Sign Section */}
//       <div
//         className={`rounded-xl p-6 border ${
//           theme === 'dark'
//             ? 'bg-[#1E1E1E] border-gray-800'
//             : 'bg-white border-gray-100'
//         } shadow-sm`}
//       >
//         <h2 className="text-xl font-semibold mb-4">
//           Manage Registrations in T-Sign
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             className={`p-4 rounded-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
//             }`}
//           >
//             <h3 className="font-medium">Total Registered Students</h3>
//             <p className="text-2xl font-semibold mt-2">
//               {Math.round(filteredKPIs.totalUsers * 0.52).toLocaleString()}
//             </p>
//             <button
//               onClick={handleManageStudents}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm ${
//                 theme === 'dark'
//                   ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                   : 'bg-blue-500 hover:bg-blue-600 text-white'
//               } transition-colors`}
//             >
//               Manage Students
//             </button>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
//             }`}
//           >
//             <h3 className="font-medium">Total Registered Colleges</h3>
//             <p className="text-2xl font-semibold mt-2">
//               {Math.round(filteredKPIs.totalUsers * 0.04).toLocaleString()}
//             </p>
//             <button
//               onClick={handleManageColleges}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm ${
//                 theme === 'dark'
//                   ? 'bg-green-600 hover:bg-green-700 text-white'
//                   : 'bg-green-500 hover:bg-green-600 text-white'
//               } transition-colors`}
//             >
//               Manage Colleges
//             </button>
//           </div>
//           <div
//             className={`p-4 rounded-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
//             }`}
//           >
//             <h3 className="font-medium">Total Registered Recruiters</h3>
//             <p className="text-2xl font-semibold mt-2">
//               {Math.round(filteredKPIs.totalUsers * 0.44).toLocaleString()}
//             </p>
//             <button
//               onClick={handleManageRecruiters}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm ${
//                 theme === 'dark'
//                   ? 'bg-purple-600 hover:bg-purple-700 text-white'
//                   : 'bg-purple-500 hover:bg-purple-600 text-white'
//               } transition-colors`}
//             >
//               Manage Recruiters
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title={modalData.title}
//       >
//         {modalData.content}
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UsersIcon,
  BriefcaseIcon,
  FileTextIcon,
  ClockIcon,
  InfoIcon,
  TrendingUpIcon,
  BarChart2Icon,
  PieChartIcon,
} from 'lucide-react'
import StatCard from '../ad-components/ui/StatCard'
import FilterDropdown from '../ad-components/ui/FilterDropdown'
import LineChart from '../ad-components/charts/LineChart'
import BarChart from '../ad-components/charts/BarChart'
import Modal from '../ad-components/ui/Modal'
import { useTheme } from '../context/ThemeContext'
import {
  dashboardKPIs,
  registrationData,
  userComparisonData,
} from '../utils/mockData'


export const Dashboard = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [selectedMonth, setSelectedMonth] = useState('All 2023')
  const [filteredKPIs, setFilteredKPIs] = useState(dashboardKPIs)
  const [filteredRegistrationData, setFilteredRegistrationData] =
    useState(registrationData)
  const [filteredUserComparisonData, setFilteredUserComparisonData] =
    useState(userComparisonData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    title: '',
    content: null,
  })
  const months = [
    'All 2023',
    'Jan 2023',
    'Feb 2023',
    'Mar 2023',
    'Apr 2023',
    'May 2023',
    'Jun 2023',
    'Jul 2023',
    'Aug 2023',
    'Sep 2023',
    'Oct 2023',
    'Nov 2023',
    'Dec 2023',
  ]
  useEffect(() => {
    if (selectedMonth === 'All 2023') {
      setFilteredKPIs(dashboardKPIs)
      setFilteredRegistrationData(registrationData)
      setFilteredUserComparisonData(userComparisonData)
    } else {
      const monthName = selectedMonth.split(' ')[0]
      const filteredRegData = registrationData.filter(
        (item) => item.month === monthName,
      )
      setFilteredRegistrationData(filteredRegData)
      const filteredUserData = userComparisonData.filter(
        (item) => item.month === monthName,
      )
      setFilteredUserComparisonData(filteredUserData)
      const monthIndex = months.findIndex((m) => m === selectedMonth) - 1
      if (monthIndex >= 0 && monthIndex < 12) {
        const monthlyMultiplier = (monthIndex + 1) / 12
        setFilteredKPIs({
          totalUsers: Math.round(dashboardKPIs.totalUsers * monthlyMultiplier),
          activeJobs: Math.round(dashboardKPIs.activeJobs * monthlyMultiplier),
          applicationsSubmitted: Math.round(
            dashboardKPIs.applicationsSubmitted * monthlyMultiplier,
          ),
          pendingApprovals: Math.round(
            dashboardKPIs.pendingApprovals * monthlyMultiplier,
          ),
          monthlyChange: {
            totalUsers: Math.round(
              dashboardKPIs.monthlyChange.totalUsers *
                (monthIndex > 0 ? 1 : 0.8),
            ),
            activeJobs: Math.round(
              dashboardKPIs.monthlyChange.activeJobs *
                (monthIndex > 0 ? 1 : 0.9),
            ),
            applicationsSubmitted: Math.round(
              dashboardKPIs.monthlyChange.applicationsSubmitted *
                (monthIndex > 0 ? 1 : 1.2),
            ),
            pendingApprovals: Math.round(
              dashboardKPIs.monthlyChange.pendingApprovals *
                (monthIndex > 0 ? 1 : 0.7),
            ),
          },
        })
      }
    }
  }, [selectedMonth])
  const handleManageStudents = () => {
    navigate('/manage-students')
  }
  const handleManageColleges = () => {
    navigate('/manage-colleges')
  }
  const handleManageRecruiters = () => {
    navigate('/manage-recruiters')
  }
  const handleTotalUsersClick = () => {
    setModalData({
      title: 'Total Users Details',
      content: (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">User Growth</h3>
              <TrendingUpIcon
                size={20}
                className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
              />
            </div>
            <p className="text-sm">
              User growth has been consistent with a{' '}
              {filteredKPIs.monthlyChange.totalUsers}% increase from last month.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Students</h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.totalUsers * 0.52).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Colleges</h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.totalUsers * 0.04).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Recruiters</h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.totalUsers * 0.44).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">
                Active Today
              </h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.totalUsers * 0.32).toLocaleString()}
              </p>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium mb-2">User Engagement</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Daily Active Users</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.totalUsers * 0.32).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Weekly Active Users</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.totalUsers * 0.68).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Monthly Active Users</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.totalUsers * 0.82).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    })
    setIsModalOpen(true)
  }
  const handleActiveJobsClick = () => {
    setModalData({
      title: 'Active Jobs Details',
      content: (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Job Trends</h3>
              <BarChart2Icon
                size={20}
                className={
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }
              />
            </div>
            <p className="text-sm">
              Active jobs have{' '}
              {filteredKPIs.monthlyChange.activeJobs < 0
                ? 'decreased'
                : 'increased'}{' '}
              by {Math.abs(filteredKPIs.monthlyChange.activeJobs)}% from last
              month.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Tech Jobs</h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.activeJobs * 0.45).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">
                Non-Tech Jobs
              </h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.activeJobs * 0.55).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Remote Jobs</h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.activeJobs * 0.38).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Onsite Jobs</h4>
              <p className="text-lg font-semibold">
                {Math.round(filteredKPIs.activeJobs * 0.62).toLocaleString()}
              </p>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium mb-2">Top Job Categories</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Software Development</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.activeJobs * 0.28).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Marketing</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.activeJobs * 0.17).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Data Science</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.activeJobs * 0.15).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sales</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.activeJobs * 0.12).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Others</span>
                <span className="text-sm font-medium">
                  {Math.round(filteredKPIs.activeJobs * 0.28).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    })
    setIsModalOpen(true)
  }
  const handleApplicationsClick = () => {
    setModalData({
      title: 'Applications Submitted Details',
      content: (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Application Trends</h3>
              <PieChartIcon
                size={20}
                className={
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }
              />
            </div>
            <p className="text-sm">
              Applications have increased by{' '}
              {filteredKPIs.monthlyChange.applicationsSubmitted}% from last
              month with highest growth in tech sector.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">
                Pending Review
              </h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.applicationsSubmitted * 0.18,
                ).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Shortlisted</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.applicationsSubmitted * 0.32,
                ).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Rejected</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.applicationsSubmitted * 0.4,
                ).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Hired</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.applicationsSubmitted * 0.1,
                ).toLocaleString()}
              </p>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium mb-2">Application Distribution</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Fresh Graduates</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.applicationsSubmitted * 0.45,
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">1-3 Years Experience</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.applicationsSubmitted * 0.32,
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">3-5 Years Experience</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.applicationsSubmitted * 0.15,
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">5+ Years Experience</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.applicationsSubmitted * 0.08,
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    })
    setIsModalOpen(true)
  }
  const handlePendingApprovalsClick = () => {
    setModalData({
      title: 'Pending Approvals Details',
      content: (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Approval Queue</h3>
              <ClockIcon
                size={20}
                className={
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                }
              />
            </div>
            <p className="text-sm">
              Pending approvals have increased by{' '}
              {filteredKPIs.monthlyChange.pendingApprovals}% from last month.
              Average approval time is 2.3 days.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Students</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.pendingApprovals * 0.48,
                ).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Colleges</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.pendingApprovals * 0.12,
                ).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Recruiters</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.pendingApprovals * 0.25,
                ).toLocaleString()}
              </p>
            </div>
            <div
              className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h4 className="text-xs font-medium text-gray-500">Job Posts</h4>
              <p className="text-lg font-semibold">
                {Math.round(
                  filteredKPIs.pendingApprovals * 0.15,
                ).toLocaleString()}
              </p>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium mb-2">Approval Age</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Less than 24 hours</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.pendingApprovals * 0.42,
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">1-3 days</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.pendingApprovals * 0.38,
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">3-7 days</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.pendingApprovals * 0.15,
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Over 7 days</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    filteredKPIs.pendingApprovals * 0.05,
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    })
    setIsModalOpen(true)
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <FilterDropdown
          label="Period"
          options={months}
          value={selectedMonth}
          onChange={setSelectedMonth}
        />
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={filteredKPIs.totalUsers}
          change={filteredKPIs.monthlyChange.totalUsers}
          icon={
            <UsersIcon
              size={24}
              className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
            />
          }
          onClick={handleTotalUsersClick}
        />
        <StatCard
          title="Active Jobs"
          value={filteredKPIs.activeJobs}
          change={filteredKPIs.monthlyChange.activeJobs}
          icon={
            <BriefcaseIcon
              size={24}
              className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}
            />
          }
          onClick={handleActiveJobsClick}
        />
        <StatCard
          title="Applications Submitted"
          value={filteredKPIs.applicationsSubmitted}
          change={filteredKPIs.monthlyChange.applicationsSubmitted}
          icon={
            <FileTextIcon
              size={24}
              className={
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }
            />
          }
          onClick={handleApplicationsClick}
        />
        <StatCard
          title="Pending Approvals"
          value={filteredKPIs.pendingApprovals}
          change={filteredKPIs.monthlyChange.pendingApprovals}
          icon={
            <ClockIcon
              size={24}
              className={
                theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
              }
            />
          }
          onClick={handlePendingApprovalsClick}
        />
      </div>
      {/* Insights Section */}
      <div
        className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-100'}`}
      >
        <div className="flex items-start">
          <div
            className={`p-2 rounded-full mr-3 ${theme === 'dark' ? 'bg-blue-800' : 'bg-blue-100'}`}
          >
            <InfoIcon
              size={20}
              className={theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">AI Insight</h3>
            <p className={theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}>
              {selectedMonth === 'All 2023'
                ? 'User registrations have increased by 20% this month compared to last month, primarily driven by student sign-ups. Consider focusing recruitment efforts on colleges with high engagement rates.'
                : `For ${selectedMonth}, we're seeing a ${filteredKPIs.monthlyChange.totalUsers > 0 ? 'positive' : 'negative'} trend in user registrations with a ${Math.abs(filteredKPIs.monthlyChange.totalUsers)}% ${filteredKPIs.monthlyChange.totalUsers > 0 ? 'increase' : 'decrease'} compared to previous month.`}
            </p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Registration Trends"
          data={filteredRegistrationData}
          xKey="month"
          yKeys={[
            {
              key: 'students',
              color: '#3B82F6',
              name: 'Students',
            },
            {
              key: 'colleges',
              color: '#10B981',
              name: 'Colleges',
            },
            {
              key: 'recruiters',
              color: '#8B5CF6',
              name: 'Recruiters',
            },
          ]}
        />
        <BarChart
          title="Total vs Active Users"
          data={filteredUserComparisonData}
          xKey="month"
          yKeys={[
            {
              key: 'total',
              color: '#3B82F6',
              name: 'Total Users',
            },
            {
              key: 'active',
              color: '#10B981',
              name: 'Active Users',
            },
          ]}
        />
      </div>
      {/* T-Sign Section */}
      <div
        className={`rounded-xl p-6 border ${theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'} shadow-sm`}
      >
        <h2 className="text-xl font-semibold mb-4">
          Manage Registrations in T-Sign
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium">Total Registered Students</h3>
            <p className="text-2xl font-semibold mt-2">
              {Math.round(filteredKPIs.totalUsers * 0.52).toLocaleString()}
            </p>
            <button
              onClick={handleManageStudents}
              className={`mt-4 px-4 py-2 rounded-lg text-sm ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-colors`}
            >
              Manage Students
            </button>
          </div>
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium">Total Registered Colleges</h3>
            <p className="text-2xl font-semibold mt-2">
              {Math.round(filteredKPIs.totalUsers * 0.04).toLocaleString()}
            </p>
            <button
              onClick={handleManageColleges}
              className={`mt-4 px-4 py-2 rounded-lg text-sm ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'} transition-colors`}
            >
              Manage Colleges
            </button>
          </div>
          <div
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h3 className="font-medium">Total Registered Recruiters</h3>
            <p className="text-2xl font-semibold mt-2">
              {Math.round(filteredKPIs.totalUsers * 0.44).toLocaleString()}
            </p>
            <button
              onClick={handleManageRecruiters}
              className={`mt-4 px-4 py-2 rounded-lg text-sm ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'} transition-colors`}
            >
              Manage Recruiters
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalData.title}
      >
        {modalData.content}
      </Modal>
    </div>
  )
}
