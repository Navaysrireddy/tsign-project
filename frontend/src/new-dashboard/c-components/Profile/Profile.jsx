import React, { useState, useEffect } from 'react';
 
const Profile = () => {
  const [collegeData, setCollegeData] = useState(null);
 
  useEffect(() => {
    const storedData = localStorage.getItem('collegeData');
    if (storedData) {
      setCollegeData(JSON.parse(storedData));
    }
  }, []);
 
  if (!collegeData) {
    return <div className="p-8">Loading college data...</div>;
  }
 
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">College Profile</h1>
     
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          {collegeData.logo && (
            <img
              src={collegeData.logo}
              alt="College Logo"
              className="h-20 w-20 object-contain rounded-full mr-6 border-2 border-teal-400"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold">{collegeData.collegeName}</h2>
            <p className="text-gray-600">{collegeData.registrationNo}</p>
          </div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-3">Basic Information</h3>
            <p><strong>Email:</strong> {collegeData.email}</p>
            <p><strong>Phone:</strong> {collegeData.phone}</p>
            <p><strong>Address:</strong> {collegeData.address}</p>
            <p><strong>State:</strong> {collegeData.state}</p>
            <p><strong>Established:</strong> {collegeData.yearOfEstablishment}</p>
            <p><strong>Institution Sector:</strong> {collegeData.institutionSector}</p>
          </div>
 
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <p><strong>Director Name:</strong> {collegeData.directorName}</p>
            <p><strong>Director Email:</strong> {collegeData.directorEmail}</p>
            <p><strong>Director Contact:</strong> {collegeData.directorContact}</p>
            <p><strong>POC Name:</strong> {collegeData.poCName}</p>
            <p><strong>POC Email:</strong> {collegeData.poCEmail}</p>
            <p><strong>POC Mobile:</strong> {collegeData.poCMobile}</p>
          </div>
        </div>
 
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Academic Information</h3>
          <p><strong>Streams:</strong> {collegeData.streams?.join(', ') || 'None'}</p>
          <p><strong>Courses:</strong> {collegeData.courses?.join(', ') || 'None'}</p>
        </div>
 
        {collegeData.institutionCertificate && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Institution Certificate</h3>
            <img
              src={collegeData.institutionCertificate}
              alt="Institution Certificate"
              className="max-w-xs mx-auto border rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};
 
export default Profile;
 