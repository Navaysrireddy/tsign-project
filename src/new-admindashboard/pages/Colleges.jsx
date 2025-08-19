import React, { useState } from 'react';
import {
  BuildingIcon,
  PauseCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  MoreHorizontalIcon,
  InfoIcon
} from 'lucide-react';
import StatCard from '../ad-components/ui/StatCard';
import FilterDropdown from '../ad-components/ui/FilterDropdown';
import LineChart from '../ad-components/charts/LineChart';
import PieChart from '../ad-components/charts/PieChart';
import DataTable from '../ad-components/ui/DataTable';
import { useTheme } from '../context/ThemeContext';
import {
  collegeKPIs,
  registrationData,
  collegeStatusData,
  collegeTableData
} from '../utils/mockData';

const Colleges = () => {
  const { theme } = useTheme();
  const [selectedMonth, setSelectedMonth] = useState('All 2023');
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
    'Dec 2023'
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return theme === 'dark' ? 'text-green-400' : 'text-green-600';
      case 'On Hold':
        return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
      case 'Rejected':
        return theme === 'dark' ? 'text-red-400' : 'text-red-600';
      default:
        return '';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Approved':
        return theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100';
      case 'On Hold':
        return theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100';
      case 'Rejected':
        return theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100';
      default:
        return '';
    }
  };

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
      sortable: true
    },
    {
      header: 'Email',
      accessor: 'email',
      sortable: true
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(value)} ${getStatusColor(value)}`}>
          {value}
        </span>
      )
    },
    {
      header: 'Registration Date',
      accessor: 'registrationDate',
      sortable: true,
      cell: (value) => new Date(value).toLocaleDateString()
    }
  ];

  const renderActions = (row) => (
    <div className="flex space-x-2 justify-end">
      <button
        className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
        aria-label="Approve"
      >
        <CheckCircleIcon size={18} className="text-green-500" />
      </button>
      <button
        className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
        aria-label="Hold"
      >
        <PauseCircleIcon size={18} className="text-yellow-500" />
      </button>
      <button
        className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
        aria-label="Reject"
      >
        <XCircleIcon size={18} className="text-red-500" />
      </button>
      <button
        className={`p-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
        aria-label="More options"
      >
        <MoreHorizontalIcon size={18} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Colleges Management</h1>
        <FilterDropdown label="Period" options={months} value={selectedMonth} onChange={setSelectedMonth} />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Registered Colleges"
          value={collegeKPIs.totalRegistered}
          icon={<BuildingIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />}
        />
        <StatCard
          title="On Hold"
          value={collegeKPIs.onHold}
          icon={<PauseCircleIcon size={24} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />}
        />
        <StatCard
          title="Rejected"
          value={collegeKPIs.rejected}
          icon={<XCircleIcon size={24} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />}
        />
        <StatCard
          title="Approved"
          value={collegeKPIs.approved}
          icon={<CheckCircleIcon size={24} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />}
        />
      </div>

      {/* Insights Section */}
      <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-100'}`}>
        <div className="flex items-start">
          <div className={`p-2 rounded-full mr-3 ${theme === 'dark' ? 'bg-blue-800' : 'bg-blue-100'}`}>
            <InfoIcon size={20} className={theme === 'dark' ? 'text-blue-300' : 'text-blue-600'} />
          </div>
          <div>
            <h3 className="font-medium text-lg">AI Insight</h3>
            <p className={theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}>
              College registrations have increased by 15% in the last quarter. Technical institutes show the highest engagement rates with the platform.
            </p>
          </div>
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

      {/* Colleges Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Colleges</h2>
        <DataTable columns={columns} data={collegeTableData} actions={renderActions} />
      </div>
    </div>
  );
};

export default Colleges;
