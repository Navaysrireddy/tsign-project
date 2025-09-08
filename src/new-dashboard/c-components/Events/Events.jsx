import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  MapPinIcon,
  TagIcon,
  UsersIcon,
  FilterIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  XIcon,
  PlusIcon
} from 'lucide-react';
import EventsCalendar from './EventsCalendar';
import EventCategoryChart from './EventCategoryChart';
import EventAttendanceChart from './EventAttendanceChart';
import EventsTimeline from './EventsTimeline';

const Events = ({ darkMode }) => {
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];
  const departments = ['All', 'Computer Science', 'Mechanical', 'Electrical', 'Engineering'];
  const categories = ['All', 'Workshop', 'Conference', 'Recruitment', 'Competition', 'Seminar'];

  // Load events from localStorage or fallback to default events
  const initialEvents = () => {
    const saved = localStorage.getItem('events');
    return saved ? JSON.parse(saved) : [
      {
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
        month: 'January',
        registrationUrl: 'https://careers.google.com/jobs/results/',
        image: ''
      },
      {
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
        month: 'January',
        registrationUrl: 'https://www.amazon.jobs/en/',
        image: ''
      },
      // ... add remaining default events here ...
    ];
  };

  const [allEvents, setAllEvents] = useState(initialEvents);

  // Persist events to localStorage on every update
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(allEvents));
  }, [allEvents]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    departments: [],
    category: '',
    maxCapacity: 0,
    status: 'Upcoming',
    month: '',
    registrationUrl: '',
    fromHour: '01',
    fromMinute: '00',
    fromAmPm: 'AM',
    toHour: '01',
    toMinute: '00',
    toAmPm: 'AM',
    image: ''  // Added image property
  });

  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);

  // Filter events based on filters and search
  const filteredEvents = allEvents.filter(event => {
    const monthMatch = selectedMonth === 'All' || event.month === selectedMonth;
    const departmentMatch = selectedDepartment === 'All' || event.departments.includes('All') || event.departments.includes(selectedDepartment);
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return monthMatch && departmentMatch && categoryMatch && searchMatch;
  });

  // Statistics
  const totalEvents = filteredEvents.length;
  const workshopEvents = filteredEvents.filter(e => e.category === 'Workshop').length;
  const recruitmentEvents = filteredEvents.filter(e => e.category === 'Recruitment').length;
  const averageAttendance = filteredEvents.reduce((sum, event) => sum + event.attendees / event.maxCapacity * 100, 0) / (filteredEvents.length || 1);

  // Handle inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image upload and convert to Base64 string
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle department selection
  const handleDepartmentChange = (dept) => {
    if (newEvent.departments.includes(dept)) {
      setNewEvent(prev => ({
        ...prev,
        departments: prev.departments.filter(d => d !== dept)
      }));
    } else {
      setNewEvent(prev => ({
        ...prev,
        departments: [...prev.departments, dept]
      }));
    }
  };

  // Submit new event
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.max(...allEvents.map(event => event.id), 0) + 1;

    // Combine fromTime and toTime for display purpose
    const fromTime = `${newEvent.fromHour}:${newEvent.fromMinute} ${newEvent.fromAmPm}`;
    const toTime = `${newEvent.toHour}:${newEvent.toMinute} ${newEvent.toAmPm}`;

    const monthFormatted = newEvent.date ? new Date(newEvent.date).toLocaleString('default', { month: 'long' }) : '';
    setAllEvents(prev => [...prev, {
      id: newId,
      title: newEvent.title,
      date: new Date(newEvent.date).toDateString(),
      time: `${fromTime} - ${toTime}`,
      location: newEvent.location,
      description: newEvent.description,
      departments: newEvent.departments,
      category: newEvent.category,
      attendees: 0,
      maxCapacity: parseInt(newEvent.maxCapacity, 10),
      status: 'Upcoming',
      month: monthFormatted || '',
      registrationUrl: newEvent.registrationUrl,
      image: newEvent.image  // Save uploaded image
    }]);

    // Reset newEvent state
    setNewEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      departments: [],
      category: '',
      maxCapacity: 0,
      status: 'Upcoming',
      month: '',
      registrationUrl: '',
      fromHour: '01',
      fromMinute: '00',
      fromAmPm: 'AM',
      toHour: '01',
      toMinute: '00',
      toAmPm: 'AM',
      image: ''
    });

    setIsAddEventModalOpen(false);
  };

  // Framer motion animation config
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      {/* Add Event Modal */}
      {isAddEventModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <button 
              onClick={() => setIsAddEventModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full"
            >
              <XIcon className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
            
            <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add New Event</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Title */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Event Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                  placeholder="Enter event title"
                />
              </div>

              {/* Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Time *
                </label>
                <div className="flex space-x-4 items-center">
                  {/* From Time */}
                  <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                    <select
                      name="fromHour"
                      value={newEvent.fromHour}
                      onChange={handleInputChange}
                      required
                      className={`p-1 rounded border text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
                    >
                      {[...Array(12)].map((_, i) => {
                        const hour = i + 1;
                        return (
                          <option key={`from-hour-${hour}`} value={hour < 10 ? `0${hour}` : `${hour}`}>
                            {hour}
                          </option>
                        );
                      })}
                    </select>
                    <span className="px-0 text-gray-400">:</span>
                    <select
                      name="fromMinute"
                      value={newEvent.fromMinute}
                      onChange={handleInputChange}
                      required
                      className={`p-1 rounded border text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
                    >
                      {[0, 15, 30, 45].map((min) => (
                        <option key={`from-minute-${min}`} value={min < 10 ? `0${min}` : `${min}`}>
                          {min < 10 ? `0${min}` : min}
                        </option>
                      ))}
                    </select>
                    <select
                      name="fromAmPm"
                      value={newEvent.fromAmPm}
                      onChange={handleInputChange}
                      required
                      className={`p-1 rounded border text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>to</span>
                  {/* To Time */}
                  <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                    <select
                      name="toHour"
                      value={newEvent.toHour}
                      onChange={handleInputChange}
                      required
                      className={`p-1 rounded border text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
                    >
                      {[...Array(12)].map((_, i) => {
                        const hour = i + 1;
                        return (
                          <option key={`to-hour-${hour}`} value={hour < 10 ? `0${hour}` : `${hour}`}>
                            {hour}
                          </option>
                        );
                      })}
                    </select>
                    <span className="px-0 text-gray-400">:</span>
                    <select
                      name="toMinute"
                      value={newEvent.toMinute}
                      onChange={handleInputChange}
                      required
                      className={`p-1 rounded border text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
                    >
                      {[0, 15, 30, 45].map((min) => (
                        <option key={`to-minute-${min}`} value={min < 10 ? `0${min}` : `${min}`}>
                          {min < 10 ? `0${min}` : min}
                        </option>
                      ))}
                    </select>
                    <select
                      name="toAmPm"
                      value={newEvent.toAmPm}
                      onChange={handleInputChange}
                      required
                      className={`p-1 rounded border text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'}`}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={newEvent.location}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                  placeholder="Enter event location"
                />
              </div>

              {/* Description */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                  placeholder="Enter event description"
                />
              </div>

              {/* Event Image Upload */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Event Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full text-sm text-gray-500"
                />
                {newEvent.image && (
                  <img
                    src={newEvent.image}
                    alt="Preview"
                    className="mt-2 w-full h-40 object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Departments */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Departments *
                </label>
                <div className="flex flex-wrap gap-2">
                  {departments.filter(dept => dept !== 'All').map(dept => (
                    <button
                      type="button"
                      key={dept}
                      onClick={() => handleDepartmentChange(dept)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        newEvent.departments.includes(dept) 
                          ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800')
                          : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800')
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Category *
                </label>
                <select
                  name="category"
                  value={newEvent.category}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                >
                  <option value="" className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Select Category</option>
                  {categories.filter(cat => cat !== 'All').map(cat => (
                    <option key={cat} value={cat} className={darkMode ? 'text-white' : 'text-gray-900'}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Registration URL */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Registration URL *
                </label>
                <input
                  type="url"
                  name="registrationUrl"
                  value={newEvent.registrationUrl}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter registration URL"
                  className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                />
              </div>

              {/* Max Capacity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Max Capacity *
                  </label>
                  <input
                    type="number"
                    name="maxCapacity"
                    value={newEvent.maxCapacity}
                    onChange={handleInputChange}
                    min="1"
                    required
                    className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddEventModalOpen(false)}
                  className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md"
                >
                  Add Event
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Events</h1>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => setIsAddEventModalOpen(true)}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md`}
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Event
        </motion.button>
      </div>

      {/* Filters */}
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center mr-4">
            <FilterIcon className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {months.map(month => (
                  <option key={month} value={month} className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>
                    {month}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {departments.map(dept => (
                  <option key={dept} value={dept} className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>
                    {dept}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className={`relative rounded-lg overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/80'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="appearance-none bg-transparent py-2 pl-3 pr-10 outline-none text-sm">
                {categories.map(cat => (
                  <option key={cat} value={cat} className={darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}>
                    {cat}
                  </option>
                ))}
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

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}>
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

      {/* Events List */}
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Upcoming Events</h2>
          <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
            {filteredEvents.length} events
          </div>
        </div>
        {filteredEvents.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No events found matching your filters.</p>
          </div>
        ) : (
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            {filteredEvents.map(event => (
              <motion.div
                key={event.id}
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700 shadow-[3px_3px_6px_#1a202c,-3px_-3px_6px_#2d3748]' : 'bg-gray-50 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'}`}
              >
                {/* Event Image */}
                {/* {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )} */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{event.title}</h3>
                      <span className={`ml-3 px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
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
                <p className="mt-2 text-sm text-gray-400">{event.description}</p>
                <div className="mt-4 flex justify-end">
                  <motion.a
                    href={event.registrationUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center text-sm font-medium ${
                      darkMode
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600'
                        : 'bg-gradient-to-r from-teal-400 to-blue-500'
                    } text-white px-3 py-1.5 rounded-lg ${!event.registrationUrl ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                  >
                    Register <ArrowRightIcon className="h-3.5 w-3.5 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Statistics & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Events Calendar</h2>
          <div className="h-96">
            <EventsCalendar darkMode={darkMode} events={filteredEvents} />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Event Categories</h2>
            <div className="h-80">
              <EventCategoryChart darkMode={darkMode} events={filteredEvents} />
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Attendance Rate</h2>
            <div className="h-72">
              <EventAttendanceChart darkMode={darkMode} events={filteredEvents} />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Events Timeline</h2>
        <div className="h-96">
          <EventsTimeline darkMode={darkMode} events={filteredEvents} />
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
