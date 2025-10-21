import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const StatCard = (props) => {
  const { title, value, change, icon, onClick } = props;
  const { theme } = useTheme();
  const formattedValue = value.toLocaleString();

  return (
    <div
      className={`rounded-xl p-6 ${
        theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'
      } border shadow-sm transition-all hover:shadow-md ${onClick ? 'cursor-pointer hover:bg-opacity-90' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `View details for ${title}` : undefined}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{formattedValue}</p>
          {change !== undefined && (
            <div className="flex items-center mt-2">
              {change > 0 ? (
                <ArrowUpIcon className="text-green-500" size={16} />
              ) : change < 0 ? (
                <ArrowDownIcon className="text-red-500" size={16} />
              ) : null}
              <span
                className={`text-xs ml-1 ${
                  change > 0
                    ? 'text-green-500'
                    : change < 0
                    ? 'text-red-500'
                    : 'text-gray-500'
                }`}
              >
                {Math.abs(change)}% from last month
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
