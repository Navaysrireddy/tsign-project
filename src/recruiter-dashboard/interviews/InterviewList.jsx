import React from "react";
import { motion } from "framer-motion";
import {
  VideoIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  AlertCircleIcon,
  DownloadIcon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
// import { useData } from "../context/DataContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const InterviewList = ({ interviews }) => {
  const { theme } = useTheme();
  // const { updateInterviewStatus } = useData();
  const isDarkMode = theme === "dark";

  const getStatusColor = (status) => {
    switch (status) {
      case "Scheduled":
        return isDarkMode
          ? "bg-green-900/30 text-green-400"
          : "bg-green-100 text-green-600";
      case "Pending":
        return isDarkMode
          ? "bg-yellow-900/30 text-yellow-400"
          : "bg-yellow-100 text-yellow-600";
      case "Completed":
        return isDarkMode
          ? "bg-blue-900/30 text-blue-400"
          : "bg-blue-100 text-blue-600";
      case "No Show":
        return isDarkMode
          ? "bg-red-900/30 text-red-400"
          : "bg-red-100 text-red-600";
      default:
        return isDarkMode
          ? "bg-gray-700 text-gray-300"
          : "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Scheduled":
        return <VideoIcon size={14} />;
      case "Pending":
        return <CalendarIcon size={14} />;
      case "Completed":
        return <ClipboardCheckIcon size={14} />;
      case "No Show":
        return <AlertCircleIcon size={14} />;
      default:
        return null;
    }
  };

  const getActionLabel = (status) => {
    switch (status) {
      case "Scheduled":
        return "Join";
      case "Pending":
        return "Reschedule";
      case "Completed":
      case "No Show":
        return "Feedback";
      default:
        return "View";
    }
  };

  // ✅ PDF Download Function
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Interview List", 14, 16);

    const tableColumn = ["Candidate", "Position", "Date", "Time", "Status"];
    const tableRows = [];

    interviews.forEach((interview) => {
      const rowData = [
        interview.candidate,
        interview.position,
        interview.date,
        interview.time,
        interview.status,
      ];
      tableRows.push(rowData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 22,
    });

    doc.save("interviews.pdf");
  };

  return (
    <div className="overflow-x-auto">
      {/* Download Button */}
      <div className="flex justify-end mb-3">
        <motion.button
          onClick={downloadPDF}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg 
                     bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md"
        >
          <DownloadIcon size={16} />
          Download PDF
        </motion.button>
      </div>

      <table className="w-full">
        <thead
          className={`${
            isDarkMode ? "bg-gray-700/50" : "bg-gray-50"
          } border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <tr>
            <th
              className={`p-4 text-left text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Candidate
            </th>
            <th
              className={`p-4 text-left text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Position
            </th>
            <th
              className={`p-4 text-left text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Date
            </th>
            <th
              className={`p-4 text-left text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Time
            </th>
            <th
              className={`p-4 text-left text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Status
            </th>
            <th
              className={`p-4 text-left text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {interviews.length > 0 ? (
            interviews.map((interview) => (
              <motion.tr
                key={interview.id}
                // whileHover={{ scale: 1.01 }}
                className={`border-b ${
                  isDarkMode
                    ? "border-gray-700 hover:bg-gray-700/30"
                    : "border-gray-200 hover:bg-gray-50"
                } transition-colors`}
              >
                <td className="p-4 font-medium">{interview.candidate}</td>
                <td className="p-4">{interview.position}</td>
                <td className="p-4">{interview.date}</td>
                <td className="p-4">{interview.time}</td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                      getStatusColor(interview.status)
                    }`}
                  >
                    {getStatusIcon(interview.status)}
                    {interview.status}
                  </span>
                </td>
                <td className="p-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      interview.status === "Scheduled"
                        ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white"
                        : isDarkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    {getActionLabel(interview.status)}
                  </motion.button>
                </td>
              </motion.tr>
            ))
          ) : (
            <tr className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              <td colSpan={6} className="p-4 text-center">
                No interviews found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewList;
