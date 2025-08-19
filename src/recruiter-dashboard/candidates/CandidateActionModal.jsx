import React from 'react';
import { motion } from 'framer-motion';
import Modal  from '../ui/Modal';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { MailIcon, CheckIcon, XIcon, UserIcon, GraduationCapIcon, PhoneIcon, HomeIcon, ClockIcon } from 'lucide-react';
 
const CandidateActionModal = ({
  isOpen,
  onClose,
  candidateId,
  action
}) => {
  const { theme } = useTheme();
  const { data, updateCandidateStatus } = useData();
  const isDarkMode = theme === 'dark';
 
  if (!candidateId || !action) return null;
 
  const candidate = data.candidates.find(c => c.id === candidateId);
  if (!candidate) return null;
 
  const getTitle = () => {
    switch (action) {
      case 'email':
        return `Email ${candidate.name}`;
      case 'shortlist':
        return `Shortlist ${candidate.name}`;
      case 'reject':
        return `Reject ${candidate.name}`;
      default:
        return 'Candidate Action';
    }
  };
 
  const getIcon = () => {
    switch (action) {
      case 'email':
        return <MailIcon className="text-blue-500" size={20} />;
      case 'shortlist':
        return <CheckIcon className="text-green-500" size={20} />;
      case 'reject':
        return <XIcon className="text-red-500" size={20} />;
      default:
        return null;
    }
  };
 
  const handleAction = () => {
    if (action === 'shortlist') {
      updateCandidateStatus(candidateId, 'Selected');
    } else if (action === 'reject') {
      updateCandidateStatus(candidateId, 'Rejected');
    }
    onClose();
  };
 
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={getTitle()} size="md">
      <div className="space-y-6">
        {/* Candidate Info Card */}
        <div className={`rounded-xl p-5 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
          <div className="flex items-start gap-4">
            <div className={`h-16 w-16 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} flex items-center justify-center`}>
              <UserIcon size={32} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{candidate.name}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {candidate.dept} {candidate.course && `(${candidate.course})`}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <MailIcon size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className="text-sm">{candidate.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCapIcon size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className="text-sm">CGPA: {candidate.cgpa}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className="text-sm">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Action Content */}
        {action === 'email' && (
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Interview Invitation for Software Engineer Position"
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder={`Dear ${candidate.name},\n\nWe are pleased to invite you for an interview for the Software Engineer position at TechCorp.\n\nPlease let us know your availability for the coming week.\n\nBest regards,\nRecruiting Team`}
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              ></textarea>
            </div>
          </div>
        )}
 
        {action === 'shortlist' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-100 text-green-800">
              <CheckIcon size={20} />
              <p>
                You are about to shortlist {candidate.name} for the next round.
              </p>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="position">
                Position
              </label>
              <select
                id="position"
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              >
                <option value="">Select position</option>
                {data.positions.filter(p => p.status === 'Open' && p.dept === candidate.dept).map(position => (
                  <option key={position.id} value={position.id}>
                    {position.position}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="notes">
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Add any notes about why this candidate is being shortlisted..."
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="notify" className="rounded text-teal-500 focus:ring-teal-500" />
              <label htmlFor="notify" className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Send email notification to candidate
              </label>
            </div>
          </div>
        )}
 
        {action === 'reject' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-red-100 text-red-800">
              <XIcon size={20} />
              <p>You are about to reject {candidate.name}'s application.</p>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="reason">
                Reason for Rejection
              </label>
              <select
                id="reason"
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              >
                <option value="">Select reason</option>
                <option value="not_qualified">Not Qualified for Position</option>
                <option value="experience">Insufficient Experience</option>
                <option value="skills">Missing Required Skills</option>
                <option value="culture">Not a Cultural Fit</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="feedback">
                Feedback (Optional)
              </label>
              <textarea
                id="feedback"
                rows={3}
                placeholder="Add any specific feedback about why this candidate is being rejected..."
                className={`
                  w-full px-4 py-2 rounded-lg
                  ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                  border focus:outline-none focus:ring-2 focus:ring-teal-500
                `}
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="notify" className="rounded text-teal-500 focus:ring-teal-500" />
              <label htmlFor="notify" className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Send rejection email to candidate
              </label>
            </div>
          </div>
        )}
 
        {/* Timeline */}
        <div>
          <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Application Timeline
          </h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${isDarkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                  <CheckIcon size={14} />
                </div>
                <div className={`w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Application Received
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  15 Jul 2025, 10:23 AM
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${isDarkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                  <CheckIcon size={14} />
                </div>
                <div className={`w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Resume Screening
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  18 Jul 2025, 2:45 PM
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-6 w-6 rounded-full ${isDarkMode ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-600'} flex items-center justify-center`}>
                  <ClockIcon size={14} />
                </div>
              </div>
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Current Status: {candidate.status}
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  20 Jul 2025, 11:30 AM
                </p>
              </div>
            </div>
          </div>
        </div>
 
        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onClose}
            className={`
              px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
              transition-colors
            `}
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleAction}
            className={`
              px-4 py-2 rounded-lg flex items-center gap-2 text-white shadow-md
              ${action === 'email' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                action === 'shortlist' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                'bg-gradient-to-r from-red-500 to-rose-500'}
            `}
          >
            {getIcon()}
            <span>
              {action === 'email' ? 'Send Email' :
               action === 'shortlist' ? 'Confirm Shortlist' :
               'Confirm Rejection'}
            </span>
          </motion.button>
        </div>
      </div>
    </Modal>
  );
};
 
export default CandidateActionModal;
 