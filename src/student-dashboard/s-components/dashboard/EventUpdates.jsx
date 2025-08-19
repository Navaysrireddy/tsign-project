import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ArrowRightIcon } from 'lucide-react';
 
const EventUpdates = ({ setActiveSection }) => {
  const events = [
    {
      id: 1,
      title: 'Tech companies visiting campus',
      date: 'Jan 20, 2025',
      type: 'company',
      urgent: true
    },
    {
      id: 2,
      title: 'Workshop by Company X',
      date: 'Jan 25, 2025',
      type: 'workshop'
    },
    {
      id: 3,
      title: 'Job seminar: Career in AI',
      date: 'Feb 02, 2025',
      type: 'seminar'
    },
    {
      id: 4,
      title: 'Project review meeting',
      date: 'Feb 10, 2025',
      type: 'meeting'
    }
  ];
 
  const getTypeColor = (type) => {
    switch (type) {
      case 'company':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
      case 'workshop':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'seminar':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'meeting':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
    }
  };
 
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Event Updates</h3>
        <button
          onClick={() => setActiveSection('events')}
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium flex items-center"
        >
          View All
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
      {/* Marquee for urgent updates */}
      {events.some(event => event.urgent) && (
        <div className="mb-4 overflow-hidden bg-red-50 dark:bg-red-900/20 rounded-lg p-2">
          <div className="flex whitespace-nowrap animate-marquee">
            {events.filter(event => event.urgent).map(event => (
              <div key={`marquee-${event.id}`} className="mr-8 text-red-600 dark:text-red-400 font-medium flex items-center">
                <span className="mr-2">🔴</span>
                {event.title} - {event.date}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
        {events.map(event => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 mt-1">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-800 dark:text-white">{event.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.date}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(event.type)}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => setActiveSection('events')}
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                Register
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
 
export default EventUpdates;