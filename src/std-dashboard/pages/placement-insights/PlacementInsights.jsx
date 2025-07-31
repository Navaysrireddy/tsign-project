import React, { useState } from 'react';
import { 
  FiBriefcase, 
  FiCheckCircle, 
  FiClock, 
  FiXCircle, 
  FiDollarSign,
  FiBarChart2,
  FiSearch
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import './PlacementInsights.css';
import Sidebar from '../sidebar/Sidebar';

const PlacementInsights = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample placement data
  const placementData = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Software Engineer',
      status: 'selected',
      date: '2023-10-15',
      salary: '₹12,00,000',
      location: 'Bangalore',
      type: 'Full-time'
    },
    {
      id: 2,
      company: 'Data Analytics Co.',
      position: 'Data Scientist',
      status: 'pending',
      date: '2023-11-20',
      salary: '₹15,00,000',
      location: 'Hyderabad',
      type: 'Full-time'
    },
    {
      id: 3,
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      status: 'rejected',
      date: '2023-09-05',
      salary: '₹10,00,000',
      location: 'Pune',
      type: 'Full-time'
    },
    {
      id: 4,
      company: 'Cloud Systems',
      position: 'DevOps Engineer',
      status: 'scheduled',
      date: '2023-12-10',
      salary: '₹14,00,000',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 5,
      company: 'AI Research Labs',
      position: 'ML Engineer',
      status: 'selected',
      date: '2023-08-22',
      salary: '₹18,00,000',
      location: 'Bangalore',
      type: 'Full-time'
    },
    {
      id: 6,
      company: 'FinTech Solutions',
      position: 'Backend Developer',
      status: 'pending',
      date: '2023-11-30',
      salary: '₹13,00,000',
      location: 'Mumbai',
      type: 'Full-time'
    },
  ];

  // Filter data based on active tab and search term
  const filteredData = placementData.filter(item => {
    const matchesSearch = item.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || item.status === activeTab;
    return matchesSearch && matchesTab;
  });

  // Count placements by status
  const statusCounts = {
    all: placementData.length,
    selected: placementData.filter(item => item.status === 'selected').length,
    pending: placementData.filter(item => item.status === 'pending').length,
    rejected: placementData.filter(item => item.status === 'rejected').length,
    scheduled: placementData.filter(item => item.status === 'scheduled').length,
  };

  // Get status icon and color
  const getStatusDetails = (status) => {
    switch(status) {
      case 'selected':
        return { icon: <FiCheckCircle />, color: '#10B981', text: 'Selected' };
      case 'pending':
        return { icon: <FiClock />, color: '#F59E0B', text: 'Pending' };
      case 'rejected':
        return { icon: <FiXCircle />, color: '#EF4444', text: 'Rejected' };
      case 'scheduled':
        return { icon: <FiBriefcase />, color: '#3B82F6', text: 'Scheduled' };
      default:
        return { icon: null, color: '#6B7280', text: 'Unknown' };
    }
  };

  return (
    <div>
        <Sidebar/>
    <div className="placement-insights-container">
        
      <div className="placement-header">
        <h1>
          <FiBriefcase /> Placement Insights
        </h1>
        <p>Track your job applications and placement status</p>
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
            <p>Total Applications</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('selected')}
        >
          <div className="stat-icon selected">
            <FiCheckCircle />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.selected}</h3>
            <p>Selected</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('pending')}
        >
          <div className="stat-icon pending">
            <FiClock />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.pending}</h3>
            <p>Pending</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('rejected')}
        >
          <div className="stat-icon rejected">
            <FiXCircle />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.rejected}</h3>
            <p>Rejected</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="stat-card"
          onClick={() => setActiveTab('scheduled')}
        >
          <div className="stat-icon scheduled">
            <FiBriefcase />
          </div>
          <div className="stat-content">
            <h3>{statusCounts.scheduled}</h3>
            <p>Scheduled</p>
          </div>
        </motion.div>
      </div>

      <div className="placement-controls">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search companies or positions..."
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
            className={activeTab === 'selected' ? 'active' : ''}
            onClick={() => setActiveTab('selected')}
          >
            Selected
          </button>
          <button
            className={activeTab === 'pending' ? 'active' : ''}
            onClick={() => setActiveTab('pending')}
          >
            Pending
          </button>
          <button
            className={activeTab === 'rejected' ? 'active' : ''}
            onClick={() => setActiveTab('rejected')}
          >
            Rejected
          </button>
          <button
            className={activeTab === 'scheduled' ? 'active' : ''}
            onClick={() => setActiveTab('scheduled')}
          >
            Scheduled
          </button>
        </div>
      </div>

      <div className="placement-list">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const statusDetails = getStatusDetails(item.status);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="placement-card"
              >
                <div className="placement-main">
                  <div className="placement-info">
                    <h3>{item.company}</h3>
                    <p className="position">{item.position}</p>
                    <div className="placement-meta">
                      <span className="location">{item.location}</span>
                      <span className="type">{item.type}</span>
                      <span className="salary">
                        <FiDollarSign /> {item.salary}
                      </span>
                    </div>
                  </div>
                  <div
                    className="placement-status"
                    style={{ color: statusDetails.color }}
                  >
                    {statusDetails.icon} {statusDetails.text}
                  </div>
                </div>
                <div className="placement-footer">
                  <span className="date">Applied on: {new Date(item.date).toLocaleDateString()}</span>
                  <button className="details-btn">View Details</button>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="no-results">
            <p>No placements found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default PlacementInsights;