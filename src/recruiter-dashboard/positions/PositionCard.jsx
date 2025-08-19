import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EditIcon, XIcon, UsersIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PositionCard = ({ position, applicants = [] }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const isOpen = position.status === 'Open';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const ApplicantsListModal = () => (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={closeModal}
      aria-modal="true"
      role="dialog"
      aria-labelledby="applicants-list-title"
    >
      <motion.div
        className={`
          bg-white dark:bg-gray-800 rounded-md p-3 w-full max-w-sm
          shadow-md relative text-sm
        `}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        tabIndex={-1}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
          aria-label="Close Applicants List"
        >
          <XIcon size={18} />
        </button>
        <h2
          id="applicants-list-title"
          className="text-base font-semibold mb-2 text-gray-900 dark:text-white"
        >
          Uploaded Applicants for {position.position}
        </h2>

        {applicants.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No applicants uploaded yet.</p>
        ) : (
          <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
            {applicants.map((applicant, idx) => (
              <li key={idx} className="py-2 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{applicant.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{applicant.email}</p>
                </div>
                {applicant.resumeUrl && (
                  <a
                    href={applicant.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );

  return (
    <>
      <motion.div
        whileHover={{ translateY: -2 }}
        className={`
          rounded-md p-3 w-[92%] max-w-sm mx-auto
          ${isDarkMode ? 'bg-gray-800 shadow-sm' : 'bg-white shadow-sm'}
          text-sm
        `}
        role="region"
        aria-labelledby={`position-title-${position.id}`}
      >
        <div className="flex justify-between items-start">
          <h3 id={`position-title-${position.id}`} className="font-semibold text-base">
            {position.position}
          </h3>
          <span
            className={`
              inline-flex items-center px-2 py-0.5 rounded-full text-[10px]
              ${
                isOpen
                  ? isDarkMode
                    ? 'bg-green-900/30 text-green-400'
                    : 'bg-green-100 text-green-600'
                  : isDarkMode
                    ? 'bg-red-900/30 text-red-400'
                    : 'bg-red-100 text-red-600'
              }
            `}
            aria-label={`Position status: ${position.status}`}
          >
            {position.status}
          </span>
        </div>
        <p className={`mt-1 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {position.dept}
          {position.course ? ` (${position.course})` : ''}
        </p>

        <div className="grid grid-cols-2 gap-2 mt-2 text-center">
          <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-md p-2`}>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Openings</p>
            <p className="font-semibold text-base">{position.openings}</p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-md p-2`}>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Applicants</p>
            <p className="font-semibold text-base">{position.applicants}</p>
          </div>
        </div>

        <div className="mt-2 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md
              ${isDarkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
              transition-colors text-sm
            `}
            aria-label={`Edit position ${position.position}`}
          >
            <EditIcon size={14} />
            <span>Edit</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md
              ${
                isOpen
                  ? isDarkMode
                    ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                  : isDarkMode
                    ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50'
                    : 'bg-green-100 text-green-600 hover:bg-green-200'
              }
              transition-colors text-sm
            `}
            aria-label={`${isOpen ? 'Close' : 'Reopen'} position ${position.position}`}
          >
            {isOpen ? (
              <>
                <XIcon size={14} />
                <span>Close</span>
              </>
            ) : (
              <span>Reopen</span>
            )}
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="
            w-full flex items-center justify-center gap-2 py-1.5 mt-2 rounded-md
            bg-gradient-to-r from-teal-500 to-blue-500 text-white
            text-sm shadow transition-colors
          "
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          aria-controls={`applicants-list-${position.id}`}
        >
          <UsersIcon size={16} />
          <span>View Applicants</span>
        </motion.button>
      </motion.div>

      {isModalOpen && <ApplicantsListModal />}
    </>
  );
};

export default PositionCard;
