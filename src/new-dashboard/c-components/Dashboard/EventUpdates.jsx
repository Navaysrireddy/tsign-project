import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, TagIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const EventUpdates = ({ darkMode, department }) => {
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Sample event data with image path and registration link
  const allEvents = [
  {
    id: 1,
    title: 'Google Tech Recruitment Drive',
    date: 'Jan 20, 2025',
    location: 'Main Auditorium',
    description: "Google is visiting our campus for recruitment. Don't miss this opportunity!",
    departments: ['Computer Science', 'Engineering'],
    urgent: true,
    isPast: false,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: 'https://careers.google.com/jobs/results'
  },
  {
    id: 2,
    title: 'AI Workshop by Microsoft',
    date: 'Jan 25, 2025',
    location: 'Computer Science Building',
    description: 'Learn the fundamentals of AI in this hands-on workshop.',
    departments: ['Computer Science'],
    urgent: false,
    isPast: false,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: 'https://www.microsoft.com/ai/workshops'
  },
  {
    id: 3,
    title: 'Career in Artificial Intelligence',
    date: 'Feb 2, 2025',
    location: 'Conference Hall',
    description: 'Industry experts discuss career paths in AI.',
    departments: ['All'],
    urgent: false,
    isPast: false,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: ''
  },
  {
    id: 4,
    title: 'Annual Tech Symposium 2024',
    date: 'Nov 15, 2024',
    location: 'Engineering Block',
    description: 'Annual symposium featuring projects and lectures.',
    departments: ['Engineering', 'Computer Science', 'Mechanical', 'Electrical'],
    urgent: false,
    isPast: true,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: ''
  },
  {
    id: 5,
    title: 'Mechanical Design Competition 2024',
    date: 'Oct 10, 2024',
    location: 'Mechanical Engineering Department',
    description: 'Students showcased mechanical design skills.',
    departments: ['Mechanical'],
    urgent: false,
    isPast: true,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: ''
  },
  {
    id: 6,
    title: 'Electrical Systems Exhibition 2024',
    date: 'Sep 5, 2024',
    location: 'Electrical Engineering Labs',
    description: 'Exhibition of electrical systems and technologies.',
    departments: ['Electrical'],
    urgent: false,
    isPast: true,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: ''
  },
  {
    id: 7,
    title: 'Hackathon 2024',
    date: 'Aug 15, 2024',
    location: 'Innovation Center',
    description: '24-hour coding competition with real-world problems.',
    departments: ['Computer Science', 'Engineering'],
    urgent: false,
    isPast: true,
    image: 'https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg',
    registrationLink: ''
  },
];


  const filteredEvents = allEvents.filter(event =>
    (department === 'All' || event.departments.includes('All') || event.departments.includes(department)) &&
    event.isPast === showPastEvents
  );

  // Filter urgent events
  const urgentEvents = filteredEvents.filter(e => e.urgent);

  // Motion variants for animation
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Toggle Upcoming/Past */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {showPastEvents ? 'Past Events' : 'Upcoming Events'}
        </h2>
        <button
          onClick={() => setShowPastEvents(!showPastEvents)}
          className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {showPastEvents ? (
            <>
              <ChevronLeftIcon className="h-4 w-4 mr-1" />
              View Upcoming Events
            </>
          ) : (
            <>
              View Past Events
              <ChevronRightIcon className="h-4 w-4 ml-1" />
            </>
          )}
        </button>
      </div>

      {/* Urgent events bar */}
      {urgentEvents.length > 0 && !showPastEvents && (
        <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'} border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
          <div className="whitespace-nowrap overflow-hidden">
            <div className="animate-marquee inline-block">
              <span className="text-red-500 font-medium">
                Urgent: {urgentEvents.map(e => e.title).join(' | ')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Event list */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No {showPastEvents ? 'past' : 'upcoming'} events found for {department} department.
          </p>
        </div>
      ) : (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 max-h-80 overflow-y-auto pr-2">
          {filteredEvents.map(event => (
            <motion.div key={event.id} variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }} className={`rounded-xl backdrop-blur-md overflow-hidden border ${darkMode ? 'bg-gray-700/30 border-gray-600' : 'bg-white/70 border-gray-200'}`}>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-sm">
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{event.departments.join(', ')}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                <div className="mt-3 flex justify-end">
                  {showPastEvents ? (
                    <div className="text-sm text-gray-500 italic">This event has concluded</div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => event.registrationLink && window.open(event.registrationLink, '_blank')}
                      disabled={!event.registrationLink}
                      className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Register 
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default EventUpdates;
