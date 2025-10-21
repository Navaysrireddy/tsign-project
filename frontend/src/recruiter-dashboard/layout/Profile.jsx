// import React, { useState } from 'react';
 
// const Profile = () => {
//   // Initial user data (can be fetched from API in real app)
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     role: 'Recruiter',
//     company: 'TechCorp Pvt Ltd',
//     location: 'Hyderabad, India',
//     phone: '+91 98765 43210',
//     bio: 'Passionate recruiter with 5+ years of experience in tech hiring and talent acquisition.',
//   });
 
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempUser, setTempUser] = useState(user);
//   const [message, setMessage] = useState('');
 
//   // Handle input changes
//   const handleChange = (e) => {
//     setTempUser({ ...tempUser, [e.target.name]: e.target.value });
//   };
 
//   // Save changes
//   const handleSave = () => {
//     setUser(tempUser);
//     setIsEditing(false);
//     setMessage('Profile updated successfully!');
//     setTimeout(() => setMessage(''), 3000); // Hide message after 3 seconds
//   };
 
//   return (
//     <div className="max-w-3xl mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">My Profile</h1>
 
//       {/* Success message */}
//       {message && (
//         <div className="mb-4 p-3 bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-300">
//           {message}
//         </div>
//       )}
 
//       {/* Profile Card */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
//         <div className="flex items-center gap-6">
//           <div className="h-24 w-24 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-gray-700 dark:text-gray-200">
//             {user.name[0]}
//           </div>
//           <div className="flex-1">
//             {!isEditing ? (
//               <>
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{user.name}</h2>
//                 <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   {user.role} at {user.company}
//                 </p>
//               </>
//             ) : (
//               <>
//                 <input
//                   type="text"
//                   name="name"
//                   value={tempUser.name}
//                   onChange={handleChange}
//                   className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                   placeholder="Full Name"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={tempUser.email}
//                   onChange={handleChange}
//                   className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                   placeholder="Email"
//                 />
//                 <input
//                   type="text"
//                   name="role"
//                   value={tempUser.role}
//                   onChange={handleChange}
//                   className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                   placeholder="Role"
//                 />
//                 <input
//                   type="text"
//                   name="company"
//                   value={tempUser.company}
//                   onChange={handleChange}
//                   className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                   placeholder="Company"
//                 />
//               </>
//             )}
//           </div>
//         </div>
 
//         {/* Info Section */}
//         <div className="mt-6 space-y-3">
//           {!isEditing ? (
//             <>
//               <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> {user.location}</p>
//               <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {user.phone}</p>
//               <p className="text-gray-700 dark:text-gray-300"><strong>Bio:</strong> {user.bio}</p>
//             </>
//           ) : (
//             <>
//               <input
//                 type="text"
//                 name="location"
//                 value={tempUser.location}
//                 onChange={handleChange}
//                 className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                 placeholder="Location"
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 value={tempUser.phone}
//                 onChange={handleChange}
//                 className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                 placeholder="Phone"
//               />
//               <textarea
//                 name="bio"
//                 value={tempUser.bio}
//                 onChange={handleChange}
//                 className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
//                 placeholder="Bio"
//               />
//             </>
//           )}
//         </div>
 
//         {/* Action Buttons */}
//         <div className="mt-6 flex gap-3">
//           {!isEditing ? (
//             <button
//               onClick={() => {
//                 setTempUser(user);
//                 setIsEditing(true);
//               }}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
//             >
//               Edit Profile
//             </button>
//           ) : (
//             <>
//               <button
//                 onClick={handleSave}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
//               >
//                 Save Changes
//               </button>
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all"
//               >
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Profile;





import React, { useState, useEffect } from 'react';

const RecruiterProfile = () => {
  const [user, setUser] = useState({
    companyName: '',
    website: '',
    email: '',
    phone: '',
    address: '',
    recruiterName: '',
    designation: '',
    category: '',
    logo: '',
  });
  const [tempUser, setTempUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('recruiterData'));
    if (storedData) {
      setUser(storedData);
      setTempUser(storedData);
    }
  }, []);

  const handleChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempUser(user);
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(tempUser);
    localStorage.setItem('recruiterData', JSON.stringify(tempUser));
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Recruiter Profile</h2>
      {!isEditing ? (
        <div>
          <p><b>Company Name:</b> {user.companyName}</p>
          <p><b>Website:</b> {user.website}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Address:</b> {user.address}</p>
          <p><b>Recruiter Name:</b> {user.recruiterName}</p>
          <p><b>Designation:</b> {user.designation}</p>
          <p><b>Category:</b> {user.category}</p>
          {user.logo && <img src={user.logo} alt="Company logo" className="max-w-xs mt-4" />}
          <button onClick={handleEdit} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSave} className="space-y-4">
          <input name="companyName" value={tempUser.companyName} onChange={handleChange} required placeholder="Company Name" className="w-full p-2 border rounded" />
          <input name="website" value={tempUser.website} onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded" />
          <input type="email" name="email" value={tempUser.email} onChange={handleChange} required placeholder="Email" className="w-full p-2 border rounded" />
          <input name="phone" value={tempUser.phone} onChange={handleChange} required placeholder="Phone" className="w-full p-2 border rounded" />
          <input name="address" value={tempUser.address} onChange={handleChange} required placeholder="Address" className="w-full p-2 border rounded" />
          <input name="recruiterName" value={tempUser.recruiterName} onChange={handleChange} required placeholder="Recruiter Name" className="w-full p-2 border rounded" />
          <input name="designation" value={tempUser.designation} onChange={handleChange} required placeholder="Designation" className="w-full p-2 border rounded" />
          <select name="category" value={tempUser.category} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Category</option>
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
          {/* Logo update could be added here if needed */}
          <div className="flex gap-4">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
            <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-600 text-white rounded">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RecruiterProfile;