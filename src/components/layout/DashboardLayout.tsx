import Dashboard from '../dashboard/Dashboard'
import DashboardNavBar from '../dashboard/dashboardNav/DashboardNavBar'
import DashboardSideBar from '../dashboard/DashboardSideBar'

export default function DashboardLayout() {
  return (
    <div
      className="grid grid-cols-12 grid-rows-12 grid-col"
      style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}
    >
      <DashboardSideBar />
      <DashboardNavBar />
      <Dashboard />
    </div>
  )
}
