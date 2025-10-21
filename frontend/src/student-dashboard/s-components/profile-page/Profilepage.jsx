import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const fallbackProfile = {
  studentName: "",
  studentId: "",
  email: "",
  gender: "",
  dob: "",
  state: "",
  city: "",
  pinCode: "",
  address: "",
  contactNumber: "",
  alternateEmail: "",
  tenthSchool: "",
  tenthYear: "",
  tenthPercentage: "",
  interCollege: "",
  interYear: "",
  interPercentage: "",
  degreeCollege: "",
  degreeYear: "",
  degreePercentage: "",
  isFresher: "Yes",
  experience: "",
  summary: "",
  technicalSkills: "",
  softSkills: "",
  certifications: "",
  certificateImages: [],
  profileImage: null,
  projects: [],
};

function patchProfile(data) {
  return {
    ...fallbackProfile,
    ...data,
    certificateImages: Array.isArray(data?.certificateImages) ? data.certificateImages : [],
    projects: Array.isArray(data?.projects) ? data.projects : [],
  };
}

const StudentProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(fallbackProfile);

  useEffect(() => {
    const data = localStorage.getItem("StudentProfileData");
    if (data) {
      try {
        setProfile(patchProfile(JSON.parse(data)));
      } catch {
        setProfile(fallbackProfile);
      }
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Student Profile</h1>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-150"
          onClick={() => navigate("/profile-form")}
        >
          Edit
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-12 rounded border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex-shrink-0">
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-500 shadow-md">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="bg-gray-300 dark:bg-gray-600 w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold text-xl">
                No Photo
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <table className="w-full table-auto border-collapse text-gray-800 dark:text-gray-300">
            <tbody>
              {[
                ["Name", profile.studentName],
                ["Student ID", profile.studentId],
                ["Email", profile.email],
                ["Gender", profile.gender],
                ["Date of Birth", profile.dob],
                ["Contact Number", profile.contactNumber],
                ["Alternate Email", profile.alternateEmail],
                ["Address", profile.address],
                ["Location", `${profile.city}, ${profile.state} - ${profile.pinCode}`],
                ["Summary", profile.summary],
                ["Technical Skills", profile.technicalSkills],
                ["Soft Skills", profile.softSkills],
                ["Certifications", profile.certifications],
                ["Fresher", profile.isFresher],
              ].map(([label, value], idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100 dark:bg-gray-700" : ""}>
                  <th className="px-4 py-2 text-left font-medium w-48">{label}</th>
                  <td className="px-4 py-2">{value || "-"}</td>
                </tr>
              ))}
              {profile.isFresher === "No" && (
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-2 text-left font-medium w-48">Experience</th>
                  <td className="px-4 py-2">{profile.experience || "-"}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Education</h2>
        <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 shadow-sm text-gray-800 dark:text-gray-300">
          <tbody>
            {[
              ["10th", `${profile.tenthSchool}, ${profile.tenthYear} - ${profile.tenthPercentage}%`],
              ["Intermediate", `${profile.interCollege}, ${profile.interYear} - ${profile.interPercentage}%`],
              ["Degree", `${profile.degreeCollege}, ${profile.degreeYear} - ${profile.degreePercentage}%`],
            ].map(([label, value], idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-700/50" : ""}>
                <th className="px-4 py-2 text-left font-medium w-48">{label}</th>
                <td className="px-4 py-2">{value || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Projects</h2>
        {profile.projects && profile.projects.length > 0 ? (
          <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 shadow-sm text-gray-800 dark:text-gray-300">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Key Points</th>
              </tr>
            </thead>
            <tbody>
              {profile.projects.map((p, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""}>
                  <td className="border px-4 py-2">{p.title || "-"}</td>
                  <td className="border px-4 py-2">{p.keyPoints || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No projects filled.</p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Certificate Images</h2>
        <div className="flex gap-6 flex-wrap">
          {profile.certificateImages && profile.certificateImages.length > 0 ? (
            profile.certificateImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Certificate ${idx + 1}`}
                className="w-40 h-40 object-cover border rounded shadow"
              />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No certificates uploaded.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudentProfilePage;
