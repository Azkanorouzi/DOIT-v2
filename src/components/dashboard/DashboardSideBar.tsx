import { motion } from 'framer-motion'
import { useState } from 'react'
import DashboardNavLink from './dashboardNav/DashboardNavLink'
import { FaGear } from 'react-icons/fa6'

export default function DashboardSideBar() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.aside
      className={`col-span-1 row-span-12 z-10  h-screen flex transition-transform  bg-secondary border-r border-primary overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ width: '180px' }}
      layout
    >
      <nav className="h-full flex flex-col justify-between px-4 py-4  w-[180px]">
        <DashboardNavLink hovered={hovered} linkTo="/home" />
        <div>
          <DashboardNavLink
            hovered={hovered}
            linkTo="/settings"
            icon={<FaGear />}
            text="Settings"
          />
        </div>
      </nav>
    </motion.aside>
  )
}
