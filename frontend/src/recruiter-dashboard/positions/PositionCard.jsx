import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { UsersIcon, SaveIcon } from "lucide-react";
import ReactDOM from "react-dom";

import { useTheme } from "../context/ThemeContext";
import ViewApplicantsModal from "./ViewApplicantsModal";
import { mockData } from "../utils/mockdata";

const JobDescriptionModal = ({ description, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full"
      >
        <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
          Job Description
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description || "This is the job description for the position."}
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </motion.div>
    </div>,
    document.body
  );
};

const PositionCard = ({ position, onUpdate }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [showApplicants, setShowApplicants] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({ ...position });
  const [isDeleted] = useState(false);

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

  if (isDeleted) return null;

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
        {/* Header */}
        <div className="flex justify-start items-start">
          <h3 className="font-bold text-lg">{position.position}</h3>
        </div>

        {/* Department */}
        <p
          className={`gap-5 mt-2 flex items-center ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {position.dept}
          {position.course ? ` (${position.course})` : ""}
        </p>

        {/* Metric Boxes */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div
            className={`text-center p-3 rounded-lg h-20 ${
              isDarkMode ? "bg-gray-700/50" : "bg-gray-50"
            }`}
          >
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Openings
            </p>
            <p className="font-bold text-lg">{position.openings}</p>
          </div>
          <div
            className={`text-center p-3 rounded-lg h-20 ${
              isDarkMode ? "bg-gray-700/50" : "bg-gray-50"
            }`}
          >
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Applicants
            </p>
            <p className="font-bold text-lg">{applicantCount}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowEdit(true)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Edit
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowDescription(true)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-blue-700 text-white hover:bg-blue-600"
                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
            }`}
          >
            Details
          </motion.button>
        </div>

        {showDescription && (
          <JobDescriptionModal
            description={position.description}
            onClose={() => setShowDescription(false)}
          />
        )}

        {/* View Applicants */}
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

      {showApplicants && (
        <ViewApplicantsModal
          position={position}
          onClose={() => setShowApplicants(false)}
        />
      )}

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
              <textarea
                name="description"
                value={editData.description}
                onChange={handleEditChange}
                placeholder="Job Description"
                rows={4}
                className={`w-full p-2 rounded border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                }`}
              ></textarea>
            </div>
            <div className="mt-4 flex justify-between gap-2">
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
