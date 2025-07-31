// import React from 'react';
// import { NewspaperIcon, ExternalLinkIcon } from 'lucide-react';
// export const TrendingNews = () => {
//   const news = [{
//     id: 1,
//     title: 'Summer Internship Applications Open',
//     preview: 'Tech companies are now accepting applications for summer internships...',
//     time: '2 hours ago',
//     tag: 'Opportunity'
//   }, {
//     id: 2,
//     title: 'New Research Lab Opening',
//     preview: 'The Computer Science department is opening a new AI research lab...',
//     time: '1 day ago',
//     tag: 'Campus'
//   }, {
//     id: 3,
//     title: 'Upcoming Hackathon Event',
//     preview: 'Join the 48-hour coding challenge with prizes worth $10,000...',
//     time: '2 days ago',
//     tag: 'Event'
//   }];
//   const getTagClass = (tag: string) => {
//     switch (tag) {
//       case 'Opportunity':
//         return 'bg-green-100 text-green-800';
//       case 'Campus':
//         return 'bg-blue-100 text-blue-800';
//       case 'Event':
//         return 'bg-purple-100 text-purple-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">Trending News</h2>
//         <NewspaperIcon size={20} className="text-blue-500" />
//       </div>
//       <div className="space-y-4">
//         {news.map(item => <div key={item.id} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
//             <div className="flex items-center justify-between">
//               <span className={`text-xs px-2 py-0.5 rounded-full ${getTagClass(item.tag)}`}>
//                 {item.tag}
//               </span>
//               <span className="text-xs text-gray-500">{item.time}</span>
//             </div>
//             <h3 className="font-medium text-gray-800 mt-2">{item.title}</h3>
//             <p className="text-sm text-gray-600 mt-1">{item.preview}</p>
//             <button className="flex items-center space-x-1 text-xs text-blue-600 mt-2 hover:text-blue-700 transition-colors duration-200">
//               <span>Read more</span>
//               <ExternalLinkIcon size={12} />
//             </button>
//           </div>)}
//       </div>
//     </div>;
// };






import React from 'react';
import { NewspaperIcon, ExternalLinkIcon } from 'lucide-react';

export const TrendingNews = () => {
  const news = [
    { id: 1, title: 'Summer Internship Applications Open', preview: 'Tech companies are now accepting applications for summer internships...', time: '2 hours ago', tag: 'Opportunity' },
    { id: 2, title: 'New Research Lab Opening', preview: 'The Computer Science department is opening a new AI research lab...', time: '1 day ago', tag: 'Campus' },
    { id: 3, title: 'Upcoming Hackathon Event', preview: 'Join the 48-hour coding challenge with prizes worth $10,000...', time: '2 days ago', tag: 'Event' }
  ];

  const getTagClass = tag => {
    switch (tag) {
      case 'Opportunity':
        return 'bg-green-100 text-green-800';
      case 'Campus':
        return 'bg-blue-100 text-blue-800';
      case 'Event':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Trending News</h2>
        <NewspaperIcon size={20} className="text-blue-500" />
      </div>
      <div className="space-y-4">
        {news.map(item => (
          <div key={item.id} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-0.5 rounded-full ${getTagClass(item.tag)}`}>
                {item.tag}
              </span>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
            <h3 className="font-medium text-gray-800 mt-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.preview}</p>
            <button className="flex items-center space-x-1 text-xs text-blue-600 mt-2 hover:text-blue-700 transition-colors duration-200">
              <span>Read more</span>
              <ExternalLinkIcon size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
