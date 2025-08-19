import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { UserIcon, ChevronLeftIcon, FileTextIcon, BarChart2Icon, PieChartIcon, TrendingUpIcon, GraduationCapIcon, CheckIcon, XIcon, ClockIcon } from 'lucide-react';
import BarChart  from '../dashboard/chart/BarChart';
import  PieChart  from '../dashboard/chart/PieChart';
import LineChart  from '../dashboard/chart/LineChart';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
 
const CandidateAnalysis = () => {
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
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
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
 
  // Skill assessment data (simulated)
  const skillAssessmentData = {
    labels: ['Technical', 'Problem Solving', 'Communication', 'Teamwork', 'Leadership'],
    datasets: [{
      label: 'Candidate Score',
      data: [85, 90, 75, 80, 65],
      backgroundColor: isDarkMode ? 'rgba(20, 184, 166, 0.7)' : 'rgba(8, 145, 178, 0.7)'
    }, {
      label: 'Average Score',
      data: [70, 65, 72, 68, 60],
      backgroundColor: isDarkMode ? 'rgba(168, 85, 247, 0.4)' : 'rgba(79, 70, 229, 0.4)'
    }]
  };
 
  // Performance trend data (simulated)
  const performanceTrendData = {
    labels: ['Round 1', 'Round 2', 'Round 3', 'Final'],
    datasets: [{
      label: 'Performance Score',
      data: [75, 82, 88, 92],
      borderColor: isDarkMode ? '#14b8a6' : '#0891b2',
      backgroundColor: isDarkMode ? 'rgba(20, 184, 166, 0.1)' : 'rgba(8, 145, 178, 0.1)'
    }]
  };
 
  // Evaluation breakdown data (simulated)
  const evaluationBreakdownData = {
    labels: ['Technical Skills', 'Cultural Fit', 'Experience', 'Education'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: [
        isDarkMode ? 'rgba(59, 130, 246, 0.8)' : 'rgba(37, 99, 235, 0.8)',
        isDarkMode ? 'rgba(168, 85, 247, 0.8)' : 'rgba(139, 92, 246, 0.8)',
        isDarkMode ? 'rgba(34, 197, 94, 0.8)' : 'rgba(22, 163, 74, 0.8)',
        isDarkMode ? 'rgba(234, 179, 8, 0.8)' : 'rgba(202, 138, 4, 0.8)'
      ]
    }]
  };
 
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/candidates"
            className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
          >
            <ChevronLeftIcon size={20} />
          </Link>
          <motion.h2 variants={itemVariants} className="text-2xl font-bold">
            Candidate Analysis
          </motion.h2>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/candidates/${id}/details`}
            className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors flex items-center gap-2`}
          >
            <UserIcon size={16} />
            Details
          </Link>
        </div>
      </div>
 
      {/* Profile Header */}
      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <div className="flex items-center gap-4">
          <div className={`h-16 w-16 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
            <UserIcon size={32} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold">{candidate.name}</h1>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${getStatusColor(candidate.status)}`}>
                {getStatusIcon(candidate.status)}
                {candidate.status}
              </span>
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {candidate.dept} {candidate.course && `(${candidate.course})`} • CGPA: {candidate.cgpa}/10
            </p>
          </div>
        </div>
      </motion.div>
 
      {/* Skill Assessment */}
      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart2Icon size={20} className={isDarkMode ? 'text-teal-400' : 'text-teal-600'} />
          <h3 className="text-lg font-semibold">Skill Assessment</h3>
        </div>
        <div className="h-80">
          <BarChart labels={skillAssessmentData.labels} datasets={skillAssessmentData.datasets} />
        </div>
      </motion.div>
 
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <motion.div
          variants={itemVariants}
          className={`
            rounded-xl overflow-hidden
            ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
            p-5
          `}
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUpIcon size={20} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
            <h3 className="text-lg font-semibold">Performance Trend</h3>
          </div>
          <div className="h-72">
            <LineChart labels={performanceTrendData.labels} datasets={performanceTrendData.datasets} />
          </div>
        </motion.div>
 
        {/* Evaluation Breakdown */}
        <motion.div
          variants={itemVariants}
          className={`
            rounded-xl overflow-hidden
            ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
            p-5
          `}
        >
          <div className="flex items-center gap-2 mb-4">
            <PieChartIcon size={20} className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
            <h3 className="text-lg font-semibold">Evaluation Breakdown</h3>
          </div>
          <div className="h-72">
            <PieChart labels={evaluationBreakdownData.labels} datasets={evaluationBreakdownData.datasets} />
          </div>
        </motion.div>
      </div>
 
      {/* Education Comparison */}
      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <div className="flex items-center gap-2 mb-4">
          <GraduationCapIcon size={20} className={isDarkMode ? 'text-amber-400' : 'text-amber-600'} />
          <h3 className="text-lg font-semibold">CGPA Comparison</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Candidate CGPA
                </h4>
                <span className="text-lg font-bold">{candidate.cgpa}/10</span>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                  style={{ width: `${candidate.cgpa * 10}%` }}
                ></div>
              </div>
              <div className="mt-4 flex justify-between text-xs">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>0</span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>5</span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>10</span>
              </div>
            </div>
 
            <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Department Average
                </h4>
                <span className="text-lg font-bold">8.2/10</span>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: '82%' }}
                ></div>
              </div>
              <div className="mt-4 flex justify-between text-xs">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>0</span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>5</span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>10</span>
              </div>
            </div>
          </div>
 
          {/* Right Column */}
          <div>
            <div className={`h-full p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <h4 className={`text-sm font-medium mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Performance Analysis
              </h4>
              <div className="space-y-4">
                {/* Technical Skills */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Technical Skills
                    </p>
                    <span className={`text-sm font-medium ${candidate.cgpa > 8.5 ? 'text-green-500' : candidate.cgpa > 7.5 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {candidate.cgpa > 8.5 ? 'Excellent' : candidate.cgpa > 7.5 ? 'Good' : 'Average'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${candidate.cgpa > 8.5 ? 'bg-green-500' : candidate.cgpa > 7.5 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min(candidate.cgpa * 10, 100)}%` }}
                    ></div>
                  </div>
                </div>
 
                {/* Problem Solving */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Problem Solving
                    </p>
                    <span className={`text-sm font-medium ${candidate.cgpa > 8.0 ? 'text-green-500' : candidate.cgpa > 7.0 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {candidate.cgpa > 8.0 ? 'Excellent' : candidate.cgpa > 7.0 ? 'Good' : 'Average'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${candidate.cgpa > 8.0 ? 'bg-green-500' : candidate.cgpa > 7.0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((candidate.cgpa - 0.5) * 10, 100)}%` }}
                    ></div>
                  </div>
                </div>
 
                {/* Communication */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Communication
                    </p>
                    <span className={`text-sm font-medium ${candidate.cgpa > 7.5 ? 'text-green-500' : candidate.cgpa > 6.5 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {candidate.cgpa > 7.5 ? 'Excellent' : candidate.cgpa > 6.5 ? 'Good' : 'Average'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${candidate.cgpa > 7.5 ? 'bg-green-500' : candidate.cgpa > 6.5 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((candidate.cgpa - 1.0) * 10, 100)}%` }}
                    ></div>
                  </div>
                </div>
 
                {/* Overall Fit */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Overall Fit
                    </p>
                    <span className={`text-sm font-medium ${candidate.cgpa > 8.0 ? 'text-green-500' : candidate.cgpa > 7.0 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {candidate.cgpa > 8.0 ? 'Excellent' : candidate.cgpa > 7.0 ? 'Good' : 'Average'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${candidate.cgpa > 8.0 ? 'bg-green-500' : candidate.cgpa > 7.0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min(candidate.cgpa * 9.5, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
 
      {/* Recommendation */}
      <motion.div
        variants={itemVariants}
        className={`
          rounded-xl overflow-hidden
          ${isDarkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#2a2a2a]' : 'bg-white shadow-[5px_5px_10px_#e0e0e0,-5px_-5px_10px_#ffffff]'}
          p-5
        `}
      >
        <h3 className="text-lg font-semibold mb-4">AI Recommendation</h3>
        <div className={`p-4 rounded-lg ${candidate.cgpa > 8.5 ?
          isDarkMode ? 'bg-green-900/20 border border-green-800/30' : 'bg-green-50 border border-green-200' :
          candidate.cgpa > 7.5 ?
          isDarkMode ? 'bg-yellow-900/20 border border-yellow-800/30' : 'bg-yellow-50 border border-yellow-200' :
          isDarkMode ? 'bg-red-900/20 border border-red-800/30' : 'bg-red-50 border border-red-200'}`}
        >
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-full ${candidate.cgpa > 8.5 ?
              isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600' :
              candidate.cgpa > 7.5 ?
              isDarkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600' :
              isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'}`}
            >
              {candidate.cgpa > 8.5 ? <CheckIcon size={20} /> :
               candidate.cgpa > 7.5 ? <ClockIcon size={20} /> :
               <XIcon size={20} />}
            </div>
            <div>
              <h4 className={`font-medium ${candidate.cgpa > 8.5 ?
                isDarkMode ? 'text-green-400' : 'text-green-800' :
                candidate.cgpa > 7.5 ?
                isDarkMode ? 'text-yellow-400' : 'text-yellow-800' :
                isDarkMode ? 'text-red-400' : 'text-red-800'}`}
              >
                {candidate.cgpa > 8.5 ? 'Highly Recommended' :
                 candidate.cgpa > 7.5 ? 'Consider for Next Round' :
                 'Not Recommended'}
              </h4>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {candidate.cgpa > 8.5 ?
                  `${candidate.name} shows excellent potential with strong academic performance and technical skills. Recommend proceeding to the next interview round immediately.` :
                  candidate.cgpa > 7.5 ?
                  `${candidate.name} demonstrates good potential but would benefit from additional technical assessment. Consider for next round with supplementary evaluation.` :
                  `${candidate.name}'s profile does not align well with the current requirements. Consider for future opportunities or different roles.`}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {candidate.cgpa > 8.5 ? (
                  <>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      Technical Interview
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      HR Round
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      Team Meeting
                    </span>
                  </>
                ) : candidate.cgpa > 7.5 ? (
                  <>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      Technical Assessment
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      Follow-up Interview
                    </span>
                  </>
                ) : (
                  <>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      Consider Alternative Role
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      Future Pool
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default CandidateAnalysis;
 
