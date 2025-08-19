import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  GraduationCapIcon,
  MapPinIcon,
  CalendarIcon,
  FileTextIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckIcon,
  XIcon,
  ChevronLeftIcon
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';

const CandidateDetails = () => {
  const { id } = useParams();
  const { data } = useData();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const candidate = data.candidates.find(c => c.id === id);

  if (!candidate) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">Candidate Not Found</h2>
        <p className="mb-4">
          The candidate you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/candidates"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDarkMode
              ? 'bg-gray-700 hover:bg-gray-600'
              : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          <ChevronLeftIcon size={16} />
          Back to Candidates
        </Link>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selected':
        return isDarkMode
          ? 'bg-green-900/30 text-green-400'
          : 'bg-green-100 text-green-600';
      case 'Rejected':
        return isDarkMode
          ? 'bg-red-900/30 text-red-400'
          : 'bg-red-100 text-red-600';
      case 'Interviewed':
        return isDarkMode
          ? 'bg-yellow-900/30 text-yellow-400'
          : 'bg-yellow-100 text-yellow-600';
      case 'In Review':
        return isDarkMode
          ? 'bg-teal-900/30 text-teal-400'
          : 'bg-teal-100 text-teal-600';
      default:
        return isDarkMode
          ? 'bg-gray-700 text-gray-300'
          : 'bg-gray-100 text-gray-600';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header & Analysis Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/candidates"
            className={`p-2 rounded-lg ${
              isDarkMode
                ? 'hover:bg-gray-800'
                : 'hover:bg-gray-200'
            } transition-colors`}
          >
            <ChevronLeftIcon size={20} />
          </Link>
          <motion.h2 variants={itemVariants} className="text-2xl font-bold">
            Candidate Details
          </motion.h2>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/candidates/${id}/analysis`}
            className={`px-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-200 hover:bg-gray-300'
            } transition-colors flex items-center gap-2`}
          >
            <FileTextIcon size={16} />
            Analysis
          </Link>
        </div>
      </div>
      {/* Profile Header */}
      <motion.div
        variants={itemVariants}
        className={`rounded-xl overflow-hidden ${
          isDarkMode
            ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]'
            : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'
        } p-6`}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div
              className={`h-32 w-32 rounded-xl ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              } flex items-center justify-center`}
            >
              <UserIcon size={64} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <h1 className="text-2xl font-bold">{candidate.name}</h1>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${getStatusColor(candidate.status)}`}>
                {getStatusIcon(candidate.status)}
                {candidate.status}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <MailIcon size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                  <p>{candidate.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <PhoneIcon size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <GraduationCapIcon size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Education</p>
                  <p>
                    {candidate.dept} {candidate.course && `(${candidate.course})`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <MapPinIcon size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
                <div>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                  <p>Mumbai, India</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md flex items-center gap-2">
                <MailIcon size={16} />
                Send Email
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md flex items-center gap-2">
                <CheckIcon size={16} />
                Shortlist
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md flex items-center gap-2">
                <CalendarIcon size={16} />
                Schedule Interview
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Education & Skills | Application Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Education & Skills */}
        <motion.div variants={itemVariants} className={`lg:col-span-2 rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'} p-5`}>
          <h3 className="text-lg font-semibold mb-4">Education & Skills</h3>
          <div className="space-y-5">
            <div>
              <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Education</h4>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h5 className="font-medium">Indian Institute of Technology, Mumbai</h5>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      B.Tech in {candidate.dept} {candidate.course && `(${candidate.course})`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2022 - 2026</p>
                    <p className="font-medium">CGPA: {candidate.cgpa}/10</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Skills</h4>
              <div className="flex flex-wrap gap-2">
                {/* Conditionally rendered skills */}
                {candidate.dept === 'Engineering' && (
                  <>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>Java</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>Python</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>C++</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>Machine Learning</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>SQL</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-800'}`}>Data Structures</span>
                  </>
                )}
                {candidate.dept === 'Mechanical' && (
                  <>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>AutoCAD</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>SolidWorks</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>Thermodynamics</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>Fluid Mechanics</span>
                  </>
                )}
                {candidate.dept === 'Electrical' && (
                  <>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>Circuit Design</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>Power Systems</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>Microcontrollers</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-800'}`}>MATLAB</span>
                  </>
                )}
                {candidate.dept === 'Computer Science' && (
                  <>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>Python</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>R</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>Data Analysis</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>Business Intelligence</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-800'}`}>Tableau</span>
                  </>
                )}
              </div>
            </div>
            <div>
              <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Projects</h4>
              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <h5 className="font-medium">Smart Home Automation System</h5>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Developed an IoT-based home automation system using Arduino and Raspberry Pi. Implemented features for remote control, voice commands, and energy monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Arduino</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>IoT</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Python</span>
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <h5 className="font-medium">E-commerce Sales Analysis</h5>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Analyzed sales data from an e-commerce platform to identify trends and provide recommendations for inventory management and marketing strategies.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Data Analysis</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Python</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>Tableau</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Application Timeline */}
        <motion.div variants={itemVariants} className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'} p-5`}>
          <h3 className="text-lg font-semibold mb-4">Application Timeline</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                  <FileTextIcon size={16} />
                </div>
                <div className={`w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Application Submitted</h4>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>15 Jul 2025</span>
                </div>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Applied for Software Engineer position</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                  <CheckIcon size={16} />
                </div>
                <div className={`w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Resume Screening</h4>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>18 Jul 2025</span>
                </div>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resume reviewed and shortlisted</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                  <MailIcon size={16} />
                </div>
                <div className={`w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Assessment Sent</h4>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>20 Jul 2025</span>
                </div>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technical assessment email sent</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-600'} flex items-center justify-center`}>
                  <ClockIcon size={16} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Current Status</h4>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>22 Jul 2025</span>
                </div>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{candidate.status}</p>
              </div>
            </div>
          </div>
          {/* Applied Positions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Applied Positions</h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Software Engineer</h4>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>Open</span>
                </div>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engineering Department</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <BriefcaseIcon size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>10 openings</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Applied on 15 Jul</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Resume Preview */}
      <motion.div variants={itemVariants} className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'} p-5`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Resume</h3>
          <a
            href={candidate.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors text-sm flex items-center gap-2`}
          >
            <FileTextIcon size={14} />
            Download
          </a>
        </div>
        <div className={`h-96 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Resume preview not available.<br />
            <a
              href={candidate.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              Click here to view the resume
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CandidateDetails;
