// import React, { useState } from 'react';
// import './ColegeSearch.css';

// const CollegeSearch = () => {
//   const [location, setLocation] = useState('');
//   const [stream, setStream] = useState('');
//   const [university, setUniversity] = useState('');
//   const [results, setResults] = useState([]);
//   const [searchClicked, setSearchClicked] = useState(false);

//   const allColleges = [
//     {
//       name: 'JNTU Hyderabad',
//       location: 'Hyderabad',
//       courses: ['CSE', 'ECE', 'MBA'],
//       streams: ['BTech', 'pg'],
//       university: 'JNTU',
//       naac: 'A+',
//       topGPA: '9.8',
//       topPackage: '20',
//       image: 'https://singheducation.co.in/images/CollegeImages/86389014078748848.jpg',
//     },
//     {
//       name: 'VITS Hyderabad',
//       location: 'Hyderabad',
//       courses: ['CSE', 'ECE', 'MBA'],
//       streams: ['BTech', 'pg'],
//       university: 'JNTU',
//       naac: 'A+',
//       topGPA: '9.8',
//       topPackage: '20',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1beL3tKnUrdbEL6_ZEE7ML0idVq523TjZ9w&s',
//     },
//     {
//       name: 'NIT Warangal',
//       location: 'Warangal',
//       courses: ['CSE', 'Mechanical', 'MCA', 'MBA'],
//       streams: ['BTech', 'pg'],
//       university: 'Kakatiya',
//       naac: 'A++',
//       topGPA: '9.6',
//       topPackage: '45',
//       image: 'https://media.collegedekho.com/media/uploads/2023/10/18/nit-warangal-campus.jpg',
//     },
//     {
//       name: 'KITS Karimnagar',
//       location: 'Karimnagar',
//       courses: ['CSE', 'ECE'],
//       streams: ['BTech'],
//       university: 'Telangana',
//       naac: 'A',
//       topGPA: '9.5',
//       topPackage: '12',
//       image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14169955355.jpg',
//     },
//     {
//       name: 'TKR',
//       location: 'Karimnagar',
//       courses: ['BSc', 'BCA', 'BBA', 'BCom', 'BA', 'MBA', 'MCA', 'Msc'],
//       streams: ['ug', 'pg'],
//       university: 'JNTU',
//       naac: 'A',
//       topGPA: '9.5',
//       topPackage: '12',
//       image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14169955355.jpg',
//     },
//     {
//       name: 'XXXX',
//       location: 'Karimnagar',
//       courses: ['CSE', 'ECE'],
//       streams: ['MTech', 'BTech'],
//       university: 'Osmania',
//       naac: 'A',
//       topGPA: '9.5',
//       topPackage: '12',
//       image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14169955355.jpg',
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const filtered = allColleges.filter(
//       (college) =>
//         college.location === location &&
//         college.streams.includes(stream) &&
//         college.university.toLowerCase() === university.toLowerCase()
//     );
//     setResults(filtered);
//     setSearchClicked(true);
//   };

//   return (
//     <div className="college-search-page">
//       <h2>Explore Top Partner Colleges and Discover Your Best Fit</h2>
//       <form className="search-form" onSubmit={handleSubmit}>
//         <select value={location} onChange={(e) => setLocation(e.target.value)} required>
//           <option value="">Select Location</option>
//           <option value="Hyderabad">Hyderabad</option>
//           <option value="Warangal">Warangal</option>
//           <option value="Karimnagar">Karimnagar</option>
//         </select>

//         <select value={university} onChange={(e) => setUniversity(e.target.value)} required>
//           <option value="">Select University</option>
//           <option value="JNTU">JNTU</option>
//           <option value="Osmania">Osmania</option>
//           <option value="Kakatiya">Kakatiya</option>
//           <option value="Telangana">Telangana</option>
//         </select>

//         <select value={stream} onChange={(e) => setStream(e.target.value)} required>
//           <option value="">Select Stream</option>
//           <option value="BTech">BTech</option>
//           <option value="ug">UG</option>
//           <option value="pg">PG</option>
//           <option value="MTech">MTech</option>
//         </select>

//         <button type="submit">Search</button>
//       </form>

//       {searchClicked && (
//         <div className="results-grid">
//           {results.length === 0 ? (
//             <p className="no-results">No matching colleges found.</p>
//           ) : (
//             results.map((college, idx) => (
//               <div className="college-card" key={idx}>
//                 <img src={college.image} alt={college.name} className="college-img" />
//                 <h3>{college.name}</h3>
//                 <p><strong>Location:</strong> {college.location}</p>
//                 <p><strong>NAAC:</strong> {college.naac}</p>
//                 <p><strong>Streams:</strong> {college.streams.join(', ')}</p>
//                 <p><strong>Courses:</strong> {college.courses.join(', ')}</p>
//                 <p><strong>Top GPA:</strong> {college.topGPA}</p>
//                 <p><strong>Highest Package:</strong> ₹{college.topPackage} LPA</p>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CollegeSearch;



import React, { useState } from 'react';
import './ColegeSearch.css';

const CollegeSearch = () => {
  const [location, setLocation] = useState('');
  const [stream, setStream] = useState('');
  const [university, setUniversity] = useState('');
  const [results, setResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const allColleges = [
    {
      name: 'JNTU Hyderabad',
      location: 'Hyderabad',
      courses: ['CSE', 'ECE', 'MBA'],
      streams: ['BTech', 'pg'],
      university: 'JNTU',
      naac: 'A+',
      topGPA: '9.8',
      topPackage: '20',
      image: 'https://singheducation.co.in/images/CollegeImages/86389014078748848.jpg',
    },
    {
      name: 'VITS Hyderabad',
      location: 'Hyderabad',
      courses: ['CSE', 'ECE', 'MBA'],
      streams: ['BTech', 'pg'],
      university: 'JNTU',
      naac: 'A+',
      topGPA: '9.8',
      topPackage: '20',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1beL3tKnUrdbEL6_ZEE7ML0idVq523TjZ9w&s',
    },
    {
      name: 'NIT Warangal',
      location: 'Warangal',
      courses: ['CSE', 'Mechanical', 'MCA', 'MBA'],
      streams: ['BTech', 'pg'],
      university: 'Kakatiya',
      naac: 'A++',
      topGPA: '9.6',
      topPackage: '45',
      image: 'https://media.collegedekho.com/media/uploads/2023/10/18/nit-warangal-campus.jpg',
    },
    {
      name: 'KITS Karimnagar',
      location: 'Karimnagar',
      courses: ['CSE', 'ECE'],
      streams: ['BTech'],
      university: 'Telangana',
      naac: 'A',
      topGPA: '9.5',
      topPackage: '12',
      image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14169955355.jpg',
    },
    {
      name: 'TKR',
      location: 'Karimnagar',
      courses: ['BSc', 'BCA', 'BBA', 'BCom', 'BA', 'MBA', 'MCA', 'Msc'],
      streams: ['ug', 'pg'],
      university: 'JNTU',
      naac: 'A',
      topGPA: '9.5',
      topPackage: '12',
      image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14169955355.jpg',
    },
    {
      name: 'XXXX',
      location: 'Karimnagar',
      courses: ['CSE', 'ECE'],
      streams: ['MTech', 'BTech'],
      university: 'Osmania',
      naac: 'A',
      topGPA: '9.5',
      topPackage: '12',
      image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14169955355.jpg',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = allColleges.filter(
      (college) =>
        college.location === location &&
        college.streams.includes(stream) &&
        college.university.toLowerCase() === university.toLowerCase()
    );
    setResults(filtered);
    setSearchClicked(true);
  };

  const handleClear = () => {
    setLocation('');
    setStream('');
    setUniversity('');
    setResults([]);
    setSearchClicked(false);
  };

  return (
    <div className="college-search-page">
      <h2>Explore Top Partner Colleges and Discover Your Best Fit</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <select value={location} onChange={(e) => setLocation(e.target.value)} required>
          <option value="">Select Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Warangal">Warangal</option>
          <option value="Karimnagar">Karimnagar</option>
        </select>

        <select value={university} onChange={(e) => setUniversity(e.target.value)} required>
          <option value="">Select University</option>
          <option value="JNTU">JNTU</option>
          <option value="Osmania">Osmania</option>
          <option value="Kakatiya">Kakatiya</option>
          <option value="Telangana">Telangana</option>
        </select>

        <select value={stream} onChange={(e) => setStream(e.target.value)} required>
          <option value="">Select Stream</option>
          <option value="BTech">BTech</option>
          <option value="ug">UG</option>
          <option value="pg">PG</option>
          <option value="MTech">MTech</option>
        </select>

        <button type="submit">Search</button>

        {searchClicked && (
          <button type="button" onClick={handleClear} className="clear-btn">
            Clear
          </button>
        )}
      </form>

      {searchClicked && (
        <div className="results-grid">
          {results.length === 0 ? (
            <p className="no-results">No matching colleges found.</p>
          ) : (
            results.map((college, idx) => (
              <div className="college-card" key={idx}>
                <img src={college.image} alt={college.name} className="college-img" />
                <h3>{college.name}</h3>
                <p><strong>Location:</strong> {college.location}</p>
                <p><strong>NAAC:</strong> {college.naac}</p>
                <p><strong>Streams:</strong> {college.streams.join(', ')}</p>
                <p><strong>Courses:</strong> {college.courses.join(', ')}</p>
                <p><strong>Top GPA:</strong> {college.topGPA}</p>
                <p><strong>Highest Package:</strong> ₹{college.topPackage} LPA</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;

