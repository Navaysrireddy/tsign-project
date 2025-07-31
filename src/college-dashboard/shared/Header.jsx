// src/shared/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h1>Dashboard</h1>
      <button style={{
        padding: '0.5rem 1rem',
        background: '#1d4ed8',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>Logout</button>
    </header>
  );
};

export default Header;