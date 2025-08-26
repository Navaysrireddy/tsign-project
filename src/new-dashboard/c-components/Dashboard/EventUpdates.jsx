// import React, { Children } from 'react';
// import { motion } from 'framer-motion';
// import { CalendarIcon, MapPinIcon, ArrowRightIcon, TagIcon } from 'lucide-react';

// const EventUpdates= ({
//   darkMode,
//   department
// }) => {
//   // All events data
//   const allEvents = [{
//     id: 1,
//     title: 'Google Recruitment Drive',
//     date: 'Jan 20, 2025',
//     location: 'Main Auditorium',
//     description: 'Google is visiting for campus recruitment for software engineering roles.',
//     departments: ['Computer Science', 'Engineering'],
//     urgent: true
//   }, {
//     id: 2,
//     title: 'AI Workshop by Microsoft',
//     date: 'Jan 25, 2025',
//     location: 'Computer Science Building',
//     description: 'Learn about the latest AI technologies and their applications in industry.',
//     departments: ['Computer Science'],
//     urgent: false
//   }, {
//     id: 3,
//     title: 'Resume Building Workshop',
//     date: 'Feb 2, 2025',
//     location: 'Career Development Center',
//     description: 'Learn how to craft a professional resume that stands out to recruiters.',
//     departments: ['All'],
//     urgent: false
//   }, {
//     id: 4,
//     title: 'Technical Symposium',
//     date: 'Feb 15, 2025',
//     location: 'Engineering Block',
//     description: 'Annual technical symposium featuring projects, competitions, and guest lectures.',
//     departments: ['Engineering', 'Computer Science', 'Mechanical', 'Electrical'],
//     urgent: false
//   }, {
//     id: 5,
//     title: 'Mechanical Design Competition',
//     date: 'Feb 10, 2025',
//     location: 'Mechanical Engineering Department',
//     description: 'Showcase your mechanical design skills and win exciting prizes.',
//     departments: ['Mechanical'],
//     urgent: false
//   }, {
//     id: 6,
//     title: 'Electrical Systems Exhibition',
//     date: 'Mar 5, 2025',
//     location: 'Electrical Engineering Labs',
//     description: 'Exhibition of innovative electrical systems and smart grid technologies.',
//     departments: ['Electrical'],
//     urgent: false
//   }, {
//     id: 7,
//     title: 'Hackathon 2025',
//     date: 'Mar 15, 2025',
//     location: 'Innovation Center',
//     description: '24-hour coding competition to solve real-world problems.',
//     departments: ['Computer Science', 'Engineering'],
//     urgent: true
//   }];
//   // Filter events based on department
//   const filteredEvents = allEvents.filter(event => department === 'All' || event.departments.includes('All') || event.departments.includes(department));
//   const container = {
//     hidden: {
//       opacity: 0
//     },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };
//   const item = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     show: {
//       opacity: 1,
//       y: 0
//     }
//   };
//   const urgentEvents = filteredEvents.filter(e => e.urgent);
//   return <div>
//       {urgentEvents.length > 0 && <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'} border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
//           <div className="whitespace-nowrap overflow-hidden">
//             <div className="animate-marquee inline-block">
//               <span className="text-red-500 font-medium">
//                 Urgent: {urgentEvents.map(e => e.title).join(' | ')}
//               </span>
//             </div>
//           </div>
//         </div>}
//       {filteredEvents.length === 0 ? <div className="text-center py-10">
//           <p className="text-gray-500">
//             No events found for {department} department.
//           </p>
//         </div> : <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 max-h-80 overflow-y-auto pr-2">
//           {filteredEvents.map(event => <motion.div key={event.id} variants={item} whileHover={{
//         y: -5,
//         transition: {
//           duration: 0.2
//         }
//       }} className={`p-4 rounded-xl backdrop-blur-md ${darkMode ? 'bg-gray-700/30 border border-gray-600' : 'bg-white/70 border border-gray-200'}`}>
//               <h3 className="font-semibold text-lg">{event.title}</h3>
//               <div className="mt-2 space-y-2">
//                 <div className="flex items-center text-sm">
//                   <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
//                   <span>{event.date}</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
//                   <span>{event.location}</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
//                   <span>{event.departments.join(', ')}</span>
//                 </div>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">{event.description}</p>
//               <div className="mt-3 flex justify-end">
//                 <motion.button whileHover={{
//             scale: 1.05
//           }} whileTap={{
//             scale: 0.95
//           }} className="flex items-center text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg">
//                   Register <ArrowRightIcon className="h-4 w-4 ml-1" />
//                 </motion.button>
//               </div>
//             </motion.div>)}
//         </motion.div>}
//     </div>;
// };
// export default EventUpdates;








// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { CalendarIcon, MapPinIcon, ArrowRightIcon, TagIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// const EventUpdates = ({
//   darkMode,
//   department
// }) => {
//   const [showPastEvents, setShowPastEvents] = useState(false);

//   // All events data (upcoming and past)
//   const allEvents = [
//     // Upcoming events
//     {
//       id: 1,
//       title: 'Google Recruitment Drive',
//       date: 'Jan 20, 2025',
//       location: 'Main Auditorium',
//       description: 'Google is visiting for campus recruitment for software engineering roles.',
//       departments: ['Computer Science', 'Engineering'],
//       urgent: true,
//       isPast: false
//     },
//     {
//       id: 2,
//       title: 'AI Workshop by Microsoft',
//       date: 'Jan 25, 2025',
//       location: 'Computer Science Building',
//       description: 'Learn about the latest AI technologies and their applications in industry.',
//       departments: ['Computer Science'],
//       urgent: false,
//       isPast: false
//     },
//     {
//       id: 3,
//       title: 'Resume Building Workshop',
//       date: 'Feb 2, 2025',
//       location: 'Career Development Center',
//       description: 'Learn how to craft a professional resume that stands out to recruiters.',
//       departments: ['All'],
//       urgent: false,
//       isPast: false
//     },
//     // Past events
//     {
//       id: 4,
//       title: 'Annual Tech Symposium 2024',
//       date: 'Nov 15, 2024',
//       location: 'Engineering Block',
//       description: 'Annual technical symposium featuring projects, competitions, and guest lectures.',
//       departments: ['Engineering', 'Computer Science', 'Mechanical', 'Electrical'],
//       urgent: false,
//       isPast: true
//     },
//     {
//       id: 5,
//       title: 'Mechanical Design Competition 2024',
//       date: 'Oct 10, 2024',
//       location: 'Mechanical Engineering Department',
//       description: 'Students showcased their mechanical design skills and won exciting prizes.',
//       departments: ['Mechanical'],
//       urgent: false,
//       isPast: true
//     },
//     {
//       id: 6,
//       title: 'Electrical Systems Exhibition 2024',
//       date: 'Sep 5, 2024',
//       location: 'Electrical Engineering Labs',
//       description: 'Exhibition of innovative electrical systems and smart grid technologies.',
//       departments: ['Electrical'],
//       urgent: false,
//       isPast: true
//     },
//     {
//       id: 7,
//       title: 'Hackathon 2024',
//       date: 'Aug 15, 2024',
//       location: 'Innovation Center',
//       description: '24-hour coding competition where students solved real-world problems.',
//       departments: ['Computer Science', 'Engineering'],
//       urgent: false,
//       isPast: true
//     }
//   ];

//   // Filter events based on department and whether they're past or upcoming
//   const filteredEvents = allEvents.filter(event => 
//     (department === 'All' || event.departments.includes('All') || event.departments.includes(department)) &&
//     event.isPast === showPastEvents
//   );

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     show: {
//       opacity: 1,
//       y: 0
//     }
//   };

//   const urgentEvents = filteredEvents.filter(e => e.urgent);

//   return (
//     <div>
//       {/* Toggle button for past/upcoming events */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">
//           {showPastEvents ? 'Past Events' : 'Upcoming Events'}
//         </h2>
//         <button
//           onClick={() => setShowPastEvents(!showPastEvents)}
//           className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
//         >
//           {showPastEvents ? (
//             <>
//               <ChevronLeftIcon className="h-4 w-4 mr-1" />
//               View Upcoming Events
//             </>
//           ) : (
//             <>
//               View Past Events
//               <ChevronRightIcon className="h-4 w-4 ml-1" />
//             </>
//           )}
//         </button>
//       </div>

//       {urgentEvents.length > 0 && !showPastEvents && (
//         <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'} border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
//           <div className="whitespace-nowrap overflow-hidden">
//             <div className="animate-marquee inline-block">
//               <span className="text-red-500 font-medium">
//                 Urgent: {urgentEvents.map(e => e.title).join(' | ')}
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       {filteredEvents.length === 0 ? (
//         <div className="text-center py-10">
//           <p className="text-gray-500">
//             No {showPastEvents ? 'past' : 'upcoming'} events found for {department} department.
//           </p>
//         </div>
//       ) : (
//         <motion.div 
//           variants={container} 
//           initial="hidden" 
//           animate="show" 
//           className="space-y-4 max-h-80 overflow-y-auto pr-2"
//         >
//           {filteredEvents.map(event => (
//             <motion.div 
//               key={event.id} 
//               variants={item} 
//               whileHover={{
//                 y: -5,
//                 transition: { duration: 0.2 }
//               }} 
//               className={`p-4 rounded-xl backdrop-blur-md ${darkMode ? 'bg-gray-700/30 border border-gray-600' : 'bg-white/70 border border-gray-200'}`}
//             >
//               <h3 className="font-semibold text-lg">{event.title}</h3>
//               <div className="mt-2 space-y-2">
//                 <div className="flex items-center text-sm">
//                   <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
//                   <span>{event.date}</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
//                   <span>{event.location}</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
//                   <span>{event.departments.join(', ')}</span>
//                 </div>
//               </div>
//               <p className="mt-2 text-sm text-gray-500">{event.description}</p>
//               <div className="mt-3 flex justify-end">
//                 {showPastEvents ? (
//                   <div className="text-sm text-gray-500 italic">
//                     This event has concluded
//                   </div>
//                 ) : (
//                   <motion.button 
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg"
//                   >
//                     Register <ArrowRightIcon className="h-4 w-4 ml-1" />
//                   </motion.button>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default EventUpdates;





import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, ArrowRightIcon, TagIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const EventUpdates = ({
  darkMode,
  department
}) => {
  const [showPastEvents, setShowPastEvents] = useState(false);

  // All events data with image property
  const allEvents = [
    {
      id: 1,
      title: 'Google Tech Recruitment Drive',
      date: 'Jan 20, 2025',
      location: 'Main Auditorium, Campus',
      description: "Google is visiting our campus for recruitment. Don't miss this opportunity!",
      departments: ['Computer Science', 'Engineering'],
      urgent: true,
      isPast: false,
      image: '/images/google-recruitment.jpg', // Update with your image path
    },
    {
      id: 2,
      title: 'Workshop on Machine Learning',
      date: 'Jan 25, 2025',
      location: 'Lab 101, CS Building',
      description: 'Learn the fundamentals of machine learning in this hands-on workshop.',
      departments: ['Computer Science'],
      urgent: false,
      isPast: false,
      image: '/images/ml-workshop.jpg',
    },
    {
      id: 3,
      title: 'Career in Artificial Intelligence',
      date: 'Feb 2, 2025',
      location: 'Conference Hall',
      description: 'Industry experts discuss career paths and opportunities in AI.',
      departments: ['All'],
      urgent: false,
      isPast: false,
      image: '/images/ai-seminar.jpg',
    },
    // Past events
    {
      id: 4,
      title: 'Annual Tech Symposium 2024',
      date: 'Nov 15, 2024',
      location: 'Engineering Block',
      description: 'Annual technical symposium featuring projects, competitions, and guest lectures.',
      departments: ['Engineering', 'Computer Science', 'Mechanical', 'Electrical'],
      urgent: false,
      isPast: true,
      image: '/images/tech-symposium.jpg',
    },
    {
      id: 5,
      title: 'Mechanical Design Competition 2024',
      date: 'Oct 10, 2024',
      location: 'Mechanical Engineering Department',
      description: 'Students showcased their mechanical design skills and won exciting prizes.',
      departments: ['Mechanical'],
      urgent: false,
      isPast: true,
      image: '/images/mech-design.jpg',
    },
    {
      id: 6,
      title: 'Electrical Systems Exhibition 2024',
      date: 'Sep 5, 2024',
      location: 'Electrical Engineering Labs',
      description: 'Exhibition of innovative electrical systems and smart grid technologies.',
      departments: ['Electrical'],
      urgent: false,
      isPast: true,
      image: '/images/electrical-exhibition.jpg',
    },
    {
      id: 7,
      title: 'Hackathon 2024',
      date: 'Aug 15, 2024',
      location: 'Innovation Center',
      description: '24-hour coding competition where students solved real-world problems.',
      departments: ['Computer Science', 'Engineering'],
      urgent: false,
      isPast: true,
      image: '/images/hackathon.jpg',
    }
  ];

  // Filter events based on department and whether they're past or upcoming
  const filteredEvents = allEvents.filter(event =>
    (department === 'All' || event.departments.includes('All') || event.departments.includes(department)) &&
    event.isPast === showPastEvents
  );

  const container = {
    hidden: { opacity: 0 },
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

  const urgentEvents = filteredEvents.filter(e => e.urgent);

  return (
    <div>
      {/* Toggle button for past/upcoming events */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
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

      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No {showPastEvents ? 'past' : 'upcoming'} events found for {department} department.
          </p>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4 max-h-80 overflow-y-auto pr-2"
        >
          {filteredEvents.map(event => (
            <motion.div
              key={event.id}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`rounded-xl backdrop-blur-md overflow-hidden border ${darkMode ? 'bg-gray-700/30 border-gray-600' : 'bg-white/70 border-gray-200'}`}
            >
              {/* Image stretching full width with fixed height */}
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover"
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
                    <div className="text-sm text-gray-500 italic">
                      This event has concluded
                    </div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Register <ArrowRightIcon className="h-4 w-4 ml-1" />
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
