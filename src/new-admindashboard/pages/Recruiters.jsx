import React, { useState } from 'react';
import {
  BriefcaseIcon,
  PauseCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  // MoreHorizontalIcon,
  XCircleIcon as CloseIcon,
} from 'lucide-react';
import StatCard from '../ad-components/ui/StatCard';
import { AreaChart } from '../ad-components/charts/AreaChart';
import PieChart from '../ad-components/charts/PieChart';
import DataTable from '../ad-components/ui/DataTable';
import { useTheme } from '../context/ThemeContext';
import {
  recruiterKPIs,
  registrationData,
  recruiterStatusData,
  recruiterTableData,
} from '../utils/mockData';

const StatusOverviewModal = ({
  isOpen,
  onClose,
  statusTitle,
  totalCount,
  streams,
  topRecruiters,
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
          <CloseIcon size={24} />
        </button>
        <div className="flex items-center space-x-2 mb-4">
          {IconComponent && <IconComponent size={28} className={iconColor} />}
          <h2 className="text-xl font-bold">{statusTitle}</h2>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <div className="font-medium text-gray-700 dark:text-gray-300 mb-1">{statusTitle} Overview</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            A total of <span className="font-bold">{totalCount}</span> {statusTitle.toLowerCase()} recruiters.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(streams).map(([streamName, count]) => (
            <div
              key={streamName}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded p-3 text-center"
            >
              <div className="text-xs text-gray-500 capitalize">{streamName}</div>
              <div className="font-bold text-lg">{count}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">Top 5 Recruiters</div>
          <ul className="text-sm">
            {topRecruiters.map((r, i) => (
              <li key={r.name} className="flex justify-between py-1">
                <span>{i + 1}. {r.name}</span>
                <span className="font-semibold">{r.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Recruiters = () => {
  const { theme } = useTheme();
  const [activeModal, setActiveModal] = useState(null); // "total", "hold", "rejected", "approved", or null

  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case 'Approved':
  //       return theme === 'dark' ? 'text-green-400' : 'text-green-600';
  //     case 'On Hold':
  //       return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
  //     case 'Rejected':
  //       return theme === 'dark' ? 'text-red-400' : 'text-red-600';
  //     default:
  //       return '';
  //   }
  // };

  // const getStatusBg = (status) => {
  //   switch (status) {
  //     case 'Approved':
  //       return theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100';
  //     case 'On Hold':
  //       return theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100';
  //     case 'Rejected':
  //       return theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100';
  //     default:
  //       return '';
  //   }
  // };

  const columns = [
    { header: 'Name', accessor: 'name', sortable: true },
    { header: 'Email', accessor: 'email', sortable: true },
    // {
    //   header: 'Status',
    //   accessor: 'status',
    //   sortable: true,
    //   cell: (value) => (
    //     <span
    //       className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(value)} ${getStatusColor(value)}`}
    //     >
    //       {value}
    //     </span>
    //   ),
    // },
    {
      header: 'Registration Date',
      accessor: 'registrationDate',
      sortable: true,
      cell: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  // Removed renderActions and actions prop to remove action icons

  // Sample data for status modals
  const dataSets = {
    total: {
      title: ' Registered Recruiters',
      totalCount: recruiterKPIs.totalRegistered,
      streams: {
        engineering: 450,
        commerce: 320,
        arts: 250,
        other: 150,
      },
      topRecruiters: [
        { name: 'Recruiter A', count: 100 },
        { name: 'Recruiter B', count: 80 },
        { name: 'Recruiter C', count: 70 },
        { name: 'Recruiter D', count: 50 },
        { name: 'Recruiter E', count: 30 },
      ],
      IconComponent: BriefcaseIcon,
      iconColor: 'text-blue-500',
    },
    hold: {
      title: 'On Hold',
      totalCount: recruiterKPIs.onHold,
      streams: {
        engineering: 40,
        commerce: 25,
        arts: 15,
        other: 10,
      },
      topRecruiters: [
        { name: 'Recruiter H1', count: 15 },
        { name: 'Recruiter H2', count: 10 },
        { name: 'Recruiter H3', count: 8 },
        { name: 'Recruiter H4', count: 5 },
        { name: 'Recruiter H5', count: 3 },
      ],
      IconComponent: PauseCircleIcon,
      iconColor: 'text-yellow-500',
    },
    rejected: {
      title: 'Rejected',
      totalCount: recruiterKPIs.rejected,
      streams: {
        engineering: 30,
        commerce: 20,
        arts: 15,
        other: 15,
      },
      topRecruiters: [
        { name: 'Recruiter R1', count: 12 },
        { name: 'Recruiter R2', count: 10 },
        { name: 'Recruiter R3', count: 8 },
        { name: 'Recruiter R4', count: 5 },
        { name: 'Recruiter R5', count: 4 },
      ],
      IconComponent: XCircleIcon,
      iconColor: 'text-red-500',
    },
    approved: {
      title: 'Approved',
      totalCount: recruiterKPIs.approved,
      streams: {
        engineering: 380,
        commerce: 275,
        arts: 220,
        other: 125,
      },
      topRecruiters: [
        { name: 'Recruiter A1', count: 90 },
        { name: 'Recruiter A2', count: 80 },
        { name: 'Recruiter A3', count: 75 },
        { name: 'Recruiter A4', count: 70 },
        { name: 'Recruiter A5', count: 65 },
      ],
      IconComponent: CheckCircleIcon,
      iconColor: 'text-green-500',
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Recruiters Management</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cursor-pointer" onClick={() => setActiveModal('total')}>
          <StatCard
            title=" Registered Recruiters"
            value={recruiterKPIs.totalRegistered}
            icon={<BriefcaseIcon size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setActiveModal('hold')}>
          <StatCard
            title="On Hold"
            value={recruiterKPIs.onHold}
            icon={<PauseCircleIcon size={24} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setActiveModal('rejected')}>
          <StatCard
            title="Rejected"
            value={recruiterKPIs.rejected}
            icon={<XCircleIcon size={24} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />}
          />
        </div>
        <div className="cursor-pointer" onClick={() => setActiveModal('approved')}>
          <StatCard
            title="Approved"
            value={recruiterKPIs.approved}
            icon={<CheckCircleIcon size={24} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChart
          title="Monthly Recruiter Registration"
          data={registrationData}
          xKey="month"
          yKeys={[{ key: 'recruiters', color: '#8B5CF6', name: 'Recruiters' }]}
        />
        <PieChart
          title="Recruiter Status Distribution"
          data={recruiterStatusData}
          colors={['#10B981', '#FBBF24', '#EF4444']}
          donut
        />
      </div>

      {/* Recruiters Table without action icons */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recruiters</h2>
        <DataTable columns={columns} data={recruiterTableData} />
      </div>

      {/* Status Modal */}
      {activeModal && (
        <StatusOverviewModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          statusTitle={dataSets[activeModal].title}
          totalCount={dataSets[activeModal].totalCount}
          streams={dataSets[activeModal].streams}
          topRecruiters={dataSets[activeModal].topRecruiters}
          IconComponent={dataSets[activeModal].IconComponent}
          iconColor={dataSets[activeModal].iconColor}
        />
      )}
    </div>
  );
};

export default Recruiters;
