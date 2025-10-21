// import React, { useEffect, useState, createContext, useContext } from 'react';
// import { mockData } from '../utils/mockdata';

// const DataContext = createContext({
//   data: mockData,
//   filterData: (department, course) => console.log('Default filterData called', department, course),
//   updateCandidateStatus: (id, status) => console.log('Default updateCandidateStatus called', id, status),
//   updateInterviewStatus: (id, status) => console.log('Default updateInterviewStatus called', id, status)
// });

// export const useData = () => useContext(DataContext);

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState(mockData);
//   const [ setFilteredDepartment] = useState('all');
//   const [ setFilteredCourse] = useState('all');

//   // Simulate WebSocket connection for real-time updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (Math.random() > 0.7) {
//         const statuses = ['Selected', 'Rejected', 'Interviewed', 'In Review'];
//         const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
//         const randomCandidateId = Math.floor(Math.random() * mockData.candidates.length).toString();
//         updateCandidateStatus(randomCandidateId, randomStatus);
//       }
//     }, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const filterData = (department, course) => {
//     setFilteredDepartment(department);
//     setFilteredCourse(course);
//   };

//   const updateCandidateStatus = (id, status) => {
//     setData(prevData => ({
//       ...prevData,
//       candidates: prevData.candidates.map(candidate => 
//         candidate.id === id ? { ...candidate, status } : candidate
//       )
//     }));
//   };

//   const updateInterviewStatus = (id, status) => {
//     setData(prevData => ({
//       ...prevData,
//       interviews: prevData.interviews.map(interview => 
//         interview.id === id ? { ...interview, status } : interview
//       )
//     }));
//   };

//   return (
//     <DataContext.Provider 
//       value={{
//         data,
//         filterData,
//         updateCandidateStatus,
//         updateInterviewStatus
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };



import React, { useEffect, useState, createContext, useContext } from 'react';
import { mockData } from '../utils/mockdata';

const DataContext = createContext({
  data: mockData,
  filterData: (department, course) => console.log('Default filterData called', department, course),
  updateCandidateStatus: (id, status) => console.log('Default updateCandidateStatus called', id, status),
  updateInterviewStatus: (id, status) => console.log('Default updateInterviewStatus called', id, status),
  // addInterview: (newInterview) => console.log('Default addInterview called', newInterview),
});

export const useData = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);
  const [filteredDepartment, setFilteredDepartment] = useState('all');
  const [filteredCourse, setFilteredCourse] = useState('all');

  // Apply filtering whenever filter states change
  useEffect(() => {
    let filteredCandidates = mockData.candidates;
    let filteredInterviews = mockData.interviews;

    if (filteredDepartment !== 'all') {
      filteredCandidates = filteredCandidates.filter(c => c.dept === filteredDepartment);
      filteredInterviews = filteredInterviews.filter(i => i.dept === filteredDepartment);
    }
    if (filteredCourse !== 'all') {
      filteredCandidates = filteredCandidates.filter(c => c.course === filteredCourse);
      filteredInterviews = filteredInterviews.filter(i => i.course === filteredCourse);
    }

    setData({
      ...mockData,
      candidates: filteredCandidates,
      interviews: filteredInterviews,
    });
  }, [filteredDepartment, filteredCourse]);

  // Simulate WebSocket connection for real-time candidate status updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const statuses = ['Selected', 'Rejected', 'Interviewed', 'In Review'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        const randomCandidateId = Math.floor(Math.random() * mockData.candidates.length).toString();
        updateCandidateStatus(randomCandidateId, randomStatus);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const filterData = (department, course) => {
    setFilteredDepartment(department);
    setFilteredCourse(course);
  };

  const updateCandidateStatus = (id, status) => {
    setData(prevData => ({
      ...prevData,
      candidates: prevData.candidates.map(candidate =>
        candidate.id === id ? { ...candidate, status } : candidate
      )
    }));
  };
//   const addInterview = (newInterview) => {
//   setData(prevData => ({
//     ...prevData,
//     interviews: [...prevData.interviews, { id: Date.now().toString(), ...newInterview }]
//   }));
// };


  const updateInterviewStatus = (id, status) => {
    setData(prevData => ({
      ...prevData,
      interviews: prevData.interviews.map(interview =>
        interview.id === id ? { ...interview, status } : interview
      )
    }));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        filterData,
        updateCandidateStatus,
        updateInterviewStatus,
        // addInterview,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
