import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const FilterDropdown = (props) => {
  const { label, options, value, onChange } = props;
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between px-4 py-2 rounded-lg border ${
          theme === 'dark'
            ? 'bg-[#1E1E1E] border-gray-800 hover:bg-gray-800'
            : 'bg-white border-gray-200 hover:bg-gray-50'
        } transition-colors min-w-[180px]`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="mr-2">
          {label}: {value}
        </span>
        <ChevronDownIcon size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 mt-1 w-full rounded-lg border shadow-lg overflow-hidden ${
            theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
          }`}
        >
          <ul className="py-1 max-h-60 overflow-auto" role="listbox">
            {options.map((option) => (
              <li
                key={option}
                role="option"
                aria-selected={option === value}
                className={`px-4 py-2 cursor-pointer ${
                  option === value
                    ? theme === 'dark'
                      ? 'bg-blue-900/30 text-blue-400'
                      : 'bg-blue-50 text-blue-700'
                    : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
