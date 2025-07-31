import React, { useState } from 'react';
import { entityStats } from '../data/EntityStats'; // Adjust path as needed

const Manage_Students = () => {
  const { students } = entityStats;

  const dummyStudents = [
    { id: 1, name: 'Riya Sharma', email: 'riya@example.com', status: 'Active' },
    { id: 2, name: 'Anil Mehta', email: 'anil@example.com', status: 'Inactive' },
    { id: 3, name: 'Sneha Patel', email: 'sneha@example.com', status: 'Active' },
    { id: 4, name: 'Karan Verma', email: 'karan@example.com', status: 'Active' },
    { id: 5, name: 'Priya Nair', email: 'priya@example.com', status: 'Inactive' },
    { id: 6, name: 'Rahul Singh', email: 'rahul@example.com', status: 'Active' },
    { id: 7, name: 'Neha Reddy', email: 'neha@example.com', status: 'Inactive' },
    { id: 8, name: 'Arjun Das', email: 'arjun@example.com', status: 'Active' },
    { id: 9, name: 'Meera Joshi', email: 'meera@example.com', status: 'Active' },
    { id: 10, name: 'Vikas Rao', email: 'vikas@example.com', status: 'Inactive' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredStudents = dummyStudents.filter((student) => {
    const matchesSearch = (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus = statusFilter === 'All' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const styles = {
    container: {
      backgroundColor: '#f9fafb',
      padding: '2rem',
      borderRadius: '12px',
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '1rem',
    },
    stats: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '1.5rem',
    },
    statBox: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      flex: 1,
    },
    controls: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    search: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #d1d5db',
      fontSize: '0.875rem',
      width: '60%',
    },
    select: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #d1d5db',
      fontSize: '0.875rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    th: {
      textAlign: 'left',
      padding: '1rem',
      backgroundColor: '#f3f4f6',
      borderBottom: '1px solid #e5e7eb',
    },
    td: {
      padding: '1rem',
      borderBottom: '1px solid #e5e7eb',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Manage Students</h2>

      <div style={styles.stats}>
        <div style={styles.statBox}>
          <h4>Total Students</h4>
          <p>{students.total}</p>
        </div>
        <div style={styles.statBox}>
          <h4>Active</h4>
          <p>{students.active}</p>
        </div>
        <div style={styles.statBox}>
          <h4>New</h4>
          <p>{students.new}</p>
        </div>
      </div>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.search}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={styles.select}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td style={styles.td}>{student.id}</td>
              <td style={styles.td}>{student.name}</td>
              <td style={styles.td}>{student.email}</td>
              <td style={styles.td}>
                <span
                  style={{
                    color: student.status === 'Active' ? '#10b981' : '#f59e0b',
                    fontWeight: 500,
                  }}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage_Students;