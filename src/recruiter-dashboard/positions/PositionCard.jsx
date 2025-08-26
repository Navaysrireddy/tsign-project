import React, { useState, useMemo  } from 'react';
import { motion } from 'framer-motion';
import { EditIcon, XIcon, UsersIcon, SaveIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mockData } from "../utils/mockdata";
import ViewApplicantsModal from "./ViewApplicantsModal";


const PositionCard = ({ position, onUpdate }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const isOpen = position.status === "Open";
  const [showApplicants, setShowApplicants] = useState(false);

  // Edit state
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({ ...position });

  // ✅ Applicants count based on ViewApplicantsModal logic
  const applicantCount = useMemo(() => {
    return mockData.candidates.filter(
      (c) =>
        c.dept === position.dept &&
        (position.course ? c.course === position.course : true)
    ).length;
  }, [position]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (onUpdate) onUpdate(editData);
    setShowEdit(false);
  };

  // Function to handle closing/reopening position
  const handleToggleStatus = () => {
    const updatedPosition = {
      ...position,
      status: isOpen ? "Closed" : "Open"
    };
    if (onUpdate) onUpdate(updatedPosition);
  };

  return (
    <>
      <motion.div
        whileHover={{ translateY: -3 }}
        className={`rounded-xl p-5 ${
          isDarkMode
            ? "bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]"
            : "bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]"
        }`}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{position.position}</h3>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
              isOpen
                ? isDarkMode
                  ? "bg-green-900/30 text-green-400"
                  : "bg-green-100 text-green-600"
                : isDarkMode
                ? "bg-red-900/30 text-red-400"
                : "bg-red-100 text-red-600"
            }`}
          >
            {position.status}
          </span>
        </div>
        <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {position.dept}
          {position.course ? ` (${position.course})` : ""}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div
            className={`text-center p-3 rounded-lg ${
              isDarkMode ? "bg-gray-700/50" : "bg-gray-50"
            }`}
          >
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Openings
            </p>
            <p className="font-bold text-lg">{position.openings}</p>
          </div>
          <div
            className={`text-center p-3 rounded-lg ${
              isDarkMode ? "bg-gray-700/50" : "bg-gray-50"
            }`}
          >
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Applicants
            </p>
            {/* ✅ show applicants number */}
            <p className="font-bold text-lg">{applicantCount}</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowEdit(true)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            <EditIcon size={16} />
            <span>Edit</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleToggleStatus}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg ${
              isOpen
                ? isDarkMode
                  ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
                  : "bg-red-100 text-red-600 hover:bg-red-200"
                : isDarkMode
                ? "bg-green-900/30 text-green-400 hover:bg-green-900/50"
                : "bg-green-100 text-green-600 hover:bg-green-200"
            } transition-colors`}
          >
            {isOpen ? (
              <>
                <XIcon size={16} />
                <span>Close</span>
              </>
            ) : (
              <span>Reopen</span>
            )}
          </motion.button>
        </div>

        {/* View Applicants Button */}
        <motion.button
          onClick={() => setShowApplicants(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-2 mt-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-[3px_3px_6px_rgba(0,0,0,0.1)]"
        >
          <UsersIcon size={16} />
          <span>View Applicants</span>
        </motion.button>
      </motion.div>

      {/* View Applicants Modal */}
      {showApplicants && (
        <ViewApplicantsModal
          position={position}
          onClose={() => setShowApplicants(false)}
        />
      )}

      {/* ✅ Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className={`rounded-lg p-6 w-[90%] max-w-md ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <h2 className="text-lg font-bold mb-4">Edit Position</h2>
            <div className="space-y-3">
              <input
                type="text"
                name="position"
                value={editData.position}
                onChange={handleEditChange}
                placeholder="Position Title"
                className={`w-full p-2 rounded border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
              <input
                type="text"
                name="dept"
                value={editData.dept}
                onChange={handleEditChange}
                placeholder="Department"
                className={`w-full p-2 rounded border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
              <input
                type="text"
                name="course"
                value={editData.course}
                onChange={handleEditChange}
                placeholder="Course"
                className={`w-full p-2 rounded border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
              <input
                type="number"
                name="openings"
                value={editData.openings}
                onChange={handleEditChange}
                placeholder="Openings"
                className={`w-full p-2 rounded border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowEdit(false)}
                className={`px-4 py-2 rounded ${
                  isDarkMode
                    ? "bg-gray-600 hover:bg-gray-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400 text-black"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2"
              >
                <SaveIcon size={16} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PositionCard;