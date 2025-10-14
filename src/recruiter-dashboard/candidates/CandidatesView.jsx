import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, X } from 'lucide-react';

// Candidate Table Component
const CandidateTable = ({ candidates, onSelectCandidate, selectedCandidates }) => {
  return (
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Select</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id} className="border-b">
            <td className="p-2">
              <input
                type="checkbox"
                checked={selectedCandidates.includes(candidate.id)}
                onChange={() => onSelectCandidate(candidate.id)}
              />
            </td>
            <td className="p-2">{candidate.name}</td>
            <td className="p-2">{candidate.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Candidate Action Modal Component
const CandidateActionModal = ({ isOpen, onClose, candidateIds, action }) => {
  if (!isOpen) return null;

  const isBulk = Array.isArray(candidateIds) && candidateIds.length > 1;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-lg font-bold mb-4">
          {isBulk
            ? `${action} ${candidateIds.length} candidates`
            : `${action} candidate`}
        </h2>
        <p className="mb-4">
          {isBulk
            ? `Are you sure you want to ${action} these ${candidateIds.length} candidates?`
            : `Are you sure you want to ${action} this candidate?`}
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log(`Performing ${action} on`, candidateIds);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Main Component
const CandidatesView = () => {
  const [candidates] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
  ]);

  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const toggleCandidateSelection = (id) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const openActionModal = (action) => {
    if (selectedCandidates.length === 0) return;
    setModalAction(action);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>
      <CandidateTable
        candidates={candidates}
        onSelectCandidate={toggleCandidateSelection}
        selectedCandidates={selectedCandidates}
      />

      {/* Bulk Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => openActionModal('email')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Mail size={18} /> Email Selected
        </button>
        <button
          onClick={() => openActionModal('shortlist')}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Check size={18} /> Shortlist Selected
        </button>
        <button
          onClick={() => openActionModal('reject')}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          <X size={18} /> Reject Selected
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <CandidateActionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            candidateIds={selectedCandidates}
            action={modalAction}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CandidatesView;
