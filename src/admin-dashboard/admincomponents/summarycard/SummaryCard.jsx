import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { summaryStats } from '../../data/SummaryStats';
import './SummaryCard.css';

const SummaryCards = () => {
  const [modalType, setModalType] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (label) => {
    switch (label) {
      case 'Active Jobs':
        setModalType('jobs');
        break;
      case 'Applications':
        setModalType('applications');
        break;
      case 'Pending Approvals':
        setModalType('approvals');
        break;
      case 'Total Students':
        setModalType('students');
        break;
      case 'Total Users':
        setModalType('users');
        break;
      case 'Students':
        navigate('/students');
        break;
      case 'Colleges':
        navigate('/colleges');
        break;
      case 'Recruiters':
        navigate('/recruiters');
        break;
      default:
        setModalType(null);
    }
  };

  const handleCloseModal = () => setModalType(null);

  const getModalContent = () => {
    switch (modalType) {
      case 'jobs':
        return (
          <>
            <h2>Active Jobs</h2>
            <ul>
              <li>Frontend Developer at ABC Corp</li>
              <li>Backend Engineer at XYZ Ltd</li>
              <li>UI/UX Designer at Creative Inc</li>
            </ul>
          </>
        );
      case 'applications':
        return (
          <>
            <h2>Applications</h2>
            <ul>
              <li>John Doe applied for Backend Engineer</li>
              <li>Jane Smith applied for UI/UX Designer</li>
              <li>Mark Lee applied for Frontend Developer</li>
              <li>More student available...</li>
            </ul>
          </>
        );
      case 'approvals':
        return (
          <>
            <h2>Pending Approvals</h2>
            <ul>
              <li>12 new student sign-ups awaiting activation</li>
              <li>  7 upcoming interviews need scheduling</li>
              <li>2 reports of inappropriate content to review</li>
              <li>More pendings available...</li>
            </ul>
          </>
        );
      case 'students':
        return (
          <>
            <h2>Total Students</h2>
            <ul>
              <li>John Doe - Computer Science</li>
              <li>Jane Smith - Electrical Engineering</li>
              <li>Mark Lee - Mechanical Engineering</li>
              <li>More students available...</li>
            </ul>
          </>
        );
      case 'users':
        return (
          <>
            <h2>Total Users</h2>
            <ul>
              <li>Students: 23775</li>
              <li>Colleges: 450</li>
              <li>Recruiters: 622</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="summary-cards-grid">
        {summaryStats.map((card, index) => (
          <div
            key={index}
            className={`summary-card ${
              [
                'Active Jobs',
                'Applications',
                'Pending Approvals',
                'Total Students',
                'Total Users',
                'Students',
                'Colleges',
                'Recruiters',
              ].includes(card.label)
                ? 'clickable'
                : ''
            }`}
            onClick={() => handleCardClick(card.label)}
          >
            <p className="summary-label">{card.label}</p>
            <h3 className="summary-value">{card.value}</h3>
            <p
              className={`summary-trend ${
                card.trend >= 0 ? 'positive' : 'negative'
              }`}
            >
              {card.trendText}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalType && (
        <div className="modal-overlay">
          <div className="modal-content">
            {getModalContent()}
            <button onClick={handleCloseModal} style={{ marginTop: '1rem' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SummaryCards;