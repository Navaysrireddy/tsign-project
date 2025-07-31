import React, { useState } from 'react';

const Manage_Colleges = () => {
  const initialColleges = [
    { id: 1, name: 'ABC Institute of Technology', code: 'ABC123', location: 'Mumbai, Maharashtra', university: 'Mumbai University', status: 'Verified' },
    { id: 2, name: 'XYZ College of Arts', code: 'XYZ456', location: 'Pune, Maharashtra', university: 'Pune University', status: 'Pending' },
    { id: 3, name: 'National Engineering College', code: 'NEC789', location: 'Chennai, Tamil Nadu', university: 'Anna University', status: 'Verified' },
    { id: 4, name: 'Greenfield University', code: 'GFU321', location: 'Bangalore, Karnataka', university: 'Bangalore University', status: 'Pending' },
    { id: 5, name: 'Modern Law College', code: 'MLC654', location: 'Delhi', university: 'Delhi University', status: 'Rejected' },
    { id: 6, name: 'Hillside Polytechnic', code: 'HP987', location: 'Kochi, Kerala', university: 'Kerala Technological University', status: 'Hold' },
  ];

  const [colleges, setColleges] = useState(initialColleges);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusClick = (college) => {
    if (college.status === 'Pending') {
      setSelectedCollege(college);
    }
  };

  const handleVerify = () => {
    setColleges(colleges.map(c => c.id === selectedCollege.id ? { ...c, status: 'Verified' } : c));
    setSelectedCollege(null);
  };

  const handleDelete = () => {
    setColleges(colleges.filter(c => c.id !== selectedCollege.id));
    setSelectedCollege(null);
  };

  const filteredColleges = colleges.filter((c) => {
    const matchesStatus = filterStatus === 'All' || c.status === filterStatus;
    const matchesSearch = (
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.university.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="admin-colleges">
      <style>{`
        .admin-colleges {
          padding: 24px;
          background-color: #f9fafb;
          min-height: 100vh;
          font-family: sans-serif;
        }

        .admin-colleges h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
          color: #1f2937;
        }

        .filter-container,
        .search-container {
          margin-bottom: 16px;
        }

        .search-container label,
        .filter-container label {
          margin-right: 8px;
          font-weight: 500;
        }

        .search-input {
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid #d1d5db;
          width: 300px;
        }

        .college-table-container {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 16px;
        }

        .college-table-container h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .college-table {
          width: 100%;
          border-collapse: collapse;
        }

        .college-table th,
        .college-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
        }

        .status-Verified {
          background-color: #d1fae5;
          color: #065f46;
        }

        .status-Pending {
          background-color: #fef9c3;
          color: #92400e;
          cursor: pointer;
        }

        .status-Rejected {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .status-Hold {
          background-color: #e5e7eb;
          color: #374151;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-box {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          min-width: 300px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .modal-buttons {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }

        .modal-button {
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          color: white;
          font-weight: 500;
          cursor: pointer;
        }

        .modal-button.verify {
          background-color: #10b981;
        }

        .modal-button.delete {
          background-color: #ef4444;
        }

        .modal-button.cancel {
          background-color: #9ca3af;
        }
      `}</style>

      <h2>Manage Colleges</h2>

      <div className="filter-container">
        <label>Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Verified">Verified</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
          <option value="Hold">Hold</option>
        </select>
      </div>

      <div className="search-container">
        <label>Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, code, location, university..."
          className="search-input"
        />
      </div>

      <div className="college-table-container">
        <h4>College Details</h4>
        <table className="college-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Location</th>
              <th>University</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredColleges.map((college) => (
              <tr key={college.id}>
                <td>{college.name}</td>
                <td>{college.code}</td>
                <td>{college.location}</td>
                <td>{college.university}</td>
                <td>
                  <span
                    className={`status-badge status-${college.status}`}
                    onClick={() => handleStatusClick(college)}
                  >
                    {college.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCollege && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Pending Verification</h3>
            <p>Do you want to verify <strong>{selectedCollege.name}</strong>?</p>
            <div className="modal-buttons">
              <button className="modal-button verify" onClick={handleVerify}>Verify</button>
              <button className="modal-button delete" onClick={handleDelete}>Delete</button>
              <button className="modal-button cancel" onClick={() => setSelectedCollege(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manage_Colleges;