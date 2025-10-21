import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

function DataTable(props) {
  const { columns, data, actions } = props;
  const { theme } = useTheme();
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sorting logic
  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return sortOrder === 'asc'
      ? aValue < bValue
        ? -1
        : 1
      : bValue < aValue
      ? -1
      : 1;
  });

  // Filtering logic
  const filteredData = sortedData.filter(row => {
    if (!searchTerm) return true;
    return columns.some(column => {
      const value = row[column.accessor];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (typeof value === 'number') {
        return value.toString().includes(searchTerm);
      }
      return false;
    });
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = accessor => {
    if (sortBy === accessor) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(accessor);
      setSortOrder('asc');
    }
  };

  return (
    <div
      className={`rounded-xl border shadow-sm overflow-hidden ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      {/* Search */}
      <div
        className={`p-4 border-b ${
          theme === 'dark' ? 'border-gray-800 bg-[#1E1E1E]' : 'border-gray-200 bg-white'
        }`}
      >
        <div
          className={`relative rounded-lg overflow-hidden border ${
            theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon size={16} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className={`w-full py-2 pl-10 pr-4 focus:outline-none ${
              theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
            }`}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } ${column.sortable ? 'cursor-pointer select-none' : ''}`}
                  onClick={() => column.sortable && handleSort(column.accessor)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.header}</span>
                    {column.sortable && sortBy === column.accessor && (
                      sortOrder === 'asc' ? (
                        <ChevronUpIcon size={16} />
                      ) : (
                        <ChevronDownIcon size={16} />
                      )
                    )}
                  </div>
                </th>
              ))}
              {actions && <th className="px-6 py-3"></th>}
            </tr>
          </thead>

          <tbody
            className={`divide-y ${
              theme === 'dark' ? 'divide-gray-800 bg-[#1E1E1E]' : 'divide-gray-200 bg-white'
            }`}
          >
            {paginatedData.length > 0 ? (
              paginatedData.map(row => (
                <tr
                  key={row.id}
                  className={`${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-50'} transition-colors`}
                >
                  {columns.map((column, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-sm">
                      {column.cell ? column.cell(row[column.accessor], row) : String(row[column.accessor])}
                    </td>
                  ))}
                  {actions && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">{actions(row)}</td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          className={`px-4 py-3 flex items-center justify-between border-t ${
            theme === 'dark' ? 'border-gray-800 bg-[#1E1E1E]' : 'border-gray-200 bg-white'
          }`}
        >
          <div>
            <p className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
              {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? theme === 'dark'
                    ? 'bg-gray-800 text-gray-500'
                    : 'bg-gray-100 text-gray-400'
                  : theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? theme === 'dark'
                    ? 'bg-gray-800 text-gray-500'
                    : 'bg-gray-100 text-gray-400'
                  : theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
