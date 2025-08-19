import React, { useState } from 'react';
 
const Profile = () => {
  // Initial user data (can be fetched from API in real app)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Recruiter',
    company: 'TechCorp Pvt Ltd',
    location: 'Hyderabad, India',
    phone: '+91 98765 43210',
    bio: 'Passionate recruiter with 5+ years of experience in tech hiring and talent acquisition.',
  });
 
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);
  const [message, setMessage] = useState('');
 
  // Handle input changes
  const handleChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };
 
  // Save changes
  const handleSave = () => {
    setUser(tempUser);
    setIsEditing(false);
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000); // Hide message after 3 seconds
  };
 
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">My Profile</h1>
 
      {/* Success message */}
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-300">
          {message}
        </div>
      )}
 
      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-gray-700 dark:text-gray-200">
            {user.name[0]}
          </div>
          <div className="flex-1">
            {!isEditing ? (
              <>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{user.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                <p className="text-gray-500 dark:text-gray-400">
                  {user.role} at {user.company}
                </p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={tempUser.name}
                  onChange={handleChange}
                  className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  value={tempUser.email}
                  onChange={handleChange}
                  className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="role"
                  value={tempUser.role}
                  onChange={handleChange}
                  className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                  placeholder="Role"
                />
                <input
                  type="text"
                  name="company"
                  value={tempUser.company}
                  onChange={handleChange}
                  className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                  placeholder="Company"
                />
              </>
            )}
          </div>
        </div>
 
        {/* Info Section */}
        <div className="mt-6 space-y-3">
          {!isEditing ? (
            <>
              <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> {user.location}</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Bio:</strong> {user.bio}</p>
            </>
          ) : (
            <>
              <input
                type="text"
                name="location"
                value={tempUser.location}
                onChange={handleChange}
                className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                placeholder="Location"
              />
              <input
                type="text"
                name="phone"
                value={tempUser.phone}
                onChange={handleChange}
                className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                placeholder="Phone"
              />
              <textarea
                name="bio"
                value={tempUser.bio}
                onChange={handleChange}
                className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                placeholder="Bio"
              />
            </>
          )}
        </div>
 
        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {!isEditing ? (
            <button
              onClick={() => {
                setTempUser(user);
                setIsEditing(true);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default Profile;