import { motion } from "framer-motion";
import { useState } from "react";
import DashboardNavLink from "./dashboardNav/DashboardNavLink";
import { FaChartSimple, FaGear, FaPeopleGroup } from "react-icons/fa6";
import { FaDollarSign, FaMedal } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { MdDoneAll } from "react-icons/md";

export default function DashboardSideBar() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.aside
      className={`col-span-1 row-span-12 z-10  h-screen flex transition-transform  bg-secondary border-r border-primary overflow-hidden text-muted-foreground `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ width: "180px" }}
      layout
    >
      <nav className="h-full flex flex-col justify-between px-4 py-6  w-[180px]">
        <DashboardNavLink hovered={hovered} linkTo="/" />

        <div className="flex flex-col gap-5">
          <DashboardNavLink
            icon={<MdDoneAll />}
            linkTo="/dashboard/todo"
            hovered={hovered}
            text="Todos"
          />
          <DashboardNavLink
            icon={<FaChartSimple />}
            linkTo="/dashboard/charts"
            hovered={hovered}
            text="Charts"
          />
          <DashboardNavLink
            icon={<SlCalender />}
            linkTo="/dashboard/calender"
            hovered={hovered}
            text="Calendar"
          />
          <DashboardNavLink
            icon={<GoGoal />}
            linkTo="/dashboard/goals"
            hovered={hovered}
            text="Goals"
          />
          <DashboardNavLink
            icon={<IoIosTimer />}
            linkTo="/dashboard/pomodoro"
            hovered={hovered}
            text="Pomodoro"
          />
          <DashboardNavLink
            icon={<FaDollarSign />}
            linkTo="/dashboard/expenses"
            hovered={hovered}
            text="Finance"
          />
        </div>

        <div className="flex gap-5 flex-col  border-primary">
          <DashboardNavLink
            icon={<FaMedal />}
            linkTo="/dashboard/medal"
            hovered={hovered}
            text="Medal"
          />
          <DashboardNavLink
            icon={<FaPeopleGroup />}
            text="Friends"
            linkTo="/dashboard/friends"
            hovered={hovered}
          />
          <DashboardNavLink
            hovered={hovered}
            linkTo="/settings"
            icon={<FaGear />}
            text="Settings"
          />
        </div>
      </nav>
    </motion.aside>
  );
}
