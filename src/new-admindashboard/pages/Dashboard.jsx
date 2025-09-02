import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UsersIcon,
  BriefcaseIcon,
  FileTextIcon,
  ClockIcon,
} from 'lucide-react'
import StatCard from '../ad-components/ui/StatCard'
import FilterDropdown from '../ad-components/ui/FilterDropdown'
import LineChart from '../ad-components/charts/LineChart'
import BarChart from '../ad-components/charts/BarChart'
import Modal from '../ad-components/ui/Modal'
import { useTheme } from '../context/ThemeContext'
import {
  dashboardKPIs,
  registrationData,
  userComparisonData,
} from '../utils/mockData'


import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";



const totalUsersDetailedData = [
  { id: 1, type: 'Student', name: 'Alice', department: 'CS', year: '3', status: 'Active' },
  { id: 2, type: 'Student', name: 'Bob', department: 'Mechanical', year: '2', status: 'Active' },
  { id: 3, type: 'Student', name: 'Charlie', department: 'Electrical', year: '4', status: 'Inactive' },
  { id: 101, type: 'College', name: 'ABC Engineering', state: 'Telangana', totalStudents: 5000 },
  { id: 102, type: 'College', name: 'XYZ Institute', state: 'Karnataka', totalStudents: 3500 },
  { id: 201, type: 'Recruiter', name: 'Google', industry: 'Tech', activeJobs: 30 },
  { id: 202, type: 'Recruiter', name: 'Microsoft', industry: 'Tech', activeJobs: 25 },
];



const activeJobsDetailedData = [
  { id: 1, jobTitle: 'Frontend Developer', applicationsSubmitted: 120, pendingApprovals: 10 },
  { id: 2, jobTitle: 'Backend Developer', applicationsSubmitted: 90, pendingApprovals: 5 },
  { id: 3, jobTitle: 'Full Stack Developer', applicationsSubmitted: 200, pendingApprovals: 15 },
];



export const Dashboard = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()


  const [selectedMonth, setSelectedMonth] = useState('All 2023')
  const [filteredKPIs, setFilteredKPIs] = useState(dashboardKPIs)
  const [filteredRegistrationData, setFilteredRegistrationData] = useState(registrationData)
  const [filteredUserComparisonData, setFilteredUserComparisonData] = useState(userComparisonData)


  const [isModalOpen, setIsModalOpen] = useState(false)
   // eslint-disable-next-line
  const [modalData, setModalData] = useState({ title: '', content: null })


  const [userTypeFilter, setUserTypeFilter] = useState('All')
  const [activeModalType, setActiveModalType] = useState(null) // 'totalUsers', 'activeJobs', 'applications', 'pendingApprovals'

  const [isActiveJobsModalOpen, setIsActiveJobsModalOpen] = useState(false)  // Added missing state here


  const months = [
    'All 2023', 'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023',
    'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023',
    'Oct 2023', 'Nov 2023', 'Dec 2023',
  ];


  useEffect(() => {
    if (selectedMonth === 'All 2023') {
      setFilteredKPIs(dashboardKPIs)
      setFilteredRegistrationData(registrationData)
      setFilteredUserComparisonData(userComparisonData)
    } else {
      const monthName = selectedMonth.split(' ')[0]
      setFilteredRegistrationData(registrationData.filter(item => item.month === monthName))
      setFilteredUserComparisonData(userComparisonData.filter(item => item.month === monthName))


      const monthIndex = months.findIndex(m => m === selectedMonth) - 1
      if (monthIndex >= 0 && monthIndex < 12) {
        const monthlyMultiplier = (monthIndex + 1) / 12
        setFilteredKPIs({
          totalUsers: Math.round(dashboardKPIs.totalUsers * monthlyMultiplier),
          activeJobs: Math.round(dashboardKPIs.activeJobs * monthlyMultiplier),
          applicationsSubmitted: Math.round(dashboardKPIs.applicationsSubmitted * monthlyMultiplier),
          pendingApprovals: Math.round(dashboardKPIs.pendingApprovals * monthlyMultiplier),
          monthlyChange: {
            totalUsers: Math.round(dashboardKPIs.monthlyChange.totalUsers * (monthIndex > 0 ? 1 : 0.8)),
            activeJobs: Math.round(dashboardKPIs.monthlyChange.activeJobs * (monthIndex > 0 ? 1 : 0.9)),
            applicationsSubmitted: Math.round(dashboardKPIs.monthlyChange.applicationsSubmitted * (monthIndex > 0 ? 1 : 1.2)),
            pendingApprovals: Math.round(dashboardKPIs.monthlyChange.pendingApprovals * (monthIndex > 0 ? 1 : 0.7)),
          },
        })
      }
    }// eslint-disable-next-line
  }, [selectedMonth])


  const filteredData = userTypeFilter === 'All'
    ? totalUsersDetailedData
    : totalUsersDetailedData.filter(item => item.type === userTypeFilter)


  // PDF Download Functions
  function downloadPDFForTotalUsers(data) {
    const doc = new jsPDF()
    doc.text('Total Users Details', 14, 15)


    const tableColumn = ['ID', 'Type', 'Name', 'Details']
    const tableRows = []


    data.forEach(item => {
      const row = [
        item.id,
        item.type,
        item.name,
        item.type === 'Student'
          ? `Dept: ${item.department}, Year: ${item.year}, Status: ${item.status}`
          : item.type === 'College'
            ? `State: ${item.state}, Students: ${item.totalStudents}`
            : item.type === 'Recruiter'
              ? `Industry: ${item.industry}, Active Jobs: ${item.activeJobs}`
              : ''
      ]
      tableRows.push(row)
    })


    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    })


    doc.save('total_users_details.pdf')
  }



  function downloadActiveJobsPDF(data) {
    const doc = new jsPDF()
    doc.text('Active Jobs Details', 14, 15)


    const tableColumn = ['ID', 'Job Title', 'Applications Submitted', 'Pending Approvals']
    const tableRows = []


    data.forEach(item => {
      tableRows.push([
        item.id,
        item.jobTitle,
        item.applicationsSubmitted,
        item.pendingApprovals,
      ])
    })


    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    })


    doc.save('active_jobs_details.pdf')
  }



  function downloadApplicationsPDF(data) {
    const doc = new jsPDF()
    doc.text('Applications Submitted Details', 14, 15)


    const tableColumn = ['ID', 'Job Title', 'Applications Submitted']
    const tableRows = []


    data.forEach(item => {
      tableRows.push([
        item.id,
        item.jobTitle,
        item.applicationsSubmitted,
      ])
    })


    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    })


    doc.save('applications_submitted_details.pdf')
  }



  function downloadPendingApprovalsPDF(data) {
    const doc = new jsPDF()
    doc.text('Pending Approvals Details', 14, 15)


    const tableColumn = ['ID', 'Job Title', 'Pending Approvals']
    const tableRows = []


    data.forEach(item => {
      tableRows.push([
        item.id,
        item.jobTitle,
        item.pendingApprovals,
      ])
    })


    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    })


    doc.save('pending_approvals_details.pdf')
  }



  // Navigation handlers
  const handleManageStudents = () => navigate('/new-admindashboard/manage-students')
  const handleManageColleges = () => navigate('/new-admindashboard/manage-colleges')
  const handleManageRecruiters = () => navigate('/new-admindashboard/manage-recruiters')



  // Render functions for modals


  const renderTotalUsersModalContent = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="userTypeFilter" className="mr-2 font-medium text-gray-700 dark:text-gray-300">
            Filter by User Type:
          </label>
          <select
            id="userTypeFilter"
            value={userTypeFilter}
            onChange={(e) => setUserTypeFilter(e.target.value)}
            className="rounded border border-gray-300 dark:border-gray-600 p-1 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="All">All</option>
            <option value="Student">Students</option>
            <option value="College">Colleges</option>
            <option value="Recruiter">Recruiters</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => downloadPDFForTotalUsers(filteredData)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Download PDF
          </button>
        </div>
      </div>



      <table className="w-full text-sm table-auto border-collapse border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">ID</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Type</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Name</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id} className="odd:bg-gray-50 dark:odd:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{item.id}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{item.type}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{item.name}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">
                {item.type === 'Student' && `Dept: ${item.department}, Year: ${item.year}, Status: ${item.status}`}
                {item.type === 'College' && `State: ${item.state}, Students: ${item.totalStudents}`}
                {item.type === 'Recruiter' && `Industry: ${item.industry}, Active Jobs: ${item.activeJobs}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )



  const renderActiveJobsModalContent = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Active Jobs Details</h3>
        <button
          onClick={() => downloadActiveJobsPDF(activeJobsDetailedData)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Download PDF
        </button>
      </div>


      <table className="w-full text-sm table-auto border-collapse border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">ID</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Job Title</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Applications Submitted</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Pending Approvals</th>
          </tr>
        </thead>
        <tbody>
          {activeJobsDetailedData.map(job => (
            <tr key={job.id} className="odd:bg-gray-50 dark:odd:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.id}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.jobTitle}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.applicationsSubmitted}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.pendingApprovals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )



  const renderApplicationsModalContent = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Applications Submitted Details</h3>
        <button
          onClick={() => downloadApplicationsPDF(activeJobsDetailedData)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Download PDF
        </button>
      </div>


      <table className="w-full text-sm table-auto border-collapse border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">ID</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Job Title</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Applications Submitted</th>
          </tr>
        </thead>
        <tbody>
          {activeJobsDetailedData.map(job => (
            <tr key={job.id} className="odd:bg-gray-50 dark:odd:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.id}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.jobTitle}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.applicationsSubmitted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )



  const renderPendingApprovalsModalContent = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Pending Approvals Details</h3>
        <button
          onClick={() => downloadPendingApprovalsPDF(activeJobsDetailedData)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Download PDF
        </button>
      </div>


      <table className="w-full text-sm table-auto border-collapse border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">ID</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Job Title</th>
            <th className="border border-gray-300 dark:border-gray-600 px-2 py-1">Pending Approvals</th>
          </tr>
        </thead>
        <tbody>
          {activeJobsDetailedData.map(job => (
            <tr key={job.id} className="odd:bg-gray-50 dark:odd:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.id}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.jobTitle}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-2 py-1">{job.pendingApprovals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )



  // Open modal handlers
  const openModal = (type) => {
    setActiveModalType(type)
    if(type === 'totalUsers') {
      setModalData({ title: 'Total Users Details', content: null })
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
    if(['activeJobs', 'applications', 'pendingApprovals'].includes(type)) {
      setIsActiveJobsModalOpen(true)
    }
  }
  const closeModals = () => {
    setIsModalOpen(false)
    setIsActiveJobsModalOpen(false)
    setActiveModalType(null)
  }


  // Modal content selector
  const getCurrentModalContent = () => {
    switch(activeModalType) {
      case 'totalUsers': return renderTotalUsersModalContent()
      case 'activeJobs': return renderActiveJobsModalContent()
      case 'applications': return renderApplicationsModalContent()
      case 'pendingApprovals': return renderPendingApprovalsModalContent()
      default: return null
    }
  }


  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <FilterDropdown
          label="Period"
          options={months}
          value={selectedMonth}
          onChange={setSelectedMonth}
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={filteredKPIs.totalUsers}
          change={filteredKPIs.monthlyChange.totalUsers}
          icon={
            <UsersIcon
              size={24}
              className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
            />
          }
          onClick={() => openModal('totalUsers')}
        />
        <StatCard
          title="Active Jobs"
          value={filteredKPIs.activeJobs}
          change={filteredKPIs.monthlyChange.activeJobs}
          icon={
            <BriefcaseIcon
              size={24}
              className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}
            />
          }
          onClick={() => openModal('activeJobs')}
        />
        <StatCard
          title="Applications Submitted"
          value={filteredKPIs.applicationsSubmitted}
          change={filteredKPIs.monthlyChange.applicationsSubmitted}
          icon={
            <FileTextIcon
              size={24}
              className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}
            />
          }
          onClick={() => openModal('applications')}
        />
        <StatCard
          title="Pending Approvals"
          value={filteredKPIs.pendingApprovals}
          change={filteredKPIs.monthlyChange.pendingApprovals}
          icon={
            <ClockIcon
              size={24}
              className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}
            />
          }
          onClick={() => openModal('pendingApprovals')}
        />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Registration Trends"
          data={filteredRegistrationData}
          xKey="month"
          yKeys={[
            { key: 'students', color: '#3B82F6', name: 'Students' },
            { key: 'colleges', color: '#10B981', name: 'Colleges' },
            { key: 'recruiters', color: '#8B5CF6', name: 'Recruiters' },
          ]}
        />
        <BarChart
          title="Total vs Active Users"
          data={filteredUserComparisonData}
          xKey="month"
          yKeys={[
            { key: 'total', color: '#3B82F6', name: 'Total Users' },
            { key: 'active', color: '#10B981', name: 'Active Users' },
          ]}
        />
      </div>


      <div
        className={`rounded-xl p-6 border ${
          theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'
        } shadow-sm`}
      >
        <h2 className="text-xl font-semibold mb-4">Manage Registrations in T-Sign</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h3 className="font-medium">Total Registered Students</h3>
            <p className="text-2xl font-semibold mt-2">
              {Math.round(filteredKPIs.totalUsers * 0.52).toLocaleString()}
            </p>
            <button
              onClick={handleManageStudents}
              className={`mt-4 px-4 py-2 rounded-lg text-sm ${
                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
              } transition-colors`}
            >
              Manage Students
            </button>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h3 className="font-medium">Total Registered Colleges</h3>
            <p className="text-2xl font-semibold mt-2">
              {Math.round(filteredKPIs.totalUsers * 0.04).toLocaleString()}
            </p>
            <button
              onClick={handleManageColleges}
              className={`mt-4 px-4 py-2 rounded-lg text-sm ${
                theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
              } transition-colors`}
            >
              Manage Colleges
            </button>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h3 className="font-medium">Total Registered Recruiters</h3>
            <p className="text-2xl font-semibold mt-2">
              {Math.round(filteredKPIs.totalUsers * 0.44).toLocaleString()}
            </p>
            <button
              onClick={handleManageRecruiters}
              className={`mt-4 px-4 py-2 rounded-lg text-sm ${
                theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'
              } transition-colors`}
            >
              Manage Recruiters
            </button>
          </div>
        </div>
      </div>


      {/* Modal */}
      <Modal
        isOpen={isModalOpen || isActiveJobsModalOpen}
        onClose={closeModals}
        title={
          activeModalType === 'totalUsers' ? 'Total Users Details' :
          activeModalType === 'activeJobs' ? 'Active Jobs Details' :
          activeModalType === 'applications' ? 'Applications Submitted Details' :
          activeModalType === 'pendingApprovals' ? 'Pending Approvals Details' :
          ''
        }
      >
        {getCurrentModalContent()}
      </Modal>
    </div>
  )

}

export default Dashboard
