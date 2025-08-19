// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, XIcon } from 'lucide-react';

// const EventCard = ({
//   title,
//   date,
//   location,
//   organizer,
//   type,
//   description,
//   attendees
// }) => {
//   const [showRegistration, setShowRegistration] = useState(false);
//   const [calendarAdded, setCalendarAdded] = useState(false);

//   const getTypeColor = () => {
//     switch (type) {
//       case 'company':
//         return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
//       case 'workshop':
//         return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
//       case 'seminar':
//         return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
//       case 'meeting':
//         return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
//       case 'cultural':
//         return 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400';
//       default:
//         return '';
//     }
//   };

//   const formatDate = () => {
//     const eventDate = new Date(date);
//     return eventDate.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const addToCalendar = () => {
//     setCalendarAdded(true);
//     setTimeout(() => {
//       setCalendarAdded(false);
//     }, 3000);
//   };

//   const handleRegistration = (e) => {
//     e.preventDefault();
//     alert(`Successfully registered for: ${title}`);
//     setShowRegistration(false);
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300"
//     >
//       {/* Banner without gradient background */}
//       <div className="h-40 relative flex items-center justify-center bg-white dark:bg-gray-800">
//         <img
//           src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg"
//           alt="Event banner"
//           className="h-24 object-contain"
//         />
//         <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg">
//           <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor()}`}>
//             {type.charAt(0).toUpperCase() + type.slice(1)}
//           </span>
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
//         <div className="space-y-2">
//           <div className="flex items-center text-sm">
//             <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
//             <span className="text-gray-600 dark:text-gray-300">{formatDate()}</span>
//           </div>
//           <div className="flex items-center text-sm">
//             <MapPinIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
//             <span className="text-gray-600 dark:text-gray-300">{location}</span>
//           </div>
//           <div className="flex items-center text-sm">
//             <UsersIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
//             <span className="text-gray-600 dark:text-gray-300">Organized by {organizer}</span>
//           </div>
//           {attendees && (
//             <div className="flex items-center text-sm">
//               <ClockIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
//               <span className="text-gray-600 dark:text-gray-300">{attendees} attending</span>
//             </div>
//           )}
//         </div>
//         <div className="mt-6 flex justify-between">
//           <button
//             onClick={addToCalendar}
//             className={`px-3 py-1.5 text-sm font-medium rounded-md ${
//               calendarAdded
//                 ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
//                 : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
//             } transition-all duration-200`}
//           >
//             {calendarAdded ? 'Added to Calendar' : 'Add to Calendar'}
//           </button>
//           <button
//             onClick={() => setShowRegistration(true)}
//             className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//           >
//             Register
//           </button>
//         </div>
//       </div>

//       {showRegistration && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full my-8">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Register for Event</h3>
//               <button
//                 onClick={() => setShowRegistration(false)}
//                 className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//               >
//                 <XIcon className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h4>
//               <p className="text-sm text-gray-600 dark:text-gray-300">{formatDate()}</p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">{location}</p>
//             </div>
//             <form onSubmit={handleRegistration} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   required
//                   defaultValue="John Smith"
//                   className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   required
//                   defaultValue="john.smith@example.com"
//                   className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Department *
//                 </label>
//                 <select
//                   id="department"
//                   required
//                   className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
//                 >
//                   <option value="computer-science">Computer Science</option>
//                   <option value="electrical">Electrical Engineering</option>
//                   <option value="mechanical">Mechanical Engineering</option>
//                   <option value="civil">Civil Engineering</option>
//                   <option value="chemical">Chemical Engineering</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Year *
//                 </label>
//                 <select
//                   id="year"
//                   required
//                   defaultValue="3"
//                   className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
//                 >
//                   <option value="1">1st Year</option>
//                   <option value="2">2nd Year</option>
//                   <option value="3">3rd Year</option>
//                   <option value="4">4th Year</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="questions" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Questions or Comments
//                 </label>
//                 <textarea
//                   id="questions"
//                   rows={3}
//                   placeholder="Any questions for the organizers?"
//                   className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
//                 />
//               </div>
//               <div className="flex items-start">
//                 <input
//                   id="addCalendar"
//                   type="checkbox"
//                   defaultChecked
//                   className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                 />
//                 <label htmlFor="addCalendar" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
//                   Add this event to my calendar
//                 </label>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowRegistration(false)}
//                   className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//                 >
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// const Events = () => {
//   const [showExportModal, setShowExportModal] = useState(false);

//   const events = [
//     {
//       id: 'e1',
//       title: 'Google Tech Recruitment Drive',
//       date: '2025-01-20T10:00:00',
//       location: 'Main Auditorium, Campus',
//       organizer: 'Career Development Cell',
//       type: 'company',
//       description: "Google is visiting our campus for recruitment. Don't miss this opportunity to land your dream job!",
//       attendees: 250
//     },
//     {
//       id: 'e2',
//       title: 'Workshop on Machine Learning',
//       date: '2025-01-25T14:00:00',
//       location: 'Lab 101, CS Building',
//       organizer: 'AI Club',
//       type: 'workshop',
//       description: 'Learn the fundamentals of machine learning and practical applications in this hands-on workshop.',
//       attendees: 75
//     },
//     {
//       id: 'e3',
//       title: 'Career in Artificial Intelligence',
//       date: '2025-02-02T11:00:00',
//       location: 'Conference Hall',
//       organizer: 'Department of Computer Science',
//       type: 'seminar',
//       description: 'Industry experts discuss career paths and opportunities in the field of artificial intelligence.',
//       attendees: 120
//     },
//     {
//       id: 'e4',
//       title: 'Project Review Meeting',
//       date: '2025-02-10T15:30:00',
//       location: 'Meeting Room 3, Admin Block',
//       organizer: 'Prof. John Doe',
//       type: 'meeting',
//       description: 'Final review of the semester projects. Be prepared to present your work and answer questions.'
//     },
//     {
//       id: 'e5',
//       title: 'Annual Tech Fest',
//       date: '2025-03-15T09:00:00',
//       location: 'College Campus',
//       organizer: 'Student Council',
//       type: 'cultural',
//       description: 'The biggest technology festival of the year featuring competitions, exhibitions, and guest lectures.',
//       attendees: 1500
//     },
//     {
//       id: 'e6',
//       title: 'Microsoft Azure Workshop',
//       date: '2025-02-18T13:00:00',
//       location: 'Virtual (Zoom)',
//       organizer: 'Cloud Computing Club',
//       type: 'workshop',
//       description: 'Learn how to deploy and manage applications on Microsoft Azure cloud platform.',
//       attendees: 90
//     }
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Upcoming Events</h1>
//         <button
//           onClick={() => setShowExportModal(true)}
//           className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
//         >
//           Export Calendar
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map(event => (
//           <EventCard
//             key={event.id}
//             id={event.id}
//             title={event.title}
//             date={event.date}
//             location={event.location}
//             organizer={event.organizer}
//             type={event.type}
//             description={event.description}
//             attendees={event.attendees}
//           />
//         ))}
//       </div>

//       {/* Export Modal */}
//       {showExportModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-3xl w-full my-8">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Export Events</h3>
//               <button
//                 onClick={() => setShowExportModal(false)}
//                 className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//               >
//                 <XIcon className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="overflow-x-auto max-h-[70vh]">
//               <table className="min-w-full border text-sm md:text-base">
//                 <thead>
//                   <tr className="bg-gray-100 dark:bg-gray-700 sticky top-0 z-10">
//                     <th className="border px-3 py-2 text-left">Title</th>
//                     <th className="border px-3 py-2 text-left">Date &amp; Time</th>
//                     <th className="border px-3 py-2 text-left">Location</th>
//                     <th className="border px-3 py-2 text-left">Organizer</th>
//                     <th className="border px-3 py-2 text-left">Type</th>
//                     <th className="border px-3 py-2 text-left">Attendees</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {events.map(event => (
//                     <tr key={event.id} className="even:bg-gray-50 dark:even:bg-gray-700/50">
//                       <td className="border px-3 py-2">{event.title}</td>
//                       <td className="border px-3 py-2">{new Date(event.date).toLocaleString()}</td>
//                       <td className="border px-3 py-2">{event.location}</td>
//                       <td className="border px-3 py-2">{event.organizer}</td>
//                       <td className="border px-3 py-2 capitalize">{event.type}</td>
//                       <td className="border px-3 py-2">{event.attendees ?? '-'}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-4 flex justify-end space-x-2">
//               <button
//                 onClick={() => setShowExportModal(false)}
//                 className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
//               >
//                 Close
//               </button>
//               {/* Add export/download buttons here if needed */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;










import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, XIcon } from 'lucide-react';

const EventCard = ({
  title,
  date,
  location,
  organizer,
  type,
  description,
  attendees,
  img,
  registerLink // new prop
}) => {
  const [calendarAdded, setCalendarAdded] = useState(false);

  const getTypeColor = () => {
    switch (type) {
      case 'company':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
      case 'workshop':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'seminar':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'meeting':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
      case 'cultural':
        return 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400';
      default:
        return '';
    }
  };

  const formatDate = () => {
    const eventDate = new Date(date);
    return eventDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const addToCalendar = () => {
    setCalendarAdded(true);
    setTimeout(() => {
      setCalendarAdded(false);
    }, 3000);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      {/* Event banner */}
      <div className="h-40 relative flex items-center justify-center bg-white dark:bg-gray-800">
        <img src={img} alt="Event banner" className="h-24 object-contain" />
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-lg">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor()}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
      </div>

      {/* Event details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>{formatDate()}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPinIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <UsersIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>Organized by {organizer}</span>
          </div>
          {attendees && (
            <div className="flex items-center text-sm">
              <ClockIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
              <span>{attendees} attending</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={addToCalendar}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              calendarAdded
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {calendarAdded ? 'Added to Calendar' : 'Add to Calendar'}
          </button>
          <button
            onClick={() => window.open(registerLink, '_blank')}
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
          >
            Register
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [showExportModal, setShowExportModal] = useState(false);

  const events = [
    {
      id: 'e1',
      title: 'Google Tech Recruitment Drive',
      date: '2025-01-20T10:00:00',
      location: 'Main Auditorium, Campus',
      organizer: 'Career Development Cell',
      type: 'company',
      description: "Google is visiting our campus for recruitment. Don't miss this opportunity!",
      attendees: 250,
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      registerLink: 'https://forms.gle/sample1'
    },
    {
      id: 'e2',
      title: 'Workshop on Machine Learning',
      date: '2025-01-25T14:00:00',
      location: 'Lab 101, CS Building',
      organizer: 'AI Club',
      type: 'workshop',
      description: 'Learn the fundamentals of machine learning in this hands-on workshop.',
      attendees: 75,
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      registerLink: 'https://forms.gle/sample2'
    },
    {
      id: 'e3',
      title: 'Career in Artificial Intelligence',
      date: '2025-02-02T11:00:00',
      location: 'Conference Hall',
      organizer: 'Department of Computer Science',
      type: 'seminar',
      description: 'Industry experts discuss career paths and opportunities in AI.',
      attendees: 120,
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      registerLink: 'https://forms.gle/sample3'
    },
    {
      id: 'e4',
      title: 'Project Review Meeting',
      date: '2025-02-10T15:30:00',
      location: 'Meeting Room 3, Admin Block',
      organizer: 'Prof. John Doe',
      type: 'meeting',
      description: 'Final review of the semester projects.',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
      registerLink: 'https://forms.gle/sample4'
    },
    {
      id: 'e5',
      title: 'Annual Tech Fest',
      date: '2025-03-15T09:00:00',
      location: 'College Campus',
      organizer: 'Student Council',
      type: 'cultural',
      description: 'Competitions, exhibitions, and guest lectures!',
      attendees: 1500,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaNe3Qvb3vRXnP-y7-WIOBSPDHVyKpD5OBQ&s',
      registerLink: 'https://forms.gle/sample5'
    },
    {
      id: 'e6',
      title: 'Microsoft Azure Workshop',
      date: '2025-02-18T13:00:00',
      location: 'Virtual (Zoom)',
      organizer: 'Cloud Computing Club',
      type: 'workshop',
      description: 'Deploy and manage applications on Microsoft Azure.',
      attendees: 90,
      img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      registerLink: 'https://forms.gle/sample6'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Upcoming Events</h1>
        <button
          onClick={() => setShowExportModal(true)}
          className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
        >
          Export Calendar
        </button>
      </div>

      {/* Event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {/* Export modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-3xl w-full my-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Export Events</h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-x-auto max-h-[70vh]">
              <table className="min-w-full border text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 sticky top-0">
                    <th className="border px-3 py-2 text-left">Title</th>
                    <th className="border px-3 py-2 text-left">Date & Time</th>
                    <th className="border px-3 py-2 text-left">Location</th>
                    <th className="border px-3 py-2 text-left">Organizer</th>
                    <th className="border px-3 py-2 text-left">Type</th>
                    <th className="border px-3 py-2 text-left">Attendees</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(event => (
                    <tr key={event.id} className="even:bg-gray-50 dark:even:bg-gray-700/50">
                      <td className="border px-3 py-2">{event.title}</td>
                      <td className="border px-3 py-2">{new Date(event.date).toLocaleString()}</td>
                      <td className="border px-3 py-2">{event.location}</td>
                      <td className="border px-3 py-2">{event.organizer}</td>
                      <td className="border px-3 py-2 capitalize">{event.type}</td>
                      <td className="border px-3 py-2">{event.attendees ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
