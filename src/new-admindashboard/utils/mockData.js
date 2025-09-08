// Mock data for the dashboard

// KPI data
export const dashboardKPIs = {
  totalUsers: 8742,
  activeJobs: 342,
  applicationsSubmitted: 1287,
  pendingApprovals: 56,
  monthlyChange: {
    totalUsers: 12,
    activeJobs: -5,
    applicationsSubmitted: 23,
    pendingApprovals: 8
  }
};

export const studentKPIs = {
  totalRegistered: 4521,
  onHold: 89,
  rejected: 124,
  approved: 4308
};

export const collegeKPIs = {
  totalRegistered: 312,
  onHold: 14,
  rejected: 23,
  approved: 275
};

export const recruiterKPIs = {
  totalRegistered: 3909,
  onHold: 42,
  rejected: 78,
  approved: 3789
};

// Chart data
export const registrationData = [
  { month: 'Jan', students: 120, colleges: 8, recruiters: 85 },
  { month: 'Feb', students: 145, colleges: 12, recruiters: 78 },
  { month: 'Mar', students: 162, colleges: 15, recruiters: 98 },
  { month: 'Apr', students: 178, colleges: 10, recruiters: 110 },
  { month: 'May', students: 195, colleges: 18, recruiters: 142 },
  { month: 'Jun', students: 210, colleges: 20, recruiters: 135 },
  { month: 'Jul', students: 240, colleges: 22, recruiters: 165 },
  { month: 'Aug', students: 280, colleges: 25, recruiters: 190 },
  { month: 'Sep', students: 260, colleges: 18, recruiters: 175 },
  { month: 'Oct', students: 320, colleges: 28, recruiters: 220 },
  { month: 'Nov', students: 290, colleges: 24, recruiters: 210 },
  { month: 'Dec', students: 350, colleges: 30, recruiters: 250 }
];

export const userComparisonData = [
  { month: 'Jan', total: 5800, active: 4200 },
  { month: 'Feb', total: 6000, active: 4500 },
  { month: 'Mar', total: 6200, active: 4800 },
  { month: 'Apr', total: 6500, active: 5100 },
  { month: 'May', total: 6800, active: 5300 },
  { month: 'Jun', total: 7100, active: 5600 },
  { month: 'Jul', total: 7400, active: 5900 },
  { month: 'Aug', total: 7700, active: 6200 },
  { month: 'Sep', total: 8000, active: 6500 },
  { month: 'Oct', total: 8300, active: 6800 },
  { month: 'Nov', total: 8500, active: 7000 },
  { month: 'Dec', total: 8742, active: 7200 }
];

export const studentStatusData = [
  { name: 'Approved', value: 4308 },
  { name: 'On Hold', value: 89 },
  { name: 'Rejected', value: 124 }
];

export const collegeStatusData = [
  { name: 'Approved', value: 275 },
  { name: 'On Hold', value: 14 },
  { name: 'Rejected', value: 23 }
];

export const recruiterStatusData = [
  { name: 'Approved', value: 3789 },
  { name: 'On Hold', value: 42 },
  { name: 'Rejected', value: 78 }
];

// Table data
export const studentTableData = [
  { id: 1, name: 'John Smith', email: 'john.smith@example.com', status: 'Approved', registrationDate: '2023-05-12' },
  { id: 2, name: 'Emily Johnson', email: 'emily.j@example.com', status: 'On Hold', registrationDate: '2023-05-14' },
  { id: 3, name: 'Michael Brown', email: 'm.brown@example.com', status: 'Approved', registrationDate: '2023-05-10' },
  { id: 4, name: 'Sarah Williams', email: 'sarah.w@example.com', status: 'Rejected', registrationDate: '2023-05-09' },
  { id: 5, name: 'David Miller', email: 'david.m@example.com', status: 'Approved', registrationDate: '2023-05-15' },
  { id: 6, name: 'Jessica Davis', email: 'j.davis@example.com', status: 'Approved', registrationDate: '2023-05-16' },
  { id: 7, name: 'Daniel Wilson', email: 'd.wilson@example.com', status: 'On Hold', registrationDate: '2023-05-17' },
  { id: 8, name: 'Lisa Anderson', email: 'lisa.a@example.com', status: 'Approved', registrationDate: '2023-05-11' }
];

export const collegeTableData = [
  { id: 1, name: 'University of Technology', email: 'admin@uot.edu', status: 'Approved', registrationDate: '2023-03-05' },
  { id: 2, name: 'National College', email: 'info@natcollege.edu', status: 'On Hold', registrationDate: '2023-03-12' },
  { id: 3, name: 'Metropolitan University', email: 'admin@metuni.edu', status: 'Approved', registrationDate: '2023-03-08' },
  { id: 4, name: 'Technical Institute', email: 'contact@techinst.edu', status: 'Rejected', registrationDate: '2023-03-15' },
  { id: 5, name: 'Liberal Arts College', email: 'info@lac.edu', status: 'Approved', registrationDate: '2023-03-20' }
];

export const recruiterTableData = [
  { id: 1, name: 'Tech Solutions Inc.', email: 'hr@techsolutions.com', status: 'Approved', registrationDate: '2023-04-03' },
  { id: 2, name: 'Global Systems', email: 'recruiting@globalsys.com', status: 'Approved', registrationDate: '2023-04-07' },
  { id: 3, name: 'Innovative Labs', email: 'careers@innovlabs.com', status: 'On Hold', registrationDate: '2023-04-10' },
  { id: 4, name: 'Future Tech', email: 'jobs@futuretech.com', status: 'Rejected', registrationDate: '2023-04-12' },
  { id: 5, name: 'Digital Solutions', email: 'hr@digitalsol.com', status: 'Approved', registrationDate: '2023-04-15' },
  { id: 6, name: 'NextGen Systems', email: 'hiring@nextgen.com', status: 'Approved', registrationDate: '2023-04-18' }
];

// Extended data for detailed management views
// Extended student data with location, college, district
export const detailedStudentData = [
  { id: 1, name: 'Riya Sharma', email: 'riya@example.com', status: 'Active', college: 'Delhi Technical University', district: 'Delhi', location: 'New Delhi' },
  { id: 3, name: 'Sneha Patel', email: 'sneha@example.com', status: 'Active', college: 'Mumbai Institute of Technology', district: 'Mumbai', location: 'Maharashtra' },
  { id: 4, name: 'Karan Verma', email: 'karan@example.com', status: 'Active', college: 'Bangalore College of Engineering', district: 'Bangalore Urban', location: 'Karnataka' },
  { id: 6, name: 'Rahul Singh', email: 'rahul@example.com', status: 'Active', college: 'Chennai Arts and Science College', district: 'Chennai', location: 'Tamil Nadu' },
  { id: 8, name: 'Arjun Das', email: 'arjun@example.com', status: 'Active', college: 'Kolkata Medical Institute', district: 'Kolkata', location: 'West Bengal' },
  { id: 9, name: 'Meera Joshi', email: 'meera@example.com', status: 'Active', college: 'Hyderabad Business School', district: 'Hyderabad', location: 'Telangana' },
  { id: 10, name: 'Vikram Malhotra', email: 'vikram@example.com', status: 'Inactive', college: 'Pune Law College', district: 'Pune', location: 'Maharashtra' },
  { id: 11, name: 'Neha Gupta', email: 'neha@example.com', status: 'Active', college: 'Ahmedabad Management Institute', district: 'Ahmedabad', location: 'Gujarat' },
  { id: 12, name: 'Rohit Kumar', email: 'rohit@example.com', status: 'Active', college: 'Jaipur College of Design', district: 'Jaipur', location: 'Rajasthan' },
  { id: 13, name: 'Ananya Reddy', email: 'ananya@example.com', status: 'Inactive', college: 'Lucknow University', district: 'Lucknow', location: 'Uttar Pradesh' },
  { id: 14, name: 'Aditya Sharma', email: 'aditya@example.com', status: 'Active', college: 'Delhi Technical University', district: 'Delhi', location: 'New Delhi' },
  { id: 15, name: 'Priya Mehta', email: 'priya@example.com', status: 'Active', college: 'Mumbai Institute of Technology', district: 'Mumbai', location: 'Maharashtra' },
];

// Extended college data with location and district
export const detailedCollegeData = [
  { id: 1, name: 'Delhi Technical University', email: 'admin@dtu.edu', status: 'Active', district: 'Delhi', location: 'New Delhi' },
  { id: 2, name: 'Mumbai Institute of Technology', email: 'info@mit.edu', status: 'Active', district: 'Mumbai', location: 'Maharashtra' },
  { id: 3, name: 'Bangalore College of Engineering', email: 'admin@bce.edu', status: 'Active', district: 'Bangalore Urban', location: 'Karnataka' },
  { id: 4, name: 'Chennai Arts and Science College', email: 'contact@casc.edu', status: 'Inactive', district: 'Chennai', location: 'Tamil Nadu' },
  { id: 5, name: 'Kolkata Medical Institute', email: 'info@kmi.edu', status: 'Active', district: 'Kolkata', location: 'West Bengal' },
  { id: 6, name: 'Hyderabad Business School', email: 'admin@hbs.edu', status: 'Active', district: 'Hyderabad', location: 'Telangana' },
  { id: 7, name: 'Pune Law College', email: 'info@plc.edu', status: 'Active', district: 'Pune', location: 'Maharashtra' },
  { id: 8, name: 'Ahmedabad Management Institute', email: 'contact@ami.edu', status: 'Inactive', district: 'Ahmedabad', location: 'Gujarat' },
  { id: 9, name: 'Jaipur College of Design', email: 'admin@jcd.edu', status: 'Active', district: 'Jaipur', location: 'Rajasthan' },
  { id: 10, name: 'Lucknow University', email: 'info@lu.edu', status: 'Active', district: 'Lucknow', location: 'Uttar Pradesh' },
];

// Extended recruiter data with location and district
export const detailedRecruiterData = [
  { id: 1, name: 'Infosys Technologies', email: 'careers@infosys.com', status: 'Active', district: 'Bangalore Urban', location: 'Karnataka' },
  { id: 2, name: 'Tata Consultancy Services', email: 'hr@tcs.com', status: 'Active', district: 'Mumbai', location: 'Maharashtra' },
  { id: 3, name: 'Wipro Limited', email: 'jobs@wipro.com', status: 'Active', district: 'Bangalore Urban', location: 'Karnataka' },
  { id: 4, name: 'HCL Technologies', email: 'careers@hcl.com', status: 'Active', district: 'Noida', location: 'Uttar Pradesh' },
  { id: 5, name: 'Tech Mahindra', email: 'hr@techmahindra.com', status: 'Inactive', district: 'Pune', location: 'Maharashtra' },
  { id: 6, name: 'Cognizant Technology Solutions', email: 'recruitment@cognizant.com', status: 'Active', district: 'Chennai', location: 'Tamil Nadu' },
  { id: 7, name: 'Accenture India', email: 'jobs@accenture.com', status: 'Active', district: 'Bangalore Urban', location: 'Karnataka' },
  { id: 8, name: 'Capgemini India', email: 'careers@capgemini.com', status: 'Active', district: 'Gurgaon', location: 'Haryana' },
  { id: 9, name: 'Deloitte India', email: 'hr@deloitte.com', status: 'Inactive', district: 'Mumbai', location: 'Maharashtra' },
  { id: 10, name: 'IBM India', email: 'recruitment@ibm.com', status: 'Active', district: 'Bangalore Urban', location: 'Karnataka' },
  { id: 11, name: 'Amazon India', email: 'jobs@amazon.in', status: 'Active', district: 'Hyderabad', location: 'Telangana' },
  { id: 12, name: 'Flipkart', email: 'careers@flipkart.com', status: 'Active', district: 'Bangalore Urban', location: 'Karnataka' },
];


// Notifications
export const notificationsData = [
  { id: 1, type: 'registration', message: 'New student registration: Emily Johnson', time: '10 minutes ago', read: false },
  { id: 2, type: 'approval', message: 'College approval pending: National College', time: '25 minutes ago', read: false },
  { id: 3, type: 'job', message: 'New job posted by Tech Solutions Inc.', time: '1 hour ago', read: false },
  { id: 4, type: 'application', message: 'New application submitted for Software Developer role', time: '2 hours ago', read: true },
  { id: 5, type: 'registration', message: 'New recruiter registration: Digital Solutions', time: '3 hours ago', read: true }
];

// Navigation items
export const navigationItems = [
  { name: 'Dashboard', path: '/new-admindashboard/dashboard', icon: 'Home' },
  { name: 'Students', path: '/new-admindashboard/students', icon: 'GraduationCap' },
  { name: 'Colleges', path: '/new-admindashboard/colleges', icon: 'Building' },
  { name: 'Recruiters', path: '/new-admindashboard/recruiters', icon: 'Briefcase' },
  { name: 'Settings', path: '/new-admindashboard/settings', icon: 'Settings' }
];

// Management summary data
export const studentManagementSummary = { total: 18432, active: 16891, new: 1541 };
export const collegeManagementSummary = { total: 842, active: 768, new: 74 };
export const recruiterManagementSummary = { total: 5632, active: 4987, new: 645 };
