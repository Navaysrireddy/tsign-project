import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  BriefcaseIcon
} from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

const StatusCards = ({ darkMode, department }) => {
  // const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Department-wise data breakdown
  const departmentBreakdown = {
    'All': {
      totalStudents: {
        'Computer Science': 450,
        'Mechanical': 380,
        'Electrical': 320,
        'Engineering': 850
      },
      selectedStudents: {
        'Computer Science': 320,
        'Mechanical': 230,
        'Electrical': 190,
        'Engineering': 560
      },
      rejectedStudents: {
        'Computer Science': 50,
        'Mechanical': 70,
        'Electrical': 60,
        'Engineering': 120
      },
      placements: {
        'Computer Science': 322,
        'Mechanical': 179,
        'Electrical': 148,
        'Engineering': 202
      }
    }
  };

  const getDepartmentData = () => {
    switch (department) {
      case 'Computer Science':
        return {
          totalStudents:   450,
          selectedStudents: 320,
          rejectedStudents: 50,
          placements: 322,
          totalEvents: 12,
          workshops: 3,
          recruitments: 3
        };
      case 'Mechanical':
        return {
          totalStudents: 380,
          selectedStudents: 230,
          rejectedStudents: 70,
          placements: 179,
          totalEvents: 8,
          workshops: 2,
          recruitments: 2
        };
      case 'Electrical':
        return {
          totalStudents: 320,
          selectedStudents: 190,
          rejectedStudents: 60,
          placements: 148,
          totalEvents: 7,
          workshops: 2,
          recruitments: 1
        };
      case 'Engineering':
        return {
          totalStudents: 850,
          selectedStudents: 560,
          rejectedStudents: 120,
          placements: 202,
          totalEvents: 15,
          workshops: 4,
          recruitments: 5
        };
      default:
        return {
          totalStudents: 1200,
          selectedStudents: 750,
          rejectedStudents: 180,
          placements: 850,
          totalEvents: 25,
          workshops: 8,
          recruitments: 10
        };
    }
  };

  const data = getDepartmentData();
  
  const cards = [
    {
      title: 'Total Students',
      value: data.totalStudents,
      icon: UsersIcon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      darkBgColor: 'bg-blue-900/20',
      breakdown: departmentBreakdown['All'].totalStudents
    },
    {
      title: 'Selected Students',
      value: data.selectedStudents,
      icon: CheckCircleIcon,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      darkBgColor: 'bg-green-900/20',
      breakdown: departmentBreakdown['All'].selectedStudents
    },
    {
      title: 'Rejected Students',
      value: data.rejectedStudents,
      icon:XCircleIcon,
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      darkBgColor: 'bg-red-900/20',
      breakdown: departmentBreakdown['All'].rejectedStudents
    },
    {
      title: 'Placements',
      value: data.placements,
      icon: BriefcaseIcon,
      color: 'text-teal-500',
      bgColor: 'bg-teal-100',
      darkBgColor: 'bg-teal-900/20',
      breakdown: departmentBreakdown['All'].placements
    },
    // {
    //   title: 'Total Events',
    //   value: data.totalEvents,
    //   icon: UsersIcon, // You might want to use a different icon
    //   color: 'text-purple-500',
    //   bgColor: 'bg-purple-100',
    //   darkBgColor: 'bg-purple-900/20'
    // },
    // {
    //   title: 'Workshops',
    //   value: data.workshops,
    //   icon: UsersIcon, // You might want to use a different icon
    //   color: 'text-orange-500',
    //   bgColor: 'bg-orange-100',
    //   darkBgColor: 'bg-orange-900/20'
    // },
    // {
    //   title: 'Recruitments',
    //   value: data.recruitments,
    //   icon: BriefcaseIcon,
    //   color: 'text-indigo-500',
    //   bgColor: 'bg-indigo-100',
    //   darkBgColor: 'bg-indigo-900/20'
    // }
  ];

  const handleCardClick = (card) => {
    if (card.onClick) {
      card.onClick();
    } else {
      setSelectedCard(card);
      setShowPopup(true);
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div 
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`p-4 rounded-xl cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            onClick={() => handleCardClick(card)}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-full mr-3 ${darkMode ? card.darkBgColor : card.bgColor}`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1 pl-4">{card.value}</h3>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showPopup && selectedCard && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${darkMode ? 'bg-black/70' : 'bg-black/50'}`}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className={`relative rounded-xl p-6 max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
          >
            <button
              onClick={() => setShowPopup(false)}
              className={`absolute top-4 right-4 p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
            
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-lg mr-3 ${darkMode ? selectedCard.darkBgColor : selectedCard.bgColor}`}>
                <selectedCard.icon className={`h-6 w-6 ${selectedCard.color}`} />
              </div>
              <h3 className="text-xl font-bold">{selectedCard.title}</h3>
            </div>
            
            {department === 'All' ? (
              <div className="space-y-3">
                {Object.entries(selectedCard.breakdown || {}).map(([dept, value]) => (
                  <div key={dept} className="flex justify-between items-center">
                    <span className="text-gray-500">{dept}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-lg font-medium">{department} Department</p>
                <p className="text-2xl font-bold mt-2">{selectedCard.value}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default StatusCards;