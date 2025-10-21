import React, { useState } from 'react';

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
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Explore Top Partner Colleges and Discover Your Best Fit</h2>
      <form
        className="flex flex-wrap gap-4 justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="px-4 py-2 text-base rounded-lg border border-gray-300 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Warangal">Warangal</option>
          <option value="Karimnagar">Karimnagar</option>
        </select>

        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
          className="px-4 py-2 text-base rounded-lg border border-gray-300 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select University</option>
          <option value="JNTU">JNTU</option>
          <option value="Osmania">Osmania</option>
          <option value="Kakatiya">Kakatiya</option>
          <option value="Telangana">Telangana</option>
        </select>

        <select
          value={stream}
          onChange={(e) => setStream(e.target.value)}
          required
          className="px-4 py-2 text-base rounded-lg border border-gray-300 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Stream</option>
          <option value="BTech">BTech</option>
          <option value="ug">UG</option>
          <option value="pg">PG</option>
          <option value="MTech">MTech</option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium min-w-[120px] transition-colors hover:bg-blue-700"
        >
          Search
        </button>

        {searchClicked && (
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-medium min-w-[120px] transition-colors hover:bg-gray-400"
          >
            Clear
          </button>
        )}
      </form>

      {searchClicked && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
          {results.length === 0 ? (
            <p className="text-gray-500 italic col-span-full">No matching colleges found.</p>
          ) : (
            results.map((college, idx) => (
              <div className="bg-white rounded-lg shadow-md p-5 text-left flex flex-col" key={idx}>
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold mb-1">{college.name}</h3>
                <p><span className="font-semibold">Location:</span> {college.location}</p>
                <p><span className="font-semibold">NAAC:</span> {college.naac}</p>
                <p><span className="font-semibold">Streams:</span> {college.streams.join(', ')}</p>
                <p><span className="font-semibold">Courses:</span> {college.courses.join(', ')}</p>
                <p><span className="font-semibold">Top GPA:</span> {college.topGPA}</p>
                <p><span className="font-semibold">Highest Package:</span> ₹{college.topPackage} LPA</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;
