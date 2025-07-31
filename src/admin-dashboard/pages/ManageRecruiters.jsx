import React, { useState, useEffect } from 'react';
import './ManageRecruiters.css';

const mockRecruiters = [
  { id: 1, name: 'TCS', status: 'Active', email: 'hr@tcs.com', industry: 'IT Services' },
  { id: 2, name: 'Infosys', status: 'Pending', email: 'careers@infosys.com', industry: 'Consulting' },
  { id: 3, name: 'Amazon', status: 'Active', email: 'jobs@amazon.com', industry: 'E-commerce' },
  { id: 4, name: 'Wipro', status: 'Hold', email: 'wipro@wipro.com', industry: 'Technology' },
  { id: 5, name: 'Capgemini', status: 'Rejected', email: 'recruit@capgemini.com', industry: 'Software' },
  { id: 6, name: 'Google', status: 'New', email: 'google@google.com', industry: 'Tech' },
  { id: 7, name: 'Microsoft', status: 'Pending', email: 'microsoft@ms.com', industry: 'Software' },
  { id: 8, name: 'Facebook', status: 'Hold', email: 'hr@facebook.com', industry: 'Social Media' },
  { id: 9, name: 'Accenture', status: 'Active', email: 'jobs@accenture.com', industry: 'Consulting' },
  { id: 10, name: 'Oracle', status: 'Rejected', email: 'oracle@oracle.com', industry: 'Cloud' },
  { id: 11, name: 'HCL', status: 'Active', email: 'hcl@hcl.com', industry: 'IT Services' },
  { id: 12, name: 'Adobe', status: 'New', email: 'adobe@adobe.com', industry: 'Design' },
  { id: 13, name: 'Salesforce', status: 'Active', email: 'careers@salesforce.com', industry: 'CRM' },
  { id: 14, name: 'Netflix', status: 'Hold', email: 'jobs@netflix.com', industry: 'Entertainment' },
  { id: 15, name: 'Zoho', status: 'Pending', email: 'hr@zoho.com', industry: 'Software' },
  { id: 16, name: 'Deloitte', status: 'New', email: 'deloitte@jobs.com', industry: 'Finance' },
];


const ManageRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState({ type: '', recruiter: null });

  useEffect(() => {
    setRecruiters(mockRecruiters);
  }, []);

  const handleFilter = (status) => {
    setFilter(status);
  };

  const openModal = (type, recruiter) => {
    setModal({ type, recruiter });
  };

  const closeModal = () => {
    setModal({ type: '', recruiter: null });
  };

  const handleVerify = (id) => {
    setRecruiters(prev =>
      prev.map(r => r.id === id ? { ...r, status: 'Active' } : r)
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setRecruiters(prev => prev.filter(r => r.id !== id));
    closeModal();
  };

  const filteredRecruiters =
    filter === 'All' ? recruiters : recruiters.filter(r => r.status === filter);

  return (
    <div className="recruiters-container">
      <h1 className="title">Manage Recruiters</h1>

      <div className="filter-buttons">
        {['All', 'Active', 'Pending', 'Hold', 'Rejected', 'New'].map(status => (
          <button
            key={status}
            onClick={() => handleFilter(status)}
            className={filter === status ? 'btn active' : 'btn'}
          >
            {status}
          </button>
        ))}
      </div>

      <table className="recruiters-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Industry</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecruiters.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.industry}</td>
              <td><span className={`badge ${r.status.toLowerCase()}`}>{r.status}</span></td>
              <td>
                <button onClick={() => openModal('view', r)}>View</button>
                <button onClick={() => openModal('verify', r)}>Verify</button>
                <button onClick={() => openModal('delete', r)}>Delete</button>
              </td>
            </tr>
          ))}

          {filteredRecruiters.length === 0 && (
            <tr>
              <td colSpan="5">No recruiters found for {filter} status.</td>
            </tr>
          )}
        </tbody>
      </table>

      {modal.recruiter && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>×</button>

            {modal.type === 'view' && (
              <>
                <h2>Recruiter Details</h2>
                <p><strong>Name:</strong> {modal.recruiter.name}</p>
                <p><strong>Email:</strong> {modal.recruiter.email}</p>
                <p><strong>Industry:</strong> {modal.recruiter.industry}</p>
                <p><strong>Status:</strong> {modal.recruiter.status}</p>
              </>
            )}

            {modal.type === 'verify' && (
              <>
                <h2>Verify Recruiter</h2>
                <p>Are you sure you want to verify <strong>{modal.recruiter.name}</strong>?</p>
                <div className="modal-actions">
                  <button onClick={closeModal}>Cancel</button>
                  <button onClick={() => handleVerify(modal.recruiter.id)}>Confirm</button>
                </div>
              </>
            )}

            {modal.type === 'delete' && (
              <>
                <h2>Delete Recruiter</h2>
                <p>Are you sure you want to delete <strong>{modal.recruiter.name}</strong>?</p>
                <div className="modal-actions">
                  <button onClick={closeModal}>Cancel</button>
                  <button onClick={() => handleDelete(modal.recruiter.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRecruiters;