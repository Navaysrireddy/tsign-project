import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const EventsCalendar = ({
  darkMode,
  events
}) => {
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = January
  const [currentYear, setCurrentYear] = useState(2025);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  // Create calendar grid
  const calendarDays = [];
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  // Find events for each day
  const getEventsForDay = (day) => {
  const monthName = months[currentMonth];
  // Removed dayStr as it's not used
  return events.filter(event => {
    const [monthShort, eventDay] = event.date.split(' ');
    const eventDayNum = parseInt(eventDay, 10);
    return monthShort === monthName.substring(0, 3) && eventDayNum === day;
  });
};

  // Get color for event category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Workshop':
        return darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-100 border-green-300';
      case 'Conference':
        return darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-100 border-blue-300';
      case 'Recruitment':
        return darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-100 border-purple-300';
      case 'Competition':
        return darkMode ? 'bg-orange-900/30 border-orange-700' : 'bg-orange-100 border-orange-300';
      case 'Seminar':
        return darkMode ? 'bg-teal-900/30 border-teal-700' : 'bg-teal-100 border-teal-300';
      case 'Exhibition':
        return darkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-100 border-yellow-300';
      case 'Networking':
        return darkMode ? 'bg-pink-900/30 border-pink-700' : 'bg-pink-100 border-pink-300';
      default:
        return darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300';
    }
  };
  return <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{`${months[currentMonth]} ${currentYear}`}</h3>
        <div className="flex space-x-2">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={previousMonth} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <ChevronLeftIcon className="h-5 w-5" />
          </motion.button>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={nextMonth} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <ChevronRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => <div key={day} className="text-center text-sm font-medium py-2">
            {day}
          </div>)}
        {calendarDays.map((day, index) => {
        const dayEvents = day ? getEventsForDay(day) : [];
        return <div key={index} className={`min-h-[70px] p-1 border ${darkMode ? 'border-gray-700 hover:bg-gray-700/30' : 'border-gray-200 hover:bg-gray-50'} rounded-md ${!day ? 'opacity-30' : ''}`}>
              {day && <>
                  <div className="text-right text-sm">{day}</div>
                  <div className="mt-1 space-y-1">
                    {dayEvents.slice(0, 2).map(event => <div key={event.id} className={`text-xs px-1 py-0.5 truncate rounded border ${getCategoryColor(event.category)}`}>
                        {event.title}
                      </div>)}
                    {dayEvents.length > 2 && <div className="text-xs text-center text-gray-500">
                        +{dayEvents.length - 2} more
                      </div>}
                  </div>
                </>}
            </div>;
      })}
      </div>
    </div>;
};
export default EventsCalendar;