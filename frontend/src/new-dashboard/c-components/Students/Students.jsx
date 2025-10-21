import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {  FilterIcon, DownloadIcon } from 'lucide-react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const departments = [
  { id: 'dept1', name: 'B.Tech' },
  { id: 'dept2', name: 'M.Tech' },
  { id: 'dept3', name: 'MBA' },
  { id: 'dept4', name: 'Degree' },
]

const courses = [
  { id: 'course1', departmentId: 'dept1', name: 'Computer Science and Engineering (CSE)' },
  { id: 'course2', departmentId: 'dept1', name: 'Electrical Engineering (EE)' },
  { id: 'course3', departmentId: 'dept1', name: 'Mechanical Engineering (ME)' },
  { id: 'course4', departmentId: 'dept2', name: 'Advanced Computing (AC)' },
  { id: 'course5', departmentId: 'dept2', name: 'Power Systems (PS)' },
  { id: 'course6', departmentId: 'dept3', name: 'Master of Business Administration (MBA)' },
  { id: 'course7', departmentId: 'dept4', name: 'Bachelor of Science (BSc)' },
]

const students = [
  { id: 'stu1', name: 'John Doe', email: 'john@example.com', department: 'B.Tech', course: 'CSE', year: 4, gpa: 8.5, placement: { status: 'Placed', company: 'Google', package: '12 LPA' }, },
  { id: 'stu2', name: 'Jane Smith', email: 'jane@example.com', department: 'B.Tech', course: 'EE', year: 3, gpa: 7.8, placement: { status: 'Not Placed', company: '', package: '' }, },
  { id: 'stu3', name: 'Alice Johnson', email: 'alice@example.com', department: 'M.Tech', course: 'AC', year: 2, gpa: 9.2, placement: { status: 'Placed', company: 'Microsoft', package: '15 LPA' }, },
  { id: 'stu4', name: 'Bob Williams', email: 'bob@example.com', department: 'MBA', course: 'MBA', year: 2, gpa: 8.1, placement: { status: 'Placed', company: 'Amazon', package: '14 LPA' }, },
  { id: 'stu5', name: 'Charlie Brown', email: 'charlie@example.com', department: 'Degree', course: 'BSc', year: 1, gpa: 7.5, placement: { status: 'Not Placed', company: '', package: '' }, },
  { id: 'stu6', name: 'David Wilson', email: 'david@example.com', department: 'B.Tech', course: 'ME', year: 4, gpa: 8.9, placement: { status: 'Placed', company: 'Tesla', package: '18 LPA' }, },
  { id: 'stu7', name: 'Eva Davis', email: 'eva@example.com', department: 'M.Tech', course: 'PS', year: 2, gpa: 9.0, placement: { status: 'Not Placed', company: '', package: '' }, },
  { id: 'stu8', name: 'Frank Miller', email: 'frank@example.com', department: 'B.Tech', course: 'CSE', year: 3, gpa: 8.2, placement: { status: 'Placed', company: 'Infosys', package: '10 LPA' }, },
  { id: 'stu9', name: 'Grace Lee', email: 'grace@example.com', department: 'MBA', course: 'MBA', year: 1, gpa: 7.9, placement: { status: 'Not Placed', company: '', package: '' }, },
  { id: 'stu10', name: 'Henry Taylor', email: 'henry@example.com', department: 'Degree', course: 'BSc', year: 2, gpa: 8.0, placement: { status: 'Placed', company: 'Wipro', package: '9 LPA' }, },
]


const departmentAcademicData = {
  'B.Tech': {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
    datasets: [
      {
        label: 'All Students',
        data: [7.2, 7.8, 8.3, 8.7],
        borderColor: 'rgba(20, 184, 166, 1)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [7.5, 8.1, 8.6, 9.0],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [6.8, 7.2, 7.5, 7.9],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
  'M.Tech': {
    labels: ['Year 1', 'Year 2'],
    datasets: [
      {
        label: 'All Students',
        data: [8.5, 9.0],
        borderColor: 'rgba(6, 182, 212, 1)',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [8.8, 9.2],
        borderColor: 'rgba(8, 145, 178, 1)',
        backgroundColor: 'rgba(8, 145, 178, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [7.9, 8.5],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
  MBA: {
    labels: ['Year 1', 'Year 2'],
    datasets: [
      {
        label: 'All Students',
        data: [7.8, 8.3],
        borderColor: 'rgba(244, 63, 94, 1)',
        backgroundColor: 'rgba(244, 63, 94, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [8.1, 8.6],
        borderColor: 'rgba(225, 29, 72, 1)',
        backgroundColor: 'rgba(225, 29, 72, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [7.2, 7.5],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
  Degree: {
    labels: ['Year 1', 'Year 2', 'Year 3'],
    datasets: [
      {
        label: 'All Students',
        data: [7.5, 7.9, 8.2],
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [7.8, 8.2, 8.5],
        borderColor: 'rgba(217, 119, 6, 1)',
        backgroundColor: 'rgba(217, 119, 6, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [7.0, 7.3, 7.6],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
}


const courseAcademicData = {
  CSE: {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
    datasets: [
      {
        label: 'All Students',
        data: [7.5, 8.0, 8.5, 9.0],
        borderColor: 'rgba(20, 184, 166, 1)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [7.8, 8.3, 8.8, 9.3],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [6.9, 7.2, 7.5, 7.8],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
  EE: {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
    datasets: [
      {
        label: 'All Students',
        data: [7.0, 7.5, 8.0, 8.4],
        borderColor: 'rgba(6, 182, 212, 1)',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [7.3, 7.8, 8.3, 8.7],
        borderColor: 'rgba(8, 145, 178, 1)',
        backgroundColor: 'rgba(8, 145, 178, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [6.5, 6.8, 7.2, 7.5],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
  AC: {
    labels: ['Year 1', 'Year 2'],
    datasets: [
      {
        label: 'All Students',
        data: [8.6, 9.1],
        borderColor: 'rgba(20, 184, 166, 1)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [8.9, 9.3],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [8.0, 8.5],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
  MBA: {
    labels: ['Year 1', 'Year 2'],
    datasets: [
      {
        label: 'All Students',
        data: [7.9, 8.4],
        borderColor: 'rgba(244, 63, 94, 1)',
        backgroundColor: 'rgba(244, 63, 94, 0.1)',
        fill: true,
      },
      {
        label: 'Placed Students',
        data: [8.2, 8.7],
        borderColor: 'rgba(225, 29, 72, 1)',
        backgroundColor: 'rgba(225, 29, 72, 0.1)',
        fill: true,
      },
      {
        label: 'Non-Placed Students',
        data: [7.3, 7.6],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
    ],
  },
}

const LineChart = ({ title, labels, datasets, darkMode }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#e5e7eb' : '#374151',
        },
      },
      title: {
        display: true,
        text: title,
        color: darkMode ? '#e5e7eb' : '#374151',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 6,
        max: 10,
        grid: { color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)' },
        ticks: { color: darkMode ? '#9ca3af' : '#6b7280' },
      },
      x: {
        grid: { color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)' },
        ticks: { color: darkMode ? '#9ca3af' : '#6b7280' },
      },
    },
  }
  const data = { labels, datasets }
  return <Line options={options} data={data} />
}

const BarChart = ({ title, labels, datasets, stacked = false, darkMode }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#e5e7eb' : '#374151',
        },
      },
      title: {
        display: true,
        text: title,
        color: darkMode ? '#e5e7eb' : '#374151',
      },
    },
    scales: {
      x: {
        stacked: stacked,
        grid: { color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)' },
        ticks: { color: darkMode ? '#9ca3af' : '#6b7280' },
      },
      y: {
        stacked: stacked,
        grid: { color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)' },
        ticks: { color: darkMode ? '#9ca3af' : '#6b7280' },
      },
    },
  }
  const data = { labels, datasets }
  return <Bar options={options} data={data} />
}

const Students = ({ darkMode }) => {
  const [view, setView] = useState('all') // options: all, placed, non_placed
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState('All')
  const [searchQuery] = useState('')
  const [filteredStudents, setFilteredStudents] = useState(students)
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedGpa, setSelectedGpa] = useState('All') // NEW complex GPA filter state
  const [studentPerformanceData, setStudentPerformanceData] = useState(null)
  const [studentDistributionData, setStudentDistributionData] = useState(null)

  const getShortName = useCallback((courseName) => {
    const shortName = courseName.match(/\(([^)]+)\)/)
    return shortName ? shortName[1] : courseName
  }, [])

  const generateStudentPerformanceData = useCallback(
    (filteredStudents) => {
      if (selectedDepartment !== 'All' && selectedCourse === 'All') {
        if (departmentAcademicData[selectedDepartment]) {
          const deptData = departmentAcademicData[selectedDepartment]
          setStudentPerformanceData({
            labels: deptData.labels,
            datasets:
              view === 'placed'
                ? [deptData.datasets.find((d) => d.label === 'Placed Students')]
                : view === 'non_placed'
                ? [deptData.datasets.find((d) => d.label === 'Non-Placed Students')]
                : [deptData.datasets.find((d) => d.label === 'All Students')],
          })
          return
        }
      }
      if (selectedCourse !== 'All') {
        if (courseAcademicData[selectedCourse]) {
          const courseData = courseAcademicData[selectedCourse]
          setStudentPerformanceData({
            labels: courseData.labels,
            datasets:
              view === 'placed'
                ? [courseData.datasets.find((d) => d.label === 'Placed Students')]
                : view === 'non_placed'
                ? [courseData.datasets.find((d) => d.label === 'Non-Placed Students')]
                : [courseData.datasets.find((d) => d.label === 'All Students')],
          })
          return
        }
      }
      const years = [1, 2, 3, 4]
      const avgGpaByYear = years.map((year) => {
        const yearStudents = filteredStudents.filter((s) => s.year === year)
        if (yearStudents.length === 0) return 0
        return (
          yearStudents.reduce((sum, s) => sum + s.gpa, 0) / yearStudents.length
        )
      })
      setStudentPerformanceData({
        labels: years.map((y) => `Year ${y}`),
        datasets: [
          {
            label: view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students',
            data: avgGpaByYear,
            borderColor:
              view === 'placed'
                ? 'rgba(16, 185, 129, 1)'
                : view === 'non_placed'
                ? 'rgba(239, 68, 68, 1)'
                : 'rgba(20, 184, 166, 1)',
            backgroundColor:
              view === 'placed'
                ? 'rgba(16, 185, 129, 0.1)'
                : view === 'non_placed'
                ? 'rgba(239, 68, 68, 0.1)'
                : 'rgba(20, 184, 166, 0.1)',
            fill: true,
          },
        ],
      })
    },
    [selectedDepartment, selectedCourse, view],
  )

  const generateStudentDistributionData = useCallback(
    (filteredStudents) => {
      if (selectedDepartment === 'All' && selectedCourse === 'All') {
        const deptLabels = departments.map((d) => d.name)
        const deptCounts = deptLabels.map(
          (dept) =>
            filteredStudents.filter((s) => s.department === dept).length,
        )
        setStudentDistributionData({
          labels: deptLabels,
          datasets: [
            {
              label: view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students',
              data: deptCounts,
              backgroundColor:
                view === 'placed'
                  ? 'rgba(16, 185, 129, 0.8)'
                  : view === 'non_placed'
                  ? 'rgba(239, 68, 68, 0.8)'
                  : 'rgba(20, 184, 166, 0.8)',
            },
          ],
        })
      } else if (selectedDepartment !== 'All' && selectedCourse === 'All') {
        const deptCourses = courses
          .filter(
            (c) =>
              c.departmentId ===
              departments.find((d) => d.name === selectedDepartment)?.id,
          )
          .map((c) => getShortName(c.name))
        const courseCounts = deptCourses.map(
          (course) =>
            filteredStudents.filter((s) => s.course === course).length,
        )
        setStudentDistributionData({
          labels: deptCourses,
          datasets: [
            {
              label: view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students',
              data: courseCounts,
              backgroundColor:
                view === 'placed'
                  ? 'rgba(16, 185, 129, 0.8)'
                  : view === 'non_placed'
                  ? 'rgba(239, 68, 68, 0.8)'
                  : 'rgba(20, 184, 166, 0.8)',
            },
          ],
        })
      } else if (selectedCourse !== 'All') {
        const years = [1, 2, 3, 4]
        const yearCounts = years.map(
          (year) => filteredStudents.filter((s) => s.year === year).length,
        )
        setStudentDistributionData({
          labels: years.map((y) => `Year ${y}`),
          datasets: [
            {
              label: view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students',
              data: yearCounts,
              backgroundColor:
                view === 'placed'
                  ? 'rgba(16, 185, 129, 0.8)'
                  : view === 'non_placed'
                  ? 'rgba(239, 68, 68, 0.8)'
                  : 'rgba(20, 184, 166, 0.8)',
            },
          ],
        })
      }
    },
    [selectedDepartment, selectedCourse, view, getShortName],
  )

  useEffect(() => {
    let result = [...students]

    if (view === 'placed') {
      result = result.filter((student) => student.placement.status === 'Placed')
    } else if (view === 'non_placed') {
      result = result.filter((student) => student.placement.status === 'Not Placed')
    }

    if (selectedDepartment !== 'All') {
      result = result.filter((student) => student.department === selectedDepartment)
    }

    if (selectedCourse !== 'All') {
      result = result.filter((student) => student.course === selectedCourse)
    }

    if (selectedYear !== 'All') {
      result = result.filter((student) => student.year === Number(selectedYear))
    }

    // GPA filtering with extended options
    if (selectedGpa === 'Highest' && result.length > 0) {
      const maxGpa = Math.max(...result.map(student => student.gpa))
      result = result.filter(student => student.gpa === maxGpa)
    } else if (selectedGpa === 'Lowest' && result.length > 0) {
      const minGpa = Math.min(...result.map(student => student.gpa))
      result = result.filter(student => student.gpa === minGpa)
    } else if (selectedGpa === 'Middle' && result.length > 2) {
      const uniqueGpas = Array.from(new Set(result.map(student => student.gpa))).sort((a, b) => a - b)
      if (uniqueGpas.length > 2) {
        const minGpa = uniqueGpas[0]
        const maxGpa = uniqueGpas[uniqueGpas.length - 1]
        result = result.filter(student => student.gpa !== minGpa && student.gpa !== maxGpa)
      } else {
        // If only two or fewer unique GPAs, middle group is empty
        result = []
      }
    } else if (selectedGpa !== 'All' && selectedGpa !== 'Highest' && selectedGpa !== 'Lowest' && selectedGpa !== 'Middle') {
      result = result.filter(student => student.gpa >= Number(selectedGpa))
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.email.toLowerCase().includes(query),
      )
    }
    setFilteredStudents(result)
    generateStudentPerformanceData(result)
    generateStudentDistributionData(result)
  }, [
    view,
    selectedDepartment,
    selectedCourse,
    selectedYear,
    selectedGpa,
    searchQuery,
    generateStudentPerformanceData,
    generateStudentDistributionData,
  ])

  const downloadPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Filtered Students List', 14, 16)
    autoTable(doc, {
      startY: 22,
      head: [[
        'Name',
        'Email',
        'Department',
        'Course',
        'Year',
        'GPA',
        'Placement Status',
        'Company',
        'Package',
      ]],
      body: filteredStudents.map((s) => [
        s.name,
        s.email,
        s.department,
        s.course,
        s.year,
        s.gpa,
        s.placement.status,
        s.placement.company,
        s.placement.package,
      ]),
      styles: { fontSize: 10 },
      headStyles: { fillColor: [44, 62, 80] },
      theme: darkMode ? 'grid' : 'striped',
    })
    doc.save('filtered_students.pdf')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1
            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Students
          </h1>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            Manage and track student information
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-4">
  {/* First row: Departments and Courses */}
  <div className="flex flex-row gap-3 flex-wrap">
    <select
      value={selectedDepartment}
      onChange={(e) => {
        setSelectedDepartment(e.target.value)
        setSelectedCourse('All')
      }}
      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-200 text-gray-700'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
    >
      <option value="All">All Departments</option>
      {departments.map((dept) => (
        <option key={dept.id} value={dept.name}>
          {dept.name}
        </option>
      ))}
    </select>
    <select
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-200 text-gray-700'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
    >
      <option value="All">All Courses</option>
      {courses
        .filter(
          (course) =>
            selectedDepartment === 'All' ||
            course.departmentId === departments.find((d) => d.name === selectedDepartment)?.id,
        )
        .map((course) => {
          const shortName = (course.name.match(/\(([^)]+)\)/) || [])[1] || course.name
          return (
            <option key={course.id} value={shortName}>
              {course.name}
            </option>
          )
        })}
    </select>
  </div>

  {/* Second row: Year, GPA, View buttons and Download PDF button */}
  <div className="flex flex-row gap-3 flex-wrap items-center">
    <select
      value={selectedYear}
      onChange={e => setSelectedYear(e.target.value)}
      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-200 text-gray-700'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
    >
      <option value="All">All Years</option>
      <option value="1">Year 1</option>
      <option value="2">Year 2</option>
      <option value="3">Year 3</option>
      <option value="4">Year 4</option>
    </select>

    <select
      value={selectedGpa}
      onChange={e => setSelectedGpa(e.target.value)}
      className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-200 text-gray-700'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
    >
      <option value="All">All GPA</option>
      <option value="Highest">Highest GPA</option>
      <option value="Middle">Middle GPA</option>
      <option value="Lowest">Lowest GPA</option>
      <option value="9">Above 9.0</option>
      <option value="8">Above 8.0</option>
    </select>

    <div className="flex space-x-2">
      <button
        onClick={() => setView('all')}
        className={`px-4 py-2 rounded-md ${view === 'all' ? 'bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
      >
        All Students
      </button>
      <button
        onClick={() => setView('placed')}
        className={`px-4 py-2 rounded-md ${view === 'placed' ? 'bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
      >
        Placed Students
      </button>
      <button
        onClick={() => setView('non_placed')}
        className={`px-4 py-2 rounded-md ${view === 'non_placed' ? 'bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
      >
        Non-Placed Students
      </button>
    </div>

    <button
      onClick={downloadPDF}
      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow disabled:opacity-40"
      title="Download PDF"
    >
      <DownloadIcon className="w-4 h-4 mr-1" />
      Download PDF
    </button>
  </div>
</div>

      <motion.div
        className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-5 shadow-sm border overflow-x-auto`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
          >
            {view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students'} ({filteredStudents.length})
          </h3>
          <div
            className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            <FilterIcon className="h-4 w-4 mr-1" />
            <span>
              Filtered by {selectedDepartment !== 'All' ? selectedDepartment : 'All Departments'}
              , {selectedCourse !== 'All' ? selectedCourse : 'All Courses'}
              , {selectedYear !== 'All' ? `Year ${selectedYear}` : 'All Years'}
              , {selectedGpa === 'All'
                  ? 'All GPA'
                  : selectedGpa === 'Highest'
                    ? 'Highest GPA'
                    : selectedGpa === 'Lowest'
                      ? 'Lowest GPA'
                      : selectedGpa === 'Middle'
                        ? 'Middle GPA'
                        : `GPA > ${selectedGpa}`
                }
            </span>
          </div>
        </div>

        <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Name</th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Department</th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Course</th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Year</th>
              <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>GPA</th>
              {(view === 'placed') && (
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Package</th>
              )}
            </tr>
          </thead>
          <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
            {filteredStudents.map((student) => (
              <motion.tr
                key={student.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{student.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{student.email}</div>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{student.department}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{student.course}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{student.year}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{student.gpa}</td>
                {(view === 'placed') && (
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{student.placement.package}</td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="text-center py-8">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
              No students found with the current filters.
            </p>
          </div>
        )}
      </motion.div>

      {/* Charts Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Student Analytics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-5 shadow-sm border`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-4`}>
              {view === 'placed'
                ? 'Placed Students Performance'
                : view === 'non_placed'
                ? 'Non-Placed Students Performance'
                : 'Student Performance by Year'}
            </h3>
            {studentPerformanceData && (
              <LineChart
                title={`${view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students'} GPA Trend`}
                labels={studentPerformanceData.labels}
                datasets={studentPerformanceData.datasets}
                darkMode={darkMode}
              />
            )}
          </motion.div>

          <motion.div
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-5 shadow-sm border`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-4`}>
              {view === 'placed'
                ? 'Placed Students Distribution'
                : view === 'non_placed'
                ? 'Non-Placed Students Distribution'
                : 'Student Distribution'}
            </h3>
            {studentDistributionData && (
              <BarChart
                title={`${view === 'placed' ? 'Placed Students' : view === 'non_placed' ? 'Non-Placed Students' : 'All Students'} Distribution`}
                labels={studentDistributionData.labels}
                datasets={studentDistributionData.datasets}
                stacked={false}
                darkMode={darkMode}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Students
