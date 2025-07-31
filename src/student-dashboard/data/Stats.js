import { FaGraduationCap, FaBookOpen, FaProjectDiagram } from "react-icons/fa";

const stats = [
  {
    title: "Current GPA",
    value: "8.6",
    icon: <FaGraduationCap size={24} />,
    color: "#4CAF50"
  },
  {
    title: "Completed Courses",
    value: "18",
    icon: <FaBookOpen size={24} />,
    color: "#2196F3"
  },
  {
    title: "Active Projects",
    value: "3",
    icon: <FaProjectDiagram size={24} />,
    color: "#FF9800"
  }
];

export default stats;