

import React, { useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { mockData } from "../utils/mockdata";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ViewApplicantsModal = ({ position, onClose }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // ✅ Use mapped filter states
  const [filter, setFilter] = useState("all");

  // Mapping of display -> actual key
  const statusMapping = useMemo(
    () => ({
      Selected: "selected",
      Rejected: "rejected",
      "In Review": "inReview",
    }),
    []
  );

  // Get applicants for this position
  const applicants = useMemo(() => {
    return mockData.candidates.filter(
      (c) =>
        c.dept === position.dept &&
        (position.course ? c.course === position.course : true)
    );
  }, [position]);

  // Stats
  const stats = useMemo(() => {
    return {
      selected: applicants.filter((a) => a.status === "Selected").length,
      rejected: applicants.filter((a) => a.status === "Rejected").length,
      inReview: applicants.filter((a) => a.status === "In Review").length,
    };
  }, [applicants]);

  // Filtered applicants
  const filteredApplicants = useMemo(() => {
    if (filter === "all") return applicants;

    // Find display text from mapping reverse
    const displayStatus =
      Object.keys(statusMapping).find(
        (key) => statusMapping[key] === filter
      ) || filter;

    return applicants.filter((a) => a.status === displayStatus);
  }, [applicants, filter, statusMapping]);

  // PDF Download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.text(`Applicants for ${position.position}`, 14, 15);

    const exportApplicants =
      filter === "all"
        ? applicants
        : filteredApplicants;

    // Table
    autoTable(doc, {
      startY: 20,
      head: [["Name", "Email", "CGPA", "Status"]],
      body: exportApplicants.map((a) => [a.name, a.email, a.cgpa, a.status]),
    });

    doc.save(`${position.position}_applicants.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`rounded-lg p-6 w-[95%] max-w-5xl shadow-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Title */}
        <h2 className="text-xl font-bold mb-4">
          Applicants for {position.position}
        </h2>

        {/* Stats with Click Filters */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.keys(statusMapping).map((status) => (
            <div
              key={status}
              onClick={() => setFilter(statusMapping[status])}
              className={`p-3 rounded-lg shadow cursor-pointer transition ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } ${filter === statusMapping[status] ? "ring-2 ring-teal-500" : ""}`}
            >
              <p className="text-sm">{status}</p>
              <p
                className={`text-lg font-bold ${
                  status === "Selected"
                    ? "text-green-500"
                    : status === "Rejected"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {stats[statusMapping[status]]}
              </p>
            </div>
          ))}
        </div>

        {/* Applicants Table */}
        {filteredApplicants.length > 0 ? (
          <table
            className={`w-full border-collapse border ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <thead>
              <tr
                className={`${
                  isDarkMode
                    ? "bg-gray-700 text-gray-200"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">CGPA</th>
                <th className="border p-2">Status</th>
                {/* <th className="border p-2">Resume</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((app) => (
                <tr
                  key={app.id}
                  className={`${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="border p-2">{app.name}</td>
                  <td className="border p-2">{app.email}</td>
                  <td className="border p-2">{app.cgpa}</td>
                  <td className="border p-2">{app.status}</td>
                  {/* <td className="border p-2">
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            No applicants in this category.
          </p>
        )}

        {/* Actions */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleDownloadPDF}
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-teal-600 hover:bg-teal-500 text-white"
                : "bg-teal-500 hover:bg-teal-400 text-white"
            }`}
          >
            Download PDF
          </button>
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicantsModal;
