import React from 'react';
import { useNavigate } from 'react-router-dom';
import { entityStats } from '../../data/EntityStats';

const StudentsPanel = () => {
  const navigate = useNavigate();
  const { students } = entityStats;

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

  const handleNavigate = () => {
    navigate('/Manage_Students');
  };

  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>Students</h3>
      <p style={styles.info}>
        Total Students: <span style={styles.span}>{students.total}</span>
      </p>
      <p style={styles.active}>
        Active: <span style={styles.span}>{students.active}</span>
      </p>
      <p style={styles.new}>
        New: <span style={styles.span}>{students.new}</span>
      </p>
      <button style={styles.button} onClick={handleNavigate}>
        Manage Students
      </button>
    </div>
  );
};

export default StudentsPanel;