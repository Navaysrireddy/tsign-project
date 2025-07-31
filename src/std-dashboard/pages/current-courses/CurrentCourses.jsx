import React, { useState } from 'react';
import { 
  FiBook, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle,
  FiBarChart2,
  FiSearch,
  FiCalendar,
  FiUser
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import './CurrentCourses.css';
import Sidebar from '../sidebar/Sidebar';

const CurrentCourses = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample course data
  const coursesData = [
    {
      id: 1,
      code: 'CS-401',
      name: 'Advanced Algorithms',
      instructor: 'Dr. Smith',
      credits: 4,
      progress: 75,
      status: 'in-progress',
      nextClass: '2023-11-15T10:00:00',
      grade: 'A-'
    },
    {
      id: 2,
      code: 'CS-402',
      name: 'Machine Learning',
      instructor: 'Prof. Johnson',
      credits: 3,
      progress: 90,
      status: 'in-progress',
      nextClass: '2023-11-16T14:00:00',
      grade: 'A'
    },
    {
      id: 3,
      code: 'CS-403',
      name: 'Cloud Computing',
      instructor: 'Dr. Williams',
      credits: 3,
      progress: 100,
      status: 'completed',
      nextClass: null,
      grade: 'B+'
    },
    {
      id: 4,
      code: 'CS-404',
      name: 'Cybersecurity',
      instructor: 'Prof. Brown',
      credits: 4,
      progress: 30,
      status: 'upcoming',
      nextClass: '2023-11-20T09:00:00',
      grade: null
    },
    {
      id: 5,
      code: 'CS-405',
      name: 'Data Visualization',
      instructor: 'Dr. Davis',
      credits: 3,
      progress: 60,
      status: 'in-progress',
      nextClass: '2023-11-17T11:00:00',
      grade: 'B'
    },
  ];

  // Filter data based on active tab and search term
  const filteredData = coursesData.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || course.status === activeTab;
    return matchesSearch && matchesTab;
  });

  // Count courses by status
  const statusCounts = {
    all: coursesData.length,
    'in-progress': coursesData.filter(course => course.status === 'in-progress').length,
    completed: coursesData.filter(course => course.status === 'completed').length,
    upcoming: coursesData.filter(course => course.status === 'upcoming').length,
  };

  // Get status details
  const getStatusDetails = (status) => {
    switch(status) {
      case 'in-progress':
        return { icon: <FiClock />, color: '#F59E0B', text: 'In Progress' };
      case 'completed':
        return { icon: <FiCheckCircle />, color: '#10B981', text: 'Completed' };
      case 'upcoming':
        return { icon: <FiAlertCircle />, color: '#3B82F6', text: 'Upcoming' };
      default:
        return { icon: null, color: '#6B7280', text: 'Unknown' };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
        <Sidebar/>
    <div className="current-courses-container">
      <div className="courses-header">
        <h1>
          <FiBook /> Current Courses
        </h1>
        <p>Track your academic progress and upcoming classes</p>
      </div>

      <div className="stats-overview">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('all')}
        >
          <div className="stat-icon all">
            <FiBarChart2 />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.all}</h3>
            <p>Total Courses</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('in-progress')}
        >
          <div className="stat-icon in-progress">
            <FiClock />
          </div>
          <div className="stat-content">
            <h3>{statusCounts['in-progress']}</h3>
            <p>In Progress</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('completed')}
        >
          <div className="stat-icon completed">
            <FiCheckCircle />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.completed}</h3>
            <p>Completed</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('upcoming')}
        >
          <div className="stat-icon upcoming">
            <FiAlertCircle />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.upcoming}</h3>
            <p>Upcoming</p>
          </div>
        </motion.div>
      </div>

      <div className="courses-controls">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search courses, codes, or instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="tabs">
          <button
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={activeTab === 'in-progress' ? 'active' : ''}
            onClick={() => setActiveTab('in-progress')}
          >
            In Progress
          </button>
          <button
            className={activeTab === 'completed' ? 'active' : ''}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
          <button
            className={activeTab === 'upcoming' ? 'active' : ''}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
        </div>
      </div>

      <div className="courses-list">
        {filteredData.length > 0 ? (
          filteredData.map((course) => {
            const statusDetails = getStatusDetails(course.status);
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="course-card"
              >
                <div className="course-header">
                  <div className="course-code">{course.code}</div>
                  <div 
                    className="course-status"
                    style={{ color: statusDetails.color }}
                  >
                    {statusDetails.icon} {statusDetails.text}
                  </div>
                </div>
                
                <h3 className="course-name">{course.name}</h3>
                
                <div className="course-meta">
                  <span className="instructor">
                    <FiUser /> {course.instructor}
                  </span>
                  <span className="credits">{course.credits} Credits</span>
                  {course.grade && (
                    <span className="grade">Grade: {course.grade}</span>
                  )}
                </div>
                
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${course.progress}%`,
                        backgroundColor: statusDetails.color
                      }}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}% Complete</span>
                </div>
                
                <div className="course-footer">
                  <span className="next-class">
                    <FiCalendar /> Next: {formatDate(course.nextClass)}
                  </span>
                  <button className="details-btn">View Syllabus</button>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="no-results">
            <p>No courses found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CurrentCourses;