import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ClipboardListIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  AlertTriangleIcon,
  FilterIcon,
  XIcon,
  SearchIcon,
  ChevronLeft,
  ChevronRight,
  UploadCloud
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function formatDateTime(iso) {
  if (!iso) return 'N/A';
  const d = new Date(iso);
  return d.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}


function daysBetween(iso) {
  const a = new Date();
  const b = new Date(iso);
  // difference in ms
  const diff = b.setHours(0, 0, 0, 0) - a.setHours(0, 0, 0, 0);
  return Math.round(diff / (1000 * 60 * 60 * 24));
}


function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

const STATUS_META = {
  completed: {
    label: 'Completed',
    colorClass: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />
  },
  pending: {
    label: 'Pending',
    colorClass: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
    icon: <ClockIcon className="w-5 h-5 text-yellow-500" />
  },
  overdue: {
    label: 'Overdue',
    colorClass: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    icon: <XCircleIcon className="w-5 h-5 text-red-500" />
  },
  submitted: {
    label: 'Submitted',
    colorClass: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    icon: <AlertTriangleIcon className="w-5 h-5 text-blue-500" />
  },
  late: {
    label: 'Late',
    colorClass: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    icon: <XCircleIcon className="w-5 h-5 text-red-500" />
  }
};

const MOCK_ASSIGNMENTS = [
  {
    id: 'a1',
    title: 'Programming Assignment 1',
    course: 'CS101: Introduction to Programming',
    dueDate: '2025-01-20T23:59:00',
    status: 'completed',
    grade: '95',
    maxScore: 100,
    description: 'Implement a simple calculator program with basic arithmetic operations.',
    requirements: [
      'Program must be written in Python',
      'Include error handling for invalid inputs',
      'Submit via the portal as a .py file'
    ],
    link: 'https://example.com/assignment/a1',
    submission: {
      date: '2025-01-18T14:30:00',
      content: 'def calculator(a, b, operation):\n    # Implementation here\n    pass',
      feedback: 'Excellent work! Very well done.',
      file: null
    }
  },
  {
    id: 'a2',
    title: 'Data Structures Project',
    course: 'CS201: Data Structures',
    dueDate: '2025-01-25T23:59:00',
    status: 'pending',
    maxScore: 100,
    description: 'Implement a binary search tree with insert, delete, and search operations.',
    requirements: [
      'Implementation must be in C++ or Java',
      'Include time complexity analysis for each operation'
    ],
    link: 'https://example.com/assignment/a2',
    submission: null
  },
  {
    id: 'a3',
    title: 'Database Design',
    course: 'CS301: Database Systems',
    dueDate: '2025-02-01T23:59:00',
    status: 'submitted',
    grade: '88',
    maxScore: 100,
    description: 'Design an ER diagram and convert it to relational schema.',
    requirements: [
      'Use any database design tool',
      'Provide normalized schema up to 3NF',
      'Include sample SQL queries'
    ],
    link: 'https://example.com/assignment/a3',
    submission: {
      date: '2025-01-30T19:45:00',
      content: 'ER diagram and relational schema PDF (uploaded).',
      feedback: 'Good job, but consider optimizing foreign key usage.',
      file: 'https://example.com/uploads/a3.pdf'
    }
  },
  {
    id: 'a4',
    title: 'Web Development Mini Project',
    course: 'CS401: Web Technologies',
    dueDate: '2025-02-05T23:59:00',
    status: 'pending',
    maxScore: 50,
    description: 'Create a responsive personal portfolio website.',
    requirements: [
      'Must use HTML, CSS, and JavaScript',
      'Include at least 3 sections: About, Projects, Contact',
      'Deploy to GitHub Pages or Netlify'
    ],
    link: 'https://example.com/assignment/a4',
    submission: null
  },
  {
    id: 'a5',
    title: 'Machine Learning Assignment',
    course: 'CS501: Introduction to Machine Learning',
    dueDate: '2025-02-10T23:59:00',
    status: 'completed',
    grade: '91',
    maxScore: 100,
    description: 'Build a linear regression model to predict house prices.',
    requirements: [
      'Use Python with scikit-learn',
      'Dataset should have at least 1000 records',
      'Include RMSE and R² evaluation metrics'
    ],
    link: 'https://example.com/assignment/a5',
    submission: {
      date: '2025-02-08T16:10:00',
      content: 'Jupyter Notebook with code and analysis',
      feedback: 'Well implemented, but feature scaling could improve results.',
      file: null
    }
  },
  {
    id: 'a6',
    title: 'Cybersecurity Report',
    course: 'CS601: Cybersecurity Fundamentals',
    dueDate: '2025-02-15T23:59:00',
    status: 'pending',
    maxScore: 75,
    description: 'Write a research report on common web application vulnerabilities.',
    requirements: [
      'Minimum 2000 words',
      'Include at least 5 recent case studies',
      'Provide mitigation strategies'
    ],
    link: 'https://example.com/assignment/a6',
    submission: null
  },
  {
    id: 'a7',
    title: 'Operating Systems Lab',
    course: 'CS302: Operating Systems',
    dueDate: '2025-02-18T23:59:00',
    status: 'submitted',
    grade: '85',
    maxScore: 100,
    description: 'Implement process scheduling algorithms and compare their performance.',
    requirements: [
      'Implement FCFS, SJF, and Round Robin',
      'Provide Gantt charts for each algorithm'
    ],
    link: 'https://example.com/assignment/a7',
    submission: {
      date: '2025-02-17T20:15:00',
      content: 'C code for process scheduling algorithms',
      feedback: 'Good work but Round Robin implementation could be more efficient.',
      file: null
    }
  },
  {
    id: 'a8',
    title: 'Cloud Computing Practical',
    course: 'CS702: Cloud Computing',
    dueDate: '2025-02-20T23:59:00',
    status: 'pending',
    maxScore: 50,
    description: 'Deploy a web application on AWS EC2 and configure auto-scaling.',
    requirements: [
      'Use AWS EC2 and S3',
      'Include setup documentation with screenshots'
    ],
    link: 'https://example.com/assignment/a8',
    submission: null
  },
  {
    id: 'a9',
    title: 'Software Engineering Case Study',
    course: 'CS402: Software Engineering',
    dueDate: '2025-02-22T23:59:00',
    status: 'completed',
    grade: '92',
    maxScore: 100,
    description: 'Analyze a software project lifecycle and prepare a case study.',
    requirements: [
      'Choose a real-world project',
      'Document all SDLC phases',
      'Provide diagrams and models'
    ],
    link: 'https://example.com/assignment/a9',
    submission: {
      date: '2025-02-20T15:05:00',
      content: 'Case study document PDF',
      feedback: 'Well-researched and structured. Good job.',
      file: null
    }
  },
  {
    id: 'a10',
    title: 'Computer Networks Simulation',
    course: 'CS502: Computer Networks',
    dueDate: '2025-02-25T23:59:00',
    status: 'pending',
    maxScore: 80,
    description: 'Simulate a small network topology and test data transfer rates.',
    requirements: [
      'Use Cisco Packet Tracer or GNS3',
      'Simulate at least 5 connected devices',
      'Measure latency and throughput'
    ],
    link: 'https://example.com/assignment/a10',
    submission: null
  },
  {
    id: 'a11',
    title: 'AI Chatbot Project',
    course: 'CS602: Artificial Intelligence',
    dueDate: '2025-03-01T23:59:00',
    status: 'submitted',
    grade: '89',
    maxScore: 100,
    description: 'Develop a simple AI chatbot that can answer predefined queries.',
    requirements: [
      'Use Python or JavaScript',
      'Include NLP preprocessing',
      'Deploy on a cloud platform'
    ],
    link: 'https://example.com/assignment/a11',
    submission: {
      date: '2025-02-28T18:00:00',
      content: 'Chatbot source code and documentation',
      feedback: 'Good performance, but add more conversational flows.',
      file: null
    }
  },
  {
    id: 'a12',
    title: 'Final Year Capstone Proposal',
    course: 'CS999: Capstone Project',
    dueDate: '2025-03-10T23:59:00',
    status: 'pending',
    maxScore: 150,
    description: 'Submit a proposal for your final year project including objectives and methodology.',
    requirements: [
      'Include project abstract, scope, and timeline',
      'Clearly define deliverables',
      'Get faculty approval before submission'
    ],
    link: 'https://example.com/assignment/a12',
    submission: null
  },
  // Additional items to increase list length and variation
  {
    id: 'a13',
    title: 'Discrete Math Proofs',
    course: 'CS110: Discrete Mathematics',
    dueDate: '2025-03-15T23:59:00',
    status: 'pending',
    description: 'Write proofs for selected problems from the textbook.',
    requirements: ['Use clear notation', 'Explain each step'],
    link: 'https://example.com/assignment/a13',
    submission: null
  },
  {
    id: 'a14',
    title: 'Graphics Mini-Project',
    course: 'CS450: Computer Graphics',
    dueDate: '2025-03-20T23:59:00',
    status: 'pending',
    description: 'Create a simple 2D rendering engine demo.',
    requirements: ['Implement transformations', 'Rasterization basics'],
    link: 'https://example.com/assignment/a14',
    submission: null
  },
  {
    id: 'a15',
    title: 'Parallel Computing Report',
    course: 'CS640: Parallel Computing',
    dueDate: '2025-03-25T23:59:00',
    status: 'pending',
    description: 'Compare different parallel programming models.',
    requirements: ['MPI vs OpenMP', 'Benchmarks included'],
    link: 'https://example.com/assignment/a15',
    submission: null
  },
  {
    id: 'a16',
    title: 'Human-Computer Interaction Study',
    course: 'CS330: HCI',
    dueDate: '2025-04-01T23:59:00',
    status: 'pending',
    description: 'Conduct a small usability study and report findings.',
    requirements: ['At least 5 participants', 'Informed consent'],
    link: 'https://example.com/assignment/a16',
    submission: null
  }
];
const Assignments = () => {

  // master list (starts with mock data)
  const [assignments, setAssignments] = useState(() => {
    // create a copy so we can mutate safely later (upload)
    return MOCK_ASSIGNMENTS.map((a) => ({ ...a }));
  });

  // UI state
  const [filter, setFilter] = useState('all'); // all / pending / completed / submitted / overdue / late
  const [sortBy, setSortBy] = useState('dueDate'); // dueDate or course or title
  const [sortOrder, setSortOrder] = useState('asc'); // asc / desc
  const [query, setQuery] = useState(''); // search query
  const [page, setPage] = useState(1); // pagination current page
  const [perPage, setPerPage] = useState(6); // items per page
  const [showOnlyDueSoon, setShowOnlyDueSoon] = useState(false); // toggle to show due soon (7 days)
  const [editingSubmission, setEditingSubmission] = useState(null); // { assignmentId, text, file }

  // modal state: modal shows submission preview / upload UI and ties to a selected assignment
  const [modalAssignmentId, setModalAssignmentId] = useState(null);
  const modalAssignment = assignments.find((a) => a.id === modalAssignmentId) || null;

  // refs for closing modal on outside click
  const modalOverlayRef = useRef(null);

  // derive total pages from filtered list later
  const totalFiltered = useRef(0);

  // apply search + filter + due-soon in a useMemo to avoid recomputing unnecessarily
  const filteredSorted = useMemo(() => {
    // start with assignments array
    let list = assignments.slice();

    // search filter (by title, course, description)
    if (query && query.trim() !== '') {
      const q = query.trim().toLowerCase();
      list = list.filter((a) => {
        return (
          (a.title && a.title.toLowerCase().includes(q)) ||
          (a.course && a.course.toLowerCase().includes(q)) ||
          (a.description && a.description.toLowerCase().includes(q))
        );
      });
    }

    // status filter
    if (filter && filter !== 'all') {
      // treat 'overdue' specially based on dueDate
      if (filter === 'overdue') {
        list = list.filter((a) => {
          if (!a.dueDate) return false;
          const days = daysBetween(a.dueDate);
          // due in past and not completed/submitted
          return days < 0 && !['completed', 'submitted'].includes(a.status);
        });
      } else {
        list = list.filter((a) => a.status === filter);
      }
    }

    // due soon toggle (within 7 days)
    if (showOnlyDueSoon) {
      list = list.filter((a) => {
        if (!a.dueDate) return false;
        const d = daysBetween(a.dueDate);
        return d >= 0 && d <= 7;
      });
    }

    // sorting
    list.sort((a, b) => {
      if (sortBy === 'dueDate') {
        const da = a.dueDate ? new Date(a.dueDate).getTime() : 0;
        const db = b.dueDate ? new Date(b.dueDate).getTime() : 0;
        return sortOrder === 'asc' ? da - db : db - da;
      }
      if (sortBy === 'course') {
        return sortOrder === 'asc'
          ? (a.course || '').localeCompare(b.course || '')
          : (b.course || '').localeCompare(a.course || '');
      }
      // title fallback
      return sortOrder === 'asc'
        ? (a.title || '').localeCompare(b.title || '')
        : (b.title || '').localeCompare(a.title || '');
    });

    totalFiltered.current = list.length;
    return list;
  }, [assignments, query, filter, sortBy, sortOrder, showOnlyDueSoon]);

  // pagination: compute data for current page
  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return filteredSorted.slice(start, end);
  }, [filteredSorted, page, perPage]);

  // ensure page is in range
  useEffect(() => {
    const pages = Math.max(1, Math.ceil(totalFiltered.current / perPage || 1));
    if (page > pages) setPage(1);
  }, [perPage, filteredSorted, page]);

  // open modal for assignment id
  function openModalFor(id) {
    setModalAssignmentId(id);
    // populate editingSubmission with current assignment submission (if exists)
    const a = assignments.find((x) => x.id === id);
    setEditingSubmission({
      assignmentId: id,
      text: a?.submission?.content || '',
      file: a?.submission?.file || null,
      fileObject: null // used when user uploads a file locally (object URL)
    });
  }

  // close modal
  function closeModal() {
    // revoke any created object URLs to avoid memory leaks
    if (editingSubmission?.fileObject) {
      URL.revokeObjectURL(editingSubmission.fileObject);
    }
    setModalAssignmentId(null);
    setEditingSubmission(null);
  }

  // handle outside click on overlay (close modal)
  function handleOverlayClick(e) {
    if (e.target === modalOverlayRef.current) {
      closeModal();
    }
  }

  // handle ESC key to close modal
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line 
  }, [editingSubmission]);

  // handle submission save (in-memory)
  function saveSubmission({ assignmentId, text, fileObjectUrl, fileName }) {
    setAssignments((prev) =>
      prev.map((a) => {
        if (a.id !== assignmentId) return a;
        const newSubmission = {
          date: new Date().toISOString(),
          content: text,
          feedback: null,
          file: fileObjectUrl ? { url: fileObjectUrl, name: fileName } : a.submission?.file || null
        };
        return {
          ...a,
          submission: newSubmission,
          status: 'submitted'
        };
      })
    );
    // close modal after saving
    closeModal();
  }

  // handle file selection for upload in modal
  function handleFileSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    // create object URL for immediate download/view
    const url = URL.createObjectURL(file);
    // revoke previous if exists
    if (editingSubmission?.fileObject) {
      URL.revokeObjectURL(editingSubmission.fileObject);
    }
    setEditingSubmission((prev) => ({ ...prev, fileObject: url, fileName: file.name }));
  }

  // handle removing uploaded file before save
  function removeUploadedFile() {
    if (editingSubmission?.fileObject) {
      URL.revokeObjectURL(editingSubmission.fileObject);
    }
    setEditingSubmission((prev) => ({ ...prev, fileObject: null, fileName: null }));
  }

  // quick helpers for UI
  function toggleSort(field) {
    if (sortBy === field) {
      setSortOrder((s) => (s === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
    setPage(1);
  }

  const StatusBadge = ({ status }) => {
    const meta = STATUS_META[status] || {
      label: status || 'Unknown',
      colorClass: 'bg-gray-100 text-gray-700',
      icon: <ClipboardListIcon className="w-5 h-5 text-gray-500" />
    };
    return (
      <span className={`text-xs px-2 py-1 rounded-full flex items-center ${meta.colorClass}`}>
        {meta.icon}
        <span className="ml-1 capitalize">{meta.label}</span>
      </span>
    );
  };

  const AssignmentCard = ({ assignment }) => {
    const {
      id,
      title,
      course,
      dueDate,
      status,
      grade,
      maxScore,
      description,
      requirements,
      link
    } = assignment;

    const [showDetails, setShowDetails] = useState(false);

    // compute due state
    const days = dueDate ? daysBetween(dueDate) : null;
    const isOverdue = days !== null && days < 0 && !['completed', 'submitted'].includes(status);
    const isDueSoon = days !== null && days >= 0 && days <= 7;

    // card hover lift animation uses framer-motion
    return (
      <motion.article
        layout
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
      >
        {/* header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 mt-1">
              <ClipboardListIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{course}</p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div>
              <StatusBadge status={status} />
            </div>
            {isOverdue && (
              <div className="text-xs text-red-600 dark:text-red-400">Overdue</div>
            )}
            {isDueSoon && !isOverdue && (
              <div className="text-xs text-yellow-600 dark:text-yellow-400">Due soon</div>
            )}
          </div>
        </div>

        {/* body: due date and grade */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Due Date:</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {dueDate ? formatDateTime(dueDate) : 'No due date'}
            </p>
          </div>
          {grade && (
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Grade:</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {grade}/{maxScore}
              </p>
            </div>
          )}
        </div>

        {/* actions */}
        <div className="mt-6 flex justify-end space-x-2">
          {!showDetails && (
            <button
              onClick={() => setShowDetails(true)}
              className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              View Details
            </button>
          )}

          <button
            onClick={() => {
              // if completed/submitted -> open modal to view submission
              if (status === 'completed' || status === 'submitted') {
                openModalFor(id);
                return;
              }
              // otherwise just open link (start assignment)
              if (link) window.open(link, '_blank');
            }}
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
          >
            {status === 'completed' || status === 'submitted'
              ? 'View Submission'
              : 'Start Assignment'}
          </button>
        </div>

        {/* details collapsible */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            {description && (
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Description</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            )}

            {requirements && requirements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Hide Details
              </button>
            </div>
          </motion.div>
        )}
      </motion.article>
    );
  };

  /* ---------------------------------------------------------------------- */
  /* ------------------------------- Render -------------------------------- */
  /* ---------------------------------------------------------------------- */

  return (
    <div className="p-6">
      {/* top controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Assignments</h1>

          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2">
            <SearchIcon className="w-4 h-4 text-gray-400 mx-2" />
            <input
              placeholder="Search by title, course, or description..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              className="bg-transparent px-2 py-2 outline-none text-sm w-80 dark:text-gray-200"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  setPage(1);
                }}
                className="text-gray-400 px-2"
                aria-label="Clear search"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* due soon toggle */}
          <label className="inline-flex items-center space-x-2 px-2 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <input
              type="checkbox"
              checked={showOnlyDueSoon}
              onChange={() => {
                setShowOnlyDueSoon((s) => !s);
                setPage(1);
              }}
              className="form-checkbox"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">Due in 7 days</span>
          </label>

          {/* sort button */}
          <button
            onClick={() => toggleSort('dueDate')}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
          >
            <FilterIcon className="w-4 h-4" />
            <span>Sort: {sortBy === 'dueDate' ? 'Due Date' : sortBy === 'course' ? 'Course' : 'Title'}</span>
          </button>

          {/* per page */}
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="px-3 py-1.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm"
          >
            <option value={4}>4 / page</option>
            <option value={6}>6 / page</option>
            <option value={9}>9 / page</option>
            <option value={12}>12 / page</option>
          </select>
        </div>
      </div>

      {/* filter chips */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {['all', 'pending', 'submitted', 'completed', 'overdue', 'late'].map((f) => {
          const isActive = filter === f;
          let activeClasses = isActive ? 'ring-2 ring-offset-1' : '';
          return (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? f === 'pending'
                    ? 'bg-yellow-100 text-yellow-600'
                    : f === 'completed'
                    ? 'bg-green-100 text-green-600'
                    : f === 'overdue'
                    ? 'bg-red-100 text-red-600'
                    : f === 'submitted'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-800'
                  : 'text-gray-600 hover:bg-gray-100'
              } ${activeClasses}`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          );
        })}
      </div>

      {/* grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {paginated.map((assignment) => (
            <motion.div key={assignment.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AssignmentCard assignment={assignment} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* empty state */}
      {filteredSorted.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No assignments found.</p>
          <button
            onClick={() => {
              setFilter('all');
              setQuery('');
              setShowOnlyDueSoon(false);
            }}
            className="mt-3 text-blue-500"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* pagination controls */}
      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {filteredSorted.length === 0 ? 0 : (page - 1) * perPage + 1} -
          {Math.min(page * perPage, filteredSorted.length)} of {filteredSorted.length} assignments
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => clamp(p - 1, 1, Math.ceil(filteredSorted.length / perPage) || 1))}
            className="px-3 py-1.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            disabled={page === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm">
            Page {page} / {Math.max(1, Math.ceil(filteredSorted.length / perPage) || 1)}
          </div>
          <button
            onClick={() =>
              setPage((p) =>
                clamp(p + 1, 1, Math.max(1, Math.ceil(filteredSorted.length / perPage) || 1))
              )
            }
            className="px-3 py-1.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            disabled={page === Math.max(1, Math.ceil(filteredSorted.length / perPage) || 1)}
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ------------------------------ Modal ------------------------------ */}
      <AnimatePresence>
        {modalAssignment && (
          <motion.div
            key="submission-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleOverlayClick}
            ref={modalOverlayRef}
            style={{ background: 'rgba(0,0,0,0.5)' }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-3xl w-full mx-4 shadow-lg relative"
              onClick={(e) => e.stopPropagation()} // prevent click from bubbling to overlay
            >
              {/* close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>

              {/* modal header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {modalAssignment.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{modalAssignment.course}</p>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Due</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {modalAssignment.dueDate ? formatDateTime(modalAssignment.dueDate) : 'No due date'}
                  </div>
                </div>
              </div>

              <hr className="my-4 border-gray-200 dark:border-gray-700" />

              {/* conditional content: if submission exists show details, otherwise show upload UI */}
              <div>
                {modalAssignment.submission ? (
                  // show submission details (read-only)
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Submitted on: {formatDateTime(modalAssignment.submission.date)}
                    </div>

                    <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {modalAssignment.submission.content}
                    </pre>

                    {/* feedback */}
                    {modalAssignment.submission.feedback && (
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Feedback</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {modalAssignment.submission.feedback}
                        </p>
                      </div>
                    )}

                    {/* file download if present */}
                    {modalAssignment.submission.file && (
                      <div>
                        <a
                          href={
                            typeof modalAssignment.submission.file === 'string'
                              ? modalAssignment.submission.file
                              : modalAssignment.submission.file.url
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                        >
                          <UploadCloud className="w-4 h-4" />
                          <span>
                            Download{' '}
                            {modalAssignment.submission.file.name
                              ? `(${modalAssignment.submission.file.name})`
                              : ''}
                          </span>
                        </a>
                      </div>
                    )}

                    {/* edit submission button: let user re-submit / update */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => openModalFor(modalAssignment.id) || setModalAssignmentId(modalAssignment.id)}
                        className="px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700"
                        style={{ display: 'none' }}
                      >
                        {/* placeholder (hidden) so UX doesn't confuse — we will instead show an "Update submission" below */}
                      </button>
                      <button
                        onClick={() => {
                          // open upload/edit UI: set editingSubmission to existing content
                          setEditingSubmission({
                            assignmentId: modalAssignment.id,
                            text: modalAssignment.submission.content || '',
                            file: modalAssignment.submission.file || null,
                            fileObject: null,
                            fileName: modalAssignment.submission.file?.name || null
                          });
                        }}
                        // className="px-3 py-1.5 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                      >
                      
                      </button>
                    </div>
                  </div>
                ) : (
                  // upload / create submission UI
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Start / Submit Assignment</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        You can start working on this assignment here. When ready upload any supporting file
                        and submit.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Your Work</label>
                      <textarea
                        value={editingSubmission?.text || ''}
                        onChange={(e) =>
                          setEditingSubmission((prev) => ({ ...prev, text: e.target.value }))
                        }
                        placeholder="Enter your work or notes here..."
                        className="w-full min-h-[120px] p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Attach File</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          onChange={handleFileSelect}
                          className="text-sm text-gray-600 dark:text-gray-300"
                        />
                        {editingSubmission?.fileObject && (
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Selected: {editingSubmission.fileName}
                            <button
                              onClick={removeUploadedFile}
                              className="ml-3 px-2 py-1 text-xs bg-gray-200 rounded-md"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => {
                          closeModal();
                        }}
                        className="px-3 py-1.5 rounded-md bg-gray-200"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          // validate then save
                          if (!editingSubmission) return;
                          const { assignmentId, text, fileObject } = editingSubmission;
                          // If fileObject is present, pass that url; else if fileName exists but no object (means previously saved file URL) handle accordingly
                          const fileUrl = fileObject || (editingSubmission.file && editingSubmission.file.url) || null;
                          saveSubmission({
                            assignmentId,
                            text,
                            fileObjectUrl: fileUrl,
                            fileName: editingSubmission.fileName || editingSubmission.file?.name || null
                          });
                        }}
                        className="px-3 py-1.5 rounded-md bg-blue-600 text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assignments;
