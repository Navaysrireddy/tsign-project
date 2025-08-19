import React, { useEffect, useRef } from 'react';
import { XIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Modal = (props) => {
  const { isOpen, onClose, title, children } = props;
  const { theme } = useTheme();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className={`relative w-full max-w-md md:max-w-lg rounded-xl shadow-lg ${
          theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-gray-900'
        } p-6 max-h-[90vh] overflow-y-auto`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full ${
              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            } transition-colors`}
            aria-label="Close"
          >
            <XIcon size={20} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
