import DashboardTitle from './DashboardTitle'
import DashboardUserInfo from './DashboardUserInfo'
import OrganizationDd from './OrganizationDd'
import ThemeDd from './ThemeDd'

export default function DashboardNavBar() {
  return (
    <nav
      className="border-b border-primary shadow-primary py-5 flex items-center justify-between px-5"
      style={{
        gridColumnEnd: -1,
        gridColumnStart: 2,
        gridRowStart: 0,
        gridRowEnd: 1,
      }}
    >
      <div className="flex gap-9 items-center justify-center">
        <OrganizationDd />
        <ThemeDd />
      </div>
      <div></div>
      <DashboardTitle />
      <div></div>
      <div></div>
      <DashboardUserInfo />
    </nav>
  )
}
