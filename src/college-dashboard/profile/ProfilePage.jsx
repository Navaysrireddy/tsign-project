import React, { useEffect, useState } from "react";
import "./ProfilePage.css"; // You can create custom styles for this
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("collegeProfileData");
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  if (!profileData) {
    return <p>Loading profile data...</p>;
  }

  return (
    <div className="profile-page">
      <h1>College Profile</h1>
      <div className="profile-section">
        <h2>Basic Details</h2>
        <p><strong>College Name:</strong> {profileData.collegeName}</p>
        <p><strong>Departments:</strong> {profileData.regNumber}</p>
        <p><strong>College Email:</strong> {profileData.collegeEmail}</p>
        <p><strong>College Type:</strong> {profileData.collegeType}</p>
        <p><strong>Established Year:</strong> {profileData.establishedYear}</p>
        <p><strong>University:</strong> {profileData.university}</p>
      </div>

      <div className="profile-section">
        <h2>Location</h2>
        <p><strong>State:</strong> {profileData.state}</p>
        <p><strong>City:</strong> {profileData.city}</p>
        <p><strong>Pin Code:</strong> {profileData.pinCode}</p>
        <p><strong>Address:</strong> {profileData.address}</p>
      </div>

      <div className="profile-section">
        <h2>Contact Details</h2>
        <p><strong>Phone Number:</strong> {profileData.contactNumber}</p>
        <p><strong>College Website:</strong> {profileData.website}</p>
        <p><strong>College Code:</strong> {profileData.code}</p>
      </div>

      <div className="profile-section">
        <h2>Principal Information</h2>
        <p><strong>Name:</strong> {profileData.principalName}</p>
        <p><strong>Email:</strong> {profileData.principalEmail}</p>
      </div>

     <div className="profile-section">
  <h2>Certificates / Logo</h2>
  <div className="image-row">
    <div>
      <p><strong>Affiliation Certificate</strong></p>
      <a href={profileData.certificateImage} target="_blank" rel="noopener noreferrer">
        <img src={profileData.certificateImage} alt="Certificate" className="profile-image" />
      </a>
    </div>
    <div>
      <p><strong>College Image</strong></p>
      <a href={profileData.logoImage} target="_blank" rel="noopener noreferrer">
        <img src={profileData.logoImage} alt="Logo" className="profile-image" />
      </a>
    </div>
  </div>
</div>


      <button className="edit-profile-btn" onClick={() => navigate("/profile-form")}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
