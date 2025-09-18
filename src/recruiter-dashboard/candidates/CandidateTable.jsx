// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLinkIcon, ClockIcon, CheckIcon, XIcon, UserIcon, FileTextIcon, Download } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const CandidateTable = ({
//   candidates,
//   selectedCandidates,
//   setSelectedCandidates,
//   onViewDetails,
// }) => {
//   const { theme } = useTheme();
//   const isDarkMode = theme === 'dark';

//   const toggleCandidateSelection = (id) => {
//     setSelectedCandidates(prev =>
//       prev.includes(id) ? prev.filter(candidateId => candidateId !== id) : [...prev, id]
//     );
//   };

//   const toggleSelectAll = () => {
//     if (selectedCandidates.length === candidates.length) {
//       setSelectedCandidates([]);
//     } else {
//       setSelectedCandidates(candidates.map(c => c.id));
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Selected':
//         return isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600';
//       case 'Rejected':
//         return isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600';
//       case 'Interviewed':
//         return isDarkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600';
//       case 'In Review':
//         return isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600';
//       default:
//         return isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'Selected':
//         return <CheckIcon size={14} />;
//       case 'Rejected':
//         return <XIcon size={14} />;
//       case 'Interviewed':
//         return <UserIcon size={14} />;
//       case 'In Review':
//         return <ClockIcon size={14} />;
//       default:
//         return null;
//     }
//   };

//   // Download PDF function using jsPDF and autoTable
//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text('Candidates List', 14, 22);

//     const headers = [
//       ['Name', 'Email', 'Department', 'CGPA', 'Resume URL', 'Status', 'College'],
//     ];

//     const dataRows = candidates.map(candidate => [
//       candidate.name,
//       candidate.email,
//       candidate.dept + (candidate.course ? ` (${candidate.course})` : ''),
//       candidate.cgpa.toString(),
//       candidate.resume,
//       candidate.status,
//       candidate.college || '-',
//     ]);

//     autoTable(doc, {
//       startY: 30,
//       head: headers,
//       body: dataRows,
//       styles: { fontSize: 10, cellPadding: 3 },
//       headStyles: { fillColor: [22, 160, 133] },
//       alternateRowStyles: { fillColor: [238, 238, 238] },
//     });

//     doc.save('candidates.pdf');
//   };

//   return (
//     <>
//       <div className="flex justify-end mb-2">
//         <button
//           onClick={downloadPDF}
//           disabled={candidates.length === 0}
//           className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
//             candidates.length === 0
//               ? 'bg-gray-400 cursor-not-allowed text-gray-200'
//               : isDarkMode
//               ? 'bg-teal-600 hover:bg-teal-700 text-white'
//               : 'bg-teal-500 hover:bg-teal-600 text-white'
//           }`}
//         >
//           <Download size={16} />
//           Download PDF
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//             <tr>
//               <th className="p-4 text-left">
//                 <input
//                   type="checkbox"
//                   checked={selectedCandidates.length === candidates.length && candidates.length > 0}
//                   onChange={toggleSelectAll}
//                   className="rounded text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
//                 />
//               </th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Name</th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email</th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Department</th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CGPA</th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Resume</th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status</th>
//               <th className={`p-4 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {candidates.length > 0 ? (
//               candidates.map(candidate => (
//                 <motion.tr
//                   key={candidate.id}
//                   className={`border-b ${isDarkMode ? 'border-gray-700 hover:bg-gray-700/30' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
//                 >
//                   <td className="p-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedCandidates.includes(candidate.id)}
//                       onChange={() => toggleCandidateSelection(candidate.id)}
//                       className="rounded text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
//                     />
//                   </td>
//                   <td className="p-4 font-medium">{candidate.name}</td>
//                   <td className="p-4">{candidate.email}</td>
//                   <td className="p-4">
//                     {candidate.dept}
//                     {candidate.course ? ` (${candidate.course})` : ''}
//                   </td>
//                   <td className="p-4">{candidate.cgpa}</td>
//                   <td className="p-4">
//                     <a
//                       href={candidate.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex items-center gap-1 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'}`}
//                     >
//                       View <ExternalLinkIcon size={14} />
//                     </a>
//                   </td>
//                   <td className="p-4">
//                     <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(candidate.status)}`}>
//                       {getStatusIcon(candidate.status)}
//                       {candidate.status}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex flex-wrap gap-2">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => onViewDetails(candidate.id)}
//                         className={`p-1.5 rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
//                         title="View Details"
//                       >
//                         <FileTextIcon size={16} />
//                       </motion.button>
//                     </div>
//                   </td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
//                 <td colSpan={8} className="p-4 text-center">
//                   No candidates found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default CandidateTable;








import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, ClockIcon, CheckIcon, XIcon, UserIcon, FileTextIcon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Full candidates data with college and tSignId
const candidatesData = [
  {
    id: "1",
    tSignId: "TSIGN001",
    name: "Ananya R",
    email: "ananya@abc.com",
    dept: "Engineering",
    course: "CSE",
    cgpa: 8.9,
    resume: "https://example.com/resume1",
    status: "In Review",
    college: "National Institute of Technology, Trichy"
  },
  {
    id: "2",
    tSignId: "TSIGN002",
    name: "Vikram S",
    email: "vikram@xyz.com",
    dept: "Engineering",
    course: "CSE",
    cgpa: 9.2,
    resume: "https://example.com/resume2",
    status: "Selected",
    college: "Indian Institute of Technology, Bombay"
  },
  {
    id: "3",
    tSignId: "TSIGN003",
    name: "Raj P",
    email: "raj@xyz.com",
    dept: "Engineering",
    course: "ECE",
    cgpa: 9.1,
    resume: "https://example.com/resume3",
    status: "Selected",
    college: "Delhi Technological University, Delhi"
  },
  {
    id: "4",
    tSignId: "TSIGN004",
    name: "Priya K",
    email: "priya@abc.com",
    dept: "Engineering",
    course: "IT",
    cgpa: 8.7,
    resume: "https://example.com/resume4",
    status: "Interviewed",
    college: "Vellore Institute of Technology, Vellore"
  },
  {
    id: "5",
    tSignId: "TSIGN005",
    name: "Arun M",
    email: "arun@xyz.com",
    dept: "Mechanical",
    course: "",
    cgpa: 8.5,
    resume: "https://example.com/resume5",
    status: "In Review",
    college: "Anna University, Chennai"
  },
  {
    id: "6",
    tSignId: "TSIGN006",
    name: "Meena S",
    email: "meena@abc.com",
    dept: "Electrical",
    course: "",
    cgpa: 8.8,
    resume: "https://example.com/resume6",
    status: "Selected",
    college: "Indian Institute of Technology, Madras"
  },
  {
    id: "7",
    tSignId: "TSIGN007",
    name: "Kiran T",
    email: "kiran@xyz.com",
    dept: "Computer Science",
    course: "Business",
    cgpa: 8.6,
    resume: "https://example.com/resume7",
    status: "Rejected",
    college: "BITS Pilani, Pilani Campus"
  },
];

const CandidateTable = ({
  candidates = candidatesData,
  selectedCandidates,
  setSelectedCandidates,
  onViewDetails,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleCandidateSelection = (id) => {
    setSelectedCandidates(prev =>
      prev.includes(id) ? prev.filter(candidateId => candidateId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidates.map(c => c.id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selected':
        return isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600';
      case 'Rejected':
        return isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600';
      case 'Interviewed':
        return isDarkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600';
      case 'In Review':
        return isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600';
      default:
        return isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Selected':
        return <CheckIcon size={14} />;
      case 'Rejected':
        return <XIcon size={14} />;
      case 'Interviewed':
        return <UserIcon size={14} />;
      case 'In Review':
        return <ClockIcon size={14} />;
      default:
        return null;
    }
  };

  // Download PDF function using jsPDF and autoTable
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Candidates List', 14, 22);

    const headers = [
      ['T-Sign ID', 'Name', 'Email', 'Department', 'CGPA', 'Resume URL', 'Status', 'College'],
    ];

    const dataRows = candidates.map(candidate => [
      candidate.tSignId,
      candidate.name,
      candidate.email,
      candidate.dept + (candidate.course ? ` (${candidate.course})` : ''),
      candidate.cgpa.toString(),
      candidate.resume,
      candidate.status,
      candidate.college || '-',
    ]);

    autoTable(doc, {
      startY: 30,
      head: headers,
      body: dataRows,
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [22, 160, 133] },
      alternateRowStyles: { fillColor: [238, 238, 238] },
    });

    doc.save('candidates.pdf');
  };

  return (
    <>
      <div className="flex justify-end mb-2">
        <button
          onClick={downloadPDF}
          disabled={candidates.length === 0}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition ${
            candidates.length === 0
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : isDarkMode
              ? 'bg-teal-600 hover:bg-teal-700 text-white'
              : 'bg-teal-500 hover:bg-teal-600 text-white'
          }`}
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>

      <div className="scroll-container overflow-x-auto border rounded-md max-w-full">
        <table className="min-w-[1200px] w-full">
          <thead className={`sticky top-0 z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <tr>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  checked={selectedCandidates.length === candidates.length && candidates.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
                />
              </th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>T-Sign ID</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Department</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>CGPA</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Resume</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Status</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>College</th>
              <th className={`py-2 px-4 text-left text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.length > 0 ? (
              candidates.map(candidate => (
                <motion.tr
                  key={candidate.id}
                  className={`border-b transition-colors odd:bg-white even:bg-gray-50 ${
                    isDarkMode ? 'odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => toggleCandidateSelection(candidate.id)}
                      className="rounded text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
                    />
                  </td>
                  <td className="py-2 px-4 font-mono text-base">{candidate.tSignId}</td>
                  <td className="py-2 px-4 font-medium text-base">{candidate.name}</td>
                  <td className="py-2 px-4 text-base">{candidate.email}</td>
                  <td className="py-2 px-4 text-base">
                    {candidate.dept}
                    {candidate.course ? ` (${candidate.course})` : ''}
                  </td>
                  <td className="py-2 px-4 text-base">{candidate.cgpa}</td>
                  <td className="py-2 px-4">
                    <a
                      href={candidate.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'}`}
                    >
                      View <ExternalLinkIcon size={14} />
                    </a>
                  </td>
                  <td className="py-2 px-4 text-base">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(candidate.status)}`}>
                      {getStatusIcon(candidate.status)}
                      {candidate.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-base">{candidate.college || '-'}</td>
                  <td className="py-2 px-4">
                    <div className="flex flex-wrap gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onViewDetails(candidate.id)}
                        className={`p-2 rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
                        title="View Details"
                      >
                        <FileTextIcon size={16} />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                <td colSpan={10} className="py-5 text-center text-base">
                  No candidates found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style jsx global>{`
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(22, 160, 133, 0.5);
          border-radius: 4px;
        }
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: rgba(22, 160, 133, 0.8);
        }
      `}</style>
    </>
  );
};

export default CandidateTable;

