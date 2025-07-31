import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, TagIcon, UsersIcon, FilterIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
import EventsCalendar from './EventsCalendar';
import EventCategoryChart from './EventCategoryChart';
import EventAttendanceChart from './EventAttendanceChart';
import EventsTimeline from './EventsTimeline';

const Events = ({
  darkMode
}) => {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June'];
  const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
  const categories = ['All', 'Workshop', 'Conference', 'Recruitment', 'Competition', 'Seminar'];
  // Sample events data
  const allEvents = [{
    id: 1,
    title: 'Google Recruitment Drive',
    date: 'Jan 20, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    description: 'Google is visiting for campus recruitment for software engineering roles.',
    departments: ['Computer Science', 'Engineering'],
    category: 'Recruitment',
    attendees: 280,
    maxCapacity: 300,
    status: 'Upcoming',
    month: 'January'
  }, {
    id: 2,
    title: 'AI Workshop by Microsoft',
    date: 'Jan 25, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Computer Science Building',
    description: 'Learn about the latest AI technologies and their applications in industry.',
    departments: ['Computer Science'],
    category: 'Workshop',
    attendees: 120,
    maxCapacity: 150,
    status: 'Upcoming',
    month: 'January'
  }, {
    id: 3,
    title: 'Resume Building Workshop',
    date: 'Feb 2, 2025',
    time: '11:00 AM - 1:00 PM',
    location: 'Career Development Center',
    description: 'Learn how to craft a professional resume that stands out to recruiters.',
    departments: ['All'],
    category: 'Workshop',
    attendees: 95,
    maxCapacity: 100,
    status: 'Upcoming',
    month: 'February'
  }, {
    id: 4,
    title: 'Technical Symposium',
    date: 'Feb 15, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Engineering Block',
    description: 'Annual technical symposium featuring projects, competitions, and guest lectures.',
    departments: ['Engineering', 'Computer Science', 'Mechanical', 'Electrical'],
    category: 'Conference',
    attendees: 450,
    maxCapacity: 500,
    status: 'Upcoming',
    month: 'February'
  }, {
    id: 5,
    title: 'Mechanical Design Competition',
    date: 'Feb 10, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Mechanical Engineering Department',
    description: 'Showcase your mechanical design skills and win exciting prizes.',
    departments: ['Mechanical'],
    category: 'Competition',
    attendees: 85,
    maxCapacity: 100,
    status: 'Upcoming',
    month: 'February'
  }, {
    id: 6,
    title: 'Electrical Systems Exhibition',
    date: 'Mar 5, 2025',
    time: '11:00 AM - 3:00 PM',
    location: 'Electrical Engineering Labs',
    description: 'Exhibition of innovative electrical systems and smart grid technologies.',
    departments: ['Electrical'],
    category: 'Exhibition',
    attendees: 110,
    maxCapacity: 150,
    status: 'Upcoming',
    month: 'March'
  }, {
    id: 7,
    title: 'Hackathon 2025',
    date: 'Mar 15, 2025',
    time: '9:00 AM (24 hours)',
    location: 'Innovation Center',
    description: '24-hour coding competition to solve real-world problems.',
    departments: ['Computer Science', 'Engineering'],
    category: 'Competition',
    attendees: 200,
    maxCapacity: 250,
    status: 'Upcoming',
    month: 'March'
  }, {
    id: 8,
    title: 'Amazon Recruitment Drive',
    date: 'Mar 22, 2025',
    time: '10:00 AM - 5:00 PM',
    location: 'Placement Cell',
    description: 'Amazon is recruiting for software development and product management roles.',
    departments: ['Computer Science', 'Electrical'],
    category: 'Recruitment',
    attendees: 180,
    maxCapacity: 200,
    status: 'Upcoming',
    month: 'March'
  }, {
    id: 9,
    title: 'Robotics Workshop',
    date: 'Apr 5, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Mechanical Engineering Labs',
    description: 'Hands-on workshop on building and programming robots.',
    departments: ['Mechanical', 'Electrical', 'Computer Science'],
    category: 'Workshop',
    attendees: 90,
    maxCapacity: 100,
    status: 'Upcoming',
    month: 'April'
  }, {
    id: 10,
    title: 'Research Symposium',
    date: 'Apr 18, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Research Center',
    description: 'Annual research symposium featuring presentations from faculty and students.',
    departments: ['All'],
    category: 'Conference',
    attendees: 300,
    maxCapacity: 350,
    status: 'Upcoming',
    month: 'April'
  }, {
    id: 11,
    title: 'Industry-Academia Meet',
    date: 'May 10, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Main Auditorium',
    description: 'Networking event connecting industry professionals with academia.',
    departments: ['All'],
    category: 'Networking',
    attendees: 250,
    maxCapacity: 300,
    status: 'Upcoming',
    month: 'May'
  }, {
    id: 12,
    title: 'Summer Internship Fair',
    date: 'May 25, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Campus Grounds',
    description: 'Fair featuring companies offering summer internships.',
    departments: ['All'],
    category: 'Recruitment',
    attendees: 400,
    maxCapacity: 500,
    status: 'Upcoming',
    month: 'May'
  }];
  // Filter events based on selected filters
  const filteredEvents = allEvents.filter(event => {
    const monthMatch = selectedMonth === 'All' || event.month === selectedMonth;
    const departmentMatch = selectedDepartment === 'All' || event.departments.includes('All') || event.departments.includes(selectedDepartment);
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase()) || event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return monthMatch && departmentMatch && categoryMatch && searchMatch;
  });
  // Calculate statistics
  const totalEvents = filteredEvents.length;
  const workshopEvents = filteredEvents.filter(e => e.category === 'Workshop').length;
  const recruitmentEvents = filteredEvents.filter(e => e.category === 'Recruitment').length;
  // const competitionEvents = filteredEvents.filter(e => e.category === 'Competition').length;
  const averageAttendance = filteredEvents.reduce((sum, event) => sum + event.attendees / event.maxCapacity * 100, 0) / (filteredEvents.length || 1);
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h1 className="text-2xl font-bold">Events</h1>
        </motion.div>
      </div>
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center mr-4">
            <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {months.map(month => <option key={month} value={month}>
                    {month}
                  </option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {departments.map(dept => <option key={dept} value={dept}>
                    {dept}
                  </option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {categories.map(cat => <option key={cat} value={cat}>
                    {cat}
                  </option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex-grow max-w-xs`}>
              <input type="text" placeholder="Search events..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-transparent py-2 px-3 outline-none w-full text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3,
        delay: 0.1
      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <h3 className="text-2xl font-bold mt-1">{totalEvents}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <CalendarIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3,
        delay: 0.2
      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Workshops</p>
              <h3 className="text-2xl font-bold mt-1">{workshopEvents}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
              <UsersIcon className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3,
        delay: 0.3
      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Recruitments</p>
              <h3 className="text-2xl font-bold mt-1">{recruitmentEvents}</h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
              <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3,
        delay: 0.4
      }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Avg. Attendance</p>
              <h3 className="text-2xl font-bold mt-1">
                {averageAttendance.toFixed(1)}%
              </h3>
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
              <UsersIcon className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
          <h2 className="text-xl font-semibold mb-6">Events Calendar</h2>
          <div className="h-96">
            <EventsCalendar darkMode={darkMode} events={filteredEvents} />
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="space-y-6">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4">Event Categories</h2>
            <div className="h-80">
              <EventCategoryChart darkMode={darkMode} events={filteredEvents} />
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4">Attendance Rate</h2>
            <div className="h-72">
              <EventAttendanceChart darkMode={darkMode} events={filteredEvents} />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <h2 className="text-xl font-semibold mb-6">Events Timeline</h2>
        <div className="h-96">
          <EventsTimeline darkMode={darkMode} events={filteredEvents} />
        </div>
      </motion.div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
            {filteredEvents.length} events
          </div>
        </div>
        {filteredEvents.length === 0 ? <div className="text-center py-10">
            <p className="text-gray-500">
              No events found matching your filters.
            </p>
          </div> : <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            {filteredEvents.map(event => <motion.div key={event.id} variants={item} whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-gray-50 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{event.title}</h3>
                      <span className={`ml-3 px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.date} • {event.time}
                    </p>
                  </div>
                  <div className={`mt-2 md:mt-0 px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-green-900/20 text-green-300' : 'bg-green-50 text-green-800'}`}>
                    {event.attendees}/{event.maxCapacity} Attendees
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center text-sm">
                    <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{event.departments.join(', ')}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {event.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`flex items-center text-sm font-medium ${darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-500'} text-white px-3 py-1.5 rounded-lg`}>
                    Register <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                  </motion.button>
                </div>
              </motion.div>)}
          </motion.div>}
      </motion.div>
    </div>;
};
export default Events;