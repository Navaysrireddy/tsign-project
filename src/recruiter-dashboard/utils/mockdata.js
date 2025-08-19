export const mockData = {
  companyName: "TechCorp",
  recruiterName: "Amit Sharma",
  stats: {
    totalCandidates: 1200,
    selected: 750,
    rejected: 300,
    inReview: 150
  },
  monthlyApplications: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: {
      "Engineering (CSE)": [200, 220, 240, 260, 280, 300],
      "Engineering (ECE)": [180, 190, 200, 210, 220, 230],
      "Engineering (IT)": [150, 160, 170, 180, 190, 200],
      "Mechanical": [100, 110, 120, 130, 140, 150],
      "Electrical": [120, 130, 140, 150, 160, 170],
      "Computer Science (Business)": [80, 90, 100, 110, 120, 130]
    }
  },
  departmentSelections: {
    labels: ["Engineering", "Mechanical", "Electrical", "Computer Science"],
    data: [370, 80, 90, 70]
  },
  applicationStatus: {
    labels: ["Selected", "Rejected", "Interviewed", "In Review"],
    datasets: {
      "Engineering (CSE)": [100, 30, 50, 20],
      "Engineering (ECE)": [80, 25, 40, 15],
      "Engineering (IT)": [70, 20, 30, 10],
      "Mechanical": [50, 15, 20, 10],
      "Electrical": [60, 18, 25, 12],
      "Computer Science (Business)": [40, 12, 18, 8]
    }
  },
  candidates: [{
    id: "1",
    name: "Ananya R",
    email: "ananya@abc.com",
    dept: "Engineering",
    course: "CSE",
    cgpa: 8.9,
    resume: "https://example.com/resume1",
    status: "In Review"
  }, {
    id: "2",
    name: "Vikram S",
    email: "vikram@xyz.com",
    dept: "Engineering",
    course: "CSE",
    cgpa: 9.2,
    resume: "https://example.com/resume2",
    status: "Selected"
  }, {
    id: "3",
    name: "Raj P",
    email: "raj@xyz.com",
    dept: "Engineering",
    course: "ECE",
    cgpa: 9.1,
    resume: "https://example.com/resume3",
    status: "Selected"
  }, {
    id: "4",
    name: "Priya K",
    email: "priya@abc.com",
    dept: "Engineering",
    course: "IT",
    cgpa: 8.7,
    resume: "https://example.com/resume4",
    status: "Interviewed"
  }, {
    id: "5",
    name: "Arun M",
    email: "arun@xyz.com",
    dept: "Mechanical",
    course: "",
    cgpa: 8.5,
    resume: "https://example.com/resume5",
    status: "In Review"
  }, {
    id: "6",
    name: "Meena S",
    email: "meena@abc.com",
    dept: "Electrical",
    course: "",
    cgpa: 8.8,
    resume: "https://example.com/resume6",
    status: "Selected"
  }, {
    id: "7",
    name: "Kiran T",
    email: "kiran@xyz.com",
    dept: "Computer Science",
    course: "Business",
    cgpa: 8.6,
    resume: "https://example.com/resume7",
    status: "Rejected"
  }],
  cgpaDistribution: {
    labels: ["<6", "6-7", "7-8", "8+"],
    datasets: {
      "Engineering (CSE)": [20, 50, 80, 100],
      "Engineering (ECE)": [15, 40, 70, 90],
      "Engineering (IT)": [10, 30, 60, 80],
      "Mechanical": [8, 25, 50, 70],
      "Electrical": [10, 30, 55, 75],
      "Computer Science (Business)": [5, 20, 45, 60]
    }
  },
  departmentCandidates: {
    "Engineering (CSE)": 250,
    "Engineering (ECE)": 215,
    "Engineering (IT)": 180,
    "Mechanical": 153,
    "Electrical": 170,
    "Computer Science (Business)": 130
  },
  positions: [{
    id: "1",
    position: "Software Intern",
    dept: "Engineering",
    course: "CSE",
    openings: 10,
    applicants: 80,
    status: "Open"
  }, {
    id: "2",
    position: "ML Engineer",
    dept: "Engineering",
    course: "CSE",
    openings: 5,
    applicants: 50,
    status: "Open"
  }, {
    id: "3",
    position: "Hardware Engineer",
    dept: "Engineering",
    course: "ECE",
    openings: 8,
    applicants: 60,
    status: "Open"
  }, {
    id: "4",
    position: "Network Intern",
    dept: "Engineering",
    course: "IT",
    openings: 6,
    applicants: 45,
    status: "Closed"
  }, {
    id: "5",
    position: "R&D Engineer",
    dept: "Mechanical",
    course: "",
    openings: 5,
    applicants: 45,
    status: "Closed"
  }, {
    id: "6",
    position: "Power Systems Intern",
    dept: "Electrical",
    course: "",
    openings: 7,
    applicants: 55,
    status: "Open"
  }, {
    id: "7",
    position: "Analytics Intern",
    dept: "Computer Science",
    course: "Business",
    openings: 4,
    applicants: 40,
    status: "Open"
  }],
  positionApplications: {
    "Software Intern": 80,
    "ML Engineer": 50,
    "Hardware Engineer": 60,
    "Network Intern": 45,
    "R&D Engineer": 45,
    "Power Systems Intern": 55,
    "Analytics Intern": 40
  },
  fillRateOverTime: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: {
      "Engineering (CSE)": [10, 20, 30, 40, 50, 60],
      "Engineering (ECE)": [8, 15, 25, 35, 45, 55],
      "Engineering (IT)": [6, 12, 18, 24, 30, 36],
      "Mechanical": [5, 10, 15, 20, 25, 30],
      "Electrical": [7, 14, 21, 28, 35, 42],
      "Computer Science (Business)": [4, 8, 12, 16, 20, 24]
    }
  },
  interviews: [{
    id: "1",
    candidate: "Meena S",
    position: "Software Intern",
    date: "5 Aug 2025",
    time: "10:00 AM",
    status: "Scheduled",
    dept: "Engineering",
    course: "CSE"
  }, {
    id: "2",
    candidate: "Vikram S",
    position: "ML Engineer",
    date: "6 Aug 2025",
    time: "2:00 PM",
    status: "Pending",
    dept: "Engineering",
    course: "CSE"
  }, {
    id: "3",
    candidate: "Raj P",
    position: "Hardware Engineer",
    date: "7 Aug 2025",
    time: "11:00 AM",
    status: "Completed",
    dept: "Engineering",
    course: "ECE"
  }, {
    id: "4",
    candidate: "Priya K",
    position: "Network Intern",
    date: "8 Aug 2025",
    time: "3:00 PM",
    status: "No Show",
    dept: "Engineering",
    course: "IT"
  }, {
    id: "5",
    candidate: "Arun M",
    position: "R&D Engineer",
    date: "9 Aug 2025",
    time: "9:00 AM",
    status: "Scheduled",
    dept: "Mechanical",
    course: ""
  }, {
    id: "6",
    candidate: "Meena S",
    position: "Power Systems Intern",
    date: "10 Aug 2025",
    time: "1:00 PM",
    status: "Pending",
    dept: "Electrical",
    course: ""
  }, {
    id: "7",
    candidate: "Kiran T",
    position: "Analytics Intern",
    date: "11 Aug 2025",
    time: "10:00 AM",
    status: "Completed",
    dept: "Computer Science",
    course: "Business"
  }],
  weeklyInterviews: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: {
      "Engineering (CSE)": [10, 12, 15, 18],
      "Engineering (ECE)": [8, 10, 12, 15],
      "Engineering (IT)": [6, 8, 10, 12],
      "Mechanical": [5, 7, 9, 11],
      "Electrical": [7, 9, 11, 13],
      "Computer Science (Business)": [4, 6, 8, 10]
    }
  },
  interviewOutcomes: {
    labels: ["Scheduled", "Pending", "Completed", "No Show"],
    datasets: {
      "Engineering (CSE)": [40, 30, 20, 10],
      "Engineering (ECE)": [35, 25, 25, 15],
      "Engineering (IT)": [30, 20, 30, 20],
      "Mechanical": [25, 25, 30, 20],
      "Electrical": [30, 20, 25, 25],
      "Computer Science (Business)": [20, 20, 30, 30]
    }
  },
  recruiterSettings: {
    name: "Amit Sharma",
    email: "amit@techcorp.com",
    company: "TechCorp",
    designation: "HR Manager",
    notifications: {
      newApplications: true,
      interviews: true,
      frequency: "Instant"
    },
    theme: "light",
    themeColor: "teal",
    security: {
      passwordLastChanged: "2025-06-01",
      twoFactorEnabled: true
    },
    resumeParsing: {
      enabled: true,
      preferredFormats: ["PDF", "DOCX"]
    },
    integrations: {
      ats: "Workable",
      calendar: "Google Calendar"
    }
  }
};