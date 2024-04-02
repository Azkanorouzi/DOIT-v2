import DashboardTitle from './DashboardTitle'
import DashboardUserInfo from './DashboardUserInfo'

export default function DashboardNavBar() {
  return (
    <nav
      className="border-b border-primary shadow-primary row-span-1 flex items-center justify-between px-5 "
      style={{ gridColumnEnd: -1, gridColumnStart: 2 }}
    >
      <div></div>
      <DashboardTitle />
      <DashboardUserInfo />
    </nav>
  )
}
