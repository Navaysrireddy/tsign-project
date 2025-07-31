import React from 'react';
import { useNavigate } from 'react-router-dom';
import { entityStats } from '../../data/EntityStats';

const CollegesPanel = () => {
  const navigate = useNavigate();
  const { colleges } = entityStats;

  const styles = {
    panel: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1f2937',
    },
    info: {
      color: '#374151',
      marginBottom: '0.5rem',
    },
    verified: {
      color: '#059669',
      marginBottom: '0.25rem',
    },
    pending: {
      color: '#f59e0b',
      marginBottom: '1rem',
    },
    span: {
      fontWeight: '500',
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  const handleNavigate = () => {
    navigate('/Manage_Colleges');
  };

  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>Colleges</h3>
      <p style={styles.info}>
        Total Colleges: <span style={styles.span}>{colleges.total}</span>
      </p>
      <p style={styles.verified}>
        Verified: <span style={styles.span}>{colleges.verified}</span>
      </p>
      <p style={styles.pending}>
        Pending: <span style={styles.span}>{colleges.pending}</span>
      </p>
      <button style={styles.button} onClick={handleNavigate}>
        Manage Colleges
      </button>
    </div>
  );
};

export default CollegesPanel;