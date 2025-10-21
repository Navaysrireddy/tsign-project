import React, { useState, useCallback } from 'react';
import {
  UsersIcon,
  PauseCircleIcon,
  XCircleIcon,
  MoreHorizontalIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from 'lucide-react';
import { AreaChart } from '../ad-components/charts/AreaChart';
import PieChart from '../ad-components/charts/PieChart';
import Modal from '../ad-components/ui/Modal';
import { useTheme } from '../context/ThemeContext';
import {
  studentKPIs,
  registrationData,
  studentStatusData,
  studentTableData,
} from '../utils/mockData';

// 👉 Helper to generate T-Sign IDs
const generateTSignId = (id) => {
  return `TSIGN${id.toString().padStart(8, '0')}`;
};

// Stat Card
const CustomStatCard = ({ title, value, change, icon, onClick }) => {
  const { theme } = useTheme();
  const formattedValue = React.useMemo(
    () => (typeof value === 'number' ? value.toLocaleString() : value),
    [value]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  const renderChange = () => {
    if (change === undefined || change === 0) return null;
    if (change > 0)
      return (
        <>
          <ArrowUpIcon className="text-green-500" size={16} />
          <span className="text-xs ml-1 text-green-500">{change}% from last month</span>
        </>
      );
    if (change < 0)
      return (
        <>
          <ArrowDownIcon className="text-red-500" size={16} />
          <span className="text-xs ml-1 text-red-500">{Math.abs(change)}% from last month</span>
        </>
      );
    return null;
  };

  return (
    <div
      className={`rounded-xl p-6 shadow-md ${
        theme === 'dark' ? 'bg-[#1E1E1E] border border-gray-700' : 'bg-white border border-gray-200'
      } transition-shadow hover:shadow-lg ${
        onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600' : ''
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
        {icon && (
          <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>{icon}</div>
        )}
      </div>
    </div>
  );
};

export const Students = () => {
  const { theme } = useTheme();

  const [filteredKPIs] = useState({ ...studentKPIs, pending: 4308 });
  const [filteredTableData] = useState(studentTableData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps] = useState({});

  // Updated columns with Serial No and T-Sign Number
  const columns = [
    {
      header: 'No.',
      accessor: 'serialNo',
      sortable: false,
      cell: (_, index) => index + 1,
    },
    {
      header: 'T-Sign Number',
      accessor: 'id',
      sortable: false,
      cell: (id) => generateTSignId(id),
    },
    { header: 'Name', accessor: 'name', sortable: true },
    { header: 'Email', accessor: 'email', sortable: true },
    {
      header: 'Registration Date',
      accessor: 'registrationDate',
      sortable: true,
      cell: (v) => new Date(v).toLocaleDateString(),
    },
  ];

  const openModal = (type) => {
    // You can fill in modal open logic here if needed
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">Students Management</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-4 md:px-0">
        <CustomStatCard
          title="Registered Students"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 px-4 md:px-0">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md min-h-[300px]">
          <AreaChart
            title="Monthly Student Registration"
            data={registrationData}
            xKey="month"
            yKeys={[{ key: 'students', color: '#3B82F6', name: 'Students' }]}
          />
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md min-h-[300px]">
          <PieChart
            title="Student Status Distribution"
            data={studentStatusData}
            colors={['#10B981', '#FBBF24', '#EF4444']}
            donut
          />
        </div>
      </div>
      <div className="px-4 md:px-0">
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        <div
          className={`overflow-x-auto rounded-lg border ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          } shadow-sm`}
        >
          <table className="min-w-full table-auto border-collapse">
            <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} sticky top-0 z-10`}>
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-gray-300 dark:border-gray-700"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                theme === 'dark' ? 'divide-gray-800 bg-[#1E1E1E]' : 'divide-gray-200 bg-white'
              }`}
            >
              {filteredTableData.length > 0 ? (
                filteredTableData.map((row, rowIndex) => (
                  <tr
                    key={row.id}
                    className={`${
                      theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'
                    } transition-colors`}
                  >
                    {columns.map((col, colIndex) => (
                      <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm">
                        {col.cell ? col.cell(row[col.accessor], rowIndex) : row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalProps.title}>
        <>
          <div className="mb-4 flex items-center gap-2 text-xl font-bold">
            {modalProps.icon}
            {modalProps.title}
          </div>
          <div>
            <div className="mb-4">
              <h3 className="font-semibold mb-1">{modalProps.overview?.heading}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{modalProps.overview?.text}</p>
            </div>
            {modalProps.stats && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {modalProps.stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-gray-900 rounded-md shadow-sm p-3 text-center"
                  >
                    <div className="text-xs text-gray-500">{s.label}</div>
                    <div className="text-2xl font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>
            )}
            {modalProps.topList && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4">
                <h3 className="font-semibold mb-2">{modalProps.topListLabel}</h3>
                <ul className="text-sm">
                  {modalProps.topList.map((item, idx) => (
                    <li
                      key={item.name}
                      className="flex justify-between py-1 border-b border-gray-300 dark:border-gray-700 last:border-0"
                    >
                      <span>
                        {idx + 1}. {item.name}
                      </span>
                      <span>{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      </Modal>
    </>
  );
};
