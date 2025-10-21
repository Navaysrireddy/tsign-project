import { useState, useEffect, useRef } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Date formatting utility
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return `Graduation: ${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`;
};

const TEMPLATES = [ "modern", "simple", "creative"];

export default function ResumeBuilderWithTemplates() {
  const [step, setStep] = useState(1);
  const [dark] = useState(false);
  const [template, setTemplate] = useState("modern"); // selected template
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    github: "",
    linkedin: "",
    careerObjective: "",
    education: "",
    degree: "",
    eduLocation: "",
    graduation: "",
    cgpa: "",
    skills: "",
    databases: "",
    webtools: "",
    framework: "",
    projects: "",
    softSkills: "",
    internshipTitle: "",
    internshipCompany: "",
    internshipDuration: "",
    internshipDescription: "",
  });

  const previewRef = useRef();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1a202c";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#f9fafb";
    }
  }, [dark]);

  const update = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }));

  // Download current template preview as PDF
  const downloadPDF = () => {
    if (!previewRef.current) return;

    // Temporarily remove any scrollbars and fix width/height for consistent output
    const preview = previewRef.current;
    const originalWidth = preview.style.width;
    const originalHeight = preview.style.height;
    preview.style.width = "800px";
    preview.style.minHeight = "800px";
    preview.style.overflow = "visible";
    preview.style.backgroundColor = "white";

    html2canvas(preview, { scale: 2, useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        // Add image at (0,0) with scaled width and height to avoid misalignment
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth * ratio, imgHeight * ratio);
        pdf.save(`resume_${template}.pdf`);

        // Reset preview style after export
        preview.style.width = originalWidth;
        preview.style.height = originalHeight;
        preview.style.overflow = "";
        preview.style.backgroundColor = "";
      })
      .catch((err) => {
        alert("Failed to generate PDF: " + err);
        // Reset preview style on error also
        preview.style.width = originalWidth;
        preview.style.height = originalHeight;
        preview.style.overflow = "";
        preview.style.backgroundColor = "";
      });
  };

  // Form Inputs step-wise with better labels & placeholders
  const sections = [
    // 1. Personal Details
    <div key="step1">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Personal Details</h2>

      {[
        { label: "Full Name", field: "name", type: "text", placeholder: "NAVYASRI KARNE" },
        { label: "Phone Number", field: "phone", type: "tel", placeholder: "+91 7569769637" },
        { label: "Email", field: "email", type: "email", placeholder: "karnenavyasrireddy@gmail.com" },
        { label: "GitHub URL", field: "github", type: "url", placeholder: "https://github.com/Navyasrireddy" },
        { label: "LinkedIn URL", field: "linkedin", type: "url", placeholder: "https://linkedin.com/in/navya-karne" }
      ].map(({ label, field, type, placeholder }) => (
        <div key={field} className="mb-4">
          <label className="block mb-1 font-medium dark:text-white">{label}</label>
          <input
            type={type}
            value={data[field]}
            onChange={e => update(field, e.target.value)}
            placeholder={placeholder}
            className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      ))}
      <div className="flex justify-between mt-6">
         <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
        <button onClick={() => setStep(2)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Next</button>
      </div>
    </div>,

    // 2. Career Objective
    <div key="step2">
      <h2 className="text-2xl font-semibold mb-3 dark:text-white">Career Objective</h2>
      <textarea
        rows={6}
        value={data.careerObjective}
        onChange={e => update("careerObjective", e.target.value)}
        placeholder="Describe your career objective..."
        className="w-full rounded border border-gray-300 p-3 bg-white dark:bg-gray-700 dark:border-gray-600 resize-none dark:text-white"
      />
      <div className="flex justify-between mt-6">
        <button onClick={() => setStep(1)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
        <button onClick={() => setStep(3)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Next</button>
      </div>
    </div>,

    // 3. Education
    <div key="step3">
      <h2 className="text-2xl font-semibold mb-3 dark:text-white">Education</h2>
      {[
        { label: "School/University", field: "education", placeholder: "KGREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY" },
        { label: "Degree", field: "degree", placeholder: "BACHELOR OF ENGINEERING" },
        { label: "Location", field: "eduLocation", placeholder: "HYDERABAD, TELANGANA" }
      ].map(({ label, field, placeholder }) => (
        <div key={field} className="mb-4">
          <label className="block mb-1 font-medium dark:text-white">{label}</label>
          <input
            type="text"
            value={data[field]}
            onChange={e => update(field, e.target.value)}
            placeholder={placeholder}
            className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      ))}

      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Graduation Date</label>
        <input
          type="month"
          value={data.graduation}
          onChange={e => update("graduation", e.target.value)}
          className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">CGPA (Optional)</label>
        <input
          type="number"
          value={data.cgpa}
          min="0"
          max="10"
          step="0.01"
          onChange={e => update("cgpa", e.target.value)}
          placeholder="7.01"
          className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Internship Experience Inputs */}
      <h2 className="text-2xl font-semibold mb-3 mt-6 dark:text-white">Internship Experience</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Internship Title</label>
        <input
          type="text"
          value={data.internshipTitle}
          onChange={e => update("internshipTitle", e.target.value)}
          placeholder="Software Engineering Intern"
          className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Company</label>
        <input
          type="text"
          value={data.internshipCompany}
          onChange={e => update("internshipCompany", e.target.value)}
          placeholder="Tech Corp Inc."
          className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Duration</label>
        <input
          type="text"
          value={data.internshipDuration}
          onChange={e => update("internshipDuration", e.target.value)}
          placeholder="June 2022 - August 2022"
          className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Description</label>
        <textarea
          rows={4}
          value={data.internshipDescription}
          onChange={e => update("internshipDescription", e.target.value)}
          placeholder="Describe your responsibilities and achievements..."
          className="w-full rounded border border-gray-300 p-3 bg-white dark:bg-gray-700 dark:border-gray-600 resize-none dark:text-white"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={() => setStep(2)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
        <button onClick={() => setStep(4)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Next</button>
      </div>
    </div>,

    // 4. Technical Skills
    <div key="step4">
      <h2 className="text-2xl font-semibold mb-3 dark:text-white">Technical Skills</h2>
      <textarea
        rows={3}
        value={data.skills}
        onChange={e => update("skills", e.target.value)}
        placeholder="Technologies: HTML, CSS, JavaScript, Java, Python, React.js..."
        className="w-full rounded border border-gray-300 p-3 bg-white dark:bg-gray-700 dark:border-gray-600 resize-none mb-3 dark:text-white"
      />
      {["databases", "webtools", "framework"].map(field => (
        <input
          key={field}
          type="text"
          value={data[field]}
          onChange={e => update(field, e.target.value)}
          placeholder={
            field === "databases"
              ? "Databases: SQL, MongoDB, Flask"
              : field === "webtools"
                ? "Web Tools: VS Code, Git, GitHub, Netlify"
                : "Framework: Bootstrap"
          }
          className="w-full rounded border border-gray-300 p-2 bg-white dark:bg-gray-700 dark:border-gray-600 mb-3 dark:text-white"
        />
      ))}
      <div className="flex justify-between mt-6">
        <button onClick={() => setStep(3)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
        <button onClick={() => setStep(5)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Next</button>
      </div>
    </div>,

    // 5. Projects
    <div key="step5">
      <h2 className="text-2xl font-semibold mb-3 dark:text-white">Projects</h2>
      <textarea
        rows={5}
        value={data.projects}
        onChange={e => update("projects", e.target.value)}
        placeholder="Describe your projects with details like technology used, functionality, impact..."
        className="w-full rounded border border-gray-300 p-3 bg-white dark:bg-gray-700 dark:border-gray-600 resize-none mb-6 dark:text-white"
      />
      <div className="flex justify-between mt-6">
        <button onClick={() => setStep(4)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
        <button onClick={() => setStep(6)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Next</button>
      </div>
    </div>,

    // 6. Soft Skills
    <div key="step6">
      <h2 className="text-2xl font-semibold mb-3 dark:text-white">Soft Skills</h2>
      <textarea
        rows={3}
        value={data.softSkills}
        onChange={e => update("softSkills", e.target.value)}
        placeholder="E.g. Time management, Leadership, Communication, Teamwork, Problem solving"
        className="w-full rounded border border-gray-300 p-3 bg-white dark:bg-gray-700 dark:border-gray-600 resize-none dark:text-white"
      />
      <div className="flex justify-between mt-6">
        <button onClick={() => setStep(5)} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Back</button>
        <button onClick={() => setStep(7)} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Preview</button>
      </div>
    </div>,
  ];

  // Helper for placeholders
  const d = (val, def) => val || def;

  // Resume templates as components:
  const ResumeTemplates = {
    // classic: (
    //   <div
    //     className="font-serif p-6 border border-gray-300 dark:border-gray-700 rounded shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-[800px] mx-auto"
    //     style={{ minHeight: "1123px" }} // Approx A4 height in px for consistent PDF export
    //   >
    //     <h1 className="text-3xl font-bold text-center mb-2">{d(data.name, "NAVYASRI KARNE")}</h1>
    //     <p className="text-center mb-2 text-sm">
    //       {d(data.phone, "+91 7569769637")} | {d(data.email, "karnenavyasrireddy@gmail.com")} |{" "}
    //       <a href={data.github || "#"} className="underline text-blue-700">{d(data.github, "GitHub")}</a> |{" "}
    //       <a href={data.linkedin || "#"} className="underline text-blue-700">{d(data.linkedin, "LinkedIn")}</a>
    //     </p>
    //     <hr className="mb-4 border-b border-gray-400" />
    //     <section className="mb-4">
    //       <h2 className="font-semibold border-b border-gray-600 mb-2">Career Objective</h2>
    //       <p className="whitespace-pre-wrap">{d(data.careerObjective, "Add your career objective here...")}</p>
    //     </section>
    //     <section className="mb-4">
    //       <h2 className="font-semibold border-b border-gray-600 mb-2">Education</h2>
    //       <p>{d(data.education, "KGREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY")}</p>
    //       <p>{d(data.degree, "BACHELOR OF ENGINEERING")} - {d(data.eduLocation, "HYDERABAD, TELANGANA")}</p>
    //       <p>{data.graduation ? formatDate(data.graduation) : "Expected Graduation: Month Year"}</p>
    //       <p>{data.cgpa && `CGPA: ${data.cgpa}`}</p>
    //     </section>

    //     <section className="mb-5">
    //       <h2 className="underline mb-2 font-semibold">Internship Experience</h2>
    //       <p>{d(data.internshipTitle, "Software Engineering Intern")}</p>
    //       <p>{d(data.internshipCompany, "Tech Corp Inc.")} | {d(data.internshipDuration, "June 2022 - August 2022")}</p>
    //       <p className="whitespace-pre-wrap">{d(data.internshipDescription, "Describe your responsibilities and achievements...")}</p>
    //     </section>

    //     <section className="mb-4">
    //       <h2 className="font-semibold border-b border-gray-600 mb-2">Technical Skills</h2>
    //       <ul className="list-disc ml-6">
    //         <li><strong>Technologies:</strong> {d(data.skills, "HTML, CSS, JavaScript, Java, Python, React.js")}</li>
    //         <li><strong>Databases:</strong> {d(data.databases, "SQL, MongoDB, Flask")}</li>
    //         <li><strong>Web Tools:</strong> {d(data.webtools, "VS Code, Git, GitHub")}</li>
    //         <li><strong>Framework:</strong> {d(data.framework, "Bootstrap")}</li>
    //       </ul>
    //     </section>
    //     <section className="mb-4">
    //       <h2 className="font-semibold border-b border-gray-600 mb-2">Projects</h2>
    //       <p className="whitespace-pre-wrap">{d(data.projects, "Describe your projects here...")}</p>
    //     </section>
    //     <section>
    //       <h2 className="font-semibold border-b border-gray-600 mb-2">Soft Skills</h2>
    //       <p>{d(data.softSkills, "Time management, Leadership skills, Communication")}</p>
    //     </section>
    //   </div>
    // ),

    modern: (
      <div className="font-sans p-6 border border-gray-300 dark:border-gray-700 rounded shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-[800px] mx-auto " style={{ minHeight: "1123px" }}>
        <header className="flex justify-between items-center mb-4 pb-2 border-b border-gray-600 dark:text-white ">
          <h1 className="text-3xl font-extrabold text-purple-700 ">{d(data.name, "NAVYASRI KARNE")}</h1>
          <address className="text-sm not-italic text-right">
            <div>{d(data.phone, "+91 7569769637")}</div>
            <div>{d(data.email, "karnenavyasrireddy@gmail.com")}</div>
            <div>
              <a href={data.github || "#"} className="underline text-blue-700 mr-2">GitHub</a>
              <a href={data.linkedin || "#"} className="underline text-blue-700">LinkedIn</a>
            </div>
          </address>
        </header>
        <section className="mb-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
          <h2 className="font-semibold mb-2 border-b border-gray-300 dark:border-gray-700">Career Objective</h2>
          <p className="whitespace-pre-wrap">{d(data.careerObjective, "Add your career objective here...")}</p>
        </section>
        <section className="mb-4">
          <h2 className="font-semibold mb-2 border-b border-gray-300 dark:border-gray-700">Education</h2>
          <p><strong>{d(data.education, "KGREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY")}</strong></p>
          <p>{d(data.degree, "BACHELOR OF ENGINEERING")} · {d(data.eduLocation, "HYDERABAD, TELANGANA")}</p>
          <p><em>{data.graduation ? formatDate(data.graduation) : "Expected Graduation: Month Year"}</em></p>
          <p>{data.cgpa && `CGPA: ${data.cgpa}`}</p>
        </section>
        <section className="mb-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
          <h2 className="font-semibold mb-2 border-b border-gray-300 dark:border-gray-700">Technical Skills</h2>
          <ul className="list-disc ml-6">
            <li>Technologies: {d(data.skills, "HTML, CSS, JavaScript, Java, Python, React.js")}</li>
            <li>Databases: {d(data.databases, "SQL, MongoDB, Flask")}</li>
            <li>Web Tools: {d(data.webtools, "VS Code, Git, GitHub")}</li>
            <li>Framework: {d(data.framework, "Bootstrap")}</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="font-semibold mb-2 border-b border-gray-300 dark:border-gray-700">Projects</h2>
          <p className="whitespace-pre-wrap">{d(data.projects, "Describe your projects here...")}</p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 border-b border-gray-300 dark:border-gray-700">Soft Skills</h2>
          <p>{d(data.softSkills, "Time management, Leadership skills, Communication")}</p>
        </section>
      </div>
    ),

    simple: (
      <div className="font-sans p-6 border border-gray-300 dark:border-gray-700 rounded shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-[800px] mx-auto" style={{ minHeight: "1123px" }}>
        <h1 className="text-2xl font-bold text-center mb-3">{d(data.name, "NAVYASRI KARNE")}</h1>
        <p className="text-center text-sm mb-5">{d(data.phone, "+91 7569769637")} | {d(data.email, "karnenavyasrireddy@gmail.com")}</p>
        <section className="mb-5">
          <h2 className="underline mb-2 font-semibold">Career Objective</h2>
          <p className="whitespace-pre-wrap">{d(data.careerObjective, "Add your career objective here...")}</p>
        </section>
        <section className="mb-5">
          <h2 className="underline mb-2 font-semibold">Education</h2>
          <p>{d(data.education, "KGREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY")}</p>
          <p>{d(data.degree, "BACHELOR OF ENGINEERING")} | {d(data.eduLocation, "HYDERABAD, TELANGANA")}</p>
          <p>{data.graduation ? formatDate(data.graduation) : "Expected Graduation: Month Year"}</p>
          <p>{data.cgpa && `CGPA: ${data.cgpa}`}</p>
        </section>

        <section className="mb-5">
          <h2 className="underline mb-2 font-semibold">Internship Experience</h2>
          <p>{d(data.internshipTitle, "Software Engineering Intern")}</p>
          <p>{d(data.internshipCompany, "Tech Corp Inc.")} | {d(data.internshipDuration, "June 2022 - August 2022")}</p>
          <p className="whitespace-pre-wrap">{d(data.internshipDescription, "Describe your responsibilities and achievements...")}</p>
        </section>
        <section className="mb-5">
          <h2 className="underline mb-2 font-semibold">Technical Skills</h2>
          <p><strong>Technologies:</strong> {d(data.skills, "HTML, CSS, JavaScript, Java, Python, React.js")}</p>
          <p><strong>Databases:</strong> {d(data.databases, "SQL, MongoDB, Flask")}</p>
          <p><strong>Web Tools:</strong> {d(data.webtools, "VS Code, Git, GitHub")}</p>
          <p><strong>Framework:</strong> {d(data.framework, "Bootstrap")}</p>
        </section>
        <section className="mb-5">
          <h2 className="underline mb-2 font-semibold">Projects</h2>
          <p className="whitespace-pre-wrap">{d(data.projects, "Describe your projects here...")}</p>
        </section>
        <section>
          <h2 className="underline mb-2 font-semibold">Soft Skills</h2>
          <p>{d(data.softSkills, "Time management, Leadership skills, Communication")}</p>
        </section>
      </div>
    ),

    creative: (
      <div className="font-sans p-8 max-w-[800px] mx-auto bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded shadow-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" style={{ minHeight: "1123px" }}>
        <header className="text-center mb-6 p-5 bg-gradient-to-r from-purple-700 to-blue-500 rounded text-white">
          <h1 className="text-3xl font-bold">{d(data.name, "NAVYASRI KARNE")}</h1>
          <p className="mt-1">{d(data.phone, "+91 7569769637")} | {d(data.email, "karnenavyasrireddy@gmail.com")}</p>
          <p className="mt-1">
            <a href={data.github || "#"} className="underline">
              {d(data.github, "GitHub")}
            </a>{" "}
            |{" "}
            <a href={data.linkedin || "#"} className="underline">
              {d(data.linkedin, "LinkedIn")}
            </a>
          </p>
        </header>
        <section className="mb-5 border-l-4 border-purple-600 pl-4">
          <h2 className="font-semibold text-lg text-purple-700 mb-2">Career Objective</h2>
          <p className="whitespace-pre-wrap">{d(data.careerObjective, "Add your career objective here...")}</p>
        </section>
        <section className="mb-5 border-l-4 border-cyan-500 pl-4">
          <h2 className="font-semibold text-lg text-cyan-600 mb-2">Education</h2>
          <p>{d(data.education, "KGREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY")}</p>
          <p>{d(data.degree, "BACHELOR OF ENGINEERING")} | {d(data.eduLocation, "HYDERABAD, TELANGANA")}</p>
          <p>{data.graduation ? formatDate(data.graduation) : "Expected Graduation: Month Year"}</p>
          <p>{data.cgpa && `CGPA: ${data.cgpa}`}</p>
        </section>
        <section className="mb-5 border-l-4 border-cyan-500 pl-4">
          <h2 className="font-semibold text-lg text-cyan-600 mb-2">Technical Skills</h2>
          <p>Technologies: {d(data.skills, "HTML, CSS, JavaScript, Java, Python, React.js")}</p>
          <p>Databases: {d(data.databases, "SQL, MongoDB, Flask")}</p>
          <p>Web Tools: {d(data.webtools, "VS Code, Git, GitHub")}</p>
          <p>Framework: {d(data.framework, "Bootstrap")}</p>
        </section>
        <section className="mb-5 border-l-4 border-cyan-500 pl-4">
          <h2 className="font-semibold text-lg text-cyan-600 mb-2">Projects</h2>
          <p className="whitespace-pre-wrap">{d(data.projects, "Describe your projects here...")}</p>
        </section>
        <section className="border-l-4 border-cyan-500 pl-4">
          <h2 className="font-semibold text-lg text-cyan-600 mb-2">Soft Skills</h2>
          <p>{d(data.softSkills, "Time management, Leadership skills, Communication")}</p>
        </section>
      </div>
    ),
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
      {/* Theme Toggle */}
      {/* <button
        onClick={() => setDark(!dark)}
        className="fixed top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-xl z-50"
        aria-label="Switch dark mode"
      >
        {dark ? <FaSun size={22} /> : <FaMoon size={22} />}
      </button> */}

      <div className="max-w-5xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left dark:text-white">Student Resume Builder</h1>
          {/* Step indicator */}
          <div className="flex justify-center lg:justify-start gap-3 mb-8">
            {[...Array(sections.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStep(idx + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === idx + 1
                    ? "bg-blue-600 text-white"
                    : step > idx + 1
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                } transition`}
                aria-label={`Go to step ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            {sections[step - 1]}
          </div>

          {/* Template selector */}
          <div className="mt-8 text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Select Resume Template</h2>
            <div className="flex justify-center lg:justify-start gap-4 dark:text-white">
              {TEMPLATES.map((temp) => (
                <button
                  key={temp}
                  onClick={() => setTemplate(temp)}
                  className={`border rounded-lg p-3 w-24 transition ${
                    template === temp
                      ? "border-blue-600 shadow-lg scale-105"
                      : "border-gray-400 dark:border-gray-600"
                  }`}
                  aria-label={`Select ${temp} template`}
                >
                  <span className="capitalize text-center block">{temp}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-center lg:text-left dark:text-white">Resume Preview</h2>
          {/* Added fixed size, white bg container for accurate PDF export */}
          <div
            ref={previewRef}
            className="overflow-visible"
            style={{
              width: "600px",
              minHeight: "1123px",
              backgroundColor: "white",
              margin: "0 auto",
              borderRadius: "6px",
            }}
          >
            {ResumeTemplates[template]}
          </div>
          {step > sections.length && (
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={() => setStep(sections.length)}
                className="bg-gray-600 text-white px-5 py-2 rounded hover:bg-white-700"
              >
                Back to Edit
              </button>
              <button
                onClick={downloadPDF}
                className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800"
              >
                Download PDF
              </button>
            </div>
          )}
          {step === sections.length && (
            <button
              onClick={() => setStep(step + 1)}
              className="mt-4 w-full bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
            >
              Preview Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
