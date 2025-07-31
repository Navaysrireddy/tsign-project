import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Import navigate hook
import { entityStats } from '../../data/EntityStats';

const RecruitersPanel = () => {
  const { recruiters } = entityStats;
  const navigate = useNavigate(); // 👈 Initialize navigation

  const handleNavigate = () => {
    navigate('/Manage_Recruiters'); // 👈 Route to recruiter management page
  };

  const styles = {
    panel: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease',
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
    active: {
      color: '#059669',
      marginBottom: '0.25rem',
    },
    new: {
      color: '#2563eb',
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

  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>Recruiters</h3>
      <p style={styles.info}>Total Recruiters: <span style={styles.span}>{recruiters.total}</span></p>
      <p style={styles.active}>Active: <span style={styles.span}>{recruiters.active}</span></p>
      <p style={styles.new}>New: <span style={styles.span}>{recruiters.new}</span></p>
      <button style={styles.button} onClick={handleNavigate}>
        Manage Recruiters
      </button>
    </div>
  );
};

export default RecruitersPanel;