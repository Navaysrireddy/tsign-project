// import React, { useState } from 'react';
// import {
//   BuildingIcon,
//   PauseCircleIcon,
//   XCircleIcon,
//   CheckCircleIcon,
//   MoreHorizontalIcon,
// } from 'lucide-react';
// import StatCard from '../ad-components/ui/StatCard';
// import FilterDropdown from '../ad-components/ui/FilterDropdown';
// import LineChart from '../ad-components/charts/LineChart';
// import PieChart from '../ad-components/charts/PieChart';
// import DataTable from '../ad-components/ui/DataTable';
// import { useTheme } from '../context/ThemeContext';
// import {
//   collegeKPIs,
//   registrationData,
//   collegeStatusData,
//   collegeTableData
// } from '../utils/mockData';

// const Colleges = () => {
//   const { theme } = useTheme();
//   const [selectedMonth, setSelectedMonth] = useState('All 2023');
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
//     'Dec 2023'
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return theme === 'dark' ? 'text-green-400' : 'text-green-600';
//       case 'On Hold':
//         return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
//       case 'Rejected':
//         return theme === 'dark' ? 'text-red-400' : 'text-red-600';
//       default:
//         return '';
//     }
//   };

//   const getStatusBg = (status) => {
//     switch (status) {
//       case 'Approved':
//         return theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100';
//       case 'On Hold':
//         return theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100';
//       case 'Rejected':
//         return theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100';
//       default:
//         return '';
//     }
//   };

//   const columns = [
//     {
//       header: 'Name',
//       accessor: 'name',
//       sortable: true
//     },
//     {
//       header: 'Email',
//       accessor: 'email',
//       sortable: true
//     },
//     {
//       header: 'Status',
//       accessor: 'status',
//       sortable: true,
//       cell: (value) => (
//         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(value)} ${getStatusColor(value)}`}>
//           {value}
//         </span>
//       )
//     },
//     {
//       header: 'Registration Date',
//       accessor: 'registrationDate',
//       sortable: true,
//       cell: (value) => new Date(value).toLocaleDateString()
//     }
//   ];

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
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h1 className="text-2xl font-bold">Colleges Management</h1>
//         <FilterDropdown label="Period" options={months} value={selectedMonth} onChange={setSelectedMonth} />
//       </div>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           title="Total Registered Colleges"
//           value={collegeKPIs.totalRegistered}
//           icon={<BuildingIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />}
//         />
//         <StatCard
//           title="On Hold"
//           value={collegeKPIs.onHold}
//           icon={<PauseCircleIcon size={24} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />}
//         />
//         <StatCard
//           title="Rejected"
//           value={collegeKPIs.rejected}
//           icon={<XCircleIcon size={24} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />}
//         />
//         <StatCard
//           title="Approved"
//           value={collegeKPIs.approved}
//           icon={<CheckCircleIcon size={24} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />}
//         />
//       </div>

//       {/* Insights Section */}
     

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <LineChart
//           title="Monthly College Registration"
//           data={registrationData}
//           xKey="month"
//           yKeys={[
//             {
//               key: 'colleges',
//               color: '#10B981',
//               name: 'Colleges'
//             }
//           ]}
//         />
//         <PieChart
//           title="College Status Distribution"
//           data={collegeStatusData}
//           colors={['#10B981', '#FBBF24', '#EF4444']}
//           donut
//         />
//       </div>

//       {/* Colleges Table */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Colleges</h2>
//         <DataTable columns={columns} data={collegeTableData} actions={renderActions} />
//       </div>
//     </div>
//   );
// };

// export default Colleges;








import React, { useState } from 'react';
import {
  BuildingIcon,
  PauseCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  // MoreHorizontalIcon,
} from 'lucide-react';
import StatCard from '../ad-components/ui/StatCard';
import LineChart from '../ad-components/charts/LineChart';
import PieChart from '../ad-components/charts/PieChart';
import DataTable from '../ad-components/ui/DataTable';
import { useTheme } from '../context/ThemeContext';
import {
  collegeKPIs,
  registrationData,
  collegeStatusData,
  collegeTableData,
} from '../utils/mockData';

const StatusOverviewModal = ({
  isOpen,
  onClose,
  statusTitle,
  totalCount,
  streams,
  topColleges,
  IconComponent,
  iconColor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-md p-6 shadow-2xl border border-gray-200 dark:border-gray-700 relative">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <XCircleIcon size={24} />
        </button>
        <div className="flex items-center space-x-2 mb-4">
          {IconComponent && <IconComponent size={28} className={iconColor} />}
          <h2 className="text-xl font-bold">{statusTitle}</h2>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <div className="font-medium text-gray-700 dark:text-gray-300 mb-1">{statusTitle} Overview</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            A total of <span className="font-bold">{totalCount}</span> {statusTitle.toLowerCase()} colleges.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(streams).map(([streamName, count]) => (
            <div key={streamName} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded p-3 text-center">
              <div className="text-xs text-gray-500 capitalize">{streamName}</div>
              <div className="font-bold text-lg">{count}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">Top 5 Colleges</div>
          <ul className="text-sm">
            {topColleges.map((c, i) => (
              <li key={c.name} className="flex justify-between py-1">
                <span>{i + 1}. {c.name}</span>
                <span className="font-semibold">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Colleges = () => {
  const { theme } = useTheme();
  const [activeModal, setActiveModal] = useState(null); // "total", "hold", "rejected", "approved", or null

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return theme === 'dark' ? 'text-green-400' : 'text-green-600';
      case 'On Hold': return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
      case 'Rejected': return theme === 'dark' ? 'text-red-400' : 'text-red-600';
      default: return '';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Approved': return theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100';
      case 'On Hold': return theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100';
      case 'Rejected': return theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100';
      default: return '';
    }
  };

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true,
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(value)} ${getStatusColor(value)}`}>
          {value}
        </span>
      ),
    },
    {
      header: 'Registration Date',
      accessor: 'registrationDate',
      sortable: true,
      cell: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  // Removed renderActions and actions prop to hide action icons

  const dataSets = {
    total: {
      title: 'Total Registered Colleges',
      totalCount: collegeKPIs.totalRegistered,
      streams: {
        engineering: 2034,
        management: 1130,
        medical: 814,
        other: 543,
      },
      topColleges: [
        { name: 'Delhi Technical University', count: 362 },
        { name: 'Mumbai Institute of Technology', count: 316 },
        { name: 'Bangalore College of Engineering', count: 271 },
        { name: 'Chennai Arts and Science College', count: 226 },
        { name: 'Kolkata Medical Institute', count: 181 },
      ],
      IconComponent: BuildingIcon,
      iconColor: 'text-blue-500',
    },
    hold: {
      title: 'On Hold',
      totalCount: collegeKPIs.onHold,
      streams: {
        engineering: 150,
        management: 90,
        medical: 70,
        other: 50,
      },
      topColleges: [
        { name: 'College A', count: 45 },
        { name: 'College B', count: 38 },
        { name: 'College C', count: 30 },
        { name: 'College D', count: 20 },
        { name: 'College E', count: 15 },
      ],
      IconComponent: PauseCircleIcon,
      iconColor: 'text-yellow-500',
    },
    rejected: {
      title: 'Rejected',
      totalCount: collegeKPIs.rejected,
      streams: {
        engineering: 100,
        management: 50,
        medical: 40,
        other: 30,
      },
      topColleges: [
        { name: 'College X', count: 28 },
        { name: 'College Y', count: 21 },
        { name: 'College Z', count: 17 },
        { name: 'College W', count: 12 },
        { name: 'College V', count: 10 },
      ],
      IconComponent: XCircleIcon,
      iconColor: 'text-red-500',
    },
    approved: {
      title: 'Approved',
      totalCount: collegeKPIs.approved,
      streams: {
        engineering: 400,
        management: 200,
        medical: 180,
        other: 160,
      },
      topColleges: [
        { name: 'College 1', count: 60 },
        { name: 'College 2', count: 50 },
        { name: 'College 3', count: 40 },
        { name: 'College 4', count: 30 },
        { name: 'College 5', count: 25 },
      ],
      IconComponent: CheckCircleIcon,
      iconColor: 'text-green-500',
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Colleges Management</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cursor-pointer" onClick={() => setActiveModal('total')}>
          <StatCard
            title="Total Registered Colleges"
            value={collegeKPIs.totalRegistered}
            icon={<BuildingIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setActiveModal('hold')}>
          <StatCard
            title="On Hold"
            value={collegeKPIs.onHold}
            icon={<PauseCircleIcon size={24} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setActiveModal('rejected')}>
          <StatCard
            title="Rejected"
            value={collegeKPIs.rejected}
            icon={<XCircleIcon size={24} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setActiveModal('approved')}>
          <StatCard
            title="Approved"
            value={collegeKPIs.approved}
            icon={<CheckCircleIcon size={24} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Monthly College Registration"
          data={registrationData}
          xKey="month"
          yKeys={[
            {
              key: 'colleges',
              color: '#10B981',
              name: 'Colleges'
            }
          ]}
        />
        <PieChart
          title="College Status Distribution"
          data={collegeStatusData}
          colors={['#10B981', '#FBBF24', '#EF4444']}
          donut
        />
      </div>

      {/* Colleges Table without actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Colleges</h2>
        <DataTable columns={columns} data={collegeTableData} />
      </div>

      {/* Modal for active status */}
      {activeModal && (
        <StatusOverviewModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          statusTitle={dataSets[activeModal].title}
          totalCount={dataSets[activeModal].totalCount}
          streams={dataSets[activeModal].streams}
          topColleges={dataSets[activeModal].topColleges}
          IconComponent={dataSets[activeModal].IconComponent}
          iconColor={dataSets[activeModal].iconColor}
        />
      )}
    </div>
  );
};

export default Colleges;
